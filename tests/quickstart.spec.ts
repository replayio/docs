import { test, expect } from '@playwright/test'

test('home page redirects to the Replay QA overview', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL(/\/basics\/replay-qa\/overview/)
  await expect(
    page.getByRole('heading', { name: 'Replay QA overview' }),
  ).toBeVisible()
})
