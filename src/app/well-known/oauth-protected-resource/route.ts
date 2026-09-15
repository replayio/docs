import { NextResponse } from 'next/server'

import { REPLAY_PUBLIC } from '@/lib/agentReadiness'

/**
 * /.well-known/oauth-protected-resource
 *
 * RFC 9728 — describes the protected resources (Replay's APIs) and the
 * authorization servers that can issue tokens for them. This is the entry
 * point an agent uses to discover *how* to obtain a usable access token.
 */
export const dynamic = 'force-static'
export const revalidate = false

export function GET() {
  const body = {
    resource: REPLAY_PUBLIC.api,
    authorization_servers: [REPLAY_PUBLIC.authIssuer],
    bearer_methods_supported: ['header'],
    resource_documentation: 'https://docs.replay.io/reference/replay-apis',
    scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
  }

  return NextResponse.json(body, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
