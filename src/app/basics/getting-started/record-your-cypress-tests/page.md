---
title: Record your Cypress.io tests
---

{% steps %}

## Create a new Test Suite team

Start by visiting our [new test suite form](https://app.replay.io/team/new/tests).
It will create an API key and guide you through each step.

{% figure
    alt="Create a cypress team"
    src="/images/cypress-team.png"
    height=374
    width=679
/%}

## Install the Replay Cypress plugin

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

## Add the plugin to your project

Installing Replay Cypress is as simple as adding the plugin to your [cypress.config.js](https://docs.cypress.io/guides/references/configuration) and [support](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file) files. Once installed, the plugin will let you record your tests with the [Replay Chrome browser](/reference/replay-runtimes/replay-chrome) and add the Cypress timeline to Replay DevTools.

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
        upload: true, // automatically upload your replays to your team
        apiKey: process.env.REPLAY_API_KEY,
      })
      return config
    },
  },
})
```

{% /tab %}
{% /tabs %}

## Run Your test

With everything set up, you can now run `cypress run` to record and upload your first Cypress replays.

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

```sh
🕑 Completing some outstanding work ...
🚀 Successfully uploaded 2 recordings:

❌ cypress/e2e/spec.cy.ts
https://app.replay.io/recording/5bab992d-34dd-4853-9f6a-09375a66de98

✅ cypress/e2e/clearCart.cy.js
https://app.replay.io/recording/b37abe67-031c-4d23-ba8b-0224fcd3e0d5
```

{% /steps %}

## Record your suite in CI

Now that you're ready to inspect your local tests, the next step is to record your tests in CI. Learn how to set up Replay with your Cypress tests on [GitHub Actions](/reference/test-runners/cypress-io/github-actions) and [other CI providers](/reference/test-runners/cypress-io/other-ci-providers).

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
