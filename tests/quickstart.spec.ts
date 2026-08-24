import { test, expect } from '@playwright/test'

test('home page links to Replay QA overview', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Replay QA overview' }).click()
  await expect(page).toHaveURL(/.*\/basics\/replay-qa\/overview/)
  const heading = page.getByRole('heading', { name: 'Replay QA Overview' })
  await expect(heading).toBeVisible()
})
