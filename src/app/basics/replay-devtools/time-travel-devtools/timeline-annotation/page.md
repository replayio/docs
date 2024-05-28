---
title: Annotate the timeline
---

When you’re investigating a difficult problem it’s easy to feel like either the crazy person who’s filled their wall with notes and red yarn or like you’re trying to remember the directions to a restaurant, but could easily forget one of the steps.

Put another way, debugging can feel overwhelming because we’re dealing with two unbounded dimensions: the complexity of the codebase and the timeline of events. And because browsers execute billions of operations a second, that timeline is no joke.

This is why at Replay comments or annotations are a first class citizen. Both so you can collaborate with others and so you can annotate the timeline and map out the sequence of events. When you leave a comment in Replay you are dropping a pin at a point in time, the trace, and relevant resource.

For instance, you can leave a comment on a line of code, at a specific point in time when that line was executed, a Console message was logged, a Cypress step was invoked, a Network request was kicked off, and many others.

And of course, comments can include markdown descriptions of what you’re seeing, you can at mention individuals on your team, and you can later jump to a comment and paused at that execution point.

{% video src="annotate" %}{% /video %}

In this way, comments become a way for journaling what you’re learning, the questions that you have, and mapping the path from the user visible issue back to the root cause.

## Features

### Comment on a line of code

By default comments in the code are not associated with a point in time, but if you leave a comment in the console log panel when you’re paused on that line, the comment will be associated with that specific execution point.

This helps you save the point in time so that you can come back later and inspect the application state. It’s also useful when you want to ask others to look as well.

### Comment on a console message

When you leave a comment on a console message you bookmark the message so that you can reference it later and inspect the application state at the point in time.

### Comment on a Network request

When you leave a comment on a Network request you bookmark the request so that you can reference it later, view the request and response body, request headers, and jump to where the fetch was kicked off.

### At mention team members

At mentions let you share what you’re looking at with team members and get their unique perspective. And because the comments are saved, they can context switch when they have a time to take a look.

### Add markdown notes

Comments support markdown syntax, so you can include code blocks, add emphasis to important findings, and drop in emojis to flag questions, findings, and important steps.

### Link to other replays

Drop links to other replay in a comment to reference important points of comparison with the built in replay url shortener.

### Include Looms to share what you’re seeing

When text comments are not enough to share what you’re seeing, it can be helpful to record a short loom of your debugging session and include the Loom in a comment with Replay’s built in video preview.

### Share urls

With sharable URLs and embed previews for Twitter, Slack, and Discord, replays are designed to be shared. The URLs will include the execution point you’re currently paused at and other relevant context as well.

{% callout title="Coming soon" showIcon=false %}
## Include expressions

Expressions will let you include expressions that you’ve evaluated at the comment’s execution point so that you can see their values at that point in time and see how they changed over the course of the recording.

## Linear and Jira integrations

Integrating with issue trackers will make it easy to create tickets from within the replay as you see specific bugs. It will also enable two way syncing so you always have the latest data at your finger tips.

## Comment embeds

Embeddable comments will let you take the conversation out of the replays and into Notion, Linear, and the Replay Test Suite Dashboard allowing the conversations that are already occurring to include the context that’s in the replay.
{% /callout %}