---
title: Recent runs
description: Replay’s Recent Runs dashboard alerts you to new issues in your test suite so you can see which run introduced the problem and address it quickly.
image: /images/runs.png
---

## Overview

The Recent runs dashboard serves two purposes. The first is to make it easy to spot regressions quickly. The second is to help developers see their recent runs and jump into the replays.

{% callout type="link" title="Shareable URLs" light=true %}
When you notice a problem with a recent run, it’s easy to select the run, copy the URL, and share it with your team in Slack or Linear.
{% /callout %}

## Recent Runs view

{% twocolumns %}
{% group %}

1. **Key Performance Indicators** See your test suites’ failure rate and daily breakdown at a glance.
2. **Chronological list** Spot regressions and drill down into recent test runs with the Recent Runs view.

{% /group %}

{% figure
  alt="Test Suite Runs view"
  src="/images/recent-runs.png"
  height=480
  width=480
/%}
{% /twocolumns %}

## Filters

{% twocolumns %}
{% group %}

To focus on specific tests, use filters. These enable you to view only the main branch, examine failing runs, or search through runs.

{% callout type="link" title="Top failures and flakes" href="/test-suites/top-failing-and-flaky-tests"%}
To analyze your flaky tests, open the [Tests view](/test-suites/top-failing-and-flaky-tests). Here, you can see details of your top failures and test flakes.
{% /callout %}

{% /group %}

{% figure
  alt="Recent Runs filters"
  src="/images/filters.png"
  height=480
  width=480
/%}
{% /twocolumns %}

## Run details

{% twocolumns %}
{% group %}

1. **Summary** each runs are organized into a failing, flaky and passing tests.
2. **Metadata** runs are associated with a commit message, author, branch name and other relevant metadata.
3. **Search** find the tests you’re looking for quickly with powerful search and filtering.

{% /group %}

{% figure
  alt="Test Suite Run detail view"
  src="/images/runs-view-middle-column.png"
  height=380
  width=380
/%}

{% /twocolumns %}

## Test details

{% twocolumns %}
{% group %}
Test details include all recorded replays from the test run.

Common errors are displayed below to provide an overview of the test failure messages.

Clicking on a recording opens the replay so that you can inspect it with Replay DevTools.
{% /group %}

{% figure
  alt="Test Suite Run detail view"
  src="/images/runs-view-right-column.png"
  height=380
  width=380
/%}

{% /twocolumns %}

{% callout type="link" title="PR comments" href="/test-suites/pr-comments" %}
The Replay GitHub PR comment includes a link to the test run, so it’s easy to jump to the Recent runs dashboard and view prior runs. See the PR comment docs. [PR comment docs](/test-suites/pr-comments).

{% /callout %}
