'use client'

import { useEffect } from 'react'

/**
 * WebMCPProvider — exposes a small set of read-only "tools" to the WebMCP
 * runtime when an agent visits a docs page in a compatible browser.
 *
 * Spec: https://webmachinelearning.github.io/webmcp/
 *       https://developer.chrome.com/blog/webmcp-epp
 *
 * The intent is *not* to ship interactive page actions through this surface
 * (the docs are read-only). Instead, we advertise discovery info — sitemap,
 * MCP server card, agent-skills index — so an agent can fan out to the right
 * machine-readable endpoint without parsing HTML.
 */
type ModelContext = {
  provideContext?: (ctx: { tools?: WebMCPTool[] }) => void
}

type WebMCPTool = {
  name: string
  description: string
  inputSchema: Record<string, unknown>
  execute: (input: Record<string, unknown>) => Promise<unknown>
}

declare global {
  interface Navigator {
    modelContext?: ModelContext
  }
}

async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`)
  return res.json()
}

async function fetchText(url: string, accept = 'text/plain'): Promise<string> {
  const res = await fetch(url, { headers: { Accept: accept } })
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`)
  return res.text()
}

export function WebMCPProvider() {
  useEffect(() => {
    const mc = typeof navigator !== 'undefined' ? navigator.modelContext : null
    if (!mc?.provideContext) return

    const tools: WebMCPTool[] = [
      {
        name: 'replay_docs.list_skills',
        description:
          'List the Agent Skills published by docs.replay.io (CLI, ' +
          'Playwright, MCP). Returns the agent-skills index JSON.',
        inputSchema: { type: 'object', properties: {}, required: [] },
        execute: () => fetchJson('/.well-known/agent-skills/index.json'),
      },
      {
        name: 'replay_docs.get_api_catalog',
        description:
          'Return the Replay API catalog (RFC 9727 linkset) describing the ' +
          'public Replay APIs and their documentation.',
        inputSchema: { type: 'object', properties: {}, required: [] },
        execute: () => fetchJson('/.well-known/api-catalog'),
      },
      {
        name: 'replay_docs.get_mcp_server_card',
        description:
          'Return the Replay MCP server card describing how to connect to ' +
          'the Replay MCP server for inspecting Replay recordings.',
        inputSchema: { type: 'object', properties: {}, required: [] },
        execute: () => fetchJson('/.well-known/mcp/server-card.json'),
      },
      {
        name: 'replay_docs.fetch_markdown',
        description:
          'Fetch a markdown mirror of a docs section. Pass a `path` like ' +
          '"/", "/basics", or "/reference".',
        inputSchema: {
          type: 'object',
          properties: {
            path: {
              type: 'string',
              description: 'Docs path. One of "/", "/basics", "/reference".',
            },
          },
          required: ['path'],
        },
        execute: async (input) => {
          const path = String(input.path || '/')
          return fetchText(path, 'text/markdown')
        },
      },
    ]

    try {
      mc.provideContext({ tools })
    } catch {
      // WebMCP is best-effort — silently ignore if the runtime rejects us.
    }
  }, [])

  return null
}
