---
title: Replay Driver
description: The Replay Driver is a dynamically linked library which can be loaded by applications which want to record their behavior and upload those replay for inspection using the Replay Protocol.
image: /images/chrome.png
---

## Overview

In order to use the driver, the target application first loads the driver into memory via `dlopen` and use `dlsym` to look up the various methods described below. The target first calls `RecordReplayAttach`, and finishes the recording with `RecordReplayFinishRecording` . Between calls to these methods, the other methods below can be used to interact with the driver.

Attach the driver to the current process and begin recording its behavior. `dispatch` is the address of the protocol web socket server to upload the recording to (e.g. `wss://dispatch.replay.io`), and `buildId` is a string that uniquely identifies the platform and version of the target that is running. This must be called very early in process startup, before other interaction with the underlying platform. `dispatch` may be null, in which case the recording will be saved to disk if `RecordReplaySaveRecording` is called.

[Replay Driver docs](https://static.replay.io/driver)
