---
title: Cypress FAQ
---

import Faq from '@components/Faq'

# FAQ

<Faq>
  <Faq.Question>
    ### How do I hide the Cypress panel?
  </Faq.Question>
  <Faq.Answer>
    `CYPRESS_NO_COMMAND_LOG` should work in versions less than 10 and greater than 10.3 (ish)...
  </Faq.Answer>
  <Faq.Question>
  ### How do I get debug logs?
  </Faq.Question>
  <Faq.Answer>
    - Plugin debugging: logs about what the plugin is doing (no support file logs)
    - `DEBUG=replay:cypress:*` , or just `DEBUG=replay:cypress:plugin`
    - Browser debugging: everything that the browser and driver is doing
    - `DEBUG=cypress:launcher:browsers RECORD_REPLAY_VERBOSE=1`
    - All the logs
    - `DEBUG=cypress:*,replay:* RECORD_REPLAY_VERBOSE=1`
  </Faq.Answer>
  <Faq.Question>
  ### How do I use Replay with earlier versions of Cypress?
  </Faq.Question>
  <Faq.Answer>
  Replay works best with Cypress 10.9 or later but can be used with Cypress 8 or later with some additional environment configuration:

  - `RECORD_ALL_CONTENT` must be set when using `replay-firefox` to record replays
  - `RECORD_REPLAY_METADATA_FILE` must be set for either browser to capture metadata about the test run.

  When running locally, you can set these variables in your npm scripts so they are set every time:

  ```json
  "scripts": {
    "test:cypress": "cypress run",
    "test:cypress:replay": "RECORD_ALL_CONTENT=1 RECORD_REPLAY_METADATA_FILE=/tmp/replay-metadata cypress run"
  }
  ```

  On CI, you can set these environment variables on the task that runs your tests:

  ```yaml
    # Install NPM dependencies, cache them correctly  
    # and run all Cypress tests
    - name: Cypress run
      uses: cypress-io/github-action@v5
        with:
          browser: replay-chromium
        env:
          RECORD_ALL_CONTENT: 1
          RECORD_REPLAY_METADATA_FILE: /tmp/replay-metadata

  ```
  </Faq.Answer>
  <Faq.Question>
  ### How do I group tests ran in a matrix or across multiple runners into the same test run?
  </Faq.Question>
  <Faq.Answer>
  By default, each invocation of Cypress is grouped into a test run by a UUID generated when the run begins. To group multiple invocations of Cypress into the same run, set `RECORD_REPLAY_METADATA_TEST_RUN_ID` to the same UUID value and that will be used instead of generating a UUID for each.

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
        - name: Run
          run: npm run test-${{ matrix.product }}
          env:
            RECORD_REPLAY_METADATA_TEST_RUN_ID: ${{ needs.test-run-id.outputs.testRunId }}
  ```
  </Faq.Answer>
  <Faq.Question>
  ### What’s in the `.replay` folder?
  </Faq.Question>
  <Faq.Answer>
  `/.replay/runtimes` - this is where the replay browser(s) are installed

  `/` - recorded replays are saved locally in the root folder

  If you’re trying to cache the browser download, cache `~/.replay/runtimes` or simply cache it before creating replays.
  </Faq.Answer>
  <Faq.Question>
  ### How do I confirm that the browsers are installed correctly
  </Faq.Question>

  Run `ls -alR ~/.replay/runtimes` to see the contents of the runtimes folder.

  <Faq.Question>
  ### What other environment variables can I configure?
  </Faq.Question>
  <Faq.Answer>
  `REPLAY_SKIP_BROWSER_DOWNLOAD` - keeps browsers from being downloaded and installed during `npm install`

  `RECORD_REPLAY_METADATA_TEST_RUN_TITLE` - manually apply a test run title, instead of being inferred from the latest commit

  `RECORD_REPLAY_DIRECTORY` - set a custom directory (default: `~/.replay`)
  </Faq.Answer>
</Faq>