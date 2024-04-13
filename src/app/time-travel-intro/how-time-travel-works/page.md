---
title: How Time Travel works
---

The most common question we get is “how is [Replay.io](https://replay.io/) different from Session Replay?” At a high level, Session Replay tools replay the DOM and Replay.io replays the runtime so that you can inspect the session with browser DevTools after the fact.

This post walks through what it means to replay the runtime. If you’d like to go deeper on how it works, checkout this [post](https://replay.help/how-replay-works). If you’d like to better understand the implications, checkout the [replayability roadmap](https://replay.help/replayability-roadmap).

**What is Runtime Replay?**

Runtime Replay refers to the act of recording the underlying runtime such that you can replay it later exactly as it ran before.

When the browser is replaying, it should think it is running live for the first time and should have all of the same semantics. Functions should be called at the same time. Promises should be resolved in the same order. Network requests should be made at the same time and returned at the same time. If anything user visible happens in a different order, you have failed.

Replaying your browser is similar to writing a good test. If you’re testing a deterministic function like `fibonacci`, there’s nothing you need to do. Every time the test is run, it will return the same value.

{% figure alt="Elements panel" src="/images/fib-1.png" height=870 width=870/%}
.
{% figure alt="Elements panel" src="/images/fib-2.png" height=870 width=870/%}

If we change fibonacci slightly so that it doesn’t take `n`, but instead reads it from a file, we’ll need to mock `readFileSync` so that when the test runs, it always returns the same value.

{% figure alt="Elements panel" src="/images/fib-3.png" height=870 width=870/%}
.
{% figure alt="Elements panel" src="/images/fib-4.png" height=870 width=870/%}

Recording a runtime like Chrome is fairly similar in theory to recording our non-deterministic fibonacci function. The one caveat is that instead of writing a test function that mocks a single non-deterministic function, we need to write a little bit of inline assembly code that can intercept low level OS library calls and replaying them later.

{% figure alt="Elements panel" src="/images/asm-1.png" height=870 width=870/%}

Once we’re able to intercept calls, and we know their signatures, the remaining task is to enumerate all of the calls that the runtime will make.

{% figure alt="Elements panel" src="/images/asm-2.png" height=870 width=870/%}

This approach might sound crazy, and in many ways it is, but there’s an elegance to it in that the libc level is fairly stable and well defined. Also it turns out that intercepting libc calls is incredibly cheap.

The overhead in practice is 3% and recordings are tiny compared to traces. A typical [Replay.io](https://replay.io/) recording is less than a Mb a second where as computers execute billions of options a second and traces are measured in GBs.

###
