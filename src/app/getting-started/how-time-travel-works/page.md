---
title: How Time Travel Works
---
Replay is a time travel debugger. Unlike a conventional debugger, which can only show a program’s state at the current point in time, a time travel debugger can show that program’s state at all points in time. Recording changes to this state to reconstruct it later doesn’t work well. JavaScript can change the state millions or even billions of times while viewing a page, and the browser will slow down hugely if these changes are recorded directly.

Instead, the Replay browser records the inputs it gets from the system – network data, user events like mouse clicks, and so on – and non-determinism resulting from interactions between threads. There isn’t very much of this and it can be recorded with little overhead. When replaying, the same browser runs and uses that recorded data to ensure it behaves in the exact same way as it did when recording. The state at any point in time can be reconstructed simply by replaying the browser to that point.

The main benefit of using Replay is that recording a bug or any other problem on a website is enough for a developer looking at the recording to fully understand the bug and what is needed to fix it. The developer has a perfect reproduction of the bug, as if it happened on their own machine. This enables many improvements to productivity and the overall effectiveness of a software development organization.

[How Replay Works](https://blog.replay.io/how-replay-works)

## How does Time Travel DevTools compare to Browser DevTools?

Browser DevTools like Chrome are limited by what you can see in real time. You can inspect the current DOM and React component tree. You can pause at a line of code and step forward. To some extent, you can see a timeline of what happened in the past, but you cannot rewind. And of course, you cannot see what will happen in the future because it has not happened yet!

In contrast, with time travel enabled browser DevTools you can see how your application changed across time. You can inspect the DOM and React component tree at any point in time. You can pause at a line of code and step forwards or backwards. You can even add a `console.log` on a line of code and see the messages in the Console as if it was always there. 

Time travel comes to life when you begin designing DevTools with time travel in mind. Want to know which React component handled a click event? With Replay, you can simply jump from the click event into the `onClick` handler. Want to know which prop, hook, or state triggered a recent render? With Replay, the React panel now highlights the changed properties. 

## How does Runtime Replay compare to Session Replay?

Today, there are many Session Replay tools like Cypress Replay, Playwright Trace Viewer, Jam.dev, and FullStory, that use RRWeb and similar JS Libraries. These tools are able to record a video of the session and serialize Network Requests and Console logs. 

These tools are useful for seeing how folks are using your application in production and recording simple bug reports and failing tests. These tools are not a substitue for debugging your application with Chrome DevTools and print statements.

In contrast, Runtime Replay starts with a runtime that’s able to efficiently record the necessary events needed to replay the session deterministically. The biggest downside is that you cannot simply install a JS library or browser extension, you need to install a new browser. But once you’ve installed the Replay browser and recorded your first replay, you can share it with anyone on your team, and they can inspect it as if they were sitting next to you. 

And because they can do anything in Replay DevTools that they could do in Chrome DevTools, they could even find a line of code, add a `console.log` and see all of the messages in the Console. And unlike viewing Console logs that were captured with Session Replay tools like Playwright Trace Viewer that serialize all objects to `[Object]` . With Replay, you can expand the objects and inspect their properties. 

<!--  todo: add links to resources -->
<!-- **Resources**

- [Playwright Trace Viewer vs Replay DevTools ](https://www.notion.so/Playwright-Trace-Viewer-vs-Replay-DevTools-450f28af20104f0185a05b89a8038bd0?pvs=21)
- [Cypress Test Replay vs Replay DevTools](https://www.notion.so/Cypress-Test-Replay-vs-Replay-DevTools-bec69fb247df479c8c3d4af59f35c060?pvs=21) -->