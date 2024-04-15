---
title: Record Your First Replay
description: Our goal is for recording a replay to be as easy recording a video. Today, you launch the Replay browser from the command line replayio record. This is just a stop gap solution until we’re able to release the Replay browser as a standalone development browser.
---

{% steps %}

## Install Replay CLI

To download and install Replay CLI, run the following command:

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}

```sh
npm i -g replayio
```

{% /tab %}
{% tab %}

```sh
yarn i -g replayio
```

{% /tab %}
{% tab %}

```sh
pnpm i -g replayio
```

{% /tab %}
{% tab %}

```sh
bun i -g replayio
```

{% /tab %}
{% /tabs %}

## Start recording

Run the following command to open Replay Browser and start recording your application. Replay Browser will record everything and create a replay which you will be able to view in the next step.

```sh
replayio record
```

{% callout showIcon=false title=""%}
You will be prompted to log into Replay with your default browser the first time you use Replay CLI.

{% /callout%}

{% video src="recordCli" /%}

## Upload your replay

Once you close the Replay browser, your recoding is ready to be uploaded and you’ll be prompted in the CLI to confirm the upload.

```sh
New recording found. Would you like to upload it? (Y/n)
```

If you decide to upload your recording later, you’ll be able to access it via `replayio list` command. Read more in [Replay CLI command docs](/replay-cli/commands).

## View your replay

Once the upload is completed, CLI will give you the replay url where you can go start debugging.

```sh
Uploading recordings...
a616009e.. overboard.dev Now 7.5s (uploaded)

View recording at:
https://app.replay.io/recording/a616009e-b825-4c54-83b4-e20bd8c0cb25
```

{% /steps %}

{% quick-links title="Read more" description="Learn how to manage your recordings, debug your app using Replay DevTools and more" %}

{% quick-link
  title="Manage your recordings"
  icon="console"
  href="/replay-cli/commands"
  description="Learn how to upload, remove and view your recordings using CLI"
/%}

{% quick-link
  title="Replay DevTools"
  icon="jumptocode"
  href="/test-runners/overview"
  description="Learn how to use Replay DevTools to debug your tests."
/%}

{% quick-link
  title="Setting up a team"
  icon="settingupateam"
  href="/replay-teams/setting-up-a-team"
  description="Learn how to create a team in the Replay App"
/%}

{% quick-link
  title="Test Suite Management"
  icon="treeview"
  href="/test-suites/runs-view"
  description="Test Suite Dashboard helps you stay on top of your test suite health."
/%}

{% /quick-links %}
