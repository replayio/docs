import { test, expect } from '@playwright/test'

test('navigation expanding works', async ({ page }) => {

  await page.goto('/')
  await page.getByText('Intro to time travel').click()
  const navigationItem = page.getByText('What is time travel?', {exact: true})
  await expect(navigationItem).toBeVisible()

})

test('navigation collapsing works', async ({ page }) => {

  await page.goto('/time-travel-intro/what-is-time-travel')
  // sidebar items are expanded
  const navigationItem = page.getByText('Annotate the timeline', {exact: true})
  await expect(navigationItem).toBeVisible()
  
  const nav = page.locator('nav')
  await nav.getByText('Intro to time travel').click()
  await expect(navigationItem).not.toBeVisible()

})