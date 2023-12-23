---
title: Network
description: ''
---


# Network

The **Network Monitor** gives you insight to the network activity taking place during your replay. Understanding the requests and responses interacting with your application is helpful for identifying a variety of common issues, including:

- Failed network requests
- Incorrect or unexpected requests
- Incorrect or unexpected responses
- Requests executing too early or too late
- Improper handling of async network activity

Replay’s Network Monitor lets you view resource details, request and response bodies, and even request stack traces.

![[Climatescape replay](https://app.replay.io/recording/b4634ffa-1904-4343-87a3-649a9ebcecab?point=7788445288484938147141165896434119&time=3599&hasFrames=true)](/images/Untitled_xxapx.png)

[Climatescape replay](https://app.replay.io/recording/b4634ffa-1904-4343-87a3-649a9ebcecab?point=7788445288484938147141165896434119&time=3599&hasFrames=true)

## Viewing network activity

View network activity by selecting the **Network** tab in the **Console panel.**

The Network table shows resources broken down by type in the following order:

1. CSS
2. Fetch/XHR
3. Font
4. HTML
5. Image
6. JavaScript
7. Manifest
8. Media
9. WASM
10. Websocket
11. Other

The table shows the resource response status, name, method, type, and domain. Like in the console, a red line indicates the current point in time when paused in a replay. All network requests after the current point in time are dimmed to indicate they have not yet occurred.

![Screen Shot 2022-01-12 at 1.49.57 PM.png](/images/Screen_Shot_2022-01-12_at_1.49.57_PM_uurie.png)

::callout{icon="i-heroicons-light-bulb"}
**Why can’t I time travel to this request?**
::

### Unloaded network requests

When a replay is initially loading or a part of it has been unloaded, some network request details may not be available. These are dimmed and will not be clickable during this loading state. You can still fast-forward and rewind to these requests, but will not be able to view headers, or request/response bodies until that section of the recording is loaded (or re-loaded in the case of an unloaded section).

![Screen Shot 2022-04-27 at 10.39.05 AM.png](/images/Screen_Shot_2022-04-27_at_10.39.05_AM_xilwl.png)

::callout{icon="i-heroicons-light-bulb"}
In the graphic above, the middle section of requests is slightly dimmed, because those requests happened later in the recording than the “present” (the red bar). The bottom section of requests also happened later, but they are in a section of the recording which is not currently loaded.
::

## Inspecting a resource's details

Click on a resource in the table to inspect the resource details. 

Resource details are broken down by section: 

- General
- Request Headers
- Response Headers

![Untitled](/images/Untitled-1_hjlxm.png)

### Inspecting request bodies

The **Request** tab shows the request body. The tab will not appear if there is no request body for the resource.

![Untitled](/images/Untitled-2_ndnjv.png)

### Inspecting response bodies

The **Response** tab shows response bodies if one was received.

The response body is previewed as JSON when available. Otherwise it is shown as a raw value.

Click the arrows to expand values within the response body.

![Untitled](/images/Untitled-3_dhkyq.png)

::callout{icon="i-heroicons-light-bulb"}
**Why doesn’t Replay capture some response bodies?**
::

::callout{icon="i-heroicons-light-bulb"}
❓ **Why does this response body need to be downloaded?**
::

### Inspecting stack traces

The **Stack Trace** tab shows where the request initiated in the application code.

Click on any row in the stack trace to open that line of code in the **Editor**. (The Editor must be open before clicking.)

![Untitled](/images/Untitled-4_jpntl.png)

### Inspecting timings

The **Timings panel** shows the time in the replay the request was initiated and when the response returned. The response timing is when the response first returns from the server, and does not include time transferring the response body.

The **Time waiting for response** is the difference between the request initiation time and the first-byte response time.

::callout{icon="i-heroicons-light-bulb"}
Timings are relative to the replay and are a best effort representation of when events happen related to network requests. Some responses requiring additional processing or decoding may affect the precision of the timing calculations.
::

![timingspanel.png](/images/timingspanel_npqba.png)

### Commenting on network requests

Click in to any network request to add a comment to that specific request. Once added, clicking on the comment will open the request in the Network Monitor.

![Network request comment](/images/network-request-comment_rjzit.png)