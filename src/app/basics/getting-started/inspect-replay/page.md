---
title: Inspect your replay
description: Once your recording is uploaded, you can inspect it with Replay DevTools.
image: /images/recording_landing_page.png
---

{% steps %}

## View the timeline

By default, you're set to "Viewer" mode. You can change the view to "DevTools" mode either by pressing the toggle in the top-right corner or by selecting an "Event" and pressing "Jump to code"

## Jump to an event

Let's jump to the last "Click" before the recording hit an error and see the code related to it:

{% video src="devtoolsClickToEvent" /%}

## Inspect network calls

It looks like we're making a `"POST"` to an endpoint of `"/api/purchase"`. Let's open our network panel and see what the request looks like:

{% figure
alt="The network tab in the DevTools panel which shows a 400 error on the purchase"
src="/images/network_tab.png"
height=188
width=550
/%}

Selecting the `400` error in the network panel allows us to look at the request and response. Here, the response is indicating that `"Color is not found, recieved: undefined"` was the reply from our backend:

{% figure
alt="The request subtab on the network request panel showing the request body with \"{color: blue}\""
src="/images/response_body.png"
height=235
width=450
/%}

But looking at the request body, it looks like we're sending the color along just fine:

{% figure
alt="The request subtab on the network request panel showing the request body with \"{color: blue}\""
src="/images/request_body.png"
height=235
width=450
/%}

With this information, we can approach our backend team with a more informed report to solve this issue.

{% /steps %}
