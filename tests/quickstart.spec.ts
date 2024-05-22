import { test, expect } from '@playwright/test'

test('home page redirects to quickstart guide', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Get started with our Quickstart Guide').click()
  await expect(page).toHaveURL(/.*\/quickstart/)
  const heading = page.getByText('Quickstart guide', { exact: true })
  await expect(heading).toBeVisible()
})
