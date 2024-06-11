---
title: Recording strategies
description: Depending on what problem you’re trying to solve, there are two primary ways of using Replay.
---

## Record failures on PRs

This is useful for debugging failing tests in pull requests. It only records failing tests so there’s minimal overhead, and those replays will be available for debugging immediately after tests finish.

Run your tests and pass the mode `record-on-retry` .

{% tabs labels=["npm", "yarn", "pnpm"] %}
{% tab %}

```sh
npx @replayio/cypress run --mode record-on-retry
```

{% /tab %}
{% tab %}

```sh
yarn @replayio/cypress run --mode record-on-retry
```

{% /tab %}
{% tab %}

```sh
pnpx @replayio/cypress run --mode record-on-retry
```

{% /tab %}
{% /tabs %}

## Record all on merge to master

This is useful for busting flakes. It only records failing tests so there’s minimal overhead, and those replays will be available for debugging immediately after tests finish.

Run your tests as usual, but set the trigger to only run on merge to master.

{% callout type="link" title="Upload strategies" href="/reference/ci-workflows/upload-strategies" %}
You have the flexibility to choose not only when to record but also when to upload your recordings. For details on various uploading strategies, [see the documentation](/reference/ci-workflows/upload-strategies).
{% /callout %}
