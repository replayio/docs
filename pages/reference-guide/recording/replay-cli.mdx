---
title: Replay CLI
---
# Replay CLI

More details in the ReadMe section of our NPM package download instructions: [https://www.npmjs.com/package/@replayio/replay](https://www.npmjs.com/package/@replayio/replay)

# **@replayio/replay**

CLI tool and Node module for managing and uploading **[Replay](https://replay.io/)** recordings and installing Replay Browsers.

## **Overview**

When using the Replay plugins to record automated tests or the Replay version of Node, recordings which are created are saved to disk, by default in `$HOME/.replay`. This package is used to manage these recordings and upload them to the record/replay web service so that they can be viewed.

**Check out the ["Recording Automated Tests Guide"](/test-suites) to get started with recording Cypress or Playwright tests.**

## **Installation**

`npm i @replayio/replay --global`

## **Usage**

`npx @replayio/replay <command>`

Possible commands are given below. These may be used with the `--directory <dir>` option to override the default recording directory, or `--server <address>` to override the default server address. When uploading, an API key is required, which can be passed via `--api-key <key>` or by setting the `REPLAY_API_KEY` environment variable.

### **ls**

View information about all known recordings.

Options:

- `-all`: Include `uploaded`, `crashUploaded` and `unusable` recordings in the output.
- `-filter`: Filter the recordings to upload using a [JSONata-compatible filter function](https://docs.jsonata.org/higher-order-functions#filter). If used with `-all`, the filter is applied after including all status values.
- `-json`: Prints a JSON array with one descriptor element for each recording.

Recording descriptors have the following required properties:

- `id`: ID used to refer to this recording in other commands.
- `createTime`: Time when the recording was created.
- `runtime`: Runtime used to create the recording: either `gecko`, `chromium`, or `node`.
- `metadata`: Any information the runtime associated with this recording. For gecko/chromium recordings this is the URI of the first page loaded, and for node recordings this is the original command line arguments.
- `status`: Status of the recording, see below for possible values.

The possible status values for a recording are as follows:

- `onDisk`: The recording was fully written out to disk.
- `uploaded`: The recording was fully uploaded to the record/replay web service.
- `startedWrite`: The recording started being written to disk but wasn't finished. Either the recording process is still running, or the recording process was killed and didn't shut down normally.
- `startedUpload`: The recording started being uploaded but didn't finish.
- `unusable`: The recording was marked as unusable for some reason, such as a stack overflow occurring.
- `crashed`: The recording process crashed before finishing.
- `crashUploaded`: The recording process crashed and the crash data was uploaded to the record/replay web service for analysis.

Depending on the status the recording descriptor can have some of the following additional properties:

- `path`: If the recording started being written to disk (including before being uploaded), the path to the recording file.
- `server`: If the recording started being uploaded, the address of the server it was uploaded to.
- `recordingId`: If the recording started being uploaded, the server-assigned ID for this recording which can be used to view it.
- `unusableReason`: If the recording is unusable, the reason it was marked unusable.

### **upload `<id>`**

Upload the recording with the given ID to the web service.

### **process `<id>`**

Upload a recording, and then process it to ensure it can be replayed successfully.

### **upload-all**

Upload all recordings to the web service which can be uploaded.

Options:

- `-filter`: Filter the recordings to upload using a [JSONata-compatible filter function](https://docs.jsonata.org/higher-order-functions#filter)

### **view `<id>`**

View the the given recording in the system's default browser, uploading it first if necessary.

### **view-latest**

View the most recently created recording in the system's default browser, uploading it first if necessary.

### **rm `<id>`**

Remove the recording with the given ID and any on disk file for it.

### **rm-all**

Remove all recordings and on disk recording files.

### **update-browsers**

Updates any installed browsers used for recording in automation: **[playwright](https://www.npmjs.com/package/@replayio/playwright)**, **[puppeteer](https://www.npmjs.com/package/@replayio/puppeteer)**, and **[cypress](https://www.npmjs.com/package/@replayio/cypress)**.

### **upload-sourcemaps**

Allows uploading production sourcemaps to Replay's servers so that they can be used when viewing recordings.