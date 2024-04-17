---
title: Elements panel
description: Visually debug element styles and layout issues.
image: /images/elements_panel.png
---

## Basics

**Select elements with the element picker**

The element picker helps you find the DOM element that corresponds with where your mouse is on the screen.

**Inspect applied rules, computed properties**

The right sidebar helps you view an element’s current styles and layout properties. The rules panel lists the selectors in order of precedence with links to the original css files included in the source maps.

**Search for elements with advanced and simple mode**

The element search panel lets you find elements in the markup tree by either their XPath selector or any other attribute or inner text value.

By default, search is set to simple, but you can search by XPath by toggling the badge to the right.

{% figure
  alt="Elements panel search"
  src="/images/elements-panel-search.png"
  width=800
  height=300
/%}

**View element event listeners**

A useful way to see which JS functions could be called is to navigate to the element’s event listener’s panel and jump to where the relevant function is defined.

**Jump to React component**

When React Dev is enabled (typically in local development), you get a panel in the bottom right that shows the element’s parent component.

## Learn more
Watch this video to explore the Elements panel in action. You'll learn how to inspect elements and their properties, including CSS rules, layout properties, computed properties, and event listeners. You can find the whole course at [replay.help/course](https://replay.help/course)

{% video src="elementsPanelCourse" autoplay=false controls=true /%}