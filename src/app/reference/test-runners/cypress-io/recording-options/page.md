---
title: Configuration
description: There are different modes and strategies that help you create your replays more effectively. By default, every test is recorded, but you can choose to create your replays only when problems appear, saving costs and time.
---

## Diagnostic Modes

The `@replayio/cypress` plugin includes a Cypress runner that includes diagnostic modes to help identify issues with the Replay browsers. Internally, the plugin uses [Cypress’s module API](https://docs.cypress.io/guides/guides/module-api) to invoke Cypress multiple times with different environment variables to adjust the behavior of the Replay browser.

{% tabs labels=["npm", "yarn", "pnpm"] %}
{% tab %}

```sh
npx @replayio/cypress run --mode [mode] [...other cypress parameters]
```

{% /tab %}
{% tab %}

```sh
yarn @replayio/cypress run --mode [mode] [...other cypress parameters]
```

{% /tab %}
{% tab %}

```sh
pnpx @replayio/cypress run --mode [mode] [...other cypress parameters]
```

{% /tab %}
{% /tabs %}

## Record on Retry

Runs the test suite once with recording disabled and if any specs fail, those are re-ran with recording enabled.

{% tabs labels=["npm", "yarn", "pnpm"] %}
{% tab %}

```sh
npx @replayio/cypress run --mode record-on-retry
```

{% /tab %}
{% tab %}

```sh
yarn @replayio/cypress run --mode record-on-retry
```

{% /tab %}
{% tab %}

```sh
pnpx @replayio/cypress run --mode record-on-retry
```

{% /tab %}
{% /tabs %}

## Stress

Runs the test suite 10 times regardless of test result. This mode is useful for diagnosing tests that have a low flakiness rate and are hard to reproduce locally.

{% tabs labels=["npm", "yarn", "pnpm"] %}
{% tab %}

```sh
npx @replayio/cypress run --mode stress
```

{% /tab %}
{% tab %}

```sh
yarn @replayio/cypress run --mode stress
```

{% /tab %}
{% tab %}

```sh
pnpx @replayio/cypress run --mode stress
```

{% /tab %}
{% /tabs %}

## Diagnostics

{% tabs labels=["npm", "yarn", "pnpm"] %}
{% tab %}

```sh
npx @replayio/cypress run --mode diagnostics --level basic
```

{% /tab %}
{% tab %}

```sh
yarn @replayio/cypress run --mode diagnostics --level basic
```

{% /tab %}
{% tab %}

```sh
pnpx @replayio/cypress run --mode diagnostics --level basic
```

{% /tab %}
{% /tabs %}

`--level basic`

When level is set to `basic`, the test suite is ran 3 times:

1. Recording disabled
2. Recording enabled
3. Recording enabled with debug assertions disabled

`--level full`

When level is set to `full`, the test suite is run _many_ times with each run disabling a different browser feature.

{% tabs labels=["npm", "yarn", "pnpm"] %}
{% tab %}

```sh
npx @replayio/cypress run --mode diagnostics --level full --spec cypress/e2e/failing-spec.ts
```

{% /tab %}
{% tab %}

```sh
yarn @replayio/cypress run --mode diagnostics --level full --spec cypress/e2e/failing-spec.ts
```

{% /tab %}
{% tab %}

```sh
pnpx @replayio/cypress run --mode diagnostics --level full --spec cypress/e2e/failing-spec.ts
```

{% /tab %}
{% /tabs %}

{% callout type="warning" %}
This mode is mostly used for diagnosing problems with integration of Replay into your test run. Due to the number of runs (currently 38), we don’t recommend using the `--level full` flag for standard test runs. Be sure to limit using this mode to a specific spec file that is failing by using `--spec [path to spec]`.
{% /callout %}
