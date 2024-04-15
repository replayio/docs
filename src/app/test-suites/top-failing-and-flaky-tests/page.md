---
title: Top failing and flaky tests
description: Replay gives you an overview of your top failures and flaky tests, allowing you to focus on the most critical issues.
---

## Sort by top failures
{% twocolumns %}
{% group %}
You can sort your tests by those that fail the most, helping you prioritize the most critical issues for fixing. 

The percentage shown in the icon indicates how often this test fails across all runs.
{% /group %}
{% figure 
  alt="Test runs sorted by failure rate"
  src="/images/sort-by-failed.png"
  height=870
  width=970
/%}
{% /twocolumns %}



## Sort by flaky rate
{% twocolumns %}
{% group %}
This view displays your most flaky tests, which are tests that fail initially but pass upon retry. 

This behavior is often due to factors connected to the testing environment, (seemingly) random frontend timing issues, or unpredicted race conditions. 

These cause inconsistent results across test executions.
{% /group %}
{% figure 
  alt="Test runs sorted by flakiness rate"
  src="/images/sort-by-flaky.png"
  height=870
  width=870
/%}
{% /twocolumns %}