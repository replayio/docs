---
title: WebdriverIO
description: Because Replay Browser lets you record anything that happens inside it, you can simply just point your test script to the Replay Browser binary and you are all set up.
---

{% steps %}
## Install Replay package
To start, you need to install `replayio` package to your project.

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}
```sh
npm i replayio
```
{% /tab %}
{% tab %}
```sh
yarn add replayio
```
{% /tab %}
{% tab %}
```sh
pnpm i replayio
```
{% /tab %}
{% tab %}
```sh
bun i replayio
```
{% /tab %}
{% /tabs %}

## Set up the browser binary

In order to use Replay Browser in your WebdriverIO scripts, you need to point your configuration to the Replay Browser binary. The `getBrowserPath` function will take care of locating the binary on your machine.

```js {% lineNumbers=true fileName="wdio.config.js" highlight=[1,3,"11-14"] %}
import { getBrowserPath } from "replayio";

const chromiumPath = getBrowserPath();

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
You need to set up `automationProtocol: 'devtools'` option in your config instead of default `webdriver` protocol for now. This may change in future updates.
{% /callout %}

## Run your tests
With configration set up, you can run your tests the same way as before. After your run finishes, your recordings will be stored locally. 

## Upload your replays

Upload your replays with the following command:

```sh
replayio upload --all
```
To learn more see the [docs on Replay CLI](/reference/replay-cli/commands).

After you upload your recordings, you can view them in [Test Suite Dashboard](/basics/test-suites/recent-runs).
{% /steps%}

{% callout %}
You can try this out on your own, by forking [this example repository](https://github.com/filiphric/replay-webdriverio-example).
{% /callout %}

{% quick-links title="Read more" description="Learn how to manage your recordings, debug your app using Replay DevTools and more" %}

{% quick-link
  title="Manage your recordings"
  icon="console"
  href="/reference/replay-cli/commands"
  description="Learn how to upload, remove and view your recordings using CLI"
/%}

{% quick-link
  title="Replay DevTools"
  icon="jumptocode"
  href="/reference/test-runners/overview"
  description="Learn how to use Replay DevTools to debug your tests."
/%}

{% quick-link
  title="Setting up a team"
  icon="settingupateam"
  href="/basics/replay-teams/setting-up-a-team"
  description="Learn how to create a team in the Replay App"
/%}

{% quick-link
  title="Test Suite Management"
  icon="treeview"
  href="/basics/test-suites/recent-runs"
  description="Test Suite Dashboard helps you stay on top of your test suite health."
/%}

{% /quick-links %}

