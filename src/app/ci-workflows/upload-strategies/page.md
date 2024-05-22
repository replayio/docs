---
title: Upload strategies
description: When you run tests and create recordings, they are stored locally. You can opt to upload them automatically or define your own uploading strategy. All uploaded recordings become accessible in the Replay App.
---

{% callout %}
While uploading just failed test is good for saving resources, our recommendation is to upload both failed and passed tests so that you can compare them. This can be really useful for debugging purposes.
{% /callout %}

## Upload failed tests only

By default, all test replays are uploaded no matter the result. If you want to upload only the failed recordings, you can use the `filter` property in the plugin configuration:

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```js
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      replayPlugin(on, config, {
        upload: true,
        apiKey: process.env.REPLAY_API_KEY,
        filter: function (recording) {
          // upload runtime crashes and any failed tests
          return (
            recording.status === 'crashed' ||
            recording.metadata.test.result === 'failed'
          )
        },
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js
import { replayDevices, replayReporter } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: true,
      filter: function (recording) {
        // upload runtime crashes and any failed tests
        return (
          recording.status === "crashed" ||
          recording.metadata.test.result === "failed"
        );
      },
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

{% /tab %}
{% /tabs %}

## Upload failed and flaky Cypress tests

By default, all test replays are uploaded no matter the result. If you want to upload failed and flaky tests, you can use the `filter` property in the plugin configuration:

```js
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      replayPlugin(on, config, {
        upload: true,
        apiKey: process.env.REPLAY_API_KEY,
        filter: function (recording) {
          // upload runtime crashes and recordings with any tests that failed
          return (
            recording.status === 'crashed' ||
            recording.metadata.test.tests.some(
              (test) => test.result === 'failed',
            )
          )
        },
      })
      return config
    },
  },
})
```

## Upload only for the primary branch

The recording metadata includes some details about the source control including the repository and branch name which can also be used to filter your uploads. The example below uploads all recordings from the `main` branch:

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```js
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      replayPlugin(on, config, {
        upload: true,
        apiKey: process.env.REPLAY_API_KEY,
        filter: function (recording) {
          return recording.metadata.source.branch === 'main'
        },
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js
import { replayDevices, replayReporter } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: true,
      filter: function (recording) {
        return recording.metadata.source.branch === "main";
      },
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

{% /tab %}
{% /tabs %}

## Upload some passing runs

If you've adopted one the configurations above but would also like to periodically upload all replays for a test run, you can add a condition to the filter that returns `true` for a given test run id. This is only one possible implementation of this approach and you're welcome to adopt others such as using external environment variables.

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```js
const convertStringToInt = (string) =>
  string.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      replayPlugin(on, config, {
        upload: true,
        apiKey: process.env.REPLAY_API_KEY,
        filter: function (recording) {
          // randomly upload 10% of all test runs
          if (convertStringToInt(r.metadata.test.run.id) % 10 === 1) {
            return true
          }

          // upload runtime crashes and any failed tests
          return (
            recording.status === 'crashed' ||
            recording.metadata.test.result === 'failed'
          )
        },
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js
import { replayDevices, replayReporter } from "@replayio/playwright";

const convertStringToInt = string =>
  string.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: true,
      filter: function (recording) {
        // randomly upload 10% of all test runs
        if (convertStringToInt(r.metadata.test.run.id) % 10 === 1) {
          return true;
        }

        // upload runtime crashes and any failed tests
        return (
          recording.status === "crashed" ||
          recording.metadata.test.result === "failed"
        );
      },
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

{% /tab %}
{% /tabs %}

## Using GitHub Action

```yml {% fileName=".github/workflows/e2e.yml" lineNumbers=true highlight=[19] %}
name: Replay tests
on: [push, pull_request]
jobs:
  cypress-run:
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
          filter: ${{ 'function($v) { $v.metadata.test.result = "failed" }' }}
```
