---
title: What is time travel?
---

The most common question we get is “how is time travel (or Runtime Replay) different from Session Replay?” At a high level, Session Replay tools replay the DOM and Runtime Replay tools re-run the runtime so that you can inspect the session with browser DevTools. That's a lot to unpack. Lets dive in!

## How Runtime Replay works?

Runtime Replay refers to the act of recording the underlying runtime such that you can replay it later exactly as it ran before.

When the browser is replaying, it should think it is running live for the first time and should have all of the same semantics. Functions should be called at the same time. Promises should be resolved in the same order. Network requests should be made at the same time and returned at the same time. If anything user visible happens in a different order, you have failed.

Replaying your browser is similar to writing a good test. If you’re testing a deterministic function like `fibonacci`, there’s nothing you need to do. Every time the test is run, it will return the same value.

```javascript
describe('fibonacci', () => {
  it('can calculate fibonacci(10)', () => {
    expect(fibonacci(10)).toBe(55)
  })
})
```

```javascript
function fibonacci(n) {
  if (n <= 1) return n

  let prev = 0,
    current = 1
  for (let i = 2; i <= n; i++) {
    let next = prev + current
    prev = current
    current = next
  }
  return current
}
```

If we change fibonacci slightly so that it doesn’t take `n`, but instead reads it from a file, we’ll need to mock `readFileSync` so that when the test runs, it always returns the same value.

```javascript
describe('fibonacci', () => {
  it('can calculate fibonacci(10)', () => {
    fs.readFileSync.mockReturnValue('10')
    expect(fibonacci()).toEqual(55)
  })
})
```

```javascript
function fibonacci() {
  const data = fs.readFileSync('input.txt', 'utf8')
  const n = parseInt(data, 10)

  if (n <= 1) return n

  let prev = 0,
    current = 1
  for (let i = 2; i <= n; i++) {
    let next = prev + current
    prev = current
    current = next
  }
  return current
}
```

Recording a runtime like Chrome is fairly similar in theory to recording our non-deterministic fibonacci function. The one caveat is that instead of writing a test function that mocks a single non-deterministic function, we need to write a little bit of inline assembly code that can intercept low level OS library calls and replaying them later.

```asm
extern size_t
RecordReplayRedirectCall(...);

__asm(
    "_RecordReplayRedirectCall:"

    // Save the system call's original function and arguments
    "movq %rdi, 0(%rsp);"
    "movq rsi, 8(%rsp);"
    "movq %rdx, 16(%rsp);"
    "movq %rcx, 24(%rsp);"
    "movq %r8, 32(%rsp);"
    "movq %r9, 40(rsp);"
    "movsd %xmm0, 48(%rsp);"
    "movsd %xmm1, 56(%rsp);"
    "movsd %xmm2, 64(%rsp);"

    // Call our real Intercept function
    "call RecordReplayInterceptCall;"
)
```

Once we’re able to intercept calls, and we know their signatures, the remaining task is to enumerate all of the calls that the runtime will make.

```asm
// Specify every function that is being redirected. MACRO is invoked with the
// function's name, followed by any hooks associated with the redirection for
// saving its output or adding a preamble.
#define FOR_EACH_REDIRECTION(MACRO)
    MACRO(mmap, nullptr, Preamble_mmap)                            \
    MACRO(munmap, nullptr, Preamble_munmap)                        \
    MACRO(read, SaveRvalHadErrorNegative<WriteBufferViaRval<1, 2>>) \
    MACRO(open, SaveRvalHadErrorNegative)                       \
```

This approach might sound crazy, and in many ways it is, but there’s an elegance to it in that the libc level is fairly stable and well defined. Also it turns out that intercepting libc calls is incredibly cheap.

**Additional reading**

- [How Replay works](https://blog.replay.io/how-replay-works)
- [Recording and replaying](https://blog.replay.io/recording-and-replaying)
- [Effective determinism](https://blog.replay.io/effective-determinism)

## Recording overhead

It’s counter intuitive, but recording the runtime’s essential non-determinism is actually very light weight. There are three reasons for that.

The first is that, 99.99% of compute is deterministic. There actually isn’t that many calls to the OS that need to be captured. On average, it’s about a Mb per second, which is nothing when you consider that computers execute billions of operations a second and traces are measured in GBs.

The second reason is that the inline assembly needed to intercept the libc calls is highly optimized and only introduces about 3% of overhead. This is nothing when you consider that most instrumentation approaches introduce 10% or more overhead.

The third reason is that everything you see in Replay DevTools is computed at replay time and not record time. A great example is that is the video which is created the first time we replay the recording and can often be larger than the recording itself!

## Replay protocol

Being able to deterministically replay the runtime is necessary, but not sufficient for being able to inspect the application with browser devTools. This is where the Replay protocol comes in.

There are several domains that are important for evaluating expressions, inspecting DOM elements, and viewing Console messages. Fortunately, they all bubble up to three core commands: run to execution point, pause at point, and evaluate expression.

**When you add a console log on a line of code three things happen:**

1. The client looks up the **hit points** for that line of code which was computed the first time the recording was replayed.
2. The client issues a `runEvaluation` command with the executions points and expression which triggers the backend to replay to these points and execute the eval.
3. The backend formats the console message previews and sends them back to the client. Funny enough, the code needed to format JS values represents a significant portion of the code we added to Chromium.

{% figure
    alt="Adding a console log"
    src="/images/console log.png"
    showRadius=false
    height=870
    width=870
/%}

The beautiful thing about this approach is that the browser behaves the same way at replay time as run time. This allows the vast majority of the work needed to inspect Network requests, DOM elements, to just work. Put another way, the one difficult problem is teaching the browser how to replay. Once you solve that one nearly impossible problem, everything else “just works”.

**Additional reading**

- [Inspecting runtimes](https://blog.replay.io/inspecting-runtimes)

## Replay performance

One of the things you’ll notice when you open a replay, is that adding a console log is really fast. In fact, a good analogy is Hot Module Reloading where when you edit your code, your application immediately updates, without you having to refresh and re-run. Console logs in Replay work a similar way, you add the log, and the messages appear in the Console in under a second.

But, how is it so fast? The short answer is that we cheat. One of the fundamental laws of time travel, is that you cannot re-execute a program faster than you initially executed it. If the recording is 60s of compute, then it will take approximately 60s to replay, but console logs will still return in under a second! How?

The answer is that when you’re inspecting a replay, you’re not interacting with a single browser process running the cloud, you’re interacting with potentially hundreds. We’ve invented two mechanisms which make this possible. The first is the ability to fork a browser process. The second is the ability to snapshot a browser process.

{% figure
    alt="Time travel protocol performance"
    src="/images/time-travel-perf.png"
    height=870
    width=870
/%}

These two mechanisms make it possible to efficiently keep a pool of browser processes available during the lifetime of the debugging session and efficiently restore them the next time. This means that when you add the console log, we’re able to find the closest browser processes, fork them, run to the relevant points, and evaluate the expression. And because all of the work is done in parallel, and there’s never a point more than 100ms away from a browser process, we’re able to return the results in low logarithmic time.

**Additional reading**

- [How to build a time machine](https://blog.replay.io/how-to-build-a-time-machine)
- [Performance analysis preview](https://www.notion.so/Performance-analysis-preview-e3b53d574f52429f99c17dc9af11bc46?pvs=21)

## Replay analysis

At Replay, we focus on Time Travel Debugging because it addresses the problem of reproducibility, but deterministic replay has broader applications.

The best way to think about it is that there are two branches of computer science: static analysis and dynamic analysis. For the past fifty years, we’ve primarily leveraged static analysis to build better compilers, linters, and type safety, but dynamic data and control flow analysis is potentially more powerful and has largely been ignored because it is too difficult to productionize.

This is where replayability comes in. With the ability to deterministically replay the runtime, you can now perform general purpose dynamic analysis at scale. On one level, adding a console log is the simple control flow analysis you can do, but anything a human can do, can also be done programmatically on top of the Replay protocol.

We’ve started with two types of regression analyses. Root cause compares a passing and failing recording and looks for the earliest divergence in the application that explains why the test failed. Performance regression analysis builds a dependency graph of all of the actions that must occur for an event like a Page Load to occur and then identifies newly added limiting paths that will slow down the event.

Similar to how we collect the data for Replay devtools the first time we replay the recording, the data collected for these analyses and the algorithms used to identify the regressions would be prohibitively slow at runtime and are only possible at replay time. And of course, once a regression is found, it’s great to be able to jump into the replay and gather additional context.

**Additional reading**

- [How we built React DevTools on top of routines](https://blog.replay.io/how-we-rebuilt-react-devtools-with-replay-routines)
- [Replayability roadmap](https://blog.replay.io/the-replayability-roadmap)
- [Replay testing](https://www.notion.so/Replay-Testing-but-for-browsers-31ab1eca88b3429380ea616cba02f59a?pvs=21)
