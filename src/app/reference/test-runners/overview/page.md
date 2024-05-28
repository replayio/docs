---
title: Test Suites Overview
image: /images/Cypress-hero.png
description: Capture flakes in CI. Investigate failures with browser DevTools. And achieve a 99.9% pass rate.
---

## Using Replay with your test suite

Replay is a drop-in replacement for the browser you currently use when running your end-to-end tests. Whether you use Playwright, Cypress, or other test runners, you simply swap your current browser with **Replay Browser** and that’s it.

Explained in simplest possible terms, this is how your test script looks when Replay is integrated:

{% icon icon="playwright" class="w-6 h-5 inline-block mr-1 mb-1" /%} Playwright:{% class="font-semibold"%}

```sh
npx playwright test --project replay-chromium
```

{% icon icon="cypress" class="w-6 h-5 inline-block mr-1 mb-1" /%} Cypress:{% class="font-semibold"%}

```sh
npx cypress run --browser replay-chromium
```

### Difference when using Replay Browser

Under the hood, Replay Browser is just Chromium browser, just like Google Chrome, or Microsoft Edge. But as you run your tests, Replay Browser creates a recording of your runtime.

At the first glance, that recording may look like a series of snapshots of your application, but you’ll learn that _a replay_ is actually a very different concept. In fact, there are zero snapshots created during recording, which results in a minimal overhead as you run your tests. And yet, the information gathered is infinitely more robust.

### When to use Replay with your tests

There are a [couple of strategies](/reference/ci-workflows/recording-strategies) you can adopt, but generally you can use Replay Browser with every test run on your CI, as there is both short-term and long-term value.

When a test fails on CI, you don’t need to replicate it locally anymore. A recording captures your test run **exactly** as it happened and will provide you better insight than if you tried to locally reproduce an issue from CI.

If you battle with flaky tests, you can [compare a failing and a passing test](https://replay.help/playwright-flake-debug) to detect the difference. This can be caused by inconsistent data, race condition, test running too fast, or any other reason. What’s important is that the reason will no longer be a mystery, because Replay Browser records your test steps, your app, and everything in between. If you were able to capture the test flake, you’ll be able to debug it. Soon, we’ll be able to [help you find the root cause](/basics/test-suites/root-cause-analysis).

{% basic icon="treeview" %}

## Test Steps Trace

Replay Devtools work great with your existing test suite. Cypress and Playwright plugins allow you to **rewind or fast forward** to any command from your test run.

The command details panel contains information on passed arguments, returned values and targeted element. Commands are integrated with the rest of DevTools. This means you can jump from a command detail into [Elements panel](/basics/replay-devtools/browser-devtools/elements-panel), or inspect API calls in the [Network panel](/basics/replay-devtools/browser-devtools/network-monitor).
{% /basic %}

{% figure
    alt="Playwright panel"
    src="/images/playwright_panel.png"
    height=440
    width=870
/%}

{% basic icon="jumptocode" %}

## Jump To Code

**See what actually happened** when your test clicked, typed or in other way interacted with your website. Jump from a test command right into the function that was called on interaction.

With information on [line hit counts](/basics/replay-devtools/browser-devtools/source-viewer#hit-counts) and [jumping through line executions](/basics/replay-devtools/browser-devtools/source-viewer#jumping-to-a-line) you’ll be able to narrow down a flake root cause in minutes.
{% /basic %}

{% figure
    alt="Jumping to code"
    src="/images/jump_to_code.png"
    height=440
    width=870
/%}

{% basic icon="console" %}

## Visualize Your Race Conditions

Flakiness can be a caused by a single line of code. Reveal that line with a **print statement**. Find race conditions, unexpected data, rendering issues - you name it.

We have stories of [2 pixel shifts](https://blog.replay.io/a-journey-of-driving-down-test-flakes-to-0percent-at-metabase-part-3) and [false positives](https://blog.replay.io/finding-%22false-positive%22-tests-with-replay.io) that caused headaches to test maintainers. [Learn more](/basics/replay-devtools/time-travel-devtools/live-console-logs) about the power of time-traveling console logs.
{% /basic %}

{% figure
alt="Race condition"
src="/images/race_condition.png"
gradient="bg-gradient-to-br from-sky-300 via-blue-300 to-violet-400"
height=440
width=870
/%}

{% basic icon="insight" %}

## Test Suite Analytics

Test Suite Dashboard helps you stay on top of your test suite health. **Focus on your top failing, or most flaky tests**. Get insights from your newest feature branch. Focus on most common errors.

Analytics give you actionable insights into your test runs and help you focus on the most important tests.
{% /basic %}

{% figure
    alt="Test suite analytics"
    src="/images/runs_view.png"
    height=440
    width=870
/%}

{% basic icon="build" %}

## Debug CI Runs With Ease

**What happens on CI no longer stays on CI.** Replay Browser captures your test runs exactly as they happened and brings them to Replay DevTools where you can inspect them.

You can zoom out to take a look at your whole test run, or filter out those that are failing the most.
{% /basic %}

{% figure
    alt="Continuous integration"
    src="/images/ci.png"
    height=440
    width=870
/%}

{% basic icon="bracketscurly" %}

## Integrate With Any Framework

If test flakiness pushed you to consider switching to a new testing framework, be at ease. Replay is a browser based on Chromium that can be integrated to any test framework.

We have created an extra tooling around the most popular ones today - [Cypress.io](/reference/test-runners/cypress-io/overview) and [Playwright](/basics/getting-started/record-your-playwright-tests).
{% /basic %}

{% icon icon="cypress" class="w-9 h-9 inline-block mr-4" /%}
{% icon icon="playwright" class="w-9 h-9 inline-block mr-4" /%}
{% icon icon="selenium" class="w-9 h-9 inline-block mr-4" /%}
{% icon icon="webdriverio" class="w-9 h-9 inline-block mr-4" /%}
{% icon icon="puppeteer" class="w-9 h-9 inline-block mr-4" /%}
