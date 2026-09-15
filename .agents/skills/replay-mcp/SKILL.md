---
name: replay-mcp
description: Use Replay MCP to inspect the contents of https://replay.io recordings.
allowed-tools: Bash(replayio:*), mcp__replay
---

# Overview

This document provides an overview of the tools available when using Replay MCP
and how to use these tools to investigate recordings.

Replay MCP is used to inspect the contents of https://replay.io recordings.
These recordings perfectly capture everything that happened when a browser
visited an app or other web page. You can explore and investigate the app's behavior
as if you are a detective with a time machine.

Any question about how the app behaved can be answered precisely using data from the
recording. The most important thing to remember when using Replay MCP to investigate
a recording is to not jump to conclusions:

1. Frame your task in the form of a question that you need to answer.
1. Use exploratory tools to identify things that happened in the recording related
   to the question.
1. Use explanatory tools to understand why those things happened.
1. Form a hypothesis and identify data you gathered which justifies that hypothesis.
1. Explain the answer referring to the data supporting your conclusion.

Always call RecordingOverview first. It summarizes test results, errors, environment,
network activity, and React render performance, and suggests where to look next. The
first call on a recording that has not been analyzed before can take several minutes;
use a long timeout.

Most tools take a `mode` parameter. Start with `summary`, then use the detail modes
the summary points you to. Tools that return events also return execution points,
which the explanatory tools accept as input.

## Terms

The recording is essentially a gigantic database containing everything that happened
while the app executed. A couple terms are useful for understanding this database:

- Point: A specific point in the execution of the app. There is a unique point created
  for every time a JS statement executes or any other interesting event with potential
  side effects on the app's state.

- Element: A reference for a particular DOM element that is independent of any particular point.
  Each DOM element has a lifetime for some portion of the recording.

# Exploratory Tools

Exploratory tools are used to discover what happened in the recording and when.

## Overview

- RecordingOverview: Summarizes the whole recording and suggests next steps. Call first.

## Errors

Error tools identify major errors that occurred in the app which may cause it to break.
Console errors are not exceptions; use ConsoleMessages for those.

- UncaughtException: An exception was thrown and not caught by anything.
- ReactException: An exception was thrown while rendering a React component, causing the tree to unmount.

## Timeline

Timeline tools describe sequences of events for what happened across the recording.

- ConsoleMessages: Console output. `summary` then `messages`.
- UserInteractions: Clicks and key presses. `summary` then `interactions`.
- NetworkRequest: Network requests. `summary` then `requests`; detail by request index or id.
- LocalStorage: Accesses to local storage. `summary` then `operations`.
- Screenshot: List screenshot timestamps, or fetch the screenshot at one timestamp.
- Annotations: Timestamped records from the runtime and integrations (Playwright, Cypress,
  React DevTools, network, localStorage). Call with no arguments to list kinds.
- PlaywrightSteps: Steps of a Playwright test recording. `summary`, `steps` (use `failedOnly`),
  `step-detail`, `test-source`.

## Sources

Source tools get information about the JS sources in the app and what code executed.
When showing source code in these and other tools, hit counts are shown for each line.
A blank value is used for lines that have no breakpoints.

- ListSources: Find source files by glob.
- ReadSource: Read the contents of a source and show what code executed.
- SearchSources: Search the contents of all sources for a pattern and show what code executed.
  Playwright test runner code runs in Node and is not in the recording; use PlaywrightSteps.

## React and state

These tools require a React application in the recording.

- ReactComponentTree: The mounted component tree at a point. `summary`, `tree`, `subtree`.
- ReactRenders: Render analysis. `summary`, `waste-rank`, `commits`, `commit`, `trigger-detail`,
  `component`, `fiber`, `commit-fibers`, `fiber-cause`.
- ReactPerformanceInsights: Runs every deterministic React performance check and returns
  prioritized findings. Start here for a performance question.
- GetPointComponent: The component being rendered at a point.
- ReduxActions: Redux and Redux Toolkit dispatches. Use `state-shape` first, then `actions`,
  `action-detail`, `impact`, and `action-state` with a `path` such as `auth.user`.
- ZustandStores: Zustand stores. `summary`, `store-events`, `store-state`.
- TanStackQueries: TanStack Query cache events. `summary`, `query-events`, `query-timeline`, `query-state`.

## Profiling

Profiling tools take begin and end points to focus on a range.

- ProfileStatements: Statement hits per function, as a flat profile and call tree.
- ProfileGraph: Execution attributed to React renders and effects.
- ExecutionDelay: Per-function delays within one source file.
- ProfileSampling: Samples the replay engine itself, not the app. Rarely needed.

# Explanatory Tools

Explanatory tools are used to understand why particular things happened in the recording.

## Dependencies

Dependency tools track happens-before relationships between events in the recording.
This is useful to understand why particular events happened or didn't happen.

- GetStack: Show the stack frames at a point.
- DescribePoint with `dependencyChain=true`: Trace the causal chain from a point back to the
  event that started it (a click, a network response, a dispatch).
- ReactRenders `trigger-detail`: The chain that triggered a specific React commit.

## Details

Detail tools show additional details about the app's state at particular points.

- DescribePoint: Describe a point's location and variable values.
- InspectElement: Describe a DOM element's details. Expensive; prefer ReactComponentTree for structure.
- Logpoint: Show the points and values of an expression every time a statement executed.
- Evaluate: Evaluate a synchronous expression at a particular point. Promises cannot be inspected.
- GetPointLink: An app.replay.io link a person can open at this point.

# Tips

When understanding JS behavior it is a good idea to find code relevant to the question being answered,
see whether that code executed at all, and get details about the times when it executed.
The Logpoint tool is extremely useful for this: see the value of the same expression whenever a
statement executed, look for anything unexpected, and continue investigating from there.

When understanding the timing around a particular event (e.g. why it happened later than desired),
find a point in the recording associated with the event and use DescribePoint with
`dependencyChain=true` to explore the events that had to happen first and any associated delays.

When the question is about React performance, call ReactPerformanceInsights, then follow its
findings into ReactRenders: `waste-rank`, then `component`, then `commit-fibers`, then `fiber-cause`.

When the question is about state, learn the shape first (ReduxActions `state-shape`,
ZustandStores `summary`, TanStackQueries `summary`), then inspect state at the event nearest
the symptom rather than dumping whole state trees.
