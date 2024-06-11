---
title: Troubleshooting
description: This page includes common issues that you may encounter when using Playwright and Replay and some tips on how to troubleshoot them.
---

{% accordion %}

{% accordion-item title="Running tests with verbose logs" %}

Running your tests with verbose logs can help you identify issues with your test suite.

```bash
DEBUG=* npx playwright test # will log everything
DEBUG=replay:* playwright test # will include all replay logs
DEBUG=replay:playwright:* playwright test # will include all replay playwright logs
DEBUG=replay:cli:* playwright test # will include all replay cli logs
```

{% /accordion-item %}

{% accordion-item title="Failed to initialize metadata file" %}

```bash
Failed to initialize metadata file at /home/runner/.replay/PLAYWRIGHT_METADATA_0

Error: ENOENT: no such file or directory, open '/home/runner/.replay/PLAYWRIGHT_METADATA_0'
```

If you’re seeing this error in CI, it’s likely that the replay browser wasn’t installed correctly. The browser should be installed alongside all your other dependencies, but in the case that it’s not, try the following:

1. Disable caching
2. Have an explicit step for installing the replay browser - `npx replayio install`

{% /accordion-item %}
{% /accordion %}
