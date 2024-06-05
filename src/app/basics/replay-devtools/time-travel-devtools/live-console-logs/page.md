---
title: Add console logs on the fly
---

It doesn’t matter if you just wrote your first “hello world” or you’re a staff engineer, when you’re trying to understand how something works, you’re probably adding console logs, refreshing, and re-running your program in a loop.

Our goal with Replay is to design the best environment for helping you think through a problem, ask and answer questions, test your hypotheses, and ultimately reach a state a flow while debugging.

This starts with the feedback loop you can achieve adding console logs in Replay. Simply click on a line of code, add an expression, press enter, and see the messages appear in the Console as if it’s always been there.

Under the hood, this works because when you add a console log in Replay, there’s a browser in the cloud that runs through the replay, pauses at each execution point, evaluates the expression, and resumes. But as a user, all you have to think about is what questions you’d like to answer.

{% video src="consoleLogs" /%}

## Overview

### Click to add a console log

Hover on a line of code and click to add a console log. With built in autocomplete intellisense and syntax checking, Replay’s live console log editor is the fastest way to add, edit, and inspect messages in the Console.

### Jump to message

In addition to being able to evaluate the expression at each point in time, Replay also also lets you jump to each message and inspect the application state at that point in time.

### Prefix messages with badges

Tired of looking at a wall of console logs? Console log badges make it easy to see patterns in the logs, spot anomalies.

### Comment on messages

Comment on console messages to leave breadcrumbs at important points in time. Comments will appear on the and point back to the line of code and execution point they were left so you can visualize the sequence of events.

### Filter messages by a condition

Focus on the console messages that matter with conditional expressions which are evaluated at each point.
