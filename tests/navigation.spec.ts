import { test, expect } from '@playwright/test'

test('navigation shows Replay QA pages by default', async ({ page }) => {
  await page.goto('/basics/replay-qa/overview')
  const nav = page.locator('nav')
  await expect(nav.getByText('Replay QA', { exact: true })).toBeVisible()
  await expect(nav.getByText('Overview', { exact: true }).first()).toBeVisible()
  await expect(
    nav.getByText('CI integration with FRPC', { exact: true }),
  ).toBeVisible()
})

async function clickHiddenPagesToggle(page: import('@playwright/test').Page) {
  await page.getByTestId('sidebar-footer').hover()
  await page.getByTestId('hidden-pages-toggle').click()
}

test('navigation shows Replay MCP and How to record by default', async ({
  page,
}) => {
  await page.goto('/basics/replay-qa/overview')
  const nav = page.locator('nav')
  await expect(
    nav.getByText('Debugging with Replay', { exact: true }),
  ).toBeVisible()
  await expect(nav.getByText('Replay MCP', { exact: true })).toBeVisible()
  await expect(nav.getByText('How to record', { exact: true })).toBeVisible()
  await expect(nav.getByText('Quickstart', { exact: true })).not.toBeVisible()
  await expect(
    nav.getByText('Getting Started', { exact: true }),
  ).not.toBeVisible()
})

test('reference tab opens on the Debugging with Replay section', async ({
  page,
}) => {
  await page.goto('/reference/replay-mcp/tools')
  const nav = page.locator('nav')
  await expect(
    nav.getByText('Debugging with Replay', { exact: true }),
  ).toBeVisible()
  await expect(
    nav.getByText('MCP tools reference', { exact: true }),
  ).toBeVisible()
  await expect(
    nav.getByText('How does time travel work?', { exact: true }),
  ).toBeVisible()
  await expect(nav.getByText('Replay Teams', { exact: true })).not.toBeVisible()
})

test('hidden children of a partially visible section stay hidden', async ({
  page,
}) => {
  await page.goto('/basics/getting-started/record-your-app')
  const nav = page.locator('nav')
  await expect(nav.getByText('How to record', { exact: true })).toBeVisible()
  await expect(
    nav.getByText('Record your Playwright test', { exact: true }),
  ).not.toBeVisible()

  await clickHiddenPagesToggle(page)
  await expect(
    nav.getByRole('button', { name: 'Getting Started' }),
  ).toBeVisible()
  await expect(
    nav.getByText('Record your Playwright test', { exact: true }),
  ).toBeVisible()
  await clickHiddenPagesToggle(page)
})

test('show internal pages toggle reveals hidden navigation', async ({
  page,
}) => {
  await page.goto('/basics/replay-qa/overview')
  const nav = page.locator('nav')

  await expect(
    nav.getByText('Test Suite Dashboard', { exact: true }),
  ).not.toBeVisible()

  await clickHiddenPagesToggle(page)
  await expect(
    nav.getByText('Test Suite Dashboard', { exact: true }),
  ).toBeVisible()

  await clickHiddenPagesToggle(page)
  await expect(
    nav.getByText('Test Suite Dashboard', { exact: true }),
  ).not.toBeVisible()
})

test('navigation expanding works for internal pages when enabled', async ({
  page,
}) => {
  await page.goto('/basics/replay-qa/overview')
  const nav = page.locator('nav')

  await clickHiddenPagesToggle(page)
  await nav.getByText('Time Travel DevTools').click()
  await expect(
    nav.getByText('Live Console logs', { exact: true }),
  ).toBeVisible()
})

test('navigation collapsing works for internal pages when enabled', async ({
  page,
}) => {
  await page.goto('/basics/test-suites/pr-comments')
  const nav = page.locator('nav')

  await clickHiddenPagesToggle(page)

  const navigationItem = nav.getByText('PR Comments', { exact: true })
  await expect(navigationItem).toBeVisible()

  await nav.getByText('Record your Playwright test').click()
  await expect(navigationItem).not.toBeVisible()
})
