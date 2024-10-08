---
title: Record your application
---

Recording your application with the Replay browser lets you capture a bug once and inspect it after the fact without having to reproduce it again. This makes it possible to:

- [Share the replay as a URL with your team so others can inspect it as if they were there when you recorded it.](/basics/replay-devtools/time-travel-devtools/collaborative-devtools)
- [Debug your application by adding new `console.log` statements anywhere in the replay.](/basics/replay-devtools/time-travel-devtools/live-console-logs)
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

## Inspect your replay

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

{% accordion-item title="How do I upload replays later?" %}

You can always upload replays later via the `replayio upload` command. Read more in Replay CLI [docs](/reference/replay-cli/commands).

{% /accordion-item %}

{% accordion-item title="Why do I need to log in to Replay?" %}

Replays need to be uploaded so the browser can be replayed in the Replay Cloud. See [How time travel works](/basics/time-travel/how-does-time-travel-work) for more information.

{% /accordion-item %}

{% /accordion %}

{% quick-links title="Next Steps"  %}

{% quick-link
  title="Inspect your replay"
  icon="console"
  href="/basics/getting-started/inspect-replay"
  description="Walk through the steps of inspecting your new replay."
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
  href="/reference/replay-teams/setting-up-a-team"
  description="Learn how to share replays as a team."
/%}

{% quick-link
  title="Test Suites Analytics"
  icon="treeview"
  href="/basics/test-suites/recent-runs"
  description="Stay on top of your Test Suite's health."
/%}

{% /quick-links %}
