---
title: Upload strategies
description: When you run tests and create recordings, they are stored locally. You can choose which recordings get uploaded to Replay. All uploaded recordings become accessible in the Replay App.
---

{% callout %}
While uploading just failed tests is good for saving resources, our recommendation is to upload both failed and passed tests so that you can compare them. This can be really useful for debugging purposes.
{% /callout %}

## Upload all tests

To upload all test replays no matter the result, set the `upload` option to true.

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```js {% fileName="cypress.config.js" highlight=[7] %}
export default defineConfig({
  e2e: {
    setupNodeEvents(cyOn, config) {
      const on = wrapOn(cyOn)
      replayPlugin(on, config, {
        apiKey: process.env.REPLAY_API_KEY,
        upload: true,
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js {% fileName="playwright.config.js" highlight=[7] %}
import { replayDevices, replayReporter } from "@replayio/playwright";

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

{% /tab %}
{% /tabs %}

## Upload failed tests only

To upload recordings only for failed tests use `statusThreshold` option:

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```js {% fileName="cypress.config.js" highlight=[7,8,9] %}
export default defineConfig({
  e2e: {
    setupNodeEvents(cyOn, config) {
      const on = wrapOn(cyOn)
      replayPlugin(on, config, {
        apiKey: process.env.REPLAY_API_KEY,
        upload: {
          statusThreshold: 'failed',
        },
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js {% fileName="playwright.config.js" highlight=[7,8,9] %}
import { replayDevices, replayReporter } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: {
          statusThreshold: "failed"
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

## Upload failed and flaky tests

To upload recordings for failed and flaky tests use `statusThreshold` option:

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```js {% fileName="cypress.config.js" highlight=[7,8,9] %}
export default defineConfig({
  e2e: {
    setupNodeEvents(cyOn, config) {
      const on = wrapOn(cyOn)
      replayPlugin(on, config, {
        apiKey: process.env.REPLAY_API_KEY,
        upload: {
          statusThreshold: 'failed-and-flaky',
        },
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js {% fileName="playwright.config.js" highlight=[7,8,9] %}
import { replayDevices, replayReporter } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: {
          statusThreshold: "failed-and-flaky"
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

## Upload only for the primary branch

Many CI providers provide an environment variable that references the current branch name.

- [CircleCI](https://circleci.com/docs/2.0/env-vars/#built-in-environment-variables): `$CIRCLE_BRANCH`
- [GitLab](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html): `$CI_COMMIT_REF_NAME`
- [Semaphore](https://docs.semaphoreci.com/ci-cd-environment/environment-variables/): `$SEMAPHORE_GIT_BRANCH`
- [Travis](https://docs.travis-ci.com/user/environment-variables/#default-environment-variables): `$TRAVIS_BRANCH`

GitHub [stores this value in a default variable](https://docs.github.com/en/actions/learn-github-actions/variables) named `GITHUB_BASE_REF` that can be passed along as [part of a Workflow](https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow) and then referenced in the test config like so:

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```js {% fileName="cypress.config.js" highlight=[7] %}
export default defineConfig({
  e2e: {
    setupNodeEvents(cyOn, config) {
      const on = wrapOn(cyOn)
      replayPlugin(on, config, {
        apiKey: process.env.REPLAY_API_KEY,
        upload: process.env.BRANCH_NAME === 'main',
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js {% fileName="playwright.config.js" highlight=[7] %}
import { replayDevices, replayReporter } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: process.env.BRANCH_NAME === "main"
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

## Reducing the number of uploaded recordings

Use the advanced upload options to reduce the number of recordings that are uploaded. When this option is enabled, only one recording will be uploaded for any passing or failing test. For flaky tests, two recordings will be uploaded– the passing test and one of the failed attempts.

```js {% fileName="playwright.config.js" highlight=[7,8,9] %}
import { replayDevices, replayReporter } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: {
          minimizeUploads: true,
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

{% callout %}
Note this option is only available for tests recorded with Playwright
{% /callout %}

## Combining options

You can combine advanced upload options to e.g. only upload a single recording and only for a failing test.

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```js {% fileName="cypress.config.js" highlight=[7,8,9,10] %}
export default defineConfig({
  e2e: {
    setupNodeEvents(cyOn, config) {
      const on = wrapOn(cyOn)
      replayPlugin(on, config, {
        apiKey: process.env.REPLAY_API_KEY,
        upload: {
          minimizeUploads: true,
          statusThreshold: 'failed',
        },
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js {% fileName="playwright.config.js" highlight=[7,8,9,10] %}
import { replayDevices, replayReporter } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: {
          minimizeUploads: true,
          statusThreshold: "failed",
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
