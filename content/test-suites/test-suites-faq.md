---
title: Test Suites FAQ
---
# Test Suites FAQ

## How do I sign up for the Replay Test Suites beta?

Join the [waitlist](https://replayio.typeform.com/to/jTudlerL) or reach out by emailing us at hey@replay.io or join our [Discord](https://replay.io/discord) #testing channel. There is a preference for teams with the following qualifications:

- Using Cypress or Playwright Test
- Runs tests in CI with GitHub Actions
- Wants to record with Replay in CI
- Flexibility with browser and OS requirements

## Is a Test Team required?

A Replay Test Team is required to properly view test runs, results, and replays in the Test Suites Dashboard.

While you can record tests with Replay and upload them using any team API key, you will not have access to test-specific views without a Test Team.

## How do I include matrix strategy variables to my test run?

You can compose a string that details your matrix strategy, and pass it as an environment variable using `RECORD_REPLAY_METADATA_TEST_RUN_TITLE`. That will let you differentiate different test runs in the library.

[Here](https://github.com/replayio/flake/blob/main/.github/workflows/ci.yml#L59) is an example.

## How do I link tests to the same test run if I split my tests across jobs?

Each test run is given a UUID when the test runner starts but can be overridden by the `RECORD_REPLAY_METADATA_TEST_RUN_ID` environment variable. If you set the environment variable to the same value for each job, they will all be included in the same test run in Replay!

```yaml
jobs:
  generate-test-run-id:
    name: Generate Test Run ID
    runs-on: ubuntu-latest
    steps:
      - id: uuid
				run: echo "value=$(npx uuid)" >> $GITHUB_OUTPUT
        shell: sh
    outputs:
      testRunId: ${{ steps.uuid.outputs.value }}
e2etest:
    name: End-to-end tests (${{ matrix.shard }})
    runs-on: ubuntu-latest
    needs: [generate-test-run-id]
    strategy:
      # GH cancels other matrixed jobs by default if one fails. We want all E2E jobs to complete.
      fail-fast: false
      matrix:
        shard: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    timeout-minutes: 20
    steps:
      - uses: replayio/action-playwright@main
        with:
          command: npx playwright test --shard ${{ matrix.shard }}/10 --reporter=@replayio/playwright/reporter,line
          api-key: ${{ env.REPLAY_API_KEY }}
        env:
          RECORD_REPLAY_METADATA_TEST_RUN_ID: ${{ needs.generate-test-run-id.outputs.testRunId }}
```

## What test runners are supported?

Cypress and Playwright Test are the primary test runners supported in Replay Test Suites beta. 

We have **experimental** support for Selenium Webdriver, Puppeteer, Jest, and Node-based Playwright with additional configuration.

## What browsers are supported?

- Replay Firefox (macOS, Linux)
- Replay Chromium for Linux and Mac and Windows (alpha)

## What is the performance overhead when recording?

Replay’s recorder is twice as fast as the Cypress Video recorder and comparable to recording a Session Replay. The performance overhead of recording with Replay will vary depending on the browser, the test runner, your test suite, the application under test, the recording environment, and other factors. We aim to Replay overhead as low as possible so your CI runs are not impacted.

Please let us know if you experience significant recording overhead when using Replay so we can troubleshoot. 

## Are only failed test replays uploaded?

- When using `action-cypress` and `action-playwright`, only replays of failed tests are uploaded by default. To upload all replays, set the `upload-all` argument to `true` in the GitHub Action.
- When using `action-upload` to upload tests, all replays generated (passing and failing) will be uploaded unless a filter is passed to the `filter` argument.
- When using `@replayio/replay`, use `upload-all` to upload all recordings. Uploading only failed replays with `@replayio/replay` will require a custom script to identify failed tests and pass IDs to `upload` instead.

## Is using GitHub Actions required?

Using GitHub Actions is recommended because you get access to easy configuration and additional functionality through our Replay GitHub Actions.

However, you can use a different CI provider by configuring your run command manually and using `@replayio/replay` to upload recordings. See [Manual CI configuration](/test-suites/cypress/continuous-integration/other-ci-providers) for more.

## How do I update the Replay Browser?

When running in CI, the latest version of the Replay Browser will be installed on each run.

To update your browser locally, use `npx @replayio/replay update-browsers`. Please note that the desktop version of the Replay Browser used to record manually is not the same as the browsers installed for testing.

The desktop Replay Browser and testing Replay Browsers must be updated separately.

## What causes Replays to be missing from the test view?

This can be caused by a number of reasons:
1. The replay wasn't uploaded at all, or it wasn't uploaded correctly
2. The replay has been deleted due to it being past the retention limit allowed for your team
