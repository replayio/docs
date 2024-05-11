---
title: Why time travel?
description: Web applications are growing increasingly ambitious and their reliability and performance has never been more important. Traditional browser DevTools and debugging techniques are insufficient. Here are just a few of the problems with legacy approaches and how time travel debugging address them.
---

## Perfect reproducibility

Problems in complex web applications often depend on particular network, timing, and ephemeral state. The same steps performed in the same environment, under seemingly similar conditions, might **never** reproduce the problem, because not all of the contributing factors are known or controllable.

Replay is the first deterministic browser, so all bugs recorded with Replay are **reproducible**, no matter how complex or rare they are. This means your engineers **don’t have to spend days** trying to reproduce a flaky test or rare customer support issue.

[Learn more](/replay-devtools/overview)

## Debugging is fast and predictable

Diagnosing and fixing bugs hard-to-reproduce bugs in complex web applications often feels more like a **guessing game** than the scientific method. When you add a console log, refresh, and re-run, there’s no guarantee you’ll reproduce the problem.

Replay lets you debug your application with **perfect reproducibility**. When you add a console log, the messages “automagically” appear in the Console as if they’ve always been there. This makes it easy to find the root cause, and fix the hardest issues at the source.

[Learn more](/time-travel-intro/add-console-logs-on-the-fly)

## Root causes are addressed at the source

Even when a bug has been diagnosed and a fix applied, it can be **difficult to verify** whether the fix has really eliminated the bug. This increases the likelihood of rollbacks and future regressions.

Time travel provides an environment where it’s easier to ask questions, generate new hypotheses and test your assumptions. When you’re able to see the **sequence of events that lead to the issue**, you’re able to write more confident code and build a more resilient and maintainable system.

[Learn more](/time-travel-intro/annotate-the-timeline)

## End-to-end tests pass 99.9% of the time

Despite end-to-end tests being the best way to verify whether a change is safe to land, few teams are able to afford to maintain a test suite because any change can introduce a timing issue **that can take weeks to fix**.

With Replay you can debug a flaky test as if it is **failing consistently on your laptop.** This makes it easy to hone in on the root cause, address the problem at the source, and maintain a healthy suite that passes **more than 90% of the time**.

[Learn more](/test-runners/overview)

## Debug the hardest issues as a team

Because traditionally everybody has to **figure out how to replicate an issue**, just to be able to see it and understand it, investigating difficult issues has fallen on a single developer, required inefficient Zoom calls, and expensive context switching.

When anyone can view the replay on **their own schedule**, investigate the problem, and share their perspective, debugging begins to feel like the **team sport** it should be. And as Linus Torvalds famously said, “with enough eye balls, all bugs are shallow”.

[Learn more](/browser-devtools/replay-viewer)
