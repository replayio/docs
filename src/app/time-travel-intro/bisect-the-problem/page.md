---
title: Bisect the problem
---

One of the best ways to solve a difficult problem without breaking a sweat is to turn it into a bisection problem. This typically works by finding a commit in git which you know is good, a commit which you know is bad, finding the first commit that has the problem, and then cutting it down until, you have the smallest changeset which reproduces the problem.

The challenge is that very few debugging problems can be turned into bisection problems. There are a couple of reasons for this. First every time you run the program, you’ll get slightly different results, so it’s difficult to bisect reliably. Second, it’s very difficult to confidently compare two points in time across runs and confidently reduce the search window.

This is where time travel debugging comes in. With Replay, you don’t have to worry about reproducibility across runs, it’s easy to compare two points in time, and iteratively narrow your search window until you find the root cause.

Let’s take a simple example where a button is put into a disabled state because it receives invalid data. With Replay, you can quickly see that the component which rendered the button was rendered 20 times and that the button became disabled on the 15th render. From there, you can set the start of the focus window at the 14th render, the end at the 15th render, and narrow your search window to the small slice in time. And from there, all of the console logs that you add will only show messages from inside the window and of course, you can continue narrowing the window until you find the specific function call which corrupted the data.

{% video src="bisect" %}{% /video %}

## Features

**Set the focus window from the timeline**

The timeline focus window lets you visually set the window based on what you see in the video player.

**Set the focus window from the Console**

The Console focus window options let you anchor the start and end of the window to a given console message

**Set the focus window from the Events timeline**

The Events timeline focus window options let you anchor the start and end of the window to a user action.

**Set the focus window from the Cypress and Playwright timeline**

When you open a Cypress or Playwright test, you’ll automatically get a focus window bounded to the specific test function. From there you can use the options in the Cypress and Playwright timeline to further focus the window down to the set of actions you care about.
