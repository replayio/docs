---
title: Network monitor
description: Inspect requests with the Network monitor.
image: /images/net-monitor.png
---

## Viewing the resource list

### Filter by request type

To filter by requests by type, click on the FilterButton on the top left and select the types you’d like to see. For example. Fetch, Image, WebSocket, Javascript.

### Filter by path

To filter the requests shown in the list, focus on search input on the top of the panel and enter the path you’re looking for.

### Jump to fetch

The Jump button helps you seek to the point in time where the fetch was initiated and inspect the local state.

## Inspecting resource details

1.  **Headers** Shows HTTP headers and general information about the resource such as status code.
2.  **Request** Shows the request body.
3.  **Response** Shows the response body.
4.  **Stack trace** Shows the stack trace associated with the request which is useful for jumping to the relevant source code.
5.  **Timings** Shows the timing information which is useful for understanding the waterfall.

## Coming soon

### **Search requests**

The search panel will help you search for resources by request and response body.

### **GraphQL panel**

The GraphQL panel will help you inspect GraphQL requests, mutations.
