---
title: How Time Travel works
---

The most common question we get is “how is [Replay.io](https://replay.io/) different from Session Replay?” At a high level, Session Replay tools replay the DOM and Replay.io replays the runtime so that you can inspect the session with browser DevTools after the fact.

This post walks through what it means to replay the runtime. If you’d like to go deeper on how it works, checkout this [post](https://replay.help/how-replay-works). If you’d like to better understand the implications, checkout the [replayability roadmap](https://replay.help/replayability-roadmap).

**What is Runtime Replay?**

Runtime Replay refers to the act of recording the underlying runtime such that you can replay it later exactly as it ran before.

When the browser is replaying, it should think it is running live for the first time and should have all of the same semantics. Functions should be called at the same time. Promises should be resolved in the same order. Network requests should be made at the same time and returned at the same time. If anything user visible happens in a different order, you have failed.

Replaying your browser is similar to writing a good test. If you’re testing a deterministic function like `fibonacci`, there’s nothing you need to do. Every time the test is run, it will return the same value.

```javascript
describe('fibonacci', () => {
  it('can calculate fibonacci(10)', () => {
    expect(fibonacci(10)).toBe(55);
  });
});
```

```javascript
function fibonacci(n) {
    if (n <= 1) return n;

    let prev = 0, current = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}
```

If we change fibonacci slightly so that it doesn’t take `n`, but instead reads it from a file, we’ll need to mock `readFileSync` so that when the test runs, it always returns the same value.

```javascript
describe("fibonacci", () => {
    it("can calculate fibonacci(10)", () => {
        fs.readFileSync.mockReturnValue('10');
        expect(fibonacci()). toEqual(55)
    })
})
```

```javascript
function fibonacci( ) {
    const data = fs.readFileSync('input.txt', 'utf8');
    const n = parseInt(data, 10);

    if (n <= 1) return n;

    let prev = 0, current = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return current;
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

The overhead in practice is 3% and recordings are tiny compared to traces. A typical [Replay.io](https://replay.io/) recording is less than a Mb a second where as computers execute billions of options a second and traces are measured in GBs.
