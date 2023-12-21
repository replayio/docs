---
title: Replay Node (Experimental)
---
# Replay Node (Experimental)

For recording Node processes, Replay provides the [@replayio/node](https://github.com/replayio/replay-cli/tree/main/packages/node) npm package which can be used to execute and record a script.

### Getting setup

```bash
npm i @replayio/node --global

replay-node script-name.js
REPLAY_API_KEY=YOUR-KEY npx @replayio/replay view-latest
```

Note: This will prompt you to install `@replayio/replay` if you haven’t already!

### Example

Lets say you want to record `loop.js`

```jsx
for (let i = 0; i < 5; i++) {
   console.log(`Hello ${i}`)
}
```

You'd first create the replay with `replay-node` and then upload it with `@replayio/replay`:

```bash
replay-node loop.js
REPLAY_API_KEY=YOUR-KEY npx @replayio/replay view-latest
```

And once it's uploaded you'd be able to view it at [app.replay.io](https://app.replay.io)

![Replay-Node-(Experimental)](/images/replay-node.png)

## TypeScript

If you want to record a `ts-node` invocation, invoke `replay-node` like so

```bash
replay-node --exec ts-node ...
```

### Upgrading Node

Replay's fork of Node is in active development and it is recommended that you update it fairly regularly.

```bash
replay-node --update
```

### Upgrading the CLI

If the CLI is installed locally, you can run `npm i @replayio/replay@latest{:bash}`. If the CLI is installed globally, you can run `npm update -g @replayio/replay{:bash}` .
