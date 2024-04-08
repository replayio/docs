---
title: Cypress.io
description: Replay works great with Cypress. You can set up your project to use Replay Browser in matter of minutes and then customize it to your needs. With Replay Browser integration, you’ll be able to see all your Cypress steps as well as code of your application.
---

{% basic icon="console" %}
## Debug like a pro
The most annoying test flakes are those that cannot be reproduced locally or simply don’t show up when you need them to. But we think that **what happens on CI should not stay on CI**. 

Recording your test run using replay will provide more info than any test result, logger or any DOM snapshot trace ever could. That’s because a replay provides you with **context for every line of code**. For both your spec and the app you test.
{% /basic %}

{% figure
    alt="Jumping to code"
    src="/images/jump_to_code.png"
    gradient="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-200"
    height=870
    width=870
/%}

Cypress brings its special chaining syntax, that is fun to use, but can sometimes lead to unexpected issues. Retryability mechanisms can sometimes race-condition, starting a chain of events that can be hard to trace back.

Replay tackles this by providing you more context and deeper insight. All packaged into DevTools that we love to work with. And with time-travelling capability on top of it.

### Trace back every DOM change
Replay allows you to track every DOM change, not just those that are captured by "before" and "after" snapshots. Let’s look at the following test:

```ts {% fileName="spec.cy.ts" lineNumbers=true %}
it('tests a stopwatch', () => {
  cy.visit('/')
  cy.get('p').should('have.text', '00:01:000')
  cy.get('p').should('have.text', '00:02:000')
})
```
There are a couple of things that could go wrong with this test:
- stopwatch would never show time `00:01` (false positive)
- stopwatch runs too fast for `cy.contains()` to notice milliseconds (false negative)

This example is quite exaggerated, but it illustrates two main problems when it comes to DOM changes:
1. we cannot keep track of all DOM changes
2. DOM changes things can happen way too fast

This is where snapshots tend to fall short. Our application is clearly operating even between test steps. Replay records this activity.

```ts {% fileName="spec.cy.ts" %}
it('tests a stopwatch', () => {
  // replay recorded what happened here
  cy.visit('/')
  // and here
  cy.get('p').should('have.text', '00:01:000')
  // even here
  cy.get('p').should('have.text', '00:02:000')
})
```
Even when your app is updated every millisecond, you can jump to the perfect spot, and see your DOM rendered exactly as it would on that moment.

{% figure
    alt="Millisecond increment"
    src="/images/increment.png"
    gradient="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-200"
    height=870
    width=870
%}
DOM tree stopped at 9th millisecond 
{% /figure %}

### Inspect network
tbd

## Record your first test

Having your test recorded is just a matter of using Replay Browser instead of the default Electron during your test run. Here’s how you can record your first test in two minutes:

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

### Run your test with Replay Browser
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