import { NextRequest, NextResponse } from 'next/server'

import { MARKDOWN_MIRRORS } from '@/lib/agentReadiness'
import { isAiAgent } from '@/lib/agent-bots.mjs'
import { isHiddenPath } from '@/lib/visibility-paths.mjs'

/**
 * Routes / file extensions that should NOT have agent-readiness headers
 * attached. We don't want to pollute every static asset with Link headers
 * meant for the HTML surface.
 */
function isAssetPath(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/.well-known') ||
    pathname.startsWith('/agent/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/videos/') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico' ||
    /\.[a-z0-9]{1,5}$/i.test(pathname) // *.png, *.svg, *.json, *.woff2 …
  )
}

/**
 * Build the RFC 8288 `Link` header for an HTML response. These hints help
 * agents discover well-known machine-readable surfaces without crawling
 * the page first.
 */
function buildLinkHeader(pathname: string): string {
  const links = [
    `</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"`,
    `</.well-known/mcp/server-card.json>; rel="https://modelcontextprotocol.io/server-card"; type="application/json"`,
    `</.well-known/agent-skills/index.json>; rel="https://agentskills.io/index"; type="application/json"`,
    `</.well-known/openid-configuration>; rel="http://openid.net/specs/connect/1.0/issuer"; type="application/json"`,
    `</.well-known/oauth-protected-resource>; rel="http://www.iana.org/assignments/relation/oauth-protected-resource"; type="application/json"`,
    `</reference/test-runners/overview>; rel="service-doc"`,
  ]

  // Advertise the markdown mirror for this exact route, when one exists,
  // so an agent can fetch it without doing content negotiation.
  const mirror = MARKDOWN_MIRRORS[pathname]
  if (mirror) {
    links.unshift(`<${mirror}>; rel="alternate"; type="text/markdown"`)
  }

  return links.join(', ')
}

/**
 * If a client asks for `text/markdown`, redirect them to the matching mirror
 * under /agent/<slug>.md. Browsers (Accept: text/html, …) are unaffected.
 */
function negotiateMarkdown(
  request: NextRequest,
  pathname: string,
): NextResponse | null {
  const accept = request.headers.get('accept') || ''
  // Only kick in when the client explicitly opts in to markdown. We do NOT
  // trigger on `* / *` or `text/html, …` so normal browser requests stay on
  // the HTML version.
  const wantsMarkdown =
    /\btext\/markdown\b/i.test(accept) || /\btext\/x-markdown\b/i.test(accept)
  if (!wantsMarkdown) return null

  const mirror = MARKDOWN_MIRRORS[pathname]
  if (!mirror) return null

  const url = request.nextUrl.clone()
  url.pathname = mirror
  const response = NextResponse.rewrite(url)
  response.headers.set('Content-Type', 'text/markdown; charset=utf-8')
  response.headers.set('Vary', 'Accept')
  response.headers.set('X-Markdown-Mirror', mirror)
  return response
}

function blockHiddenFromAgent(
  request: NextRequest,
  pathname: string,
): NextResponse | null {
  if (!isHiddenPath(pathname)) return null
  const userAgent = request.headers.get('user-agent') ?? ''
  if (!isAiAgent(userAgent)) return null

  return new NextResponse('Not Found', {
    status: 404,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
      'Cache-Control': 'private, no-store',
    },
  })
}

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const pathname = url.pathname

  // ────────────── Hard block: hidden docs are 404 for AI agents ──────────────
  const blocked = blockHiddenFromAgent(request, pathname)
  if (blocked) return blocked

  // ────────────── Markdown content negotiation ──────────────
  const md = negotiateMarkdown(request, pathname)
  if (md) return md

  // ────────────── Forward x-pathname (preserves prior behavior) ──────────────
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  const response = NextResponse.next({ request: { headers: requestHeaders } })

  const hidden = isHiddenPath(pathname)

  // ────────────── Agent-discovery Link headers (HTML pages only) ──────────────
  if (!isAssetPath(pathname)) {
    if (hidden) {
      response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive')
    } else {
      response.headers.set('Link', buildLinkHeader(pathname))
    }
    // Make caches aware that the response varies on Accept (because of the
    // markdown negotiation above).
    const existingVary = response.headers.get('Vary')
    response.headers.set(
      'Vary',
      existingVary ? `${existingVary}, Accept` : 'Accept',
    )
  }

  return response
}

/**
 * Run on every request that isn't an obvious static asset. The fine-grained
 * filtering happens inside the handler via `isAssetPath`.
 */
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|videos/).*)'],
}
