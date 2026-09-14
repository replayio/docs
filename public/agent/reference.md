# Replay Docs — Reference

Canonical URL: https://docs.replay.io/reference

Commands, endpoints, and settings for the Replay platform.

## Replay CLI

The `replayio` CLI installs the Replay browser, records sessions, and uploads
recordings and source maps to https://app.replay.io.

- [Commands](https://docs.replay.io/reference/replay-cli/commands)
- [Uploading source maps](https://docs.replay.io/reference/replay-cli/source-maps)
- Package: https://github.com/replayio/replay-cli/tree/main/packages/replayio

## API keys

- [Generate an API key](https://docs.replay.io/reference/ci-workflows/generate-api-key)
  — the app.replay.io team API key used by the CLI, the Playwright plugin,
  `replayio upload-source-maps`, and the `Authorization` header for Replay MCP.
  Replay QA uses a separate token created at https://qa.replay.io.

## Replay MCP server

- Endpoint: `https://dispatch.replay.io/nut/mcp`
- Per-recording endpoint: `https://dispatch.replay.io/nut/recording/<recordingId>/mcp`
- Server card: https://docs.replay.io/.well-known/mcp/server-card.json
- Docs: https://docs.replay.io/basics/replay-mcp/overview

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
