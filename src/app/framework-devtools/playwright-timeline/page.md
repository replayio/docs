---
title: Playwright timeline
image: /images/playwright.png
description: Inspect your Playwright test as if it’s running locally.
---

## Basics

Replay’s playwright panel is similar to the Trace Viewer, but includes functionality that’s only possible with time travel.

### Inspect test steps

When you select a test step, you jump to point in time where it was executed.

### Inspect step source code

Selecting a test step shows the source code where the test step is defined.

## Time Travel

### Jump to code

When you click the **jump to code** button you seek from the step action into your React component’s event handler. There’s never been a faster way to start debugging a flaky test.

## See the timeline in action

{% callout type="replay" %}
[Check out this replay](https://replay.help/playwright-flake-debug) for a detailed walkthrough on debugging a flaky Playwright test. You'll see the capabilities of Replay DevTools and walk through the debugging process of identifying the root cause.
{% /callout %}

Learn how to use the Playwright timeline to inspect test step details, jump to code, and find timing issues in your Playwright tests.

{% video src="playwrightDebugging" autoplay=false /%}
