---
title: Puppeteer
description: Because Replay Browser lets you record anything that happens inside it, you can simply just point your test script to the Replay Browser binary and you are all set up.
---

{% steps %}
## Install Replay Puppeteer package
To start, you need to install `@replayio/puppeteer` package to your project.

Puppeteer package is open-source and [available on GitHub](https://github.com/Replayio/replay-cli/tree/main/packages/puppeteer)

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}
```sh
npm i @replayio/puppeteer
```
{% /tab %}
{% tab %}
```sh
yarn add @replayio/puppeteer
```
{% /tab %}
{% tab %}
```sh
pnpm i @replayio/puppeteer
```
{% /tab %}
{% tab %}
```sh
bun i @replayio/puppeteer
```
{% /tab %}
{% /tabs %}

## Set up your configuration file

In order to use Replay Browser in your Puppeteer scripts, you need to point your configuration to the Replay Browser binary. The `getExecutablePath` function will take care of locating the binary on your machine.

```js {% lineNumbers="true" fileName="puppeteer.config.js" highlight=[2,7] %}
const puppeteer = require("puppeteer");
const { getExecutablePath } = require("@replayio/puppeteer");

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		executablePath: getExecutablePath("chromium"),
	});
	const page = await browser.newPage();
	await page.goto("https://replay.io");
	await page.screenshot({ path: "replay.png" });

	await page.close();
	await browser.close();
})();
```
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
yarn add -g replayio
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

Upload your replays with the following command.

```sh
replayio upload-all
```

You can use Replay CLI to manage and upload your recordings. To learn more see the [docs on Replay CLI](/replay-cli/commands).

After you upload your recordings, you can view them in [Test Suite Dashboard](/test-suites/runs-view).
{% /steps%}

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
  href="/test-runners/overview"
  description="Learn how to use Replay DevTools to debug your tests."
/%}

{% quick-link
  title="Setting up a team"
  icon="settingupateam"
  href="/replay-teams/setting-up-a-team"
  description="Learn how to create a team in the Replay App"
/%}

{% quick-link
  title="Test Suite Management"
  icon="treeview"
  href="/test-suites/runs-view"
  description="Test Suite Dashboard helps you stay on top of your test suite health."
/%}
{% /quick-links %}