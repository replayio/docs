---
title: Commands
description: Learn how to upload, remove and view your recordings using CLI
---
## Installation

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

We recommend installing Replay CLI globally.

## Commands

{% table %}
* Command
* Options
* Description
---
* `list`
* `[options]`
* List all local recordings
---
* `login`
* `-`
* Log into your Replay account (or register)
---
* `logout`
* `-`
* Log out of your Replay account 
---
* `record`
* `[url]`
* Launch the replay browser in recording mode 
---
* `remove`
* `[options] [ids...]`
* Delete one or more recordings from disk 
---
* `update`
* `-`
* Update your installed Replay browser 
---
* `upload`
* `[options] [ids...]`
* Upload recording(s)
---
* `view`
* `<id>`
* Upload one or more recordings 
---
* `help`
* `[command]`
* Display help for command
---
{% /table %}

### list [options]
List all local recordings

### login
Log into your Replay account (or register)

### logout
Log out of your Replay account 

### record [url]
Launch the replay browser in recording mode 

### remove [options] [ids...]
Delete one or more recordings from disk 

### update
Update your installed Replay browser 

### upload [options] [ids...]
Upload recording(s)

### view <id>
Upload one or more recordings 

### help [command]
Display help for command 