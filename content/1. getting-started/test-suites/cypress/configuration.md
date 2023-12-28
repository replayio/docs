---
title: Configuration
description: 'There are different modes and strategies that help you create your recordings more effectively. By default, every test is recorded, but you can choose to create your recordings only when problems appear, saving costs and time.'
---
## Diagnostic Modes

The `@replayio/cypress` plugin includes a Cypress runner that includes diagnostic modes to help identify issues with the Replay browsers. Internally, the plugin uses [Cypress’s module API](https://docs.cypress.io/guides/guides/module-api) to invoke Cypress multiple times with different environment variables to adjust the behavior of the Replay browser.

::code-group  
  ```bash [npm]
  npx @replayio/cypress run --mode [mode] [...other cypress parameters]
  ```
  ```bash [yarn]
  yarn @replayio/cypress run --mode [mode] [...other cypress parameters]
  ```
  ```bash [pnpm]
  pnpx @replayio/cypress run --mode [mode] [...other cypress parameters]
  ```
  ```bash [bun]
  bunx @replayio/cypress run --mode [mode] [...other cypress parameters]
  ```
::

### Record on Retry

::code-group
  ```bash [npm]
  npx @replayio/cypress run --mode record-on-retry
  ```
  ```bash [yarn]
  yarn @replayio/cypress run --mode record-on-retry
  ```
  ```bash [pnpm]
  pnpx @replayio/cypress run --mode record-on-retry
  ```
  ```bash [bun]
  bunx @replayio/cypress run --mode record-on-retry
  ```
::

Runs the test suite once with recording disabled and if any specs fail, those are re-ran with recording enabled.

### Stress
::code-group
  ```bash [npm]
  npx @replayio/cypress run --mode stress
  ```
  ```bash [yarn]
  yarn @replayio/cypress run --mode stress
  ```
  ```bash [pnpm]
  pnpx @replayio/cypress run --mode stress
  ```
  ```bash [bun]
  bunx @replayio/cypress run --mode stress
  ```
::

Runs the test suite 10 times regardless of test result. This mode is useful for diagnosing tests that have a low flakiness rate and are hard to reproduce locally.

### Diagnostics

::code-group
  ```bash [npm]
  npx @replayio/cypress run --mode diagnostics --level basic
  ```
  ```bash [yarn]
  yarn @replayio/cypress run --mode diagnostics --level basic
  ```
  ```bash [pnpm]
  pnpx @replayio/cypress run --mode diagnostics --level basic
  ```
  ```bash [bun]
  bunx @replayio/cypress run --mode diagnostics --level basic
  ```
::

#### **`--level basic`**

When level is set to `basic`, the test suite is ran 3 times:

1. Recording disabled
2. Recording enabled
3. Recording enabled with debug assertions disabled

#### **`--level full`**

When level is set to `full`, the test suite is run *many* times with each run disabling a different browser feature. 

::code-group
  ```bash [npm]
  npx @replayio/cypress run --mode diagnostics --level full --spec cypress/e2e/failing-spec.ts
  ```
  ```bash [yarn]
  yarn @replayio/cypress run --mode diagnostics --level full --spec cypress/e2e/failing-spec.ts
  ```
  ```bash [pnpm]
  pnpx @replayio/cypress run --mode diagnostics --level full --spec cypress/e2e/failing-spec.ts
  ```
  ```bash [bun]
  bunx @replayio/cypress run --mode diagnostics --level full --spec cypress/e2e/failing-spec.ts
  ```
::

::callout{icon="i-heroicons-light-bulb"}
This mode is mostly used for diagnosing problems with integration of Replay into your test run. Due to the number of runs (currently 38), we don’t recommend using the `--level full{:bash}` flag for standard test runs. Be sure to limit using this mode to a specific spec file that is failing by usiing `--spec [path to spec]{:bash}`.
::

## Recording strategies

Depending on what problem you’re trying to solve, there are two primary ways of using Replay.

### Record failures on PRs

This is useful for debugging failing tests in pull requests. It only records failing tests so there’s minimal overhead, and those replays will be available for debugging immediately after tests finish.

Run your tests and pass the mode `record-on-retry` .

::code-group
  ```bash [npm]
  npx @replayio/cypress run --mode record-on-retry
  ```
  ```bash [yarn]
  yarn @replayio/cypress run --mode record-on-retry
  ```
  ```bash [pnpm]
  pnpx @replayio/cypress run --mode record-on-retry
  ```
  ```bash [bun]
  pnpx @replayio/cypress run --mode record-on-retry
  ```
::

### Record all on merge to master

This is useful for busting flakes. It only records failing tests so there’s minimal overhead, and those replays will be available for debugging immediately after tests finish.

Run your tests as usual, but set the trigger to only run on merge to master.

## See also
- [Pull request comments](/test-suites/features/pull-request-comments)
- [Replay CLI](/reference-guide/recording/replay-cli)
