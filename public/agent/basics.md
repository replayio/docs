# Replay Docs — Guides

Canonical URL: https://docs.replay.io/basics

The Guides section covers **Replay QA**, the autonomous app testing product,
and the underlying recording and debugging tools for developers who want to
use them directly.

## Replay QA

Point Replay QA at a web app and it explores the application, builds
journeys through it, records every run, and delivers root cause analysis for
each bug it finds.

- [Overview](https://docs.replay.io/basics/replay-qa/overview)

Connect your app:

- [Testing a localhost app](https://docs.replay.io/basics/replay-qa/localhost)
- [Testing a pull request build in GitHub Actions](https://docs.replay.io/basics/replay-qa/frpc-ci)

Work with results:

- [Publishing with source maps](https://docs.replay.io/basics/replay-qa/source-maps)
- [Driving Replay QA from a coding agent](https://docs.replay.io/basics/replay-qa/agent-integration)
  — REST API (`https://qa.replay.io/api/v1`, OpenAPI at
  `/api/v1/openapi.json`) and MCP server (`https://qa.replay.io/api/mcp`) for
  creating projects, reading bug reports, and marking fixes. Auth: `lqa_` token
  from Settings > API, or OAuth sign-in for MCP.

Reference: [API and MCP tools](https://docs.replay.io/reference/replay-qa/api),
[Polish passes](https://docs.replay.io/reference/replay-qa/polish-passes),
[Bug reports](https://docs.replay.io/reference/replay-qa/bug-reports).

Launch Replay QA: https://qa.replay.io

## Debugging with Replay

- [Overview](https://docs.replay.io/basics/debugging/overview) — record your
  app, then investigate with a coding agent through Replay MCP or by hand in
  Replay DevTools. Same engine as Replay QA, used directly.

## Replay MCP

An MCP server that gives AI agents (Claude Code, Cursor, Codex, VS Code, any
MCP client) tools to inspect a Replay recording: source code, console output,
network requests, React component state, and program execution at any point
in time.

- [Replay MCP: overview and setup](https://docs.replay.io/basics/replay-mcp/overview)
- [Tools reference](https://docs.replay.io/reference/replay-mcp/tools)
- Endpoint: `https://dispatch.replay.io/nut/mcp`
- Server card: https://docs.replay.io/.well-known/mcp/server-card.json

## Recording your own app

- [How to record](https://docs.replay.io/basics/getting-started/record-your-app)
  — record with the `replayio` CLI (or let your agent do it with the
  `replay-cli` skill), then debug in Replay DevTools at https://app.replay.io
  or through Replay MCP.

## How Replay works

- [How does time travel work?](https://docs.replay.io/reference/time-travel/how-does-time-travel-work)
