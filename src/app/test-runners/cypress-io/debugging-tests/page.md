---
title: Debugging Tips
description: Replay can help you gather more information about a flaky test. There are many strategies that can help you narrow down the root cause of a test failure or flake. Replay DevTools enable you to deep-dive into your code and print out values that would otherwise be hidden from you.
---

{% callout type="replay" %}
[Check out this replay](https://replay.help/cypress-flake-debug) for a detailed walkthrough on debugging a flaky Cypress test. You'll see the capabilities of Replay DevTools and walk through the debugging process of identifying the root cause.
{% /callout %}

## Comparing passed and failed test

Great way to narrow down the root cause of a flaky test is to open two replays - one with a passed test and one with the failed one. Usually the recording can give you enough information to notice the moment when these two tests start to diverge.

A test failure usually ends in "element not found" or other similar message, but this is usually not enough. End-to-end tests carry a lot more context which can be gathered by looking at what the test was doing **before** it failed.

{% figure
  src="/images/passed-failed-comparison.png"
  height=470
  width=470
  alt="Comparing failed and passed test"
  showRadius=false
/%}

## Adding console logs in the spec file

Cypress runs its commands by first [creating a queue](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Run-Serially) and then executing these queued commands. This is why adding a console log to spec file is little bit trickier. You can still pull out useful information from within `cy.then()`, `cy.should()` or other commands that use a callback.

Console logs can also be useful when debugging test data. Common use case in e2e testing is to create an example user and save it into `Cypress.env()` object. You can inspect this in your replay.

{% figure
  src="/images/cypress-env-console-log.png"
  height=870
  width=870
  alt="Logging out the Cypress.env() object"
/%}

## Jump to application events

With Replay you can jump from a test `cy.click()` command into the application code. In the example below, you can see the `addToCart` function highlighted. This function is called when "Add to Cart" button is clicked in the Cypress test.

{% video src="jumpToCode" /%}

{% callout title="Great articles on test flakiness" showIcon=false %}

- [8 Common mistakes in Cypress](https://filiphric.com/8-common-mistakes-in-cypress-and-how-to-avoid-them) by Filip Hric
- [Identifying code smells in Cypress](https://codingitwrong.com/2020/10/09/identifying-code-smells-in-cypress) by Josh Justice
- [Ways of fixing flaky tests](https://kailash-pathak.medium.com/ways-of-fixing-flaky-tests-in-cypress-840329d759e5) by Kailash Pathak
- [3 Practices to Reduce Flakiness](https://spin.atomicobject.com/2021/07/20/reduce-flakiness-cypress-tests/) by Jori Gelbaugh
- [Getting Rid Of A Living Nightmare In Testing](https://www.smashingmagazine.com/2021/04/flaky-tests-living-nightmare/) by Ramona Schwering
- [Methods for identifying and dealing with flaky tests](https://www.youtube.com/watch?v=38pW08_nY_k) by Jason Palmer

{% /callout %}
