import { NextResponse } from 'next/server'

import { REPLAY_PUBLIC, getSiteOrigin } from '@/lib/agentReadiness'

/**
 * /.well-known/mcp/server-card.json
 *
 * Advertises the Replay MCP server (REPLAY_PUBLIC.mcpServer). Schema follows
 * the SEP-1649 server-card draft:
 *   https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127
 *
 * The card describes a *remote* MCP server hosted by Replay; the docs site
 * itself does not host MCP, so this is a discovery pointer.
 */
export const dynamic = 'force-static'
export const revalidate = false

export function GET() {
  const origin = getSiteOrigin()

  const card = {
    schemaVersion: '0.1',
    serverInfo: {
      name: 'Replay MCP',
      version: '1.0.0',
      vendor: 'Replay',
      description:
        'Inspect the contents of Replay recordings (https://replay.io) ' +
        'from any MCP-compatible AI agent. Provides tools for navigating ' +
        'sources, console messages, network requests, and DevTools state.',
      homepage: `${origin}/basics/replay-mcp/overview`,
      documentation: `${origin}/basics/replay-mcp/quickstart`,
    },
    transport: {
      type: 'streamable-http',
      url: REPLAY_PUBLIC.mcpServer,
    },
    capabilities: {
      tools: { listChanged: false },
      resources: { listChanged: false, subscribe: false },
      prompts: { listChanged: false },
      logging: {},
    },
    auth: {
      type: 'oauth2',
      // Discoverable from the docs site (and matches the auth tenant for
      // Replay APIs more broadly).
      authorization_servers: [`${origin}/.well-known/openid-configuration`],
    },
    contact: {
      url: 'https://replay.io/discord',
    },
  }

  return NextResponse.json(card, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
