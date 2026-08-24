/**
 * Constants used by agent-readiness routes (robots.txt, sitemap, .well-known/*,
 * middleware Link headers, markdown negotiation, etc.).
 *
 * Centralized so we can reason about the "machine-readable surface" of the
 * docs site in one place rather than chasing strings across a dozen files.
 *
 * Hidden doc paths (everything outside /basics/replay-qa) are additionally
 * hard-blocked in middleware: known AI agent User-Agents receive 404. See
 * src/lib/agent-bots.mjs and blockHiddenFromAgent in middleware.ts.
 */

export const SITE_NAME = 'Replay Docs'

/**
 * Resolve the canonical site origin.
 *
 * Priority:
 *   1) Explicit env override (set this in production / preview deploys).
 *   2) Vercel system env (`VERCEL_URL`) for preview deploys.
 *   3) Sensible defaults: localhost in dev, the public docs URL otherwise.
 */
export function getSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_URL
  if (vercel) return `https://${vercel}`
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3000'
  return 'https://docs.replay.io'
}

/**
 * Public Replay surfaces this docs site advertises to agents. These are the
 * canonical, stable URLs other systems (MCP server cards, api-catalogs, OAuth
 * discovery) point at. Keeping them here means we never inline them into a
 * dozen different routes.
 */
export const REPLAY_PUBLIC = {
  app: 'https://app.replay.io',
  api: 'https://api.replay.io',
  protocolDocs: 'https://static.replay.io/protocol/tot/',
  protocolWs: 'wss://dispatch.replay.io',
  mcpServer: 'https://mcp.replay.io',
  authIssuer: 'https://webreplay.us.auth0.com/',
  graphql: 'https://api.replay.io/v1/graphql',
} as const

/**
 * Pages we expose markdown mirrors for (used by the markdown content
 * negotiation in middleware.ts). Add a route here AND drop a corresponding
 * file at public/agent/<filename> to expose a markdown mirror.
 */
export const MARKDOWN_MIRRORS: Record<string, string> = {
  '/': '/agent/index.md',
  '/basics': '/agent/basics.md',
}
