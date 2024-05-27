---
title: Record your Cypress.io test
---

{% steps %}

## Install the Cypress Plugin

Install the Cypress plugin in your project:

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}

```sh
npm install @replayio/cypress -D
```

{% /tab %}
{% tab %}

```sh
yarn add @replayio/cypress -D
```

{% /tab %}
{% tab %}

```sh
pnpm install @replayio/cypress -D
```

{% /tab %}
{% tab %}

```sh
bun install @replayio/cypress -D
```

{% /tab %}
{% /tabs %}

## Integrate The Plugin To Your Project

Simply add the Replay plugin to your project [configuration](https://docs.cypress.io/guides/references/configuration) and [support](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file) files.

{% tabs labels=["CommonJS", "ESM"] %}
{% tab %}

```js {% fileName="cypress/support/e2e.js" %}
require('@replayio/cypress/support')
```

```js {% lineNumbers=true fileName="cypress.config.js" highlight=[2,"8-12"] %}
const { defineConfig } = require('cypress')
const { plugin: replayPlugin } = require('@replayio/cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      replayPlugin(on, config, {
        upload: true, // automatically upload your replays do DevTools
        apiKey: process.env.REPLAY_API_KEY,
      })
      return config
    },
  },
})
```

{% /tab %}
{% tab %}

```js {% fileName="cypress/support/e2e.ts" %}
import '@replayio/cypress/support'
```

```js {% lineNumbers=true fileName="cypress.config.ts" highlight=[2,"8-12"] %}
import { defineConfig } from 'cypress'
import { plugin as replayPlugin } from '@replayio/cypress'
import 'dotenv/config'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      replayPlugin(on, config, {
        upload: true, // automatically upload your replays do DevTools
        apiKey: process.env.REPLAY_API_KEY,
      })
      return config
    },
  },
})
```

{% /tab %}
{% /tabs %}

## Generate and save your API key

In order to upload your test replays you need to generate an API key and save it to your environment. You can generate an API key once you [created a team in Replay App](/basics/replay-teams/setting-up-a-team). API key management section can be found in the team settings menu. [Read more about API keys here](/reference/ci-workflows/generate-api-key).

{% video src="generateApiKey" /%}

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

## Run Your Test With Replay Browser

With everything set up, you can now run your test locally:

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}

```sh
npx cypress run --browser replay-chromium
```

{% /tab %}
{% tab %}

```sh
yarn cypress run --browser replay-chromium
```

{% /tab %}
{% tab %}

```sh
pnpx cypress run --browser replay-chromium
```

{% /tab %}
{% tab %}

```sh
bun cypress run --browser replay-chromium
```

{% /tab %}
{% /tabs %}

After your test finishes it will generate a link to Replay DevTools where you can inspect your test run.

<!-- todo: add video -->

## Done!

You’re ready to inspect your local test run in Replay DevTools now. You can also record your tests in your CI environment. Learn how to set up Replay with your Cypress tests on [GitHub Actions](/reference/test-runners/cypress-io/github-actions) and [other CI providers](/reference/test-runners/cypress-io/other-ci-providers).

{% /steps %}

{% callout type="replay" %}
[Check out this replay](https://replay.help/cypress-flake-debug) for a detailed walkthrough on debugging a flaky Cypress test. You'll see the capabilities of Replay DevTools and walk through the debugging process of identifying the root cause.
{% /callout %}

{% quick-links title="Read more" description="Learn how to record your tests, manage your test suite and debug flaky tests using Replay DevTools" %}

{% quick-link
  title="Record Your CI Test Run"
  icon="build"
  href="/reference/test-runners/cypress-io/github-actions"
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
  href="/reference/test-runners/cypress-io/debugging-tests"
  description="Learn about how to effectively debug flaky or failing tests"
/%}

{% /quick-links %}
