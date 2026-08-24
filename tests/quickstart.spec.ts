import { test, expect } from '@playwright/test'

test('home page links to Replay QA overview', async ({ page }) => {
  await page.goto('/')
  // Use the guide card link — the hero CTA sits under the sticky header and
  // isn't reliably clickable in automated tests.
  await page.locator('a.group[href="/basics/replay-qa/overview"]').click()
  await expect(page).toHaveURL(/.*\/basics\/replay-qa\/overview/)
  await expect(
    page.getByRole('heading', { name: 'Replay QA Overview' }),
  ).toBeVisible()
})
