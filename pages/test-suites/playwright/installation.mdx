---
title: Playwright
---
import { Callout, Tabs } from 'nextra/components'
import Video from '@components/Video'
import MaterialSymbolsSettings from '@icons/MaterialSymbolsSettings'
import addTeam from '/videos/playwright-create-team.mp4'
import apiKeys from '/videos/playwright-api-key.mp4'

# Playwright

## Install the Replay plugin

**1. Install the [@replayio/playwright](https://www.npmjs.com/package/@replayio/playwright) package into your project:**

```sh npm2yarn
npm install @replayio/playwright -D
```

**2. Add Replay Chromium browser and Replay Reporter to your `playwright.config.ts` file.**

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

## Setup Replay Dashboard

First, create a new team in Replay to organize your Playwright replays. You’ll also need an API Key to upload your replays and team API keys have much higher limits than personal API keys.

**1. Go to your Replay Dashboard and create a new team**

Alternatively, you can visit [this link](https://app.replay.io/team/new) to instantly create a new team.
<Video src={addTeam} />
<Callout type="info" emoji="💡">
Test Suites are currently in closed Beta. If you’d like to start recording your tests, test suites need to be enabled in your team. Join our [**waitlist**](https://replayio.typeform.com/to/jTudlerL) and we’ll reach out to you as soon as possible.
</Callout>

**2. Once you’ve created a team, click on the settings <MaterialSymbolsSettings className="w-6 h-6 inline-block" /> icon next to your team name and [create a new API Key](/getting-started/teams-admin/team-settings)**

<Video src={apiKeys} />

**3. Save the API key in your environment as `REPLAY_API_KEY`**. You can run your tests locally or using your CI provider.

## Record your tests

### Recording Locally
Once you have added Chromium Replay Browser to your project, you are ready to create your recordings. These will be available in your [Replay Dashboard](https://app.replay.io). You can run your tests normally, using `npx playwright test{:sh}` command. 

If your project has multiple browsers set up, you can run Replay Browser only:
```sh
npx playwright test --project replay-chromium
```

```ansi
➜ npx playwright test

Running 1 test using 1 worker
[1/1] things-app.spec.ts:14:7 › Todos › should allow me to add todo items
[replay.io]: 🕑 Completing some outstanding work ...
[replay.io]: 
[replay.io]: 🚀 Successfully uploaded 1 recordings:
[replay.io]: 
[replay.io]:    ✅ should allow me to add todo items
[replay.io]:       https://app.replay.io/recording/1d50d6ee-fe59-47ba-bc69-fdc6339df3cc
  1 passed (2.1s)
```

### Integrate into your CI workflow

Replay is designed to record tests in CI so you can debug when tests fail. Without Replay, test failures in CI are like a black box, with little insights into what went wrong. By recording with Replay, you get a full recording of the test run with debugging tools built in.

Here are basic configurations for some of the most popular providers which you can add to you project

<Tabs items={['GitHub Actions']}>
<Tabs.Tab>
```yml filename=".github/workflows/e2e.yml" copy
name: End-to-end tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Run Playwright tests
        run: npx playwright test
```
</Tabs.Tab>
</Tabs>

## Next Steps
Your replays will now be recorded on each test run. You can find all your replays in Test Suite Dashboard.