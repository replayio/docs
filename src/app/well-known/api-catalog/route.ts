import { NextResponse } from 'next/server'

import { REPLAY_PUBLIC, getSiteOrigin } from '@/lib/agentReadiness'

/**
 * /.well-known/api-catalog
 *
 * RFC 9727 API Catalog returning `application/linkset+json` (RFC 9264).
 *
 * Each entry's `anchor` is the canonical URL for an API; the linked
 * relations describe its discovery surfaces (service-doc, service-desc,
 * status, etc.). Only fully public, stable surfaces should be listed here.
 */
export const dynamic = 'force-static'
export const revalidate = false

export function GET() {
  const origin = getSiteOrigin()

  const linkset = {
    linkset: [
      {
        anchor: REPLAY_PUBLIC.api,
        'service-doc': [
          {
            href: `${origin}/reference/replay-apis#replay-protocol`,
            type: 'text/html',
            title: 'Replay Protocol — reference',
          },
        ],
        'service-desc': [
          {
            href: REPLAY_PUBLIC.protocolDocs,
            type: 'text/html',
            title: 'Replay Protocol — full domain reference',
          },
        ],
      },
      {
        anchor: REPLAY_PUBLIC.graphql,
        'service-doc': [
          {
            href: `${origin}/reference/replay-apis#graphql-api`,
            type: 'text/html',
            title: 'Replay GraphQL API — reference',
          },
        ],
      },
      {
        anchor: REPLAY_PUBLIC.mcpServer,
        'service-doc': [
          {
            href: `${origin}/basics/replay-mcp/overview`,
            type: 'text/html',
            title: 'Replay MCP — overview',
          },
        ],
        'service-desc': [
          {
            href: `${origin}/.well-known/mcp/server-card.json`,
            type: 'application/json',
            title: 'Replay MCP server card',
          },
        ],
      },
    ],
  }

  return NextResponse.json(linkset, {
    headers: {
      'Content-Type': 'application/linkset+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
