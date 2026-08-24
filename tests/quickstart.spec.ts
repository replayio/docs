import { test, expect } from '@playwright/test'

test('root redirects to Replay QA overview', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL(/\/basics\/replay-qa\/overview/)
  await expect(
    page.getByRole('heading', { name: 'Replay QA Overview' }),
  ).toBeVisible()
})
