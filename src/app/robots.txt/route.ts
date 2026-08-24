import { NextResponse } from 'next/server'

import { getSiteOrigin } from '@/lib/agentReadiness'

/**
 * /robots.txt
 *
 * Combines:
 *   - Standard RFC 9309 crawl directives (sitemap reference, allow/disallow).
 *   - Explicit User-agent rules for AI crawlers (GPTBot, ClaudeBot,
 *     Google-Extended, etc.) so our policy is unambiguous.
 *   - `Content-Signal` directives (https://contentsignals.org/) declaring how
 *     this content may be used by AI systems.
 *
 * Returned as a Next.js Route Handler so the values can be derived from the
 * deploy environment (origin, etc.) at runtime.
 */
export const dynamic = 'force-static'
export const revalidate = false

export function GET() {
  const origin = getSiteOrigin()

  // Bots that the docs welcome for indexing — they make our content easier to
  // find via search and conversational interfaces. Note: each block must end
  // with at least one `Allow:` or `Disallow:` to be valid per RFC 9309.
  const allowedBots = [
    'Googlebot',
    'Bingbot',
    'DuckDuckBot',
    'Applebot',
    'Slurp', // Yahoo
    // AI search-style crawlers we want indexing the docs (read-only, not
    // training corpus). The `Content-Signal` directive below disambiguates
    // how the indexed content may be used.
    'GPTBot',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'Claude-SearchBot',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot',
    'Bytespider',
    'meta-externalagent',
    'cohere-ai',
    'Amazonbot',
    'YouBot',
    'Diffbot',
    'FacebookBot',
  ]

  const lines: string[] = []
  lines.push('# Replay Docs robots.txt')
  lines.push('# RFC 9309 crawl rules + AI-bot policy + Content-Signal')
  lines.push('')

  // Default rules apply to every UA that doesn't match a more specific block.
  lines.push('User-agent: *')
  lines.push('Allow: /')
  lines.push('Allow: /basics/replay-qa/')
  lines.push('Disallow: /basics/')
  lines.push('Disallow: /learn/')
  lines.push('Disallow: /reference/')
  lines.push('Disallow: /api/')
  lines.push('Disallow: /_next/')
  lines.push('Disallow: /agent/') // markdown mirrors are reached via Accept-negotiation
  lines.push('')

  // Per-bot allowlist. We keep them explicit so changes are auditable.
  for (const bot of allowedBots) {
    lines.push(`User-agent: ${bot}`)
    lines.push('Allow: /')
    lines.push('Allow: /basics/replay-qa/')
    lines.push('Disallow: /basics/')
    lines.push('Disallow: /learn/')
    lines.push('Disallow: /reference/')
    lines.push('Disallow: /api/')
    lines.push('Disallow: /_next/')
    lines.push('')
  }

  // Content-Signal — tells well-behaved AI agents what they may use this
  // content for. We allow search + AI input (RAG / Q&A grounding) but
  // explicitly opt out of training corpora.
  lines.push('# https://contentsignals.org/')
  lines.push('Content-Signal: search=yes, ai-input=yes, ai-train=no')
  lines.push('')

  // Sitemap (referenced from robots per Sitemap Protocol).
  lines.push(`Sitemap: ${origin}/sitemap.xml`)
  lines.push('')

  return new NextResponse(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
