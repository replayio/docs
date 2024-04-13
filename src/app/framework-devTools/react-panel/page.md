---
title: React panel
---
**Inspect React components at any point in time.**

{% figure alt="Elements panel" src="/images/react.png" height=870 width=870/%}

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

Because we’re able to collect more information at while replaying the recording, we’re able to stop showing the hook index and start showing the hook value and function definition.

### Mapped component names

Because we’re not concerned about the performance overhead of processing sourcemaps while replaying, we’re able to source map component names so you’re able to see the original names.

##
