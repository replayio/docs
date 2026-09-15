# Replay Docs — Reference

Canonical URL: https://docs.replay.io/reference

Commands, endpoints, and settings for the Replay platform.

## Replay QA

- [API and MCP tools](https://docs.replay.io/reference/replay-qa/api) —
  endpoints, authentication, MCP tool list, REST resources, bug statuses.
- [Polish passes](https://docs.replay.io/reference/replay-qa/polish-passes) —
  the category-specific reviews (accessibility, layout shift, glitches, network
  performance, React rendering, SEO, UX, UI details, security, Sightmap) and
  which need extra setup.
- [Bug reports](https://docs.replay.io/reference/replay-qa/bug-reports) —
  fields in a report, severity levels, status lifecycle, export formats.

## Replay CLI

The `replayio` CLI installs the Replay browser, records sessions, and uploads
recordings and source maps to https://app.replay.io.

- [Commands](https://docs.replay.io/reference/replay-cli/commands)
- [Uploading source maps](https://docs.replay.io/reference/replay-cli/source-maps)
- Package: https://github.com/replayio/replay-cli/tree/main/packages/replayio

## API keys and tokens

- [API keys and tokens](https://docs.replay.io/reference/api-keys) — two
  separate credentials. The app.replay.io API key is used by the CLI, the
  Playwright plugin, `replayio upload-source-maps`, and the `Authorization`
  header for Replay MCP. The Replay QA API token (`lqa_...`, from
  https://qa.replay.io Settings > API) is used by the Replay QA REST API and
  Replay QA MCP server. They are not interchangeable.

## Replay MCP server (inspect recordings)

- Endpoint: `https://dispatch.replay.io/nut/mcp`
- Per-recording endpoint: `https://dispatch.replay.io/nut/recording/<recordingId>/mcp`
- Server card: https://docs.replay.io/.well-known/mcp/server-card.json
- Docs: https://docs.replay.io/basics/replay-mcp/overview

## Replay QA API and MCP server (manage QA projects and bugs)

- REST base URL: `https://qa.replay.io/api/v1`
- OpenAPI spec: https://qa.replay.io/api/v1/openapi.json
- MCP endpoint: `https://qa.replay.io/api/mcp` (OAuth sign-in or `Authorization: Bearer lqa_...`)
- OAuth resource metadata: https://qa.replay.io/.well-known/oauth-protected-resource
- Reference: https://docs.replay.io/reference/replay-qa/api
- How-to: https://docs.replay.io/basics/replay-qa/agent-integration

## Replay DevTools (inspect recordings by hand)

Open any recording at `https://app.replay.io/recording/<recordingId>`.

- [Overview](https://docs.replay.io/reference/replay-devtools/overview) —
  opening a recording, Viewer vs DevTools mode, a first walkthrough.
- [Time travel tools](https://docs.replay.io/reference/replay-devtools/time-travel-tools) —
  console logs added after the fact, jump to any event, focus window,
  comments pinned to a point in time.
- [Browser panels](https://docs.replay.io/reference/replay-devtools/browser-panels) —
  viewer, Console, Sources, Pause, Elements, Network.
- [Framework panels](https://docs.replay.io/reference/replay-devtools/framework-panels) —
  React, Redux, Playwright steps.
- [Sharing and teams](https://docs.replay.io/reference/replay-devtools/sharing-and-teams) —
  share a recording, move it between teams, create a team, team API keys.

## React support

Replay's React analysis (Replay QA, Replay MCP, and the React panel) reads
React's generated code directly. It supports React 18 and 19, including
Next.js 13.5 through 16, with no React source maps or extra build plugin.
Your application's own source maps improve component and file names. See
https://docs.replay.io/basics/replay-qa/source-maps#react-support.

## Public APIs

- Replay Protocol docs: https://static.replay.io/protocol/tot/
- GraphQL API: https://api.replay.io/v1/graphql
- API catalog: https://docs.replay.io/.well-known/api-catalog

## Authentication

Replay uses OAuth 2.0 / OIDC for API access. Discovery metadata:

- OIDC: https://docs.replay.io/.well-known/openid-configuration
- OAuth Protected Resource: https://docs.replay.io/.well-known/oauth-protected-resource
