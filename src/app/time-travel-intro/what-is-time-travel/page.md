---
title: What is time travel?
---

Time travel debugging is the simple idea that you should be able to go backwards or forwards in time when debugging an issue. This is a much quicker and more helpful way to debug compared to the traditional way, which doesn’t let you go backwards. Because of this limitation, most developers debug by adjusting some code, reloading the app, checking the logs, and repeating the loop. With time travel debugging, you can go forwards or backwards through your code’s execution, adding console logs on the fly. It’s a simple idea with huge implications.

Using Replay is designed to feel familiar, like Chrome DevTools and VS Code. But it’s the time travel element that can feel a bit weird and uncomfortable at first. But once you understand how to wield its time traveling powers, it’s hard to go back to the old way of debugging. Check out the nav to learn more, starting with Adding console messages on the fly.

## A brief history

This concept is not new. In the 1960s, researchers like Lamport and Clapp demonstrated that it was possible to record and deterministicly replay the runtime after the fact. In the early 2000s, researchers like Lewis, Shapiro, and Sagiv showed that it was possible to efficiently query execution state in the same way.

In the early 2010s, Mozilla was the first to build a production grade recorder for C++ which made fixing some of the most difficult graphics and JS bugs possible. At that point, the question became, if we could record and replay the browser, could we bring time travel debugging to the web?

Replay started off as an R&D project inside of Mozilla called WebReplay in 2015 and we spun it out of Mozilla in the summer of 2020. We knew we had something valuable when six months later some of the top open source developers were using Replay to fix some of the most difficult bugs in React, Redux, and other popular open source libraries. It didn’t matter if Replay crashed every five minutes, and was as slower than a dial-up modem, the ability to slow down and study a problem with Replay, was so great that some problems simply necessitated time travel.

Today Replay is used today in many of the top Open Source projects such as NextJS and Typescript. It’s hard to work on a web app and not use a tool that’s better because of Replay. Replay also is far faster. You can record in real time and forget it’s on and Replay DevTools is as responsive as Chrome DevTools.

With our recent move from Firefox to Chrome, you can use Replay as your development browser to capture the perfect bug report, and to record and replay your browser tests. It turns out that flaky test failures are timing issues and time travel debugging is perfect for understanding them.

## The mission

We believe software development should feel magical, but too often falls short. Especially when debugging, and especially when you’re feeling stuck and you can’t figure out why your code isn’t working right. Replay restores that feeling of magic by making it easier to understand how software works and by making debugging faster and more collaborative.
