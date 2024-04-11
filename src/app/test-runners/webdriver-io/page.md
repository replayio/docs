---
title: WebdriverIO
description: Because Replay Browser lets you record anything that happens inside it, you can simply just point your test script to the Replay Browser binary and you are all set up.
---

{% steps %}
## Install Replay package
To start, you need to install `@replayio/replay` package to your project.

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}
```sh
npm i @replayio/replay
```
{% /tab %}
{% tab %}
```sh
yarn add @replayio/replay
```
{% /tab %}
{% tab %}
```sh
pnpm i @replayio/replay
```
{% /tab %}
{% tab %}
```sh
bun i @replayio/replay
```
{% /tab %}
{% /tabs %}

## Set up the browser binary

In order to use Replay Browser in your WebdriverIO scripts, you need to point your configuration to the Replay Browser binary. The `getExecutablePath` function will take care of locating the binary on your machine.

```js {% lineNumbers=true fileName="wdio.config.js" highlight=["1-2","11-14"] %}
const { getPlaywrightBrowserPath } = require("@replayio/replay");
const chromiumPath = getPlaywrightBrowserPath("chromium");

exports.config = {
  specs: ["./test/*.js"],
  automationProtocol: 'devtools',
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
        binary: chromiumPath,
        args: [ '--disable-infobars', '--window-size=1920,1080']
    }
  }],
};
```

{% callout %}
You need to set up `automationProtocol: 'devtools'` option in your config instead of default `webdriver` protocol for now. This may change in future updates.
{% /callout %}

## Run your tests
With configration set up, you can run your tests the same way as before. After your run finishes, your recordings will be stored locally. 

## Install Replay CLI to upload
To download and install Replay CLI, run the following command:

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}
```sh
npm i -g replayio
```
{% /tab %}
{% tab %}
```sh
yarn i -g replayio
```
{% /tab %}
{% tab %}
```sh
pnpm i -g replayio
```
{% /tab %}
{% tab %}
```sh
bun i -g replayio
```
{% /tab %}
{% /tabs %}

Upload your replays with the following command:

```sh
replayio upload --all
```

You can use Replay CLI to manage and upload your recordings. To learn more see the [docs on Replay CLI](/replay-cli/commands).

After you upload your recordings, you can view them in [Test Suite Dashboard](/test-suites/features/test-suite-dashboard).
{% /steps%}

{% callout %}
You can try this out on your own, by forking [this example repository](https://github.com/filiphric/replay-webdriverio-example).
{% /callout %}

{% quick-links title="Read more" description="Learn how to manage your recordings, debug your app using Replay DevTools and more" %}

{% quick-link 
  title="Manage your recordings" 
  icon="console" 
  href="/replay-cli/commands" 
  description="Learn how to upload, remove and view your recordings using CLI" 
/%}

{% quick-link 
  title="Replay DevTools" 
  icon="jumptocode" 
  href="#" 
  description="Learn how to use Replay DevTools to debug your tests." 
/%}


{% quick-link 
  title="Record Your CI Test Run" 
  icon="build" 
  href="#" 
  description="Learn how to integrate Replay into your Continuous integration service" 
/%}


{% quick-link 
  title="Test Suite Management" 
  icon="treeview" 
  href="#" 
  description="Test Suite Dashboard helps you stay on top of your test suite health." 
/%}

{% /quick-links %}

