---
title: Intro to time travel
---
Time travel debugging is a radical approach for inspecting your application, exploring how it works, seeing and understanding it in new ways.

Replay DevTools looks similar to VS Code and Chrome DevTools, but once you start time traveling, you’ll quickly realize it’s a new way to think about your software and collaboratively debug the hardest problems with your team.

[](https://basehub.earth/beca19b9/6hINVebd69XohfCIUX6vp/marketing-hero.mp4)

## Design Principles

### **Debugging should be fast and predictable**

Have you ever felt like your going in circles? You add a console.log, refresh, rerun and the issue looks a little bit different?

With Replay, you can add a console.log in Replay DevTools and the messages will appear immediately in the console immediately as if they were always there.

If you’ve ever developed with Hot Module Reloading and have made a change in your code and seen it immediately reflected in your app, this is what debugging with live console logs feels like in your app.

### **Debugging is all about being at the right time and place.**

The two reasons why debugging can be difficult are that issues can come from anywhere and you need to work backwards from where the issue first became visible to the underlying cause that triggered it.

This is where time travel shines. For the first time you can jump forward and backwards in time and be paused at that line of code. Never has it been easier to

### **Debugging should be a team sport**

Because traditionally everybody has to figure out how to replicate the issue, just to see it and understand, hunting down problems too often is left to a single developer.

In contrast, because everyone on the team can open the replay with Browser DevTools, share their relevant context, and solve the riddle together.

### **Debugging is a data visualization problem.**

Have you ever felt like the crazy person with the wall of red thread, trying to connect the dots between when functions are called and data is instantiated, mutated, and destroyed?

With Replay DevTools, we want to help visualize the sequence of events so that it’s easier to see how one event lead to another.

## Benefits of Time Travel

### Deeper understanding

**Fewer bandaids**

One of the fastest ways to increase the tech debt of a codebase is to ship bandaids and workarounds. We hope Replay helps you better understand your software and address the issue at the source.

**Fewer re-writes**

They say legacy software is software that you either did not write or you wrote so long ago that you do not remember. We hope that Replay will help you better understand the legacy software in your application well enough to either avoid risky re-writes or build confidence that the new solution handles the relevant cases.

**Fewer guesses and rollbacks**

One of the best ways to lose credibility as a team and lose confidence in the codebase is to ship a fix only to learn later that either the user is still having the issue or the fix caused new problems to occur. We hope that Replay will help you better understand your application, so you can be more confident that the changes you’re making will have the intended behavior.

### More collaboration

**Better conversations**

We’re all discussing how our application and code works every day. Shouldn’t these conversations occur in the context of how the system actually works? Our goal for Replay is to make it easier to discuss why a button has an invalid state or why that same button shows the loading spinner three seconds too long.

These are all conversations that could occur in Slack, Jira, or Loom, but they’re better when you can comment on the React component, Network request, or DOM element.

**More context sharing**

We’ve all had the experience of being new to a codebase or being the person who has all of the context and is fielding questions every day about how it works.

With Replay, we want to make it easier for folks to ask you questions about why a function was called when it was or with the arguments that it received. And we want to make it easier for you to share the relevant context when you have time to look into it without having to switch context the moment you were asked.

### A better thinking tool

**More zen. More flow state.**

By removing the context switching and noise associated with editing your code, refreshing, and reproducing, Replay lets you slow down, achieve a flow state, and meditate on the problem.

**More questions. More hypothesis.**

Studies show that most bugs are fixed once three hypothesis are generated. The problem is that most folks get stuck on one hypothesis.

We’ve designed Replay around the goal of making it easier to ask questions and generate new hypothesis. After you get comfortable with the UI, you’ll find that it’s much easier to explore your application and testing your hypothesis.

**A tool for bisecting problems**

Debugging is all about honing in on the point when something went wrong. You start with a wide window of where the problem could have been introduced and slowly narrow it down to a specific point in time.

Because bisecting is so common, we’ve designed the workflow around it called the Focus Window which lets you see only the execution that occurred in this slice of time. This is incredibly useful for seeing with functions were called in the window and ruling out functions which were not.

***
