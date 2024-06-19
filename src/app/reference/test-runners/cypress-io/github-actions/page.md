---
title: GitHub actions with Cypress
---

{% callout %}
These instructions assume that you have already [set up your Cypress project](/basics/getting-started/record-your-cypress-tests).
{% /callout %}

This example uses [Cypress GitHub Action](https://github.com/cypress-io/github-action) that provides dependency installation, built-in caching, and multiple options for advanced workflow configuration. For recording your test, the `replay-chromium` browser needs to be passed as a browser. 

```yaml {% fileName=".github/workflows/e2e.yml" highlight=["11-19"] lineNumbers=true %}
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
        env:
          REPLAY_API_KEY: ${{ secrets.REPLAY_API_KEY }}
```

Running with Replay browser will create your replays. These are stored locally on your CI and need to be uploaded to Replay app once the test run is finished.

{% quick-links title="Learn more" %}

{% quick-link 
  title="Upload strategies" 
  icon="uploadicon"
  description="There are different strategies for uploading your replays such as uploading  only on test flakes or failures."
   href="/reference/ci-workflows/upload-strategies"
/%}
{% quick-link 
  title="GitHub upload action" 
  icon="github"
  description="GitHub upload action takes care of uploading your recordings during your CI test runs on GitHub. It enables you to filter the recordings you upload to Replay App."
   href="/reference/ci-workflows/github-action-upload"
/%}

{% /quick-links %}