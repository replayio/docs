---
title: Recording Playwright core
---

We assume most folks are using Playwright Test, but because Replay is just a browser, you can also use the Playwright API, to tell Playwright to launch the Replay browser.

## Getting started

Lets start with a simple Playwright test that launches Chromium and goes to google.com.

```js {% fileName="simple-test.js" %}
const playwright = require('playwright')

;(async () => {
  const browser = await playwright.chromium.launch({
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto('https://google.com')

  await page.close()
  await browser.close()
})()
```

Updating the test to use the Replay browser is as simple as telling Playwright to launch the Replay browser.

```js {% fileName="simple-test.js" lineNumbers=true highlight=[2, "7-14"] %}
const playwright = require('playwright')
const { getExecutablePath } = require('@replayio/playwright')

;(async () => {
  const browser = await playwright.chromium.launch({
    headless: true,
    executablePath: getExecutablePath('chromium'),
    env: {
      ...process.env,
      RECORD_ALL_CONTENT: 1,
      RECORD_REPLAY_METADATA: JSON.stringify({
        title: 'Go to Google',
      }),
    },
  })
  const page = await browser.newPage()
  await page.goto('https://google.com')

  await page.close()
  await browser.close()
})()
```

Run `node test.js` to run and record your tests. And then run `replayio upload` and upload your new replay.

### FAQ

{% accordion %}

{% accordion-item title="Why is the Playwright panel missing?" %}
The [Playwright panel](/replay-devtools/framework-devtools/playwright-timeline) is currently only suppored for Playwright Test tests where we're able to capture the playwright test steps via the reporter.

{% /accordion-item %}

{% accordion-item title="How do I recoord multiple tests with the same browser?" %}

Recording multiple tests with the same browser is similar to the example above. The one additional step is to set the `RECORD_REPLAY_METADATA_FILE` environment variable which helps Replay track the metadata associated with each test.

```js {% fileName="test.js" %}
const path = require('path')
const { writeFileSync } = require('fs')
const playwright = require('playwright')
const { getExecutablePath } = require('@replayio/playwright')

;(async () => {
  const metadataFilePath = path.join(
    process.env.HOME,
    'replay-metadata-file.json',
  )

  const browser = await playwright.chromium.launch({
    headless: true,
    executablePath: getExecutablePath('chromium'),
    env: {
      ...process.env,
      RECORD_ALL_CONTENT: 1,
      RECORD_REPLAY_METADATA_FILE: metadataFilePath,
    },
  })

  writeFileSync(
    metadataFilePath,
    JSON.stringify({ title: 'Testing Replay.io' }),
  )

  let page = await browser.newPage()
  await page.goto('https://replay.io')
  await page.close()

  writeFileSync(metadataFilePath, JSON.stringify({ title: 'Testing Google' }))
  page = await browser.newPage()
  await page.goto('https://google.com')

  await page.close()

  await browser.close()
})()
```

Run `node test.js` to run and record your tests and then run `replayio upload` and upload your new replays.

{% /accordion-item %}

{% /accordion %}
