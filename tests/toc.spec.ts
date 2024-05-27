import { test, expect } from '@playwright/test'

test('table of contents redirects to proper item', async ({ page }) => {
  await page.goto('/basics/getting-started/record-your-app')

  const toc = page.locator('[data-testid="table-of-contents"]')
  await toc.getByText('Inspect your replay').click()
  await expect(page).toHaveURL(/.*\/record-your-app#inspect-your-replay/)

  const article = page.locator('article')
  const heading = article.getByText('Inspect your replay')
  await expect(heading).toBeVisible()
})
