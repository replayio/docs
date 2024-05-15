---
title: Examples
description: This page shows some real-life examples of using Replay with a Playwright test suite. You will learn about debugging a flaky test, setting up a simple CI workflow file and find links to example repositories and projects.
---

## Our own landing page
At Replay, we all enjoy using Replay because it enhances our debugging efficiency. Whenever we run a Playwright test, we create a replay, allowing us to debug it whenever needed. See how our setup looks in action:

- [workflow file](https://github.com/replayio/landing-page/blob/main/.github/workflows/playwright.yml)

## Simple CI setup
A real-life example of how a project might be set up can be found in our overboard app. This is an example application for buying hoverboards. We’ve added a couple of errors so you can see how a replay looks in both failed and passed case.

Take a look at the YAML file for the workflow definition. We recommend diving into the devtools to explore Replay's capabilities firsthand and see all the possibilities it offers for enhancing your debugging process.

{% callout title="Overboard" type="link" %}
- [project repository](https://github.com/replayio-public/overboard)
- [workflow file](https://g*ithub.com/replayio-public/overboard/blob/main/.github/workflows/playwright.yml)
{% /callout %}

## Debugging a Playwright test flake on CI
If you have ever faced random failures on CI, you know that maintaining tests can become a giant guessing game. This is where Replay becomes incredibly useful. It unmasks hidden problems on CI and lets you view the test run **exactly as it happened**.

The following example shows how a debugging process might look like when a network speed creates an unexpected race condition on your test that would be impossible to reproduce locally.

In the video you’ll learn how narrow down the search for the root cause of a test failure.

{% video src="playwrightDebuggingLoom" autoplay=false %}
The replay shown in video [can be found on this link](https://replay.help/playwright-flake-debug).
{% /video %}

{% callout title="Debugging a flaky test" type="link" %}
- [link to the replay showing flaky Cypress test](https://replay.help/playwrgiht-flake-debug)
{% /callout %}

## Running tests against Vercel Deployment branch
The documentation you are currently reading runs Playwright on every pull request. We use Vercel, which provides us with preview deployments. We run our tests against these preview deployments. See this workflow file to learn how to run your Playwright tests and create replays on deployment branches.

- [workflow file](https://github.com/replayio/docs/blob/main/.github/workflows/playwright.yml)


## False positive accessibility check
We generally think of test failures as something bad. Overall we prefer our tests to be green. But as they say - "never trust a test that you haven’t seen fail". 

False positives can be a nightmare and an example from our client demonstrated this. An accessibility check that ran before the page was fully loaded made a test fail *sometimes*, but it should have failed *everytime*.

You can read about the debugging process in this blogpost. If you want to see the example yourself, you can take a look into the repository and see the flaky test run.

{% callout title="Debugging a false positive" type="link" %}
- [example project](https://github.com/replayio/replay-examples/tree/main/examples/03_accessibility_false_positive)
- [blogpost about the false positive case](https://blog.replay.io/finding-%22false-positive%22-tests-with-replay.io)
{% /callout %}