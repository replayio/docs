---
title: Puppeteer
description: Because Replay Browser lets you record anything that happens inside it, you can simply just point your test script to the Replay Browser binary and you are all set up.
---

## Set up Replay CLI 

1. Install [@replayio/puppeteer](https://github.com/Replayio/replay-cli/tree/main/packages/puppeteer) with `npm i @replayio/puppeteer` in your project.
2. Pass in the path to `replay-chromium` in the  `puppeteer.launch()` call. See example above.
3. Upload recordings with the `replayio upload-all` command. See more [here](/reference-guide/recording/replay-cli).

{% callout %}
Replay is up-to-date as of Puppeteer version 13.3.1. If you are using a newer version and run into a problem, please [open a GitHub issue here](https://github.com/replayio/replay-cli) to let us know!
{% /callout %}


## Example configuration

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

