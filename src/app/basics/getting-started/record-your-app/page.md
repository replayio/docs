---
title: Quickstart guide
description: Record your first replay with the Replay browser in under a minute.
---

Recording your application with the Replay browser lets you capture a bug once and inspect it after the fact without having to reproduce it again. This makes it possible to:

- [Share the replay as a URL with your team so others can inspect it as if they were there when you recorded it.](/basics/replay-devtools/time-travel-devtools/collaborative-devtools)
- [Debug the replay with `console.log` added in at any point of the recording.](/basics/replay-devtools/time-travel-devtools/live-console-logs)
- [Inspect Network requests](/basics/replay-devtools/browser-devtools/network-monitor), [React components](/basics/replay-devtools/framework-devtools/react-panel), and [DOM elements](/basics/replay-devtools/browser-devtools/elements-panel) as if the application were running live on your laptop.

The ability to record and deterministically replay runtimes like Chrome is referred to as ["time travel"](/basics/overview/why-time-travel).

Let's use the Replay CLI to record our first replay so you too can start time traveling:

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
replayio record first.replay.io/
```

This command will:

- Prompt you to login to your Replay account with Google (if not already logged in)
- Install the Replay browser (if not already installed)
- Open the Replay browser to begin recording first.replay.io

## Upload your replay

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

> This URL is a real recording. [Press the link to inspect the site](https://app.replay.io/recording/a616009e-b825-4c54-83b4-e20bd8c0cb25)!

When you open the "View recording" link in a browser, you'll be greeted with a dialog asking if you want to upload the recording to a specific team.

![An upload preview of www.overboard.dev that says "only you can view this" with an option to add other people to see the upload](/images/upload_perms.png)

> If you don't have a team yet, you can [create a team in the Replay Library.](/basics/replay-teams/setting-up-a-team)

## Inspect your replay

Once your recording is uploaded, you're able to inspect it through [the Replay DevTools](https://app.replay.io/).

![A preview of the website that was recorded; Overboard. It includes a sidebar of events the user took. The site itself is an "Add to cart" button underneath a checkout for fictional hoverboards](/images/recording_landing_page.png)

By default, you're set to "Viewer" mode. You can change the view to "DevTools" mode either by pressing the toggle in the top-right corner or by selecting an "Event" and pressing "Jump to code"

Let's jump to the last "Click" before the recording hit an error and see the code related to it:

{% video src="devtoolsClickToEvent" /%}

It looks like we're making a `"POST"` to an endpoint of `"/api/purchase"`. Let's open our network panel and see what the request looks like:

![The network tab in the DevTools panel which shows a 400 error on the purchase](/images/network_tab.png)

Selecting the `400` error in the network panel allows us to look at the request and reply. Here, the request is indicating that `"Color is not found, recieved: undefined"` was the response from our backend:

![A response subtab on the network request panel showing the error message](/images/response_body.png)

But looking at the request body, it looks like we're sending the color along just fine:

![The request subtab on the network request panel showing the request body with "{color: blue}"](/images/request_body.png)
With this information, we can go to our backend team more informed with how to report a ticket to solve this.

We can even integrate Replay into our [CI/CD pipeline to help debug flakey tests much more efficiently.](/reference/test-runners/overview)

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

Replays need to be uploaded so that the browser can be replayed in the Replay Cloud. [How time travel works](/basics/overview/how-does-time-travel-work)

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
