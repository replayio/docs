import { test, expect } from '@playwright/test'

test('table of contents redirects to proper item', async ({ page }) => {

  await page.goto('/quickstart')
  
  const toc = page.locator('[data-testid="table-of-contents"]')
  await toc.getByText('Upload your replays').click()
  await expect(page).toHaveURL(/.*\/quickstart#upload-your-replays/)

  const article = page.locator('article')
  const heading = article.getByText('Upload your replays')
  await expect(heading).toBeVisible()

})