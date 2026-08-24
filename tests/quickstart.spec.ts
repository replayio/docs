import { test, expect } from '@playwright/test'

test('home page links to Replay QA overview', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('[data-test-id="page"]')).toBeVisible()

  const overview = page
    .locator('[data-test-id="page"] a[href="/basics/replay-qa/overview"]')
    .first()
  await overview.scrollIntoViewIfNeeded()
  await overview.click({ force: true })

  await expect(page).toHaveURL(/\/basics\/replay-qa\/overview/)
  await expect(
    page.getByRole('heading', { name: 'Replay QA Overview' }),
  ).toBeVisible()
})
