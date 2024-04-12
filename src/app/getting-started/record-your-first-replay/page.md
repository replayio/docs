---
title: Record Your First Replay
description: Our goal is for recording a replay to be as easy recording a video. Today, you launch the Replay browser from the command line replayio record. This is just a stop gap solution until we’re able to release the Replay browser as a standalone development browser.
---

{% steps %}

## Start recording

Run the following command to launch the Replay browser and start recording your application.

```sh
npx replayio record
```

{% callout showIcon=false title=""%}
You will be prompted to log into Replay with your default browser the first time you use Replay CLI.

{% /callout%}

## View your replay

The CLI will upload replays in the background and give you a url every time you close a tab.

```sh
View replay of localhost:3000
https://app.replay.io/recording/5d663446-d855-44c5-934-2ff20eaff9e2
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
  href="#"
  description="Learn how to use Replay DevTools to debug your tests."
/%}

{% quick-link
  title="Record Your CI Test Run"
  icon="build"
  href="#"
  description="Learn how to integrate Replay into your Continuous integration service"
/%}

{% quick-link
  title="Test Suite Management"
  icon="treeview"
  href="#"
  description="Test Suite Dashboard helps you stay on top of your test suite health."
/%}

{% /quick-links %}
