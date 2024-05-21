---
title: Next.js example
description: How to set up your development flow on a Next.js project. You can follow this tutorial step by step if you are starting a new project or jump to a section that is relevant for you.
---

## Setup a new Next.js project
To set up a new Next.js project you can follow the instruction in Next.js docs. In this example, we will be adding Playwright as an end-to-end testing framework.

```sh
npx create-next-app@latest --example with-playwright with-playwright-app
```

## Debugging in dev mode


## Install the Playwright Plugin package into your project
Once your project is initialized, you can install Replay plugin for Playwright.
```sh
npm install @replayio/playwright@alpha -D
```

After the installation, you’ll need to modify two attributes in the `playwright.config.ts` file:
1. `reporter`
2. `projects`

Your modified file will look like this (we removed the comments that are added by default)

```js {% fileName="playwright.config.ts" highlight=["24-30","33-36"] lineNumbers=true %}
import { defineConfig, devices } from "@playwright/test";
import path from "path";

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({  
  timeout: 30 * 1000,
  testDir: path.join(__dirname, "e2e"),
  retries: 2,
  outputDir: "test-results/",
  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {    
    baseURL,
    trace: "retry-with-trace",
  },

  reporter: [
    createReplayReporterConfig({
      apiKey: process.env.REPLAY_API_KEY,
      upload: true,
    }),
    ['line'],
  ],

  projects: [
    {
      name: 'replay-chromium',
      use: { ...replayDevices['Replay Chromium'] },
    },
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 5"],
      },
    },
    {
      name: "Mobile Safari",
      use: devices["iPhone 12"],
    },
  ],
});
```