---
title: Time travel debugging
nextjs:
  metadata:
    title: Time travel debugging
    description: Quidem magni aut exercitationem maxime rerum eos.
---



Traditional debugging environments let you pause and debug your application at a single point in time. When you'e time travel debugging, you can pause your application at any point in time. 

The key is being able to easily jump to the most interesting points in time.

## Jump to line

Hold down `command` or `shift-command` and click on the ▶️  or ◀️  button to jump forward to the next time the line was executed or backward to the previous time the line was executed.

{% video src="jumpToLine" /%}


## Jump to Cypress event

Hover on a Cypress action and click on **Jump to code** to seek to your application’s onClick or onKeypress event handler.

{% video src="jumpToCypress" /%}


## Jump to console message

Hover on a console message and click on **Jump to code** to seek to where the message was emitted.


{% video src="jumpToConsoleMessage" /%}


## Jump to request

Hover on a network XHR event and click on **Jump to code** to seek to where the request originated.

{% video src="jumpToRequest" /%}
