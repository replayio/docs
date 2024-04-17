---
title: Uploading strategies
description: When you run tests and create recordings, they are stored locally. You can opt to upload them automatically or define your own uploading strategy. All uploaded recordings become accessible in the Replay App. 
---

{% callout %}
While uploading just failed test is good for saving resources, our recommendation is to upload both failed and passed tests so that you can compare them. This can be really useful for debugging purposes.
{% /callout %}

## Uploading failed tests only
By default, all test replays are uploaded no matter the result. If you want upload only the failed recordings, you can define the step to do so using `filter` property:

## Using GitHub Action
```yml {% fileName=".github/workflows/e2e.yml" lineNumbers=true highlight=[19] %}
name: Replay tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Run Playwright tests with Replay Browser
        run: npx playwright test --project replay-chromium --reporter=@replayio/playwright/reporter,line
      - name: Upload replays
        if: ${{ always() }}
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
          filter: ${{ 'function($v) { $v.metadata.test.result = "failed" }' }}
```

