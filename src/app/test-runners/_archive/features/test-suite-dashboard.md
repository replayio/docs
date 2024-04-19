---
title: Test Suite Dashboard
---

import { Callout } from 'nextra/components'

# Test Suite Dashboard

![Untitled (3).png](/images/test-suite-dashboard.png)

The **Test Suite Dashboard** is a powerful debugging interface for your test runs and individual test cases.

Test in CI can fail for many reasons:

- Issues with the test run environment
- An error thrown by the test runner
- A slow application under test causing a timeout
- A regression introduced by a recent change

The dashboard provides multiple views to identify the root cause of failures in CI. Navigate between views using the drop down menu.

### Test Runs view

The Test Runs view shows all latest results by test run. When accessing the dashboard from a link in a **Test Suites Comment**, the specific run for that commit will be selected.

Replay shows you contextual information from CI, including:

- Commit message
- User triggering run
- Branch name
- Time since test run
- Run pass/fail status
- How many tests failed (if failures)
- How many tests ran (if no failures)

![Screen Shot 2022-07-31 at 10.53.53 PM.png](/images/Screen_Shot_2022-07-31_at_10.53.53_PM_pxxca.png)

This information can help you make critical triage decisions and offer insights for debugging. For example:

- A test failure triggered by a release may be user-impacting
- A failure on a work-in-progress branch may be de-prioritized
- If there is a subsequent passing run for the same branch, the failure may have been resolved
- If all tests failed, it may point to an issue in the environment or with the test runner
- The commit message may give context, like “trying something, may break”

<Callout type="info" emoji="👉">
For Cypress, replays and pass/fail status is based on spec file, not tests. This is because the same browser session is used for the entire spec file.
</Callout>

### Test run details

The sidebar provides additional details, including the time it took to execute the run and a link to the run in GitHub Actions. You also see the name, pass/fail status, and replay for each test, along with the comment count on the replay.

Click the play icon to open the replay of that test from the run. From here, you can jump right into debugging.

### Test Results view

When a test fails, it can be helpful to see how the test previously performed. This can help you:

- Identify how often a test fails
- Identify if this is the first failure
- View a replay of a passing run for debugging comparison

Click the name of a test in the Test run details sidebar to view recent runs of a specific test.

![Screen Shot 2022-07-31 at 11.00.04 PM.png](/images/Screen_Shot_2022-07-31_at_11.00.04_PM_hrmsr.png)

For each run, see the test pass/fail status, branch, the time since the test run, the user triggering the run, and a link to the replay.

<Callout type="info" emoji="👉">
Ready to get started? Contact us [on Discord](https://replay.io/discord) or at support@replay.io to get set up.
</Callout>
