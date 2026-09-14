# Replay Docs — Basics

Canonical URL: https://docs.replay.io/basics

The Basics section covers **Replay QA**, the autonomous app testing product,
and the underlying recording and debugging tools for developers who want to
use them directly.

## Replay QA

Point Replay QA at a web app and it explores the application, writes
Playwright tests, records every run, and delivers root cause analysis for
each bug it finds.

- [Overview](https://docs.replay.io/basics/replay-qa/overview)
- [Testing a localhost app](https://docs.replay.io/basics/replay-qa/localhost)
- [CI integration with FRPC](https://docs.replay.io/basics/replay-qa/frpc-ci)
- [Publishing with source maps](https://docs.replay.io/basics/replay-qa/source-maps)

Launch Replay QA: https://qa.replay.io

## Replay MCP

An MCP server that gives AI agents (Claude Code, Cursor, Codex, VS Code, any
MCP client) tools to inspect a Replay recording: source code, console output,
network requests, React component state, and program execution at any point
in time.

- [Overview](https://docs.replay.io/basics/replay-mcp/overview)
- [Quickstart](https://docs.replay.io/basics/replay-mcp/quickstart)
- [Tools reference](https://docs.replay.io/basics/replay-mcp/tools)
- Endpoint: `https://dispatch.replay.io/nut/mcp`
- Server card: https://docs.replay.io/.well-known/mcp/server-card.json

## Recording your own app

- [How to record](https://docs.replay.io/basics/getting-started/record-your-app)
  — record with the `replayio` CLI (or let your agent do it with the
  `replay-cli` skill), then debug in Replay DevTools at https://app.replay.io
  or through Replay MCP.

## How Replay works

- [How does time travel work?](https://docs.replay.io/basics/time-travel/how-does-time-travel-work)
