---
title: Replay Node
description: Replay Node is our alpha NodeJS runtime that is able to record and deterministically replay scripts in the cloud.
image: /images/Node.png
---

## Basics

When we started Replay, our goal was to make replayable runtimes a reality not just in the browser, but also in backends like NodeJS.
Replay Node is currently in an alpha state and built on top of v16. With that said, folks use it today to debug programs as intense as the TypeScript compiler, so if you have a difficult NodeJS bug, feel free to give it a try.

---

{% steps %}

## Install Replay Node

Install the [Replay Node](https://www.npmjs.com/package/@replayio/node) package globally:

```sh
npm i @replayio/node --global
```

## Record your script

Use `replay-node` in the same way that you would use `node` to run your script:

```sh
replay-node <script>
```

## Upload your replay

Upload your recordings with the [Replay CLI](/replay-cli/commands):

```sh
replayio upload
```

## View your replay

The CLI will upload your replays and provide you with a link to view them.

```sh
The following recording(s) will be uploaded:
 8a5ab266…  test.js    Now  31.0ms  Recorded

Uploaded recordings
 ✔  8a5ab266…  test.js  Now  31.0ms  (uploaded)

View recording at:
https://app.replay.io/recording/8a5ab266-96ec-47d5-a56a-2b49fa2b999b
```

{% /steps %}
