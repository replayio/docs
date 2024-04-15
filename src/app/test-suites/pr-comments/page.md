---
title: Pull Request Comments
description: Pull Request Comments show updated results of your test run with links to replays and the Test Suite Dashboard, all from the pull request in GitHub.
---

Once you have your test suites integrated with Replay in CI, you can add our bot to your GitHub repository. The bot will leave comments on PRs with a summary of the most recent test run. 

{% figure
  alt="Pull request comments"
  src="/images/pull-request-comments.png"
  gradient="bg-gradient-to-br from-pink-500 to-rose-400"
  ripple=true
  height=850
  width=870
/%}

The comment also includes links to replays of the tests and the test run in the Test Suite Dashboard. The comment will automatically update with the most recent results every time a new commit is pushed.

For this to work, simply install our [Github App](https://github.com/apps/replay-io).
