---
title: Recording strategies
description: Depending on what problem you’re trying to solve, there are two primary ways of using Replay.
---

## Record on PRs

This is useful for debugging failing tests in pull requests. It records tests and those replays will be available for debugging immediately after tests finish.

## Record all on merge to master

Run your tests as usual, but set the trigger to only run on merge to master.

{% callout type="link" title="Upload strategies" href="/reference/ci-workflows/upload-strategies" %}
You have the flexibility to choose when to upload your recordings. For details on various uploading strategies, [see the documentation](/reference/ci-workflows/upload-strategies).
{% /callout %}
