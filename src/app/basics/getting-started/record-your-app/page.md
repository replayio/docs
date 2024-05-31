---
title: Record your application
---

Recording your application with the Replay browser lets you capture a bug once and inspect it after the fact without having to reproduce it again. This makes it possible to:

- [Share the replay as a URL with your team so others can inspect it as if they were there when you recorded it.](/basics/replay-devtools/time-travel-devtools/collaborative-devtools)
- [Debug your application by adding new `console.log` statements anywhere in the recording.](/basics/replay-devtools/time-travel-devtools/live-console-logs)
- [Inspect Network requests](/basics/replay-devtools/browser-devtools/network-monitor), [React components](/basics/replay-devtools/framework-devtools/react-panel), and [DOM elements](/basics/replay-devtools/browser-devtools/elements-panel) as if the application were running live on your laptop.

In this guide, we'll use the Replay CLI to record your interactions on the page `https://first.replay.io`. If you'd like to record your Playwright or Cypress tests instead, feel free to [jump ahead](/reference/test-runners/overview).

{% steps %}

## Install the Replay CLI

Run the following command to install the Replay CLI:

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

## Record your replay

Run the following command to open the Replay browser and start recording.

```sh
replayio record https://first.replay.io
```

This command:

- Prompts you to log in to your Replay account with Google (if not already logged in)
- Installs the Replay browser (if not already installed)
- Opens the Replay browser to begin recording `https://first.replay.io`

## Inspect your recording

When you close the browser, you'll be prompted to upload your recordings. Once the upload is completed, you will get a URL where you can inspect your application with Replay DevTools.

```sh
Uploading recordings...
a616009e.. overboard.dev Now 7.5s (uploaded)

View recording at:
https://app.replay.io/recording/a616009e-b825-4c54-83b4-e20bd8c0cb25
```

Now that we've recorded our first [replay](https://app.replay.io/recording/a616009e-b825-4c54-83b4-e20bd8c0cb25), let's [inspect it with Replay DevTools](/basics/getting-started/inspect-replay).

{% /steps %}

## FAQ

{% accordion %}

{% accordion-item title="How do I upload recordings later?" %}

You can always upload recordings later via the `replayio upload` command. Read more in Replay CLI [docs](/reference/replay-cli/commands).

{% /accordion-item %}

{% accordion-item title="When will the Replay browser be a standalone application?" %}

We are excited to release the Replay browser as a standalone application that you can download directly, log into, and start recording in a couple of months.

In the interim, if you would perfer downloading a browser directly, you can use the [Replay Firefox](/reference/replay-runtimes/replay-firefox) browser.

{% /accordion-item %}

{% accordion-item title="Why do I need to login to Replay?" %}

Recordings need to be uploaded so the browser can be replayed in the Replay Cloud. See [How time travel works](/basics/time-travel/how-does-time-travel-work) for more information.

{% /accordion-item %}

{% /accordion %}

{% quick-links title="Next Steps"  %}

{% quick-link
  title="Inspect your first recording"
  icon="console"
  href="/basics/getting-started/inspect-replay"
  description="Walk through the steps of inspecting our new replay."
/%}

{% quick-link
  title="Replay DevTools"
  icon="jumptocode"
  href="/basics/replay-devtools/overview"
  description="Overview of Replay's browser, framework, and time travel DevTools."
/%}

{% quick-link
  title="Set up a team"
  icon="settingupateam"
  href="/basics/replay-teams/setting-up-a-team"
  description="Learn how to share replays as a team."
/%}

{% quick-link
  title="Test Suites Analytics"
  icon="treeview"
  href="/basics/test-suites/runs-view"
  description="Stay on top of your Test Suite's health."
/%}

{% /quick-links %}
