---
title: Quickstart guide
description: Record your first replay with the Replay browser in under a minute.
---

{% steps %}

## Install the Replay CLI

Run the following command to download and install the Replay CLI:

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}

```sh
npm i -g replayio
```

{% /tab %}
{% tab %}

```sh
yarn add -g replayio
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

Run the following command to open the Replay browser and start recording.

```sh
replayio record
```

{% video src="recordCli" loop=true /%}

## Upload your replays

When you close the browser, you'll be prompted to upload your recordings.

```sh
New recordings found. Would you like to upload them? (Y/n)
```

## View your replay

Once the upload is completed, the CLI will give you the replay url.

```sh
Uploading recordings...
a616009e.. overboard.dev Now 7.5s (uploaded)

View recording at:
https://app.replay.io/recording/a616009e-b825-4c54-83b4-e20bd8c0cb25
```

{% /steps %}

## FAQ

{% accordion %}

{% accordion-item title="How do I upload recordings later?" %}

You can always upload recordings later via the `replayio upload` command. Read more in Replay CLI [docs](/replay-cli/commands).

{% /accordion-item %}

{% accordion-item title="When will the Replay browser be a standalone application?" %}

We are excited to release the Replay browser as a standalone application that you can download directly, log into, and start recording in a couple of months.

In the interim, if you would perfer downloading a browser directly, you can use the [Replay Firefox](/replay-runtimes/replay-firefox) browser.

{% /accordion-item %}

{% accordion-item title="Why do I need to login to Replay?" %}

Replays need to be uploaded so that the browser can be replayed in the Replay Cloud. [How time travel works](/time-travel-intro/how-time-travel-works)

{% /accordion-item %}

{% /accordion %}

{% quick-links title="Read more"  %}

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
  title="Test Suites"
  icon="treeview"
  href="/test-suites/runs-view"
  description="Stay on top of your test suite's health with Replay for Test Suites."
/%}

{% /quick-links %}
