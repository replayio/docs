---
title: Writing new tests
---

This page walks through the steps of creating a new test with [Playwright Codegen](https://playwright.dev/docs/codegen).

## Creating a new test

Playwright Codegen makes it significantly easier to write new tests. In the example below we view a user's profile.

{% tabs labels=["Video", "Code"] %}
{% tab %}

{% video src="codegen" autoplay=false /%}

{% /tab %}
{% tab %}

```ts
import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('/dashboard/users')
  await page.getByRole('link', { name: 'Leanne Graham ⍥' }).click()
  await expect(
    page.getByRole('heading', { name: 'Leanne Graham' }),
  ).toBeVisible()
})
```

{% /tab %}
{% /tabs %}

### Filling out a form

You can also use Playwright Codegen to type in a form. In the example below, we search for the user "Ervin" and click to view his profile.

{% tabs labels=["Video", "Code"] %}
{% tab %}

{% video src="codegen2" autoplay=false /%}

{% /tab %}
{% tab %}

```ts
import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('/dashboard/users')
  await page.getByPlaceholder('Search Names...').click()
  await page.getByPlaceholder('Search Names...').fill('erv')
  await page.getByPlaceholder('Search Names...').press('Enter')
  await page.getByRole('link', { name: 'Ervin Howell ⍥' }).click()
  await expect(
    page.getByRole('heading', { name: 'Ervin Howell' }),
  ).toBeVisible()
})
```

{% /tab %}
{% /tabs %}

### Waiting for a value to be prsent

You can also use Playwright Codegen to add assertions for when a value is present. In the example below, we wait for the invoice to load before changing the title to "Expensive!".

{% tabs labels=["Video", "Code"] %}
{% tab %}

{% video src="codegen3" autoplay=false /%}

{% /tab %}
{% tab %}

```ts
import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('/dashboard/invoices')
  await page.getByRole('link', { name: '#2 - qui est es ⍥' }).click()
  await expect(page.getByPlaceholder('Invoice Title')).toHaveValue(
    'qui est esse',
  )
  await page.getByPlaceholder('Invoice Title').click()
  await page.getByPlaceholder('Invoice Title').press('ControlOrMeta+a')
  await page.getByPlaceholder('Invoice Title').fill('Expensive!')
  await page.getByRole('button', { name: 'Save' }).click()
  await page.getByRole('link', { name: '#4 - eum et est ⍥' }).click()
  await page.getByRole('link', { name: '#2 - Expensive! ⍥' }).click()
  await expect(page.getByPlaceholder('Invoice Title')).toHaveValue('Expensive!')
  await page.getByText('Saved!').click()
})
```

{% /tab %}
{% /tabs %}
