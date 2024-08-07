---
title: Next.js example
description: How to set up your development flow on a Next.js project. You can follow this tutorial step by step if you are starting a new project or jump to a section that is relevant for you.
---

## Setup a new Next.js project

To set up a new Next.js project you refer to the [example project in Next.js docs](https://nextjs.org/docs/pages/building-your-application/testing/playwright). This example contains Playwright as an end-to-end testing framework.

```sh
npx create-next-app@latest --example with-playwright my-app
```

## Debugging in dev mode

### Setting up your environment

Replay is a great development companion. Whenever you stumble upon an error, you can back up and replay what happened. To set up your development environment install Replay CLI:

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

### Recording your application

Let’s assume you have started your dev server on `localhost:3000`.

Once Replay CLI is installed, you can create _a replay_ by typing the following command in your terminal:

```sh
replayio record http://localhost:3000
```

This command opens Replay Browser and starts recording your application running on localhost. Once you have caught the issue in Replay Browser, you can go back to the terminal and press any key to stop recording.

{% callout type="note" title="Running for the first time" %}
If you are running Replay CLI for the first time, you may be prompted to log in to Replay App. To learn more about Replay CLI, [jump to this page](/reference/replay-cli/commands).
{% /callout %}

Recording an issue will help you capture the root cause. Once you have a replay, you can jump into time-travelling DevTools, explore source files and add `console.log` to explore the runtime.

### Debugging your application

After you record your application, you will be prompted to upload your replay. Command line interface will generate a link which you can view in any browser.

```sh {% highlight=[9,10] %}
➜  ~ replayio record http://localhost:3000
Recording... (press any key to stop recording)

✔ New replays found. Would you like to upload it? (Y/n)

Uploaded replays
 ✔  6a464a3a…  localhost:3000  11s ago  4.7s  (uploaded)

View replays at:
https://app.replay.io/recording/6a464a3a-37c5-482a-8743-3b758c9fb6f3
```

Take a look at [this public replay](https://app.replay.io/recording/6a464a3a-37c5-482a-8743-3b758c9fb6f3) to see an example of how Replay DevTools look.

### What to debug

You can create replays any time you encounter an issue. Replays are very effective when facing intermittent issues, race conditions, router problems, or any issue that either happens too quickly or is hard to identify.

We recommend creating shorter replays for better performance and clarity.

## Debugging Playwright tests

### Installing the Playwright Plugin package into your project

The Next.js `with-playwright` project is initialized with a `playwright.config.ts` file. This contains many useful defaults for running your tests locally. To add Replay, you need to install the Replay plugin for Playwright and make updates to the config file.

{% tabs labels=["npm", "yarn", "pnpm", "bun"] %}
{% tab %}

```sh
npm install @replayio/playwright -D
```

{% /tab %}
{% tab %}

```sh
yarn add @replayio/playwright -D
```

{% /tab %}
{% tab %}

```sh
pnpm install @replayio/playwright -D
```

{% /tab %}
{% tab %}

```sh
bun install @replayio/playwright -D
```

{% /tab %}
{% /tabs %}

After the installation, you’ll need to modify two attributes in the `playwright.config.ts` file:

1. `reporter`
2. `projects`

Your modified file will look like this (we removed the comments that are added by default)

```js {% fileName="playwright.config.ts" highlight=["24-30","33-36"] lineNumbers=true %}
import { defineConfig, devices } from '@playwright/test'
import path from 'path'

const PORT = process.env.PORT || 3000
const baseURL = `http://localhost:${PORT}`

export default defineConfig({
  timeout: 30 * 1000,
  testDir: path.join(__dirname, 'e2e'),
  retries: 2,
  outputDir: 'test-results/',
  webServer: {
    command: 'npm run dev',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL,
    trace: 'retry-with-trace',
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
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
})
```

### Recording your tests

If you are experiencing issues with your tests, such as random failures or flakiness, you can record your tests simply by running the `replay-chromium` project. The `upload: true` attribute will take care of uploading every test replay after the test run.

You can choose to set this setting to `false` and use `replayio upload` command from CLI to upload your test recordings manually.

For examples on how to record your tests on a CI pipeline, check out [reference docs](/reference/test-runners/playwright/github-actions) or examples on how to record a [Vercel preview deployment](/learn/examples/vercel).

{% callout title="Generating API key" %}
In order to upload your replays, an API key needs to be set up in your environment. Check out the reference guide to learn how to [generate an API key](/reference/ci-workflows/generate-api-key)
{% /callout %}

### Debugging your tests

{% figure
  src="/images/playwright-devtools-screenshot.png"
  width=870
  height=870
/%}

Replay DevTools bring you the power of browser DevTools, but with time traveling capability. This becomes incredibly useful for cases like shown here.

This example shows an ecommerce site, where two API calls are called. One checks availability of items, and other one adds it to cart. The availability gets fetched and a `quantity` state is updated.

```js {% fileName="ProductDetail.tsx (abbreviated)" lineNumbers=true highlight=[1,21] %}
const [quantity, setQuantity] = useState(0)

// check availability API call
const fetchAvailability = async () => {
  const response = await fetch(`/api/check-availability`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

// get data from /check-availability response
const { data } = useQuery({
  queryKey: ['availability'],
  queryFn: fetchAvailability,
})

// update quantity and availability
useEffect(() => {
  if (data) {
    setQuantity(data.qty)
  }
}, [data])
```

The `quantity` state is then used as payload in the "add to cart" request.

```js {% fileName="ProductDetail.tsx (abbreviated)" lineNumbers=true highlight=["8-10"] %}
// add to cart
const addToCart = async () => {
  const response = await fetch('/api/add-to-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      qty: quantity,
    }),
  })

  if (response.ok) {
    setError(false)
    setMessage('Product added to cart!')
  } else {
    setError(true)
    const res = await response.json()
    setMessage(res.message)
  }
}
```

However, depending on the speed of response from `/api/check-availability` endpoint, the `quantity` will either be 0 (the default value) or 1 (fetched value).

This problem can be revealed by adding console.logs into the replay. These will reveal the race condition happening in the failed test vs. passing test.

> [Check out this replay](https://replay.help/playwright-flake-debug) for a detailed walkthrough on debugging a flaky Playwright test.

### Comparison with trace-viewer

Trace-viewer is a powerful tool for reviewing your Playwright test run. It contains screenshots, network logs, step details and a timeline of DOM snapshots. It can help you zoom into each test step and examine visuals and logs from the application.

Replay takes this concept further. You are getting all the advantages of trace-viewer with the added capability of exploring your source code adding console.logs to reveal the flow of your data and ability to jump to any line of code. You can stop at a perfect moment that is not captured by any DOM snapshot from trace-viewer, or is simply happening in between these snapshots.

When facing flaky tests, reproducing an issue locally is no longer needed, because all of the information is already captured.

You can read more about [comparison with Playwright’s trace-viewer here](/learn/comparisons/playwright).

{% quick-links title="Read more" description="Learn how to record your tests, manage your test suite and debug flaky tests using Replay DevTools" %}

{% quick-link
  title="Debugging Vercel branch preview deployments"
  icon="vercel"
  href="/learn/examples/vercel"
  description="Learn how to run debug tests from your Vercel preview deployments"
/%}

{% quick-link
  title="PR comments"
  icon="github"
  href="/basics/test-suites/pr-comments"
  description="The Replay GitHub PR comment makes it easy to view a PR's recent runs."
/%}

{% /quick-links %}
