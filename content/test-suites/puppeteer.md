---
title: Puppeteer
description: ''
---


# Puppeteer

## Usage

Because Replay’s recorder is a standalone browser, all you need to do to start recording your puppeteer tests is pass in the path to Replay’s fork of chromium.

### Example

```jsx
const puppeteer = require("puppeteer");
const { getExecutablePath } = require("@replayio/puppeteer");

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
    /* Set the path to replay-chromium */
		executablePath: getExecutablePath("chromium"),
	});
	const page = await browser.newPage();
	await page.goto("https://replay.io");
	await page.screenshot({ path: "replay.png" });

	await page.close();
	await browser.close();
})();
```

## Setup

Setting up Replay is as simple as downloading the browser, using it in your tests, and uploading the recordings.

1. Install [@replayio/puppeteer](https://github.com/Replayio/replay-cli/tree/main/packages/puppeteer) with `npm i @replayio/puppeteer` in your project.
2. Pass in the path to `replay-chromium` in the  `puppeteer.launch()` call. See example above.
3. Upload recordings with the `npx @replayio/reply upload-all` command. See more [here](/reference-guide/recording/replay-cli).

::callout{icon="i-heroicons-light-bulb"}
Replay is up-to-date as of Puppeteer version 13.3.1. If you are using a newer version and run into a problem, please [open a GitHub issue here](https://github.com/replayio/replay-cli) to let us know!
::