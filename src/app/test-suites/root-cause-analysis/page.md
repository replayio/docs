---
title: Root Cause analysis
description: Root Cause analysis identifies the underlying issues in your application responsible for the majority of test failures.
image: /images/Root-cause-analysis.png
---

## Overview

End to end tests have a lot of advantages. They are relatively easy to write. And they are the best way to ensure that a change is safe to land. The primary downside is that they fail in surprising ways.

This makes sense. There are lots of reasons why a button might not be visible or clickable. And when the test fails, the error message describes the failed assertion or failed step, but cannot actually tell you what went wrong in the application.

This is where Root Cause Analysis comes in. We programmatically compare passing and failing tests to find the earliest divergences and categorize the failure based on what's happening in the application, not the test.

The result is that instead of showing hundreds of test error messages, we're able to show a couple of the underlying issues in your application that are responsible for the majority of test failures.

### How are failures analyzed?

At replay time we look for the earliest point where the failing test diverges. A common example is when a function is called and finishes when the test passes, but does not finish when the test fails. There are two reasons why this could happen: either the function threw an exception or had a promise that did not resolve.

This simple case covers lots of scenarios. First, it's common for a function to throw when an API call returns a 400. It's also common for a function to have a promise that did not resolve because there was an API call that did not return. The visual below shows a case where

{% figure
  alt="Root cause visual"
  src="/images/root-cause-visual.png"
  height=238
  width=480
/%}

The beautiful thing is that at replay time, we can analyze anything observable without fear of slowing down the test. If we're not able to find the root cause, we also able to show downstream observable effects such as React components that rendered differently when the test failed.

This means that even if you don't have the earliest possible divergence, you still have a great place to start investigating and you are still able to categorize and prioritize test failures accordingly.

### Categorize 100% of test failures

Test failures often follow a power law where the top issues account for the majority of failures. This is powerful because it means that if you can typically fix a couple of issues, cut your test failure rate in half. And because end to end tests exercise the application, it's common that your users are experiencing the same issues that are causing your test to fail!

Our goal with Root Cause Analysis is to show you the top buckets which if fixed would address the majority of your test failures.

{% figure
  alt="Root cause dashboard"
  src="/images/Root-cause-dashboard.png"
  height=300
  width=480
/%}

{% callout title="Root Cause analysis waitlist"  %}

[Join our waitlist](https://replay.help/rca-waitlist) and let us know if you'd like to become a design partner and help us co-design Root Cause Analysis.

{%/callout%}
