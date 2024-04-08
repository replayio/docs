---
title: Cypress.io
description: Replay works great with Cypress. You can set up your project to use Replay Browser in matter of minutes and then customize it to your needs. With Replay Browser integration, you’ll be able to see all your Cypress steps as well as code of your application.
---


## Getting started
### Install Cypress plugin
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

### Integrate plugin to your project
Simply add the Replay plugin to your project [configuration](https://docs.cypress.io/guides/references/configuration) and [support](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file) files.

{% tabs labels=["CommonJS", "ESM"] %}
{% tab %}

```js {% fileName="cypress/support/e2e.js" %}
require("@replayio/cypress/support");
```

{% /tab %}
{% tab %}

```js {% fileName="cypress/support/e2e.ts" %}
import "@replayio/cypress/support";
```

{% /tab %}
{% /tabs %}

{% tabs labels=["CommonJS", "ESM"] %}
{% tab %}

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

```js {% lineNumbers=true fileName="cypress.config.js" highlight=[2,"7-11"] %}
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