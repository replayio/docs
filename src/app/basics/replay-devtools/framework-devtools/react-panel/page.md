---
title: React panel
image: /images/react.png
imageHeight: 433
description: Inspect React components at any point in time.
---

## Basics

Replay’s React panel is similar to the React DevTools browser extension, but includes functionality only possible with time travel.

### Select component picker

Select components with the component picker.

### Inspect the component tree

Explore the current component tree with higher ordered components highlighted on the right.

### Search for components

Press `cmd+f` or select the search input to find components within the component tree.

### Inspect Props + State

Inspect component props, state, and hook values with built in object formatting and jump to function definition.

### Jump to definition

Click the Jump button in the top right to go to where the component is defined.

## Time Travel

### View changed props and state

Because we’re able to compare the current component’s render with the prior, we are able to highlight the props, state, and hook values that have changed in yellow.

### View hook values

Because we’re able to collect more information at while replaying the replay, we’re able to stop showing the hook index and start showing the hook value and function definition.

### Mapped component names

Because we’re not concerned about the performance overhead of processing sourcemaps while replaying, we’re able to source map component names so you’re able to see the original names.

## Learn more

Learn how to use the React panel to examine hooks and properties, and observe how they change over time. This tutorial will also teach you how to navigate from the React panel to the specific element that it rendered. You can find the whole course at [replay.help/course](https://replay.help/course)

{% video src="reactPanelCourse" autoplay=false /%}
