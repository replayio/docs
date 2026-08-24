import { test, expect } from '@playwright/test'

test('navigation shows Replay QA pages by default', async ({ page }) => {
  await page.goto('/basics/replay-qa/overview')
  const nav = page.locator('nav')
  await expect(nav.getByText('Replay QA', { exact: true })).toBeVisible()
  await expect(nav.getByText('Overview', { exact: true })).toBeVisible()
  await expect(nav.getByText('CI integration with FRPC', { exact: true })).toBeVisible()
})

async function clickHiddenPagesToggle(page: import('@playwright/test').Page) {
  await page.getByTestId('sidebar-footer').hover()
  await page.getByTestId('hidden-pages-toggle').click()
}

test('show internal pages toggle reveals hidden navigation', async ({ page }) => {
  await page.goto('/basics/replay-qa/overview')
  const nav = page.locator('nav')

  await expect(nav.getByText('Replay DevTools', { exact: true })).not.toBeVisible()

  await clickHiddenPagesToggle(page)
  await expect(nav.getByText('Replay DevTools', { exact: true })).toBeVisible()

  await clickHiddenPagesToggle(page)
  await expect(nav.getByText('Replay DevTools', { exact: true })).not.toBeVisible()
})

test('navigation expanding works for internal pages when enabled', async ({ page }) => {
  await page.goto('/basics/replay-qa/overview')
  const nav = page.locator('nav')

  await clickHiddenPagesToggle(page)
  await nav.getByText('Time Travel DevTools').click()
  await expect(nav.getByText('Live Console logs', { exact: true })).toBeVisible()
})

test('navigation collapsing works for internal pages when enabled', async ({ page }) => {
  await page.goto('/basics/test-suites/pr-comments')
  const nav = page.locator('nav')

  await clickHiddenPagesToggle(page)

  const navigationItem = nav.getByText('PR Comments', { exact: true })
  await expect(navigationItem).toBeVisible()

  await nav.getByText('Record your Playwright test').click()
  await expect(navigationItem).not.toBeVisible()
})
