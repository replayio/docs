---
title: Frequently asked questions
---

{% accordion %}

{% accordion-item title="Do I need to use `line` reporter along with `@replayio/playwright/reporter`?" %}

Using `line` reporter is not required. `line` reporter will print out information about playwright test run to your terminal.

{% /accordion-item %}

{% accordion-item title="How do I group tests ran in a matrix or across multiple runners into the same test run?" %}

By default, each invocation of Playwright is grouped into a test run by a UUID generated when the run begins. To group multiple invocations of Playwright into the same run, set `RECORD_REPLAY_METADATA_TEST_RUN_ID` to the same UUID value and that will be used instead of generating a UUID for each.

Below is an example which runs three test suites using a matrix in Github Actions but groups the results into the same test run in Replay:

```yaml
jobs:
  test-run-id:
    runs-on: ubuntu-latest
    outputs:
      testRunId: ${{ steps.testRunId.outputs.testRunId }}
    steps:
      - id: testRunId
        run: echo testRunId=$(npx uuid) >> "$GITHUB_OUTPUT"
  test:
    needs: test-run-id
    runs-on: ubuntu-latest
    strategy:
      matrix:
        product: [frontend, backend, api]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Install dependencies
        run: npm ci
      - name: Install Replay Chromium
        run: npx replayio install
      - name: Run
        run: npm run test-${{ matrix.product }}
        env:
          RECORD_REPLAY_METADATA_TEST_RUN_ID: ${{ needs.test-run-id.outputs.testRunId }}
```

{% /accordion-item %}

{% accordion-item title="What’s in the `.replay` folder?" %}

`/.replay/runtimes` - this is where the replay browser(s) are installed

`/` - recorded replays are saved locally in the root folder

If you’re trying to cache the browser download, cache `~/.replay/runtimes` or simply cache it before creating replays.

{% /accordion-item %}

{% accordion-item title="How do I confirm that the browsers are installed correctly" %}

Run `ls -alR ~/.replay/runtimes` to see the contents of the runtimes folder.

{% /accordion-item %}

{% accordion-item title="What other environment variables can I configure?" %}

`RECORD_REPLAY_METADATA_TEST_RUN_TITLE` - manually apply a test run title, instead of being inferred from the latest commit

`RECORD_REPLAY_DIRECTORY` - set a custom directory (default: `~/.replay`)

{% /accordion-item %}
