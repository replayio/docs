---
title: Jumping
---
import Video from '@components/Video'
import jumpToLineYdsnd from '/videos/jump-to-line_ydsnd.mp4'
import jumpToCypressEventSlvih from '/videos/jump-to-cypress-event_slvih.mp4'
import jumpToConsoleMessageVuzcc from '/videos/jump-to-console-message_vuzcc.mp4'
import jumpToRequestOopaa from '/videos/jump-to-request_oopaa.mp4'

# Jumping

Traditional debuggers let you pause and debug your application at a single point in time. With time travel debuggers, you can pause your application at any point in time. 

The key is being able to easily jump to the most interesting points in time.

### Jump to line

- Hold down `command` and click on ▶️  to jump to the next time the line was called.
- Hold down `shift-command` and click on ◀️  to jump to the previous time the line was called.

<Video src={jumpToLineYdsnd} />

### Jump to Cypress event

Hover on a Cypress action and click on **Jump to code** to seek to your application’s onClick or onKeypress event handler.

<Video src={jumpToCypressEventSlvih} />

### Jump to console message

Hover on a console message and click on **Jump to code** to seek to where the message was emitted.

<Video src={jumpToConsoleMessageVuzcc} />

### Jump to request

Hover on a network XHR event and click on **Jump to code** to seek to where the request originated.

<Video src={jumpToRequestOopaa} />