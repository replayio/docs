---
title: Selenium
description: Because Replay Browser lets you record anything that happens inside it, you can simply just point your test script to the Replay Browser binary and you are all set up.
---

{% steps %}

## Install Replay package

To start, you need to install `@replayio/replay` package to your project.

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

In order to use Replay Browser in your Selenium scripts, you need to point your configuration to the Replay Browser binary. The `getBrowserPath` function will take care of locating the binary on your machine.

```js {% lineNumbers=true fileName="spec.js" highlight=[3,5,"7-8",12] %}
const { Builder, Browser, By, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
import { getBrowserPath } from 'replayio'

const chromiumPath = getBrowserPath()

;(async function test() {
  let options = new chrome.Options()
  options.setChromeBinaryPath(chromiumPath)

  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build()

  try {
    await driver.get('http://localhost:3000')
    await driver.findElement(By.xpath("//*[text()='Add to Cart']")).click()
    await driver.wait(
      until.elementLocated(By.xpath("//*[text()='Product added to cart!']")),
      5000,
    )
  } finally {
    await driver.quit()
  }
})()
```

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
  href="/reference/replay-teams/setting-up-a-team"
  description="Learn how to create a team in the Replay App"
/%}

{% quick-link
  title="Test Suite Management"
  icon="treeview"
  href="/basics/test-suites/recent-runs"
  description="Test Suite Dashboard helps you stay on top of your test suite health."
/%}

{% /quick-links %}

<!-- ## Continuous integration
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

After tests are run, the `Upload replays` step is executed. notice the `when: always` option that ensures we run this steps independently from whether previous step fails or passes. This ensures we will upload replays of failed tests and don’t stop the pipeline execution on previous step.

The `Upload replays` step relies on `REPLAY_API_KEY` being present in the environment. To generate an API key, follow [these docs](/reference/replay-teams/setting-up-a-team#api-keys). To set up your API key in your CircleCI project, follow the [documentation on CircleCI](https://circleci.com/docs/set-environment-variable/#set-an-environment-variable-in-a-project) -->
