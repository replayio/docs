import { test, expect } from '@playwright/test'

test('home page redirects to quickstart guide', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Get started with our Quickstart Guide').click()
  await expect(page).toHaveURL(/.*\/getting-started/)
  const heading = page.getByRole('heading', { name: 'Record your app' })
  await expect(heading).toBeVisible()
})
