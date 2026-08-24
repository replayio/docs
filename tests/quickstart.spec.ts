import { test, expect } from '@playwright/test'

test('home page links to Replay QA overview', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('home-replay-qa-overview').click()
  await expect(page).toHaveURL(/.*\/basics\/replay-qa\/overview/)
  await expect(
    page.getByRole('heading', { name: 'Replay QA Overview' }),
  ).toBeVisible()
})
