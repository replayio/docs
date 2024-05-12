---
title: Performance Regression analysis
description: Performance Regression analysis detects newly added limiting paths that slow down page loads and user interactions and make the user experience and core web vitals worse.
image: /images/performance-regression-analysis.png
---

## Overview

Frontend application performance is one of the most difficult problems to solve. And once your application is performant, ensuring that it remains performant is equally difficult. Even if you track core web vitals in production such as LCP, CLP, and INP it can be difficult to track a specific change back to a regression.

The gold standard is to be able to detect changes in CI that will either slow down page loads, introduce new content layout shifts (jank), or make interactions less responsive. To do this however you have to stop looking at how long things take and start looking at what’s required for something to complete.

This is where Replay Performance Regression analysis comes in. At replay time, we’re able to compare the current and prior test run, and see if the current run has introduced new work on the critical path that will slow down page loads or user interactions.

## How are slow paths detected?

Performance Regression analysis works by transforming the application’s execution into a DAG that includes the call graph, async boundaries such as network events, Promise.resolve, async/await, setTimeout, and React component lifecycle events such as component mounts, renders, and effect calls.

Once the DAG is computed, it’s possible to find the critical paths that govern page loads and user interactions and impact metrics such as LCP, INP, and CLS. Once these paths are identified, it’s possible to do two things: compare these paths against the prior run to find performance regressions, and detect new limiting paths that extend the critical path and cause it to take longer to complete.

If you'd like additional context on how paths are computed, checkout our blog post on [Limiting Paths in React applications](https://blog.replay.io/performance-limiting-paths-in-react-applications).

In the visual below, Performance Regression analysis alerted us to a network request that we added inside of an effect call inside of our `App` component that blocked rendering the rest of the applications!

{% figure
  alt="Limiting path"
  src="/images/limiting-path.png"
  height=238
  width=480
/%}

Catching this issue prevented us from slowing down Replay DevTools’s initial page load by ~300ms and would have been nearly impossible to detect before. Sure you can set up an alert for new network requests, but network requests can be added at any point and are not necessarily a problem. The only time you want to be notified is when a network request is blocking a critical operation, but without the ability to analyze your application after the fact, that’s impossible to do.

Like many other things we do, Replay Performance Regression analysis is one of those obvious ideas that was prohibitively difficult before replayability. Applications are too complex to be analyzed in realtime. Even page loads can include hundreds of thousands of React operations that need to be compiled and analyzed. This is fine to do at replay time, but impossible to do at run time.

{% callout title="Performance Regression analysis waitlist"  %}

[Join our waitlist](https://replay.help/perf-waitlist) and let us know if you'd like to become a design partner and help us co-design Performance Regression analysis.

{%/callout%}
