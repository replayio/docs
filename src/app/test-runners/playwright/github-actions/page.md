---
title: GitHub actions
---

Playwright tests can be configured via `playwright.config.ts` or using [command line options](https://playwright.dev/docs/test-cli). In a real world scenario you usually end up using both.

Usually, the `playwright.config.ts` file specifies the default setup. Your GitHub Action `workflow.yml` file will then define additional options passed via command line.

## Simple setup

This configuration file contains only a single project that uses `replay-chromium` as a default browser and uses Replay as the default test reporter.

```jsx {% fileName="playwright.config.ts" lineNumbers=true %}
import { PlaywrightTestConfig, devices } from "@playwright/test";
import { devices as replayDevices } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [["@replayio/playwright/reporter", {
    apiKey: process.env.REPLAY_API_KEY,
    upload: true
  }], ['line']],
  projects: [
    {
      name: "replay-chromium",
      use: { ...replayDevices["Replay Chromium"] as any },
    }
  ],
};
export default config;
```

In a configuration like the one above, as simple `npx playwright test` command will:

1. Run all your Playwright tests
2. Automatically create replays
3. Automatically upload them to Test Suite Dashboard

The `workflow.yml` file will in this case look as simple as following:

```yml {% fileName=".github/workflows/e2e.yml" lineNumbers=true %}
name: End-to-end tests
on: [push, pull_request]
jobs:
  e2e-tests:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Run Playwright tests
        run: npx playwright test
```

## Advanced setup

Usually a Playwright project contains multiple browser projects and various browser reporters. By default, Playwright will run all your projects and use all defined reporters. The `replay-chromium` browser will take care of recording your tests.

### Specifying projects to run

You can take control of which project is ran using your workflow file.

Notice, that in this setup, you need to include an upload step. Specifying `if: ${{ always() }}` will make sure that the "Upload replays" step is executed no matter the result of previous step.

```yml {% fileName=".github/workflows/e2e.yml" highlight=["11-18"] lineNumbers=true %}
name: Replay tests
on: [push, pull_request]
jobs:
  e2e-tests:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Run Playwright tests with Replay Browser
        run: npx playwright test --project replay-chromium --reporter=@replayio/playwright/reporter,line
      - name: Upload replays
        if: ${{ always() }}
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
```

### Uploading failed tests only

By default, all test replays are uploaded no matter the result. If you want upload only the failed recordings, you can define the step to do so using `filter` property:

```yml {% fileName=".github/workflows/e2e.yml" lineNumbers=true highlight=[19] %}
name: Replay tests
on: [push, pull_request]
jobs:
  e2e-tests:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Run Playwright tests with Replay Browser
        run: npx playwright test --project replay-chromium --reporter=@replayio/playwright/reporter,line
      - name: Upload replays
        if: ${{ always() }}
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
          filter: ${{ 'function($v) { $v.metadata.test.result = "failed" }' }}
```

{% callout %}
While uploading just failed test is good for saving resources, our recommendation is to upload both failed and passed tests so that you can compare them. This can be really useful for debugging purposes.
{% /callout %}
