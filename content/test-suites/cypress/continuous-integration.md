---
title: Continuous Integration
---
import { Callout } from 'nextra/components'

# Integrate Replay to your CI workflow

Setting up Replay on your CI is pretty easy. In order to automatically record your tests, you need to use Replay Browser for your Cypress tests, and then upload the recordings cached on your CI to Replay Test Suites Dashboard.

This works for any CI providers, but we’ve included documentation walkthroughs and example files to get you started.

| Provider   | Documentation | Example file |
| :----- | :----- | :----- |
| [GitHub Actions](https://github.com/features/actions) | [GitHub Actions](/test-suites/cypress/continuous-integration/github) |   [workflow.yml](/resources/cypress/github.yml) |
| [CircleCI](https://circleci.com/) | CircleCI  |  [circle.yml](/resources/cypress/circle.yml) |
| Other providers | [Other providers](/test-suites/cypress/continuous-integration/other-ci-providers)  | - |

<Callout type="info" emoji="❓">
Not seeing your provider? [Let us know on Discord](https://replay.io/discord) or [edit this page](https://github.com/replayio-public/replay-documentation/tree/main/pages/test-suites/cypress/continuous-integration.mdx) to add it.
</Callout>