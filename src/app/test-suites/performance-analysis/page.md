---
title: Performance Analysis
description: Performance Analysis detects regressions that slow down page loads and user interactions that impact core web vitals and make the user experience worse.
image: /images/performance-regression-analysis.png
badge: experimental
---

{% callout  %}
Performance Analysis in in active development. [Join the waitlist](https://replay.help/perf-waitlist) and be the first in line when it's available.
{%/callout%}

## Overview

Frontend performance is one of the thorniest problems for engineers. Even if you track core web vitals in production such as Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) it can be difficult to track a specific change back to the change that caused it.

The gold standard is to be able to detect changes in CI that will either slow down page loads, introduce new content layout shifts (jank), or make interactions less responsive. To do this however you have to stop looking at how long things take and start looking at what’s required for something to complete.

This is where Performance Analysis comes in. At replay time, we’re able to compare the current and prior test run, and see if the current run has introduced new work on the critical path that will slow down page loads or user interactions.

{% figure
  alt="Limiting path"
  src="/images/limiting-path-line.svg"
  height=200
  width=480
  showRadius=false
/%}

## How are slow paths detected?

Performance Analysis works by transforming the application’s execution into a [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG) that includes the call graph, async boundaries such as network events, Promise.resolve, async/await, setTimeout, and React component lifecycle events such as component mounts, renders, and effect calls.

Once the DAG is computed, it’s possible to find the critical paths that govern page loads and user interactions and impact metrics such as LCP, INP, and CLS. Once these paths are identified, it’s possible to do two things: compare these paths against the prior run to find performance regressions, and detect new limiting paths that extend the critical path and cause it to take longer to complete.

If you'd like additional context on how paths are computed, checkout our blog post on [Limiting Paths in React applications](https://blog.replay.io/performance-limiting-paths-in-react-applications).

### Regression

In the visual below, Performance Analysis alerted us to a network request that we added inside of an effect call inside of our `App` component that blocked rendering the rest of the applications!

{% figure
  alt="Limiting path"
  src="/images/limiting-path.png"
  height=238
  width=480
/%}

**Catching this issue prevented us from slowing down Replay DevTools’s initial page load by ~300ms and would have been nearly impossible to detect before.**
