---
title: Chrome Recorder vs Replay
---
import { Callout } from 'nextra/components'

# Chrome Recorder vs Replay

Replay can be compared to Chrome’s Recorder, which lets you record and export user flows in Google Chrome. While both involve recording in a browser, the two tools serve very different use cases and provide different functionality. 

**TLDR;** Replay is used to understand the entire state of your application including each step in the execution of the code, Chrome Recorder is designed to record and measure user flows for testing.

In this post, we’ll break down how they’re different and when you’d use Replay vs. Chrome Recorder.

## What is Replay?

### Replay records the entire browser session

Replay is for recording everything happening in a particular **session** of the application. With Replay, we are recording **everything**, including the user events, network requests, the state of the application at every point in time, and what code was executing **during the recording**. This makes it particularly useful for reproducing issues and debugging.

### Replay is a debugger

Replay is a time-travel debugger that comes along with developer tools you’re familiar with from browsers and IDEs. While other debuggers require you to run your application again and again to debug, Replay provides all these tools in the **context of the recording**, so print statements can be added retroactively and you can inspect your application at any point in time from the session.

### Replay is shareable via URL

The output with Replay here is the shareable recording (called a replay) of the session that can be included on a support ticket, pull request, or anywhere else that context would be helpful. This replay serves as a single source of truth for collaborative debugging. You can add comments to the replay and store them in a team library for documentation of how bugs were reproduced and resolved.

### Replay records runtimes and automated tests

Chrome Recorder, as the name implies, is specific to the Chrome browser and records manual user flows. Replay has versions for Firefox and Chromium, and can be used to record automated tests in CI. There is also `[@replayio/node` for recording Node runtimes](https://www.npmjs.com/package/@replayio/node), no browser required.

## When to use each tool

This discussion came up on Twitter recently, and Addy Osmani from the Google Chrome team outlines the differences in this tweet.

[https://twitter.com/addyosmani/status/1499666878238654467?s=20&t=50-4lMUV23kepRpuqWYBPQ](https://twitter.com/addyosmani/status/1499666878238654467?s=20&t=50-4lMUV23kepRpuqWYBPQ)

## What is Chrome Recorder?

[Chrome Recorder](https://developer.chrome.com/docs/devtools/recorder/) is a preview feature in the Chrome browser designed to record, replay and measure user flows of an application. A user starts a new recording, executes the steps they’d like to record (such as clicking or typing in the app), then can export the recording as a Puppeteer script or JSON file.

Here, the important part being captured is the **sequence of events.** This is why you can edit them before exporting the script. The script itself contains instructions for the browser or Puppeteer to re-execute the steps the same way as recorded.

The use cases would be user flow validation for product, measuring how performant a user flow is, and generating automated test scripts from the manual steps.

## Conclusion

Ultimately, if you are more interested in the **user flow**, you can use Chrome Recorder. If you are more interested in the **application functionality** for validation or debugging, reach for Replay.

<Callout type="info" emoji="💡">
To start recording with Replay, [download the Replay Browser](https://replay.io) and check out our [Getting Started guide](/getting-started/recording-your-first-replay).
</Callout>