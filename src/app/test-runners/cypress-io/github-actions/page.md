---
title: GitHub actions
---

Cypress team has created its [official GitHub Action](https://github.com/cypress-io/github-action). The action provides dependency installation, built-in caching, and multiple options for advanced workflow configuration. 

Using this GitHub Action is optional and some teams prefer their own custom setup. Replay integrates well with both workflows, as shown in examples below

{% callout %}
These instructions assume that you have already installed [`@replayio/cypress`](https://www.npmjs.com/package/@replayio/cypress) plugin into your project. [Follow the instructions on this page](/test-runners/cypress-io/record-your-first-replay) to learn how to install the plugin.
{% /callout %}

## Using GitHub Actions with `cypress-io/github-action`

When using the Cypress [GitHub Action](https://github.com/cypress-io/github-action), the CI setup requires just a couple of lines of code. For the Cypress run itself, the `replay-chromium` browser needs to be passed in to create recordings.

After test run finishes, an additional step needs to be added to upload all the recordings using `@replayio/action-upload` action.

```yaml {% fileName=".github/workflows/e2e.yml" highlight=["11-19"] lineNumbers=true %}
name: End-to-end tests
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Cypress run
        uses: cypress-io/github-action@v6
        with:
          browser: replay-chromium
        env:
          REPLAY_API_KEY: ${{ secrets.REPLAY_API_KEY }}
      - name: Upload replays
        if: always()
        uses: replayio/action-upload@v0.5.1
        with:
          api-key: ${{ secrets.REPLAY_API_KEY }}
```

## Using GitHub Actions without `cypress-io/github-action`

Without using GitHub Actions and running your Cypress tests by calling a script, the main principles stay the same:
- you need to make sure to pass `REPLAY_API_KEY` to your test run
- add step to your pipeline to upload your replays

There are a couple of different ways to achieve this. For example, you can update your `package.json` file with a custom script that runs your Cypress tests with Replay Browser
```json {% fileName="package.json" highlight=[3] %}
"scripts": {
  "cy:run": "cypress run", // original test script
	"cy:run:replay": "cypress run --browser=replay-chromium" // new test script
}
```

Use that new test script instead in your current workflow file, and add the environment variable(s):

```yaml {% fileName=".github/workflows/e2e.yml (partial)" lineNumbers=true highlight=[2] %}
- name: Cypress run
	run: npm run cy:run:replay
	env:
		REPLAY_API_KEY: ${{ secrets.REPLAY_API_KEY }}
```

Add a new step to run after your Cypress tests for uploading the replays:

```yaml {% fileName=".github/workflows/e2e.yml (partial)" lineNumbers=true %}
- name: Upload replays
  if: always()
  uses: replayio/action-upload@v0.5.1
  with:
    api-key: ${{ secrets.REPLAY_API_KEY }}
```

{% callout title="Recording strategies" %}
There are different strategies for creating your replays. For example you can use Replay only when retrying a failed test, or choose to upload recordings from failed tests only. See [docs on recording strategies](/ci-workflows/recording-strategies) to learn more.
{% /callout %}