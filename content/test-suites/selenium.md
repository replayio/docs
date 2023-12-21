---
title: Selenium
---
import { Callout } from 'nextra/components'

# Selenium

## Setup

Setting up Replay is as simple as downloading the browser, using it in your tests, and uploading the recordings.

1. Download the browser with `npx @replayio/replay update-browsers chromium`
2. Setup Replay browser as the browser of choice
3. Upload recordings with the `npx @replayio/replay upload-all` command. 

## Example

As a test, let’s run this simple script that opens a page and clicks on "Add to cart" button to reveal a success message. 

```js showLineNumbers {4-6}
const { Builder, Browser, By, until } = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .build();

    try {
      await driver.get('http://localhost:3000');
      await driver.findElement(By.xpath("//*[text()='Add to Cart']")).click();
      await driver.wait(until.elementLocated(By.xpath("//*[text()='Product added to cart!']")), 5000);
    } finally {
      await driver.quit();
    }
})();
```

This test will run in Chrome browser as indicated on lines 4-6. In order to create a replay, we need to use Replay Browser instead. Since Replay Browser is chromium-based, ChromeDriver will be able to automate it exactly the same way.

To pass these options, add the configuration to your existing setup:

```js showLineNumbers {2,7-8,12} copy
const { Builder, Browser, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
import { getPlaywrightBrowserPath } from "@replayio/replay";
const chromiumPath = getPlaywrightBrowserPath("chromium");

(async function test() {
  let options = new chrome.Options();
  options.setChromeBinaryPath(chromiumPath);

  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

    try {
      await driver.get('http://localhost:3000');
      await driver.findElement(By.xpath("//*[text()='Add to Cart']")).click();
      await driver.wait(until.elementLocated(By.xpath("//*[text()='Product added to cart!']")), 5000);
    } finally {
      await driver.quit();
    }
})();
```

In this example, path is defined as a `chromiumPath{:js}` variable. The implementation is up to you, but it is a good practice to move your configuration to a global scope.

<Callout type="info" emoji="💡">
You can try this out on your own, by forking [this example repository](https://github.com/filiphric/replay-selenium-example).
</Callout>

## Uploading your replays
Simply passing the Replay Browser instead of the default one will automatically create your recordings. You can list your recordings by typing `replay ls` into your terminal. 

```ansi
$ replay ls    

ID                                    Status  Title                     Created
bd4804ea-2f74-4c88-a3bd-cf1a2e87b307  onDisk  Replay of localhost:3000  20 minutes ago
58264a70-5bed-4df4-b765-fb001e51f8aa  onDisk  Replay of localhost:3000  20 minutes ago
24913f24-f700-46cf-81a0-352f7bd71b17  onDisk  Replay of localhost:3000  4 hours ago
```
<Callout type="info" emoji="ℹ️">
Find out more about [Replay CLI here](/reference-guide/recording/replay-cli).
</Callout>

After setting up everything, you will run your tests as you normally would. Replay will record all the activity inside the browser, which you can then upload and view in [Test Suite Dashboard](/test-suites/features/test-suite-dashboard).

To upload your recording, run the following command:

```sh
npx @replayio/replay upload-all
```

Note: you need to provide API key, either in your shell environment, or by passing it into the command. [You can read more about Replay CLI here](/reference-guide/recording/replay-cli).

## Continuous integration
To run your project on CI, you’ll simply follow the same steps as described above. In addition to running your tests and uploading your replays, you need to make sure that your CI environment is set up properly.

### CircleCI
CircleCI keeps your workflows simple thanks to CircleCI Orbs. These help you set up your testing environment, install dependencies and properly cache resources.

In this example we are using `circleci/node@5.0.2` and `circleci/browser-tools@1.4.6` Orbs. In the following example, Orbs take care of installing proper browsers and their drivers, so that we can execute Selenium tests.

```yml {4, 14,15} showLineNumbers
version: 2.1
orbs:
  node: circleci/node@5.0.2
  browser-tools: circleci/browser-tools@1.4.6
jobs:
  replay:
    environment: 
      RECORD_ALL_CONTENT: 1
    executor: node/default 
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - browser-tools/install-chrome
      - browser-tools/install-chromedriver
      - run:
          name: Run e2e tests 
          command: npm test
      - run:
          name: Upload replays
          when: always
          command: npx @replayio/replay upload-all
      
workflows:
  replay-workflow:
    jobs:
      - replay
```

After tests are ran, the `Upload replays` step is executed. notice the `when: always{:yml}` option that ensures we run this steps independently from whether previous step fails or passes. This ensures we will upload recordings of failed tests and don’t stop the pipeline execution on previous step.

The `Upload replays` step relies on `REPLAY_API_KEY` being present in the environment. To generate an API key, follow [these docs](/getting-started/teams-admin/setting-up-a-team#api-keys). To set up your API key in your CircleCI project, follow the [documentation on CircleCI](https://circleci.com/docs/set-environment-variable/#set-an-environment-variable-in-a-project)