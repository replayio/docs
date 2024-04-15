---
title: Recording tests locally
---

# Recording tests locally

In our experience, recording a replay gives you the most value when used in CI. It brings observability to otherwise hidden process. 

That said, to get you started, or to get a quick feedback on a stubborn test, running locally may be the a great way to get some insight into your test behavior.

## Configuration
Basic configuration of your Playwright project may look something like this. There are 2 key aspects:

1. `reporter` - Replay is integreated as a reporter to Playwright. the `line` reporter in this configuration points to default Playwright reporter that outputs test results into timeline.
2. `replay-chromium` project. This is Replay Browser. It’s a browser built on Chromioum with the recording capabilities. 

```tsx {2,5-8,11,12} filename="playwright.config.ts"
import { PlaywrightTestConfig, devices } from "@playwright/test";
import { devices as replayDevices } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  reporter: [["@replayio/playwright/reporter", {
      apiKey: process.env.REPLAY_API_KEY,
      upload: true
  }], ['line']],
  projects: [
    {
      name: "replay-chromium",
      use: { ...replayDevices["Replay Chromium"] as any },
    }
  ],
};
export default config;
```

### Options
- `apiKey` (required) - this is the key that ensures communication with Test Suite Dashboard. Your recordings are uploaded using this key.
- `upload` - Set to `false` by default. This option determines whether you want to upload your recordings automatically to your [Test Suite Dashboard](/test-suites/runs-view). 

## Uploading replays manually
Recordings are created automatically when using `replay-chromium` browser, but you can choose to upload your recordings manually. You can use our [Replay CLI](/reference-guide/recording/replay-cli) for that. We recommend installing it globally:

```sh npm2yarn
npm install @replayio/replay -g
```

Use `replay ls` command to view the list of your recordings.
```ansi
$ replay ls    

ID                                    Status  Title                              Created
26acbdf1-a8b5-4f5e-bcf4-733d39456832  onDisk  should allow me to add todo items  9 minutes ago
1b94bcee-bc2e-48dc-9edb-755760e38c9d  onDisk  cypress/e2e/spec.cy.ts             14 minutes ago
00972cf1-86c1-46c3-9ec0-4b3b06b1e561  onDisk  cypress/e2e/spec.cy.ts             50 minutes ago
eddbdf58-fa10-43ab-ab0c-0da1e2939b57  onDisk  should allow me to add todo items  2 hours ago
7585b8f4-6475-4535-995d-4d8a0c50f829  onDisk  Replay of localhost:8080           4 days ago
```

Replays are uploaded locally using the `@replayio/replay` CLI. Your API key must be set as the `REPLAY_API_KEY` environment variable to upload.

### Upload all replays
To upload all available replays, use the following command:
```sh
replay upload-all
```

### Upload a single replay
To upload just a single replay, copy the ID from the `replay ls` output and use following command:
```sh
replay upload 7585b8f4-6475-4535-995d-4d8a0c50f829 # example replay id
```

## Learn more
- [Replay CLI documentation](/reference-guide/recording/replay-cli)
- [Replay CLI readme on GitHub](https://github.com/replayio/replay-cli/tree/main/packages/replay)