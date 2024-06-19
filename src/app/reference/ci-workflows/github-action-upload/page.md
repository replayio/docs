---
title: GitHub upload action
---

GitHub upload action takes care of uploading your recordings during your CI test runs on GitHub. It enables you to filter the recordings you upload to Replay App.

{% tabs labels=["cypress", "playwright"] %}
{% tab %}

```yaml {% fileName=".github/workflows/e2e.yml" highlight=["15-19"] lineNumbers=true %}
name: End-to-end tests
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install Replay Chromium
        run: npx replayio install
      - name: Cypress run
        uses: cypress-io/github-action@v6
        with:
          browser: replay-chromium
      - name: Upload replays
        if: always()
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
```

{% /tab %}
{% tab %}

```yml {% fileName=".github/workflows/e2e.yml" lineNumbers=true  highlight=["19-23"] %}
name: End-to-end tests
on:
  pull_request:
  push:
    branches: [main]
jobs:
  e2e-tests:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      # If you're using Yarn or PNPM, use the appropriate install command here
      - name: Install dependencies
        run: npm ci
      - name: Install Replay Chromium
        run: npx replayio install
      - name: Run Playwright tests
        run: npx playwright test --project replay-chromium
      - name: Upload replays
        if: always()
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
```

{% /tab %}
{% /tabs %}

{% callout %}
Make sure to set `if: ${{ always() }}` so that this step is always executed, even when the previous step fails.
{% /callout %}

{% quick-links title="Learn more" %}

{% quick-link
  title="Upload strategies"
  icon="uploadicon"
  description="There are different strategies for uploading your replays such as uploading  only on test flakes or failures."
   href="/reference/ci-workflows/upload-strategies"
/%}

{% /quick-links %}
