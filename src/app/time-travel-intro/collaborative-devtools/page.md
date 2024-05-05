---
title: Collaborative devtools
---

The best part of software development is that it's a team sport that allows you to work on your own schedule. It's so good that we take it for granted, and forget that there was ever a time when you couldn't open a PR and ask for a review.

One of our goals is to bring this workflow to debugging. The reason why it's difficult to collaborate on a difficult problem today is that for someone to help you, they first have to see the problem you're looking at which means stopping what they're doing and getting on a Zoom call or trying to reproduce the problem you're investigating.

Replay makes it possible to asynchronously collaborate on a bug because when you're viewing a replay, there's a browser deterministically replaying the bug in the cloud. This means that when you're investigating a difficult problem inside of a Redux thunk, you can drop a comment, at mention a team member, and they can take a look when they're available.

When they open the replay, they can jump to the same point in the execution you were looking at and inspect the local state as if they were pairing with you initially.

{% video src="addingAComment" /%}



## Basics

### Shareable URLs

Sharing a replay is as easy as copying the URL and sharing it with your team. If you want to invite an outside collaborator, you can open the Share modal and invite them as well.

### Comment in the video

Click in the video player to start a draft comment.

### Comment on a line of code

There are two ways to leave a comment on a line of code. The first is to right click and select "Add comment". The second is to add a console log and click "Add comment" and leave a comment at the current execution point.

### Comment on a Console message

If you'd like to leave a comment on a specific console message, you can hover on the message, click "Fast forward" or "Rewind", and then click "Add comment". 

### Comment on a Network resource

If you'd like to comment on a specific Network resource, you can select it and then click "Add comment" in the top right of the resource details pane.

### Leave video comments

If you'd like to share the steps you've taken while investigating the bug, you can use Loom to record a quick video, and drop the Loom URL into a comment.



## Time travel



### Shared console logs

If you'd like to see the Console logs that another team member has added, you can go to the Pause panel, and re-enable their console logs.
