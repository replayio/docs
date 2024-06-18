---
title: Pull Request Comments
keywords: PR, PR Comments, GitHub
description: Pull Request Comments show updated results of your test run with links to replays and the Test Suite Dashboard, all from the pull request in GitHub.
image: /images/pr-comment.png
---

## Overview

Once you have your test suites integrated with Replay in CI, you can add our bot to your GitHub repository. The bot will leave comments on PRs with a summary of the most recent test run.

The comment also includes links to replays of the tests and the test run in the Test Suite Dashboard. The comment will automatically update with the most recent results every time a new commit is pushed.

{% steps %}

## Install the app

Go to the Replay [Github App](https://github.com/apps/replay-io) page and click on **Configure**. You will be prompted to select the organization and repositories that the PR Comments bot will access to.

{% figure
    alt="PR Comment bot installation"
    src="/images/pr_comments_installation.png"
    height=440
    width=870
/%}

## Set up your workflow file

The PR Comment bot listens to the `pull_request` event. It will collect links from your test runs and show them as a comment in your pull request conversation tab on GitHub. This means that your workflow file needs to have run on the `pull_request` event.

```yml
name: Playwright Tests
on: [pull_request]
jobs:
  ### ...your jobs
```

## Run your tests

After you run your test, PR comment bot will collect links from your test step, and show them as a comment in your pull request conversation tab on GitHub.

{% figure
    alt="PR Comment bot in GitHub"
    src="/images/pull-request-comments.png"
    height=440
    width=870
/%}

{% callout %}
PR comment bot currently only listens to `pull_request` event, which means that comments will not appear on events such as `push` or `workflow_dispatch`. If you are running your tests against Vercel preview deployments, you can [check out this page](/learn/examples/vercel) to learn how to set up your workflow file.
{% /callout %}

{% /steps %}
