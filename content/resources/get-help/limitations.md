---
title: Limitations
---
import { Callout } from 'nextra/components'

# Limitations

# Recording limitations

Thee are currently a handful of web platform limitations such as WebGL, WebRTC, etc... The limitations are tracked in GitHub for each runtime. Here is the list of [gecko-dev](https://github.com/replayio/gecko-dev/issues?q=is%3Aissue+is%3Aopen+label%3Alimitation+) limitations.

## Recording length

We recommend limiting Replay recordings to 2 minutes in length — the shorter, the better. We are working on increasing the length of time Replay can record continuously and maintain performance.

## Recording applications with WebGL

Replay currently does not support recording applications with WebGL, and may experience errors. You can follow [the GitHub issue here](https://github.com/replayio/gecko-dev/issues/58) for updates.

## Recording multi-window application

Recording applications which use multiple windows is partially supported. When viewing a replay of a multi-window application, only graphics from one window will be shown, but you can still debug the code that executing in all windows.

## Recording over recursion

Replay currently has an upper bound on the stack depth which means that some recursive functions will cause Replay to crash.

## Recording browser crashes or infinite loops

Issues with a web application that would cause any other browser to crash, such as fatal errors or infinite loops, will also cause Replay to crash.

# Debugging limitations

There are some known limitations with Replay when debugging applications that have certain criteria. The functionality of the replay will adjust for these situations to prevent crashes and unexpected behavior.

## Line with 500+ hits

![focusmode.png](/images/focusmode_cqskw.png)

<Callout type="info" emoji="💡">
We recommend enabling [Focus Mode](/reference-guide/viewer) to narrow down the number of hits.

</Callout>

**Breakpoint panel** behavior changes:

- The points will no longer be visualized in the main timeline as the user hovers on the line.
- The points will no longer be displayed in the corresponding breakpoint widget's timeline.
- Adding a print statement to a line will no longer print those statements in the console.
- Editing will be disabled because there are no log messages displayed.
- Clicking on the Jump To Previous and Jump To Next buttons will still function correctly.
- A point will be displayed on the breakpoint widget if the user is currently paused on one of those hits. In that case, we display a single paused point for that widget.

## 1,000+ native console messages

![Untitled](/images/Untitled_ismla.png)

**Console** behavior changes:

- The console will truncate the displayed native (i.e. non-replay) messages and as a result, will not display console messages accurately.
- The console will still update correctly to show new print statements as the user adds Replay print statements.

## Pause point top frame with 5,000+ steps

![Untitled](/images/Untitled%201_inikz.png)

- While the user is paused at that point, resume/step navigation commands and the frame timeline will be disabled.
