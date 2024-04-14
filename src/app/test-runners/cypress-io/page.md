---
title: Cypress.io
description: Replay works great with Cypress. You can set up your project to use Replay Browser in matter of minutes and then customize it to your needs. With Replay Browser integration, you’ll be able to see all your Cypress steps as well as code of your application.
---

## Getting more insight

The most annoying test flakes are those that cannot be reproduced locally or simply don’t show up when you need them to. But we think that **what happens on CI should not stay on CI**.

Recording your test run using replay will provide more info than any test result, logger or any DOM snapshot trace ever could. That’s because a replay provides you with **context for every line of code**. For both your spec and the app you test.

{% figure
    alt="Jumping to code"
    src="/images/jump_to_code.png"
    height=870
    width=870
/%}

## Context matters

Cypress brings its special chaining syntax, that is fun to use, but can sometimes lead to unexpected issues. Retryability mechanisms can sometimes race-condition, starting a chain of events that can be hard to trace back.

Replay tackles this by providing you more context and deeper insight. All packaged into DevTools that we love to work with. And with time-travelling capability on top of it.

## Trace back every DOM change

Replay allows you to track every DOM change, not just those that are captured by "before" and "after" snapshots. Let’s look at the following test:

```ts {% fileName="spec.cy.ts" lineNumbers=true %}
it('tests a stopwatch', () => {
  cy.visit('/')
  cy.get('p').should('have.text', '00:01:000')
  cy.get('p').should('have.text', '00:03:000')
})
```

There are a couple of things that could go wrong with this test:

{% icon icon="error" class="text-red-500 inline w-4 h-4 mr-1.5" /%} stopwatch never shows the time `00:02:000` and still **passes** (false positive) \
{% icon icon="error" class="text-red-500 inline w-4 h-4 mr-1.5" /%} stopwatch runs too fast for `.should()` command and **fails** (false negative)

While this example is fairly exaggerated, it illustrates two main problems of **rapid DOM changes**.

1. they can cause problems and still be invisible for the test script
2. they can happen too fast for a test assertion to make it in time

**This is where snapshots tend to fall short.** Because an application is still operating between test steps, there’s a lot that goes under the radar. Replay is not a snapshot-based recorder but instead records the whole runtime. Visualized, the difference between DOM snapshots and a replay could look like this:

{% figure
    alt="Snapshots vs. replay"
    src="/images/snapshots.png"
    showRadius=false
    height=870
    width=620
/%}

Because of this, a flaky does not feel like an act of higher force, but can be inspected with **a microscopic precision**. Even when your app is updated every millisecond, you can jump to the perfect spot, and see your DOM rendered exactly as it would on that moment.

{% callout title="Learn more" %}
To learn more about elements panel, head over to [Elements panel docs](/browser-devtools/elements-panel) or watch the [Replay Crash course](https://www.youtube.com/watch?v=kgJVauI7Obs).
{% /callout %}

{% video src="elementsPanelStopWatch" /%}

## Inspect network calls

Replays capture all network communication and display it the same way you would expect to see it in your favourite browser’s network panel.

Network calls are the biggest contributor to asynchronous issues, as responses from server return in different times and sizes. Replay DevTools allow you to inspect every API call, resource fetch and view its headers, payloads, server responses and even timings and stack trace.

<!-- todo: add a video here -->

Because network panel is integrated with the rest of the tools, you’ll get even more options than in local development. Stack trace panel displays the source of an API call, that allows you to track back the very function that triggered the call.

{% figure
    alt="Jumping to code"
    src="/images/stack_trace_network_panel.png"
    height=1300
    width=1300
/%}

Debugging tests should be a team effort whether that is collaboration between QA and devs or between different dev teams. When facing an API issue, commenting and sharing a replay will save hours of back and forth reporting. Instead of replicating the issue, share the issue exactly the way it happened. Locally or on CI.

{% callout title="Learn more" %}
To learn more about network panel, checkout [Network panel docs](/browser-devtools/elements-panel) or watch the [Replay Crash course](https://www.youtube.com/watch?v=rGKAOG6gZZU).
{% /callout %}

## Jump to code

When a test clicks on an element on page, we usually **see the result**. Modal opened, API call was made, and so on. Replay shows you **how that result happened**.

Interactions show "Jump to code" button that takes you to the function call made by a click, typing or other interaction. This way your test interaction is no longer disconnected from the application under test.

<!-- todo: add video -->

This bridge between your test code and your app code is usually the first place you can start your test flake investigation. It gives you an unique insight into what is happening during your test, not only with the test, but also the application under test.

{% callout title="Learn more" %}
Jumping from test code and utilizing timeline can further be explored [Events Timeline doc page](/devtools/events-timeline). Or you can watch the [Replay Crash course video](https://www.youtube.com/watch?v=ksxf6qE9Ymc) on this topic.
{% /callout %}

{% quick-links title="Read more" description="Learn how record your first Replay with Cypress, manage your test suite and debug flaky tests using Replay DevTools" %}

{% quick-link
  title="Record Your First Cypress test"
  icon="cypress"
  href="/test-runners/cypress-io/record-your-first-replay"
  description="Learn how to get started with Cypress and Replay"
/%}

{% quick-link
  title="Record Your CI Test Run"
  icon="build"
  href="#"
  description="Learn how to integrate Replay into your Continuous integration service"
/%}

{% quick-link
  title="Replay DevTools"
  icon="jumptocode"
  href="#"
  description="Learn how to use Replay DevTools to debug your tests."
/%}

{% quick-link
  title="Test Suite Management"
  icon="treeview"
  href="#"
  description="Test Suite Dashboard helps you stay on top of your test suite health."
/%}

{% /quick-links %}
