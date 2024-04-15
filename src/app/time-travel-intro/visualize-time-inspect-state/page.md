---
title: Visualize time. Inspect state.
---

When it comes to debugging, the oldest debate is whether it’s better to debug with breakpoints or console logs. Breakpoints help you inspect your application’s state at a single point in time. Console logs help you visualize application state across time.

At Replay, our perspective is why choose? This is why we start with Live Console logs that let you add logs with a single click. And the second feature we added was the jump button which lets you jump to any console log and inspect your application state.

Ultimately, the thing that makes time travel debugging special is that **Live Console Logs** help you rapidly visualize changes in your application and **Jump to Code** helps you seek to the perfect place and time and explore critical state.

When put together, there’s been an environment that helps you slow down, build a mental model for how your application works, connect the dots, and understand the chain of events.

{% video src="visualize" %}{% /video %}

## Features

### Jump to a Console message

Jump to any Console message’s execution point, inspect the application state at that point in time, and evaluate expressions in the terminal.

### Jump to Cypress or Playwright test step

Jump from the test’s mouse click or keypress into your React component’s event handler and inspect the application state at that point in time.

### Jump to a Redux dispatch

Jump to any Redux action’s dispatch and inspect the application state inside of the thunk that kicked it off.

### Jump to Network requests

Jump to any Network requests fetch call and inspect the application stat inside the function that initiated the fetch.

### **Hover on expressions**

Hover on expressions in the source viewer to see live values and inspect the properties.

### **Inspect object properties**

One of the oldest bugs in Chrome DevTools is inspecting object properties inside of Console messages. You’d expect to see the values as they were then, but because Chrome cannot serialize the values, you get the values as they are now.

With time travel, we’re able to show you the values at each point in time, which helps you have confidence that the data you’re looking at is correct.

### **See which props triggered a render**

When you view Component props, state, and hooks in the React panel, you’ll see the values which triggered the last render. This is one of those useful features that you didn’t realize you were missing until you have.

### **Scrub through function execution**

When you’re paused inside of a complicated function with many branches and loops, you can use the Frame Timeline to scrub through the execution and see the path the program took through the function.
