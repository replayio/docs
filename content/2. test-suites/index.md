---
title: Integrating Replay.io with Test Runners
description: ''
---
# Test Suites

::callout{icon="i-heroicons-light-bulb"}
Ready to get started? Join the [waitlist](https://replayio.typeform.com/to/jTudlerL) and we will get back to you as soon as possible.
::

![Test suite integration with Cypress and Playwright](/images/test_suites_hero.png)

Integrating Replay Browser into your test suite is as easy as telling your test framework which browser to run on. A simplified example for each test framework of integration will look something like this:

::card
  ::Tabs
    ::div
    ---
    label: Playwright
    icon: i-logos-playwright
    ---
    ```bash
    npx playwright test --project replay-chromium
    ```
    [Click here](/test-suites/playwright/installation) Learn more about how to integrate into Playwright
    ::
    ::div
    ---
    label: Cypress
    icon: i-logos-cypress
    ---
    ```bash
    npx cypress run --browser replay-chromium
    ```
    [Click here](/test-suites/cypress/installation) Learn more about how to integrate into Cypress
    ::
    ::div
    ---
    label: WebdriverIO
    icon: i-logos-webdriverio
    ---
    ```bash
    wdio run ./wdio.conf.ts # Read docs on how to set up your configuration
    ```
    [Click here](/test-suites/webdriver-io) Learn more about how to integrate into WebdriverIO
    ::
    ::div
    ---
    label: Puppeteer
    icon: i-logos-puppeteer
    ---
    ```bash
    node puppeteer-test.js # Read docs on how to set up your configuration
    ```
    [Click here](/test-suites/puppeteer) Learn more about how to integrate into Puppeteer
    ::
  ::
::

Whenever you run your tests, the test execution will be recorded and a replay will be created. This allows you to debug failures, analyse the root cause of a flaky test and much more. With frameworks such as Playwright and Cypress, we bring you a custom sidebar that allows you to examine each test step.

## Benefits of integrating Replay to your test suite
::card-group
  ::card
  ---
  title: 'See what happened on CI'
  icon: 'i-heroicons-command-line'
  ---
  Tests fail on CI but pass locally? Recording a replay of your tests will give you insight you needed.
  ::
  ::card
  ---
  title: 'Debug with ease'
  icon: 'i-heroicons-bug-ant'
  ---
  Finding a root cause is much easier whan your test flake is recorded in a replay. No more guessing games. Examine the test flake at the very place it happened.
  ::
  ::card
  ---
  title: 'Goodbye flaky tests'
  icon: 'i-heroicons-arrow-path-rounded-square'
  ---
  With Replay DevTools you dive deeper than with any other tool. Test flakiness is no longer a mystery, but something that can be found and fixed.
  ::
  ::card
  ---
  title: 'Explore both test and app code'
  icon: 'i-heroicons-magnifying-glass-16-solid'
  ---
  Flakiness can come from anywhere - both the app and the test. You cannot make them stable by ignoring one or the other. Replay allows you to take them both into consideration
  ::
::

## Dashboard
The **Test Suite Dashboard** provides you with an overview of all the tests and test runs that were recorded with Replay Browser. This will serve you as a great reporter tool, but with every test result, you’ll have access to the test recording. If anything went wrong, you can start debugging with all the powers that Replay DevTools provide you with.

Each test run contains information on failed, passed and flaky tests. 

You can choose to open a replay that ran on a failed test, or start debugging a flaky one.

The **Test Suite Dashboard** is your launching off point. If you want to see why a recent change caused several tests to fail, you can go to the dashboard, and open each of the replays and begin debugging.

![Test suite dashboard](/images/test-suite-dashboard.png)

## Replay DevTools

Replay DevTools enable you to see what happened during your test run. This is great for flaky tests and revealing timing issues that tend to happen when running end-to-end tests. You can deep dive into your test code as well as your application code and make your app and tests work well together.

### Cypress panel
![Cypress Panel](/images/cypress-panel_uzhnf.png)

Examine each command step by step, travel back in time and see what each command returned. This will bring the great experience from your local Cypress GUI mode into your CI execution as well.

For action commands, you can click "Jump to code" to see what part of your application code was actually triggered. This empowers you to fix test dlakes at the exact place they happen.

All network requests are captured as well, including static assets. With your test result you are getting all the powers of Replay DevTools that allow you to take a deep dive into your test execution and examine your code using [print statements](/reference-guide/debugging/print-statements), [debugger](/reference-guide/debugger/breakpoints) and [React panel](/reference-guide/dev-tools/react).

::callout{icon="i-heroicons-light-bulb"}
Ready to integrate Replay to Cypress? [Learn how to setup here.](/test-suites/cypress/installation)
::

### Playwright panel
![Playwright panel](/images/playwright-panel_d78bh.png)
Playwright panel will provide you with a trace-viewer-like experience in which you can examine not only your test code, but your application code as well. You’ll get more insight into CI execution and fight off flakes more effectively.

With every recorded test, you can examine your code using Replay DevTools. You can take a look at [network calls](/reference-guide/dev-tools/network), [React components](/reference-guide/dev-tools/react) of your app, or you can debug your test using [print statements](/reference-guide/debugging/print-statements) and [debugger](/reference-guide/debugger/breakpoints).

::callout{icon="i-heroicons-light-bulb"}
Learn how to [integrate Playwright into Pipeline here](/test-suites/playwright/installation)
::

### Other testing tools
Are you using other tools? We got you covered. You can use Replay Browser to record with [Selenium](/test-suites/selenium), [Puppeteer](/test-suites/puppeteer), [WebdriverIO](/test-suites/webdriver-io) and [Jest (alpha)](/test-suites/jest). Your recorings will be available in the same way, so you can examine your code and search for flakes with these frameworks as well. 

## Integrating into CI
Recording your tests is as simple as running them with the Replay browser. You can record your test suite in any CI provider. This recording happens in two steps:
1. Run your tests in Playwright, Cypress, Puppeteer or WebdriverIO using Replay Browser 
2. Upload your recordings to Replay Dashboard [using your API key](/getting-started/teams-admin/setting-up-a-team)

After this, you can view your test results in Replay Dashboard and debug your failed and flaky tests with Replay DevTools.

You can find guides on how to setup your CI for recording [Cypress](/test-suites/cypress/continuous-integration) and [Playwright](/test-suites/playwright/continuous-integration) tests.

## Pull request comments
For a smoother workflow, we have created a [GitHub App](https://github.com/apps/replay-io) that will add comments to your pull request showing all your failed an passed test. Clicking on a failed test will take you directly to the Replay DevTools where you can debug your test.

![Pull request comments](/images/pull-request-comments_zdwcd.png)

## Learn more
Integrating Replay with your existing test suite is pretty straightforward, but we have prepared some more detailed tutorials to walk you through the basic setup and some advanced features. Click below to choose the framework of your choice.
::card-group
  :card{icon=i-logos-playwright title="Playwright" to="/test-suites/playwright"}
  :card{icon=i-logos-cypress-icon title="Cypress" to="/test-suites/cypress/installation"}
  :card{icon=i-logos-selenium title="Selenium" to="/test-suites/selenium"}
  :card{icon=i-logos-webdriverio title="WebdriverIO" to="/test-suites/webdriver-io"}
  :card{icon=i-logos-puppeteer title="Puppeteer" to="/test-suites/puppeteer"}
  :card{icon=i-logos-jest title="Jest (alpha)" to="/test-suites/jest"}
::