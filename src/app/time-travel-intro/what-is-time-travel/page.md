---
title: What is time travel?
---

Time travel debugging is not a new idea. In fact it’s one of the oldest. Ever since the first bugs were created, folks have been trying to figure out how to record and replay them, so they can capture them once, put them under the microscope, and figure out how they occurred.

The reason why debugging a bug is 2X harder than writing the software in the first place is that, bugs can come from anywhere, and fixing them requires tracing the sequence of events backwards from where something is obviously wrong to the root cause.

If you’re debugging a bug with browser DevTools and Console logs, you have two problems. The first one is obvious. When you’re inspecting the bug with browser DevTools, there’s no way to go backwards without refreshing and redoing your steps. The second is that every time you add console logs in your code, you need to replicate the bug again, in order to see the messages in the Console.

{% figure
    alt="Adding console logs"
    src="/images/add-console-log.png"
    gradient="bg-gradient-to-tr from-blue-200 via-fuchsia-300 to-orange-400"
    showRadius=false
    height=10
    width=800
/%}

This is where time travel comes in. When you’re in Replay DevTools, you’re able to add console logs in your code and “automagically” see the messages appear in the Console. And when you want to go forwards or backwards to a new point in time, all you have to do is click the “jump” button and you’re immediately brought there.

{% figure
    alt="Viewing console logs"
    src="/images/console-logs.png"
    showRadius=false
    height=10
    width=640
/%}

Time travel is one of those radical ideas which sounds simple when you first hear them, but then take awhile to sink in. The first time you’re in Replay DevTools, the UI will look familiar to Chrome DevTools and VS Code, but time travel will feel weird and uncomfortable. That’s okay. Give it five minutes and you’ll become a time traveler for life.

## History of time travel

In the 1960s, researchers like Lamport and Clapp demonstrated that it was possible to record and deterministicly replay the runtime after the fact. In the early 2000s, researchers like Lewis, Shapiro, and Sagiv showed that it was possible to effiently query execution state after the fact.

In the early 2010s, Mozilla was the first to build a production grade recorder for C++ which made fixing some of the most difficult graphics and JS bugs possible. At that point, the question became, if we could record and replay the browser, could we bring time travel debugging to the web?

Replay started off as an R&D project inside of Mozilla called WebReplay in 2015 and we spun it out of Mozilla in the summer of 2020. We knew we had something valuable when six months later some of the top open source developers were using Replay to fix some of the most difficult bugs in React, Redux, and other popular open source libraries. It didn’t matter if Replay crashed every five minutes, and was as slower than a dial-up modem, the ability to slow down and study a problem with Replay, was so great that some problems simply necessitated time travel.

{% figure
    alt="Sebastian testimonial"
    src="/images/callout.png"
    showRadius=false
    height=10
    width=640
/%}

Today Replay is used today in many of the top Open Source projects such as NextJS and Typescript. It’s hard to work on a web app and not use a tool that’s better because of Replay. Replay also is far faster. You can record in real time and forget it’s on and Replay DevTools is as responsive as Chrome DevTools.

With our recent move from Firefox to Chrome, you can use Replay as your development browser to capture the perfect bug report, and to record and replay your browser tests. It turns out that flaky test failures are timing issues and time travel debugging is perfect for understanding them. You’ll laugh the first time you fix a flaky test and then try to imagine how you would have done it before!

## The mission of Time Travel

Software development should feel magical, but when you’re stuck and feeling alone it does not. Replay restores that feeling of magic by making it easier to see and understand how software works and by making debugging faster and collaborative.
