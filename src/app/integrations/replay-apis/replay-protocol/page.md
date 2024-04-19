---
title: Replay Protocol
description: The Replay Protocol is useful for creating programmatic debugging sessions.

image: /images/protocol.png
---

## [Replay Protocol](https://replay.io/protocol)

- [Authentication. ](https://static.replay.io/protocol/tot/Authentication)The Authentication domain defines a command for authenticating the current user.

- [Console. ](https://static.replay.io/protocol/tot/Console)The Console domain defines methods for accessing messages reported to the console.

- [CSS. ](https://static.replay.io/protocol/tot/CSS)The CSS domain is used to inspect the CSS state at particular execution points.

- [Debugger. ](https://static.replay.io/protocol/tot/Debugger)The Debugger domain defines methods for accessing sources in the recording and navigating around the recording using breakpoints, stepping, and so forth.

- [DOM. ](https://static.replay.io/protocol/tot/DOM)The DOM domain is used to inspect the DOM at particular execution points.

- [Graphics. ](https://static.replay.io/protocol/tot/Graphics)The Graphics domain defines methods for accessing a recording's graphics data.

- [Network. ](https://static.replay.io/protocol/tot/Network)The Network domain is used to inspect the Network state at particular execution points.

- [Pause. ](https://static.replay.io/protocol/tot/Pause)The Pause domain is used to inspect the state of the program when it is paused at particular execution points.

- [Recording. ](https://static.replay.io/protocol/tot/Recording)The Recording domain defines methods for managing recordings.

- [Session. ](https://static.replay.io/protocol/tot/Session)The Session domain defines methods for using recording sessions.

- [Target. ](https://static.replay.io/protocol/tot/Target)The Target domain includes commands that are sent by the Record Replay Driver to the target application which it is attached to.

- [Internal. ](https://static.replay.io/protocol/tot/Internal)The Internal domain is for use in software that is used to create recordings and for internal/diagnostic use cases.

## Protocol examples

```js
import { createSession } from "./create-session";

import { RequestInfo, RequestEventInfo } from "@replayio/protocol";

function fetchNetworkResponseBody(recordingId: string) {
  return createSession({ apiKey, recordingId }, async (client, { sessionId }) => {

    const requests: RequestInfo[] = [];
    const events: RequestEventInfo[] = [];

    async function fetchRequests() {
      client.addEventListener("Network.requests", resp => {
        requests.push(...resp.requests);
        events.push(...resp.events);
      });

      await client.sendCommand("Network.findRequests", {}, sessionId);
    }


    await fetchRequests();
  });
}
```
