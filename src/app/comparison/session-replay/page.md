---
title: How Runtime Replay compares with Session Replay
---
There are many Session Replay tools like Cypress Replay, Playwright Trace Viewer, Jam.dev, and FullStory that use RRWeb and similar JS Libraries. These tools are able to record a video of the session and serialize Network Requests and Console logs.

These tools are useful for seeing how folks are using your application in production and recording simple bug reports and failing tests. These tools are not a substitue for debugging your application with Chrome DevTools and print statements.

In contrast, Runtime Replay starts with a runtime that’s able to efficiently record the necessary events needed to replay the session deterministically. The biggest downside is that you cannot simply install a JS library or browser extension, you need to install a new browser. But once you’ve installed the Replay browser and recorded your first replay, you can share it with anyone on your team, and they can inspect it as if they were sitting next to you.

And because they can do anything in Replay DevTools that they could do in Chrome DevTools, they could even find a line of code, add a `console.log` and see all of the messages in the Console. And unlike viewing Console logs that were captured with Session Replay tools like Playwright Trace Viewer that serialize all objects to `[Object]` . With Replay, you can expand the objects and inspect their properties.
