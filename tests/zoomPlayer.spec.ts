import { test, expect } from '@playwright/test'

test.skip('player zoom in', async ({ page }) => {

  await page.goto('/test-runners/playwright/debugging-tests')

  const playerZoomedOut = page.locator('[data-testid="zoomed-out-player"]').first() 
  await playerZoomedOut.click()
  
  const playerZoomedIn = page.locator('[data-testid="zoomed-in-player"]')
  await expect(playerZoomedIn).toHaveCount(1)
  
  playerZoomedIn.click()
  await expect(playerZoomedIn).toHaveCount(0)

})