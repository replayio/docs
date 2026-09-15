# Replay Documentation

Canonical URL: https://docs.replay.io/

Replay QA is an autonomous app testing tool built on Replay's time-travel
debugging engine. Point it at a web app and it explores the application,
discovers user journeys, writes Playwright tests, executes them while capturing
full runtime recordings, and delivers root cause analysis and suggested fixes
for every bug it finds.

This documentation site is the canonical reference for Replay QA. Start here:

- [Replay QA overview](https://docs.replay.io/basics/replay-qa/overview)
- [Testing a localhost app](https://docs.replay.io/basics/replay-qa/localhost)
- [CI integration with FRPC](https://docs.replay.io/basics/replay-qa/frpc-ci)
- [Publishing with source maps](https://docs.replay.io/basics/replay-qa/source-maps)
- [Driving Replay QA from a coding agent](https://docs.replay.io/basics/replay-qa/agent-integration)
  — REST API and MCP server for the full create-project → read-bugs → mark-fixed loop
- [Basics section index](https://docs.replay.io/basics)

Replay QA is built on Replay's recording and time-travel debugging engine. The
same engine is available directly to developers and their coding agents:

- [Replay MCP](https://docs.replay.io/basics/replay-mcp/overview) — an MCP
  server (`https://dispatch.replay.io/nut/mcp`) that lets an AI agent inspect
  a recording: sources, console, network, React state, and execution over time.
  The page covers setup for Claude Code, Cursor, VS Code, and Codex.
  [Tools reference](https://docs.replay.io/basics/replay-mcp/tools)
- [How to record](https://docs.replay.io/basics/getting-started/record-your-app)
  — make a recording of your own app with the `replayio` CLI, then open it in
  Replay DevTools (https://app.replay.io) or hand it to your agent through MCP.
- [How time travel works](https://docs.replay.io/basics/time-travel/how-does-time-travel-work)
- [Reference section index](https://docs.replay.io/reference) — CLI commands,
  source maps, API keys, public APIs.

## Machine-readable surfaces

- `/.well-known/api-catalog` — RFC 9727 catalog of Replay APIs (linkset+json)
- `/.well-known/mcp/server-card.json` — Replay MCP server card
- `/.well-known/agent-skills/index.json` — Replay agent skills (Replay CLI,
  Playwright, MCP)
- `/.well-known/openid-configuration` — OAuth/OIDC discovery for the Replay
  authentication tenant
- `/sitemap.xml` — URL inventory for the public documentation
- `/robots.txt` — crawl + AI-bot policy with `Content-Signal`

## Content usage

This documentation may be indexed for search and used as grounding context for
AI agents (`Content-Signal: search=yes, ai-input=yes, ai-train=no`). It must
not be ingested into model training corpora.

## Contact

- Product site: https://www.replay.io
- Replay QA: https://qa.replay.io
- App: https://app.replay.io
- Discord: https://replay.io/discord
- GitHub: https://github.com/replayio
