---
title: Create Your First Replay
description: Having your test recorded is just a matter of using Replay Browser instead of the default Electron during your test run. This doc shows how you can record your first test in two minutes
---
{% steps %}

## Install Cypress Plugin
Install the [@replayio/cypress](https://www.npmjs.com/package/@replayio/cypress) package in your project:

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

## Integrate Plugin To Your Project
Simply add the Replay plugin to your project [configuration](https://docs.cypress.io/guides/references/configuration) and [support](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file) files.

{% tabs labels=["CommonJS", "ESM"] %}
{% tab %}

```js {% fileName="cypress/support/e2e.js" %}
require("@replayio/cypress/support");
```

```js {% lineNumbers=true fileName="cypress.config.js" highlight=[2,"7-11"] %}
const { defineConfig } = require("cypress");
const { plugin: replayPlugin } = require("@replayio/cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      replayPlugin(on, config, {
        upload: true, // automatically upload your replays do DevTools
        apiKey: process.env.REPLAY_API_KEY,
      });
      return config;
    },
  },
});
```

{% /tab %}
{% tab %}

```js {% fileName="cypress/support/e2e.ts" %}
import "@replayio/cypress/support";
```

```js {% lineNumbers=true fileName="cypress.config.ts" highlight=[2,"7-11"] %}
import defineConfig from "cypress";
import { plugin as replayPlugin } from "@replayio/cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      replayPlugin(on, config, {
        upload: true, // automatically upload your replays do DevTools
        apiKey: process.env.REPLAY_API_KEY,
      });
      return config;
    },
  },
});
```

{% /tab %}
{% /tabs %}

{% callout title="Obtaining API key"%}
All your recordings are stored locally and can be uploaded manually via Replay CLI. To upload your recordings automatically, log in to Replay DevTools and generate API key in your settings menu. {% link href="#" %}Read more{% /link %}.
{% /callout %}

## Run Your Test With Replay Browser
With everything set up, you can now run your test locally:

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}
```sh
npx cypress run --spec cypress/e2e/spec.cy.ts
```
{% /tab %}
{% tab %}
```sh
yarn cypress run --spec cypress/e2e/spec.cy.ts
```
{% /tab %}
{% tab %}
```sh
pnpx cypress run --spec cypress/e2e/spec.cy.ts
```
{% /tab %}
{% tab %}
```sh
bun cypress run --spec cypress/e2e/spec.cy.ts
```
{% /tab %}
{% /tabs %}

After your test finishes it will generate a link to Replay DevTools where you can inspect your test run.

<!-- todo: add video -->

{% /steps %}


{% quick-links title="Read more" description="Learn how to record your tests, manage your test suite and debug flaky tests using Replay DevTools" %}

{% quick-link 
  title="Record Your CI Test Run" 
  icon="build" 
  href="#" 
  description="Learn how to integrate Replay into your Continuous integration service" 
/%}


{% quick-link 
  title="Replay DevTools" 
  icon="jumptocode" 
  href="#" 
  description="Learn how to use Replay DevTools to debug your tests." 
/%}


{% quick-link 
  title="Test Suite Management" 
  icon="treeview" 
  href="#" 
  description="Test Suite Dashboard helps you stay on top of your test suite health." 
/%}

{% quick-link 
  title="Debugging tips" 
  icon="console" 
  href="#" 
  description="Learn about how to effectively debug flaky or failing tests" 
/%}


{% /quick-links %}
