---
title: Create Your First Replay
description: Learn how to use the Replay command-line interface (CLI) to manage and record your replays from the command line.
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
replayio record http://localhost:3000
```
{% callout showIcon=false title="First-time recording"%}
You may be prompted to log in when you use Replay for the first time. Replay CLI will open browser for you. After logging in, you can safely close the browser and continue in terminal.

{% figure
    alt="Replay Browser Login"
    src="/images/login.png"
    gradient="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-200"
    height=200
    width=200
/%}

{% /callout%}

<!-- todo: add video -->

## Upload your recording
Once you close Replay Browser, your recoding is ready to be uploaded. You’ll be prompted to confirm upload. 

{% figure
    alt="Would you like to upload recording"
    src="/images/terminal.png"
    height=300
    width=600
/%}

If you decide to upload your recording later, you’ll be able to access it via `replayio list` command. Read more in [Replay CLI command docs](/replay-cli/commands).

## View your recording

Once the upload is completed, CLI will return a link to Replay DevTools where you can start debugging.

{% figure
    alt="Recording uploaded"
    src="/images/upload.png"
    height=400
    width=600
/%}

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