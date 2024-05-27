import { test, expect } from '@playwright/test'

test('navigation expanding works', async ({ page }) => {

  await page.goto('/')
  await page.getByText('Test Suite Dashboard').click()
  const navigationItem = page.getByText('Recent runs')
  await expect(navigationItem).toBeVisible()

})

test('navigation collapsing works', async ({ page }) => {

  await page.goto('/basics/test-suites/recent-runs')
  // sidebar items are expanded
  const navigationItem = page.getByText('PR Comments', {exact: true})
  await expect(navigationItem).toBeVisible()

  const nav = page.locator('nav')
  await nav.getByText('Test Suite Dashboard').click()
  await expect(navigationItem).not.toBeVisible()

})
