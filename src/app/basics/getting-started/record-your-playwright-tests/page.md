---
title: Record your Playwright tests
---

{% steps %}

## Create a new testsuite team

Start by visiting our [new testsuite form](https://app.replay.io/team/new/tests).
It will create an API key and guide you through each step.

{% figure
    alt="Jumping to code"
    src="/images/new-team-tests.png"
    height=870
    width=870
/%}

## Install the Playwright Plugin package into your project

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}

```sh
npm install @replayio/playwright -D
```

{% /tab %}
{% tab %}

```sh
yarn add @replayio/playwright -D
```

{% /tab %}
{% tab %}

```sh
pnpm install @replayio/playwright -D
```

{% /tab %}
{% tab %}

```sh
bun install @replayio/playwright -D
```

{% /tab %}
{% /tabs %}

## Save your API key

To use your API key, you can either use [dotenv package](https://www.npmjs.com/package/dotenv) and save it to a `.env` file or add the API key to your environment directly.

{% tabs labels=[".env", "macOS/Linux", "Windows"] %}
{% tab %}

```bash {% fileName=".env" %}
REPLAY_API_KEY=<your_api_key>
```

{% /tab %}
{% tab %}

```sh
export REPLAY_API_KEY=<your_api_key>
```

{% /tab %}
{% tab %}

```sh
set REPLAY_API_KEY=<your_api_key>
```

{% /tab %}
{% /tabs %}

## Update your configuration

```js {% fileName="playwright.config.ts" highlight=[2, "7-10","14-17"] lineNumbers=true %}
import { PlaywrightTestConfig, devices } from "@playwright/test";
import { devices as replayDevices, replayReporter } from "@replayio/playwright";
import "dotenv/config";

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: true,
    }),
    ["line"],
  ],
  projects: [
    {
      name: "replay-chromium",
      use: { ...replayDevices["Replay Chromium"] },
    },
  ],
};
export default config;
```

## Record your test

Once you have added Chromium Replay Browser to your project, you are ready to create your recordings. You can run your tests normally, using `npx playwright test` command.

If your project has multiple browsers set up, you can run Replay Browser only:

```sh
npx playwright test --project replay-chromium
```

```sh
➜ npx playwright test

Running 1 test using 1 worker
[1/1] things-app.spec.ts:14:7 › Todos › should allow me to add todo items
[replay.io]: 🕑 Completing some outstanding work ...
[replay.io]:
[replay.io]: 🚀 Successfully uploaded 1 recordings:
[replay.io]:
[replay.io]:    ✅ should allow me to add todo items
  1 passed (2.1s)
```

> [Check out this replay](https://replay.help/playwright-flake-debug) for a detailed walkthrough on debugging a flaky Playwright test.

## Record your tests in CI

Now that you're ready to inspect your local tests, the next step is to record your tests in CI. Learn how to set up Replay with your Playwright tests on [GitHub Actions](/reference/test-runners/playwright/github-actions) and [other CI providers](/reference/test-runners/playwright/other-ci-providers).

{% /steps %}

{% quick-links title="Read more" description="Learn how to record your tests, manage your test suite and debug flaky tests using Replay DevTools" %}

{% quick-link
  title="Record Your CI Test Run"
  icon="build"
  href="/reference/test-runners/playwright/github-actions"
  description="Learn how to integrate Replay into your Continuous integration service"
/%}

{% quick-link
  title="Replay DevTools"
  icon="jumptocode"
  href="/basics/replay-devtools/browser-devtools/console"
  description="Learn how to use Replay DevTools to debug your tests."
/%}

{% quick-link
  title="Test Suite Management"
  icon="treeview"
  href="/basics/test-suites/top-failing-and-flaky-tests"
  description="Test Suite Dashboard helps you stay on top of your test suite health."
/%}

{% quick-link
  title="Debugging tips"
  icon="debuggingtests"
  href="/reference/test-runners/playwright/debugging-tests"
  description="Learn about how to effectively debug flaky or failing tests"
/%}

{% /quick-links %}
