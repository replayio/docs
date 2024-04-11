---
title: Commands
description: Learn how to upload, remove and view your recordings using CLI
---
## Installation

To download and install Replay CLI, run the following command. We recommend installing Replay CLI globally.
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

## Updating Replay CLI
Replay CLI will automatically notify you whenever there is a new version released. Running any command will show you a message letting you know that an update is available. This notification appears maximum once per 24 hours.

```sh
A new version of replayio is available!
  Installed version: 0.0.2
  New version: 0.0.4

To upgrade, run the following:
  npm install -g replayio

Press any key to continue
```

## CI/CD environment usage
Replay CLI requires you to log in when uploading your recordings. In a local environment, you can use `replayio login` command that opens a login page in a browser. When in a CI/CD environment, it’s not possible to use the same approach, but you can create an API key in Replay DevTools and add it to your CI/CD environment. Learn more in the [docs on how to generate API key]().

## Available Commands

{% table %}
* Command
* Arguments
* Options
---
* [`list`](#list')
* –
* `--json`
---
* [`login`](#login)
* –
* –
---
* [`logout`](#logout)
* –
* –
---
* [`record`](#record)
* `[url]`
* –
---
* [`remove`](#remove)
* `[ids...]`
* `-a`, `--all`
---
* [`update`](#update)
* –
* –
---
* [`upload`](#upload)
* `[ids...]`
* –
---
* [`help`](#help)
* –
* –
---
{% /table %}

You can pass `-h` or `--help` option into any of the commands to get more info.

### list{% class="!font-mono border border-opacity-30 border-gray-500 rounded-md px-1 py-1 mx-0.5 bg-gray-500 bg-opacity-10 font-semibold inline-block mb-4" %}
`replayio list` command will output a list all your local recordings. It will display all your uploaded and local (Recorded) replays. To upload a local replay, see [upload command](#upload).
```sh
ID         Host               Process  Date     Duration  Status    
170a0e99…  localhost:3000              2h ago   7.2s      Uploaded
174a0bef…  localhost:52301             3h ago   7.1s      Uploaded  
5721971d…  www.overboard.dev           1d ago   8.6s      Uploaded  
875811eb…  localhost:4322              1d ago   7s        Recorded  
9db33843…  localhost:4321              1w ago   5s        Uploaded
```
#### Options
{% table %}
* Option
* Description
---
* `--json`
*  prints out the full list of replays with details
---
{% /table%}
---

### login{% class="!font-mono border border-opacity-30 border-gray-500 rounded-md px-1 py-1 mx-0.5 bg-gray-500 bg-opacity-10 font-semibold inline-block mb-4" %}
The `replayio login` command allows you to login to your Replay account through your browser. Once you log in through browser you can close it and continue working in your terminal.

If you don’t yet have an account, you’ll be prompted to create one in the browser. 

---

### logout{% class="!font-mono border border-opacity-30 border-gray-500 rounded-md px-1 py-1 mx-0.5 bg-gray-500 bg-opacity-10 font-semibold inline-block mb-4" %}
Logs you out from your Replay account. This command will NOT invalidate your API keys in your environment. When environment variables are present you will see the following message

```sh
You are now signed out but still authenticated via
the REPLAY_API_KEY env variable
```

### record{% class="!font-mono border border-opacity-30 border-gray-500 rounded-md px-1 py-1 mx-0.5 bg-gray-500 bg-opacity-10 font-semibold inline-block mb-4" %}
Launches the Replay Browser and starts recording. Recording continues until stopped in the terminal.

After recording prompt to upload the recording is displayed.

```sh
? New recording found. Would you like to upload it? (Y/n)

 d1bd8025…  localhost:3000  root  Now  2.6s  Recorded 
```

`replayio record` will also automatically check for any browser or CLI updates and will prompt you update.

#### Arguments

{% table %}
* Argument
* Default
* Description
---
* `[url]`
* `about:blank`
* URL to open in Replay Browser
---
{% /table%}

---

### remove {% class="!font-mono border border-opacity-30 border-gray-500 rounded-md px-1 py-1 mx-0.5 bg-gray-500 bg-opacity-10 font-semibold inline-block mb-4" %}
Allows you to remove one or more recordings. By default, this command opens interactive menu, where you can select recordings to delete. 

```sh
? Which recordings would you like to delete?
  (↑/↓ to change selection, Space to toggle, a/A to toggle all,
  Enter to confirm)
  
  ✔  170a0e99…  localhost:3000              2h ago   7.2s      Uploaded
  ☐  174a0bef…  localhost:52301             3h ago   7.1s      Uploaded  
  ☐  5721971d…  www.overboard.dev           1d ago   8.6s      Uploaded  
  ☐  875811eb…  localhost:4322              1d ago   7s        Recorded  
  ✔  9db33843…  localhost:4321              1w ago   5s        Uploaded
```

This view displays most recent 25 recordings. To view all your recordings use `replayio list` command.

To delete a single recording, you can copy the partial id and pass it as an argument:

```sh
➜  ~ replayio remove 1d4284d6       
Deleting the following recording(s)
 1d4284d6…  localhost:3000    2mo ago  3s  Uploaded 

1 recording(s) deleted
```

#### Arguments

{% table %}
* Argument
* Default
* Description
---
* `[ids]`
* –
* comma-separated list of ids of a recording to be removed
---
{% /table%}

#### Options
{% table %}
* Option
* Description
---
* –
* displays interactive menu
---
* `--a`, `--all`
*  removes all local recordings
---
{% /table%}
---

### update{% class="!font-mono border border-opacity-30 border-gray-500 rounded-md px-1 py-1 mx-0.5 bg-gray-500 bg-opacity-10 font-semibold inline-block mb-4" %}
Replay CLI will automatically check for updates and will prompt you to update both CLI and your Replay Browser. `replayio update` updates your **Replay Browser only**. 

```sh
➜  ~ replayio update         
Downloading chromium from replay.io
Download complete!
```
To learn about how to update your CLI, see [Updating Replay CLI](#updating-replay-cli).

---

### upload{% class="!font-mono border border-opacity-30 border-gray-500 rounded-md px-1 py-1 mx-0.5 bg-gray-500 bg-opacity-10 font-semibold inline-block mb-4" %}
Allows you to upload one or more recordings. By default, this command opens interactive menu, where you can select recordings to upload. 

```sh
➜  ~ replayio upload             
? Which recordings would you like to upload?
  (↑/↓ to change selection, [space] to toggle, [a] to toggle all)
  
✔  d1bd8025…  localhost:3000     root  53m ago  2.6s      Recorded  
✔  174a0bef…  localhost:52301          3d ago   7.1s      Uploaded  
✔  5721971d…  www.overboard.dev        1w ago   8.6s      Uploaded  
✔  875811eb…  localhost:4322           1w ago   7s        Uploaded  
✔  9db33843…  localhost:4321           1w ago   5s        Uploaded
```

This view displays most recent 25 recordings. To view all your recordings use `replayio list` command.

To upload a single recording, you can copy the partial id and pass it as an argument:

```sh
Uploading recordings...
 ✔  d1bd8025…  localhost:3000  57m ago  2.6s  (uploaded) 

View recording at:
https://app.replay.io/recording/d1bd8025-cc11-473a-bd3d-997cb68050fa
```

#### Arguments

{% table %}
* Argument
* Default
* Description
---
* `[ids]`
* –
* comma-separated list of ids of a recording to be uploaded
---
{% /table%}

#### Options
{% table %}
* Option
* Description
---
* –
* displays interactive menu
{% /table%}
---

### help{% class="!font-mono border border-opacity-30 border-gray-500 rounded-md px-1 py-1 mx-0.5 bg-gray-500 bg-opacity-10 font-semibold inline-block mb-4" %}
Display all available commands and their descriptions. Alternatively, you can pass `-h` or `--help` option into any of the commands to get more info.