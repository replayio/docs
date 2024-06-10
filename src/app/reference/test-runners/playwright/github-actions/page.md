---
title: GitHub actions
---

Playwright tests can be configured via `playwright.config.ts` and the [command line](https://playwright.dev/docs/test-cli).

In real world scenarios, the `playwright.config.ts` has the default setup and is extended by the command line options in either the terminal, `package.json` or github action.

## Simple setup

In the setup below, we update the `playwright.config.ts` file to use the Replay chromium browser and Replay reporter which will record all tests by default and upload them to your [Test Suite Dashboard](/basics/test-suites/recent-runs).

```jsx {% fileName="playwright.config.ts" lineNumbers=true %}
import { PlaywrightTestConfig, devices } from "@playwright/test";
import { devices as replayDevices, replayReporter } from "@replayio/playwright";

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

Now that the playwright config is set up, you can run the tests with `npx playwright test`. At this point, we'll add a simple Github action `workflow.yml` file to run and upload the tests for pushes and pull requests.

```yml {% fileName=".github/workflows/e2e.yml" lineNumbers=true %}
name: End-to-end tests
on:
  pull_request:
  push:
    branches: [main]
jobs:
  e2e-tests:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Install Replay Chromium
        run: npx replayio install
      - name: Run Playwright tests
        run: npx playwright test
        env:
          REPLAY_API_KEY: ${{ secrets.REPLAY_API_KEY }}
```

## Advanced setup

In most setups, you'll want to to have additional control. In these cases, it's common to want to split up the test run and upload steps.

### Only uploading failed tests

By default, all test replays are uploaded no matter the result. If you want to only upload the failed replays, you can do so by passing the `filter` property to the `replayio/action-upload` action:

```yml {% fileName=".github/workflows/e2e.yml" lineNumbers=true highlight=["13-18"] %}
name: Replay tests
on:
  pull_request:
  push:
    branches: [main]
jobs:
  e2e-tests:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Install Replay Chromium
        run: npx replayio install
      - name: Run Playwright tests
        run: npx playwright test
      - name: Upload replays
        if: ${{ always() }}
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
          filter: ${{ 'function($v) { $v.metadata.test.result = "failed" }' }}
```

{% callout %}
Setting `if: ${{ always() }}` is important so that this step is always executed, even when the previous step fails.
{% /callout %}

### Specifying which browser is used

You can set the browser by passing the `--project` flag to the `npx playwright test` command.

Note that when you specify the browser from the command line, you will also need to include an upload step.

```yml {% fileName=".github/workflows/e2e.yml" highlight=["11-18"] lineNumbers=true %}
name: Replay tests
on:
  pull_request:
  push:
    branches: [main]
jobs:
  e2e-tests:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Install Replay Chromium
        run: npx replayio install
      - name: Run Playwright tests with Replay Browser
        run: npx playwright test --project replay-chromium --reporter=@replayio/playwright/reporter,line
      - name: Upload replays
        if: ${{ always() }}
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
```

{% callout %}
While uploading only your failed tests is good for saving resources, our recommendation is to upload both so that you can compare them and see what is different.
{% /callout %}

### Setting the replays to public

By default, all test replays are private. If you want to make them public, you can set the `public` property:

```yml {% fileName=".github/workflows/e2e.yml" lineNumbers=true highlight=["13-18"] %}
name: Replay tests
on:
  pull_request:
  push:
    branches: [main]
jobs:
  e2e-tests:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Install Replay Chromium
        run: npx replayio install
      - name: Run Playwright tests
        run: npx playwright test
      - name: Upload replays
        if: ${{ always() }}
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
          public: true
```
