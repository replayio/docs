---
title: Quickstart guide
---

Recording your application with the Replay browser lets you capture a bug once and inspect it after the fact without having to reproduce it again. This makes it possible to:

- [Share the replay as a URL with your team so others can inspect it as if they were there when you recorded it.](/time-travel-intro/collaborative-devtools)
- [Debug the replay with `console.log` added in at any point of the recording.](/time-travel-intro/add-console-logs-on-the-fly)
- [Inspect Network requests](/replay-devtools/browser-devtools/network-monitor), [React components](/replay-devtools/framework-devtools/react-panel), and [DOM elements](/replay-devtools/browser-devtools/elements-panel) as if the application were running live on your laptop.

In this guide, we'll use the Replay CLI to record first.replay.io. If you'd like to record your Playwright or Cypress tests, feel free to [jump ahead](/test-runners/overview).

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
replayio record first.replay.io/
```

This command will:

- Prompt you to login to your Replay account with Google (if not already logged in)
- Install the Replay browser (if not already installed)
- Open the Replay browser to begin recording `first.replay.io`

## Inspect your replay

When you close the browser, you'll be prompted to upload your recordings. Once the upload is completed, you will get a url where you can inspect your app with Replay DevTools.

```sh
Uploading recordings...
a616009e.. overboard.dev Now 7.5s (uploaded)

View recording at:
https://app.replay.io/recording/a616009e-b825-4c54-83b4-e20bd8c0cb25
```

Now that we've recorded our first [replay](https://app.replay.io/recording/a616009e-b825-4c54-83b4-e20bd8c0cb25), lets look at what it looks like to [inspect it with Replay DevTools](/quickstart/inspect-replay).

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

Replays need to be uploaded so that the browser can be replayed in the Replay Cloud. [How time travel works](/time-travel-intro/what-is-time-travel)

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
