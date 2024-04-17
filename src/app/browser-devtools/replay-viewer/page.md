---
title: Replay Viewer
description: Explore replays with video playback, session details, and visual comments
image: /images/viewer.png
---

## Basics

### Video timeline

Click the play button in the bottom right or press `space` at any point to play the replay as a video. Or simply scrub the playback head to jump to any point in time.

### Events timeline

View user interactions and page navigations in the Events timeline. Click to the row to jump to that point in time or click **Jump to Code** to jump to the JS event handler.

### Comments

Click in the video to add visual comments, `@` mention team members, and link to Linear and GitHub issues.

### Replay Info panel

The Replay info panel includes the url, author, date created, access control, and sensitive data. For more see Replay Info.

## Time Travel

### Jump to code

Typically when something goes wrong, a user interaction like a mouse click or key press occurs right before. The challenge is knowing which React component handled the event and kicked off a sequence of events. That’s why, clicking on the event’s **Jump to Code** button is often a good place to start.

## Learn more
Discover how to use the timeline to navigate to specific points in your code execution. Learn about the focus mode, which allows you to filter the console logs you view. Additionally, see how to jump to the next or previous execution of a specific line in your code. You can find the whole course at [replay.help/course](https://replay.help/course)

{% video src="timelineCourse" autoplay=false controls=true /%}