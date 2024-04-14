---
title: Replay Chrome
description: Replay Chrome is our chromium browser that is able to record and deterministically replay in the cloud.
image: /images/chrome.png
---

---

## Basics

### What version is it based off of?

Replay Chrome is built on top of chromium v108. The changes needed to implement the [Replay Driver](https://static.replay.io/driver/) api were fairly minimal.

The majority of the work was implementing the debugging API for pausing and formatting objects. The remainder was in capturing the essential nondeterminism. See our post on [How Replay Works](https://blog.replay.io/how-replay-works) and GitHub [repo](https://github.com/replayio/chromium).

### What limitations exist?

Replay Chrome is used to record some of the most ambitious web applications and significant web properties, so the short answer is that there are very few limitations.

The reason so much of the web is recordable with Replay is that we primarily record at the library call level where the browser is allocating memory, opening sockets, writing to files, … and at that level, it doesn’t really matter if the code making those calls is performing graphics or networking.

Some of the functionality you would not expect to work, but does natively is Web Workers, Canvas and Web Assembly. Some of the functionality that is not yet implemented is WebGL and Web Audio. If you find other features that are not yet implemented, reach out and we’ll add it to our roadmap.

### What is it’s recordihng overhead?

The first time you use Replay you’ll be shocked at how fast recording with Replay is. There are two reasons for this.

The first is that when Replay is recording it’s running in almost exactly the same way that it runs normally. Browsers are designed to be fast, so if you don’t change anything, they’ll continue to be fast.

The second reason is that intercepting the library calls, which is what’s primarily captured while recording is really fast. The overhead is about 3.5% which is significantly less than comparable observability tools like DataDog and Sentry.

Replay is already fast today, but even more exciting, there are still lots of opportunities for recording to be even faster. The biggest source of known overhead is in the Baseline JIT which is an important V8 optimization which we’ve intentionally disabled to simplify the problem. We plan on tackling it soon though.

We’ve also spent almost no time optimizing our recorder so when we do tackle it, we’re optimistic we’ll find more low hanging fruit as well.

### What platforms does Replay Chrome support?

Replay Chrome currently supports Linux x86, Mac x86, and Mac ARM. We have an experimental windows browser in the works, but it is currently paused so we can focus on core chromium improvements.

## Roadmap: Standalone browser

There will always be a headless browser which is great for recording in automation, and there are times where launching the browser from the CLI is convenient, but there’s no substitute for Replay being a standalone browser which you can use on a daily basis.

There are a couple of use cases here that we’re aiming for. The first is an **always on recorder **that you can use while QAing your application and press save to capture any issues that you see. The second is a **development browser** designed for debugging React applications.

There’s an obvious overlap between these two goals. An always on recorder with realtime replay has the ability to augment your existing live browser DevTools. In fact when we started, that was the workflow. You’d pause at a breakpoint, and step forward or backwards. More exciting though would be bringing our [Live Console Logs ](/time-travel-intro/add-console-logs-on-the-fly)and time travel enhanced React functionality back into browser DevTools.
