---
title: Cypress.io Overview
description: Add the Cypress Replay plugin to your suite and start time travel debugging in minutes.
image: /images/Cypress-hero.png
---

To use Replay to record your Cypress.io tests, you can replace the browser you're using to record your tests with [the Replay Chrome driver](/reference/replay-runtimes/replay-chrome):

{% icon icon="cypress" class="w-6 h-5 inline-block mr-1 mb-1" /%} Cypress:{% class="font-semibold"%}

```sh
npx cypress run --browser replay-chromium
```

{% quick-links title="Read more" description="See how you're able to improve your Replay experience by integrating with different CI/CD solutions and other reference documentation." %}

{% quick-link
  title="Record Your First Cypress test"
  icon="cypress"
  href="/basics/getting-started/record-your-cypress-tests"
  description="Learn how to get started with Cypress and Replay"
/%}

{% quick-link
  title="Recording options"
  icon="record"
  href="/reference/test-runners/cypress-io/recording-options"
  description="See what recording options are available for Cypress.io and Replay"
/%}

{% quick-link
  title="GitHub Actions"
  icon="github"
  href="/reference/test-runners/cypress-io/github-actions"
  description="See how you can record all of your Cypress.io tests in GitHub Actions"
/%}

{% quick-link
  title="Other CI Providers"
  icon="timeline"
  href="/reference/test-runners/cypress-io/other-ci-providers"
  description="Record your Cypress.io tests using other CI providers."
/%}

{% /quick-links %}
