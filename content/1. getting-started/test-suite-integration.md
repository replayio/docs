---
title: Test Suite integration
description: ''
---
# Test Suite integration

## Overview

[Replay.io](https://Replay.io) lets you record your browser tests in CI and debug them later with Browser DevTools. If you’ve ever struggled to understand why a test fails intermittently in CI, but passes when you run it locally, Replay can help. 

:YouTubePlayer{id="nWh-uJBl3Oo"}

::callout{icon="i-heroicons-light-bulb"}
Ready to get started? Join the [waitlist](https://replayio.typeform.com/to/jTudlerL) and we will get back to you as soon as possible.
::

## Replay DevTools

Replay DevTools includes everything you need to retroactively debug your test with live print statements, the Cypress and Playwright Panel, and Browser DevTools.

**Features**

- Cypress Panel
- Playwright Panel
- React DevTools
- Live Print Statements
- Network Monitor
- Console

**Benefits**

- Inspect **Cypress** **step details**
- Add **console logs** to any line of application code
- View **network request** and response bodies
- Jump from a **Cypress step** into the React event handler
- Jump from **console exceptions** into your application code.
- Find **timing inconsistencies** between passing and failing tests.

![Cypress Panel](/images/cypress-panel_uzhnf.png)

## Test Suite Dashboard

The **Test Suite Dashboard** provides insights into your test suite. For example, you can see how many tests failed in a given run, or view the history of a specific test to see when it started failing.

The **Test Suite Dashboard** also serves as a launching off point. If you want to see why a recent change caused several tests to fail, you can go to the dashboard, and open each of the replays and begin debugging.

**Features**

- Test run view
- Test run summary
- Flaky test overview
- Links to replays

**Benefits**

- See when tests began failing
- See which tests are flaky tests
- Debug flaky and failed tests

![Test Suites dashboard](/images/test-suite-dashboard.png)

::callout{icon="i-heroicons-light-bulb"}
Ready to get started? Join the [waitlist](https://replayio.typeform.com/to/jTudlerL) and we will get back to you as soon as possible.
::

## Pull Request Comments

**Pull Request Comments** help you jump into a failed test and see what went wrong.

**Features**

- View failed, passed, and flaky tests
- View test run in replay
- Links to replays

**Benefits**

- Test result summary
- Jump into failed tests

![Pull request comments](/images/pull-request-comments_zdwcd.png)

## Test Runners

Because [Replay.io](https://Replay.io) has a fork of Chrome and Node that you can use to record your browser and unit tests, at a high level recording your tests is as simple as pointing your tests at the Replay runtime. 

Because it can also be nice to see your test steps when you’re debugging your test in Replay DevTools we’ve built plugins for Cypress and Playwright that bring the Cypress App and Playwright Trace viewer debugging experience into Replay DevTools. 

**Plugin Support**

- [Cypress](/test-suites/cypress/installation)
- [Playwright](/test-suites/playwright/installation)

**Runtime support**

- [Selenium](/test-suites/selenium)
- [Puppeteer](/test-suites/puppeteer)
- [WebdriverIO](/test-suites/webdriver-io)
- [Jest](/test-suites/jest) (alpha)

:VideoPlayer{id="02IBP00ZR8X5yJ5sppekN02UKa02KmLM0278asmH6FKA00c6E"}

::callout{icon="i-heroicons-light-bulb"}
Ready to get started? Join the [waitlist](https://replayio.typeform.com/to/jTudlerL) and we will get back to you as soon as possible.
::

## CI Environments

Because recording your tests is as simple as running them with the Replay browser, you can record your test suite in any environment. Because each environment is slightly different, we’re beginning to collect best practices which we are sharing below.

::card
  ::Tabs
    ::div
    ---
    label: Cypress
    icon: i-logos-cypress
    ---
    - [GitHub Actions](/test-suites/cypress/continuous-integration/github)
    - [Other CI providers](/test-suites/cypress/continuous-integration/other-ci-providers)
    ::
    ::div
    ---
    label: Playwright
    icon: i-logos-playwright
    ---
    - [GitHub Actions](/test-suites/playwright/continuous-integration/git-hub-actions)
    - [Other CI providers](/test-suites/cypress/continuous-integration/other-ci-providers)
    ::
  ::
::

## Test Suites FAQ

If you have any questions that are not answered in the FAQ, feel free to email us at support@replay.io or join our [Discord](https://replay.io/discord) #testing channel.

- [How do I include matrix strategy variables to my test run?](/test-suites/test-suites-faq)
- [How do I link tests to the same test run if I split my tests across jobs?](/test-suites/test-suites-faq)
- [What is the performance overhead when recording?](/test-suites/test-suites-faq)
- [Are only failed test replays uploaded?](/test-suites/test-suites-faq)
- [How do I update the Replay Browser?](/test-suites/test-suites-faq)

::callout{icon="i-heroicons-light-bulb"}
Ready to get started? Join the [waitlist](https://replayio.typeform.com/to/jTudlerL) and we will get back to you as soon as possible.
::
