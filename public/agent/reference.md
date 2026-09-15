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

## Frameworks

- [React version support and source maps](https://docs.replay.io/reference/integrations/frameworks-libraries/react-sourcemaps)

## Public APIs

- Replay Protocol docs: https://static.replay.io/protocol/tot/
- GraphQL API: https://api.replay.io/v1/graphql
- API catalog: https://docs.replay.io/.well-known/api-catalog

## Authentication

Replay uses OAuth 2.0 / OIDC for API access. Discovery metadata:

- OIDC: https://docs.replay.io/.well-known/openid-configuration
- OAuth Protected Resource: https://docs.replay.io/.well-known/oauth-protected-resource
