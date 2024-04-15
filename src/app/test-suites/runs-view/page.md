---
title: Runs view
description: The Test Runs view shows all latest results by test run. You can take a look at your tests at a high level, drive down test flakes or jump into a particular test to start debugging.
---

{% figure
  alt="Test Suite Runs view"
  src="/images/runs-view-large.png"
  gradient="bg-gradient-to-br from-sky-500 to-sky-200"
  ripple=true
  showRadius=false
  height=870
  width=870
/%}

Test runs view provides yout with a multiple column dashboard. Each part allows you to examine your recent test runs.

## Test runs

The "Test Runs" column displays a list of recent test runs, sorted by the most recent. If any tests fail, the column shows the number of failed tests.

The "Failure Rate" graph shows the trend of your test suite's performance over the past 7 days.

{% figure
  alt="Test Suite Runs view"
  src="/images/runs-view-left-column.png"
  showRadius=false
  height=480
  width=480
/%}

### Filters
To focus on specific tests, use filters. These enable you to view only the main branch, examine failing runs, or search through runs.

{% callout type="link" title="Top failures and flakes" %}
To analyze your flaky tests, open the [Tests view](/test-suites/top-failing-and-flaky-tests). Here, you can see details of your top failures and test flakes.
{% /callout %}

## Run detail
Each run detail shows details of picked test run. Replay shows you contextual information from CI, including:

{% twocolumns %}
- Commit message
- User triggering run
- Branch name
- Time since test run
- Run pass/fail status
- How many tests failed (if failures)
- How many tests ran (if no failures)
- Links to Pull request and workflow page

{% figure
  alt="Test Suite Run detail view"
  src="/images/runs-view-middle-column.png"
  height=380
  width=380
/%}

{% /twocolumns %}

### Test status
Tests are categorized into flaky, failed, and successful runs for easy viewing. Additionally, you can search and filter your tests for more specific insights.


## Test details

Test details include all recorded replays from the test run. Common errors are displayed below to provide an overview of the test failure messages. Clicking on a test opens the Replay DevTools, allowing you to start debugging that specific test run.

{% figure
  alt="Test Suite Run detail view"
  src="/images/runs-view-right-column.png"
  showRadius=false
  height=380
  width=380
/%}


{% callout type="link" title="PR comments" %}
You can access the test suites dashboard directly from your Pull request using. This feature lets you quickly navigate to your flaky or failing tests from your pull request. For more details, see the [PR comment docs](test-suites/pr-comments).

{% /callout %}