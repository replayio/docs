---
title: Vercel
description: This page describes how you can record your replays with e2e tests against Vercel preview branches and get a list of your replays from passed, failed and flaky tests.
---

[Preview deployments from Vercel](https://vercel.com/docs/deployments/preview-deployments) are a great way to preview your app before merging to main branch. The build of a preview deployment is usually triggered by pull request. It usually takes a couple of seconds or minutes to create a build and deploy it. At the end of the process, Vercel will provide a custom URL where this deployment can be viewed. 

Preview deployments are also useful for running end-to-end tests against. Since there’s a delay between the `pull_request` event and the actual deployment being ready, we recommend using `wait-for-vercel-preview` action, and add it as a dependency for your test step.

{% tabs labels=["playwright", "cypress"]%}
{% tab %}
```yml
name: Playwright Tests
on: [pull_request]

jobs:
  wait-for-vercel:
     name: Wait for vercel
     runs-on: ubuntu-latest
     steps:
       - name: Wait for Vercel preview deployment to be ready
         uses: patrickedqvist/wait-for-vercel-preview@v1.3.1
         id: wait
         with:
           token: ${{ secrets.GITHUB_TOKEN }}
           max_timeout: 120
     outputs:
       preview_url: ${{ steps.wait.outputs.url }}
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    needs: [wait-for-vercel]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
      - name: Install dependencies
        run: npm ci
      - name: Install Replay Chromium
        run: npx replayio install
      - name: Run Playwright tests
        run: npx playwright test --project replay-chromium
        env:
          # note that BASE_URL needs to be passed to playwright.config.ts
          BASE_URL: ${{ needs.wait-for-vercel.outputs.preview_url }} 
          REPLAY_API_KEY: ${{ secrets.REPLAY_API_KEY }}
```
{% /tab %}

{% tab %}
```yml
name: Playwright Tests
on: [pull_request]

jobs:
  wait-for-vercel:
     name: Wait for vercel
     runs-on: ubuntu-latest
     steps:
       - name: Wait for Vercel preview deployment to be ready
         uses: patrickedqvist/wait-for-vercel-preview@v1.3.1
         id: wait
         with:
           token: ${{ secrets.GITHUB_TOKEN }}
           max_timeout: 120
     outputs:
       preview_url: ${{ steps.wait.outputs.url }}
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    needs: [wait-for-vercel]
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Cypress run
        uses: cypress-io/github-action@v6
        with:
          browser: replay-chromium
        env:
          CYPRESS_BASE_URL: ${{ needs.wait-for-vercel.outputs.preview_url }}
          REPLAY_API_KEY: ${{ secrets.REPLAY_API_KEY }}
```
{% /tab %}
{% /tabs %}

This approach is slightly different from the [recommended pattern from Vercel](https://vercel.com/guides/how-can-i-run-end-to-end-tests-after-my-vercel-preview-deployment), but carries a significant advantage. Replay PR Comments bot will add a list of all passed, failed and flaky tests, and links to replays that you can debug. This will help you debug any problems that occurred during a test run and prevent them from passing into production.