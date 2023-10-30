---
title: Playwright Node
---
import { Callout } from 'nextra/components'

# Playwright Node

<Callout type="info" emoji="❗">
This implementation is experimental and does not provide the same features as using Playwright Test. It is not configured for use with Replay Test Teams.
</Callout>

## Recording with Playwright as a Node script

You can write tests as a function that uses `playwright.[browser].launch()`. This can give you more control over which tests are recorded. 

In this configuration, you’ll use the `getExecutablePath()` function from `@replayio/playwright` to ensure the Replay-enabled browser is used.

<Callout type="info" emoji="👉">
 Passing the `RECORD_ALL_CONTENT: 1`  is only required for Replay Firefox.
</Callout>

## Metadata

You can add metadata to your playwright recordings using either the `RECORD_REPLAY_METADATA` or `RECORD_REPLAY_METADATA_FILE` environment variable. If both are set, `RECORD_REPLAY_METADATA_FILE` takes precedence.

<Callout type="info" emoji="👉">
Currently, this metadata is only available locally except for `title`
</Callout>

- `RECORD_REPLAY_METADATA_FILE` - The path to a file containing JSON-formatted metadata
- `RECORD_REPLAY_METADATA` - JSON-formatted metadata string

## Examples

### New Browser per Test

```jsx
// firefox.spec.js

const playwright = require("playwright");
const { getExecutablePath } = require("@replayio/playwright");

(async () => {
	const browser = await playwright.firefox.launch({
		headless: true,
		executablePath: getExecutablePath("firefox"),
		env: {
      ...process.env,
			RECORD_ALL_CONTENT: 1,
			RECORD_REPLAY_METADATA: JSON.stringify({
				title: "Take screenshot of replay.io"
			})
		},
	});
	const page = await browser.newPage();
	await page.goto("<https://replay.io>");
	await page.screenshot({ path: "replay.png" });

	await page.close();
	await browser.close();
})();

```

Run `node firefox.spec.js` to run and record your tests. This will generate a new replay for each test.

### Shared Browser between Tests

```jsx
const path = require("path");
const { writeFileSync } = require("fs");
const playwright = require("playwright");
const { getExecutablePath } = require("@replayio/playwright");

(async () => {
	const metadataFilePath = path.join(
		process.env.HOME,
		"replay-metadata-file.json"
	);

	const browser = await playwright.firefox.launch({
		headless: true,
		executablePath: getExecutablePath("firefox"),
		env: {
      ...process.env,
			RECORD_ALL_CONTENT: 1,
			RECORD_REPLAY_METADATA_FILE: metadataFilePath,
		},
	});

	writeFileSync(
		metadataFilePath,
		JSON.stringify({ title: "Screenshot of replay.io" })
	);

	let page = await browser.newPage();
	await page.goto("<https://replay.io>");
	await page.screenshot({ path: "replay.png" });

	await page.close();

	writeFileSync(
		metadataFilePath,
		JSON.stringify({ title: "Screenshot of google.com" })
	);

	page = await browser.newPage();
	await page.goto("<https://google.com>");
	await page.screenshot({ path: "google.png" });

	await page.close();

	await browser.close();
})();

```

Run `node firefox.spec.js` to run and record your tests. This will generate a single replay of all the test code in the file. 

## Uploading recordings

Use `[@replayio/replay](https://github.com/replayio/replay-cli/tree/main/packages/replay)` to manage and upload replays.

View the available recordings with `npx @replayio/replay ls`. Upload all with `npx @replayio/replay upload-all` or individual replays with `npx @replayio/replay upload <id>`.

You can also use functions provided by `@replayio/replay`  in your Node script to upload recordings, like in the example below.

```jsx
const cli = require("@replayio/replay");

async function uploadAll() {
  const recordings = cli.listAllRecordings();

  console.log(
    "Processing",
    recordings.length,
    "recordings"
  );

  let failed = [];
  let success = [];
  for await (let r of recordings) {
    try {
      success.push(await cli.uploadRecording(r.id, { verbose: true }));
    } catch (e) {
      failed.push(e);
    }
  }

  failed.forEach((reason) => {
    console.error("Failed to upload replay:", reason);
  });

  return success;
}

async function main() {
  try {
    const recordingIds = await uploadAll();
    console.log("Uploaded", recordingIds.length, "replays");
  } catch (e) {
    console.error("Failed to upload recordings");
    console.error(e);

    return [];
  }
}

main().then(() => {
  console.log("Done!");
});
```

### **Using `expect` with Node script configuration**

You can still use `expect` from `@playwright/test` in your test code. Import the command directly like in the example below.

```jsx
// firefox-expect.spec.js

const playwright = require("playwright");
const { expect } = require('@playwright/test');
const { getExecutablePath } = require("@replayio/playwright");

(async () => {
  const browser = await playwright.firefox.launch({
		headless: true,
		executablePath: getExecutablePath("firefox"),
		env: {
      ...process.env,
			RECORD_ALL_CONTENT: 1,
		},
	});
	const page = await browser.newPage();
	await page.goto('https://demo.playwright.dev/todomvc');
	
    const TODO_ITEMS = [
        'buy some cheese',
        'feed the cat'
      ];

    // Create 1st todo.
    await page.locator('.new-todo').click();
    await page.locator('.new-todo').fill(TODO_ITEMS[0]);
    await page.locator('.new-todo').press('Enter');

    // Create 2nd todo.
    await page.locator('.new-todo').fill(TODO_ITEMS[1]);
    await page.locator('.new-todo').press('Enter');

    // Assert todo content
    await expect(page.locator('.view label')).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1]
    ]);

	await page.close();
	await browser.close();
})()
```

### **Uploading automatically as a Node script**

Writing your tests as a Node script allows you to upload failed recordings automatically using `@replayio/replay` as a Node module.

For the example below, use `REPLAY_API_KEY=123 node upload-failure.spec.js` to execute and record the test.

```jsx
//upload-failure.spec.js

const playwright = require("playwright");
const { expect } = require('@playwright/test');
const { getExecutablePath } = require("@replayio/playwright");
const replayCli = require("@replayio/replay");

async function test() {
	const browser = await playwright.firefox.launch({
		headless: true,
		executablePath: getExecutablePath("firefox"),
		env: {
      ...process.env,
			RECORD_ALL_CONTENT: 1,
		},
	});
	const page = await browser.newPage();
	await page.goto('https://demo.playwright.dev/todomvc');
	
    const TODO_ITEMS = [
        'buy some cheese',
        'feed the cat',
        'book a doctors appointment'
      ];

    // Create 1st todo.
    await page.locator('.new-todo').click();
    await page.locator('.new-todo').fill(TODO_ITEMS[0]);
    await page.locator('.new-todo').press('Enter');

    // Create 2nd todo.
    await page.locator('.new-todo').fill(TODO_ITEMS[1]);
    await page.locator('.new-todo').press('Enter');

    // This purposefully fails to trigger an upload
    await expect(page.locator('.view label')).toHaveText([
      TODO_ITEMS[1],
      TODO_ITEMS[2]
    ]);

	await page.close();
	await browser.close();
};

async function testRun() {
  try {
    await test()
  } catch (e) {
    const recordingId = await replayCli.viewLatestRecording({apiKey: `${process.env.REPLAY_API_KEY}`})
    console.log({e, recordingId})
    process.exit(1)
  }
}

testRun()
```