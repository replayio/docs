import { test, expect } from '@playwright/test'

test('navigation shows Replay QA pages by default', async ({ page }) => {
  await page.goto('/basics/replay-qa/overview')
  const nav = page.locator('nav')
  await expect(nav.getByText('Replay QA', { exact: true })).toBeVisible()
  await expect(nav.getByText('Overview', { exact: true }).first()).toBeVisible()
  await expect(
    nav.getByText('Testing a PR build in CI', { exact: true }),
  ).toBeVisible()
  await expect(
    nav.getByText('Getting good results', { exact: true }),
  ).toBeVisible()
  await expect(
    nav.getByText('Continuous QA from GitHub', { exact: true }),
  ).toBeVisible()
})

test('nested groups expand for the current page', async ({ page }) => {
  await page.goto('/basics/replay-qa/source-maps')
  const nav = page.locator('nav')
  await expect(
    nav.getByRole('button', { name: 'Work with results' }),
  ).toBeVisible()
  await expect(
    nav.getByText('Publishing with source maps', { exact: true }),
  ).toBeVisible()
  await expect(
    nav.getByText('Driving QA from a coding agent', { exact: true }),
  ).toBeVisible()
})

test('reference tab opens on the Replay QA section', async ({ page }) => {
  await page.goto('/reference/replay-qa/api')
  const nav = page.locator('nav')
  await expect(nav.getByText('Replay QA', { exact: true })).toBeVisible()
  await expect(
    nav.getByText('API and MCP tools', { exact: true }),
  ).toBeVisible()
  await expect(nav.getByText('Polish passes', { exact: true })).toBeVisible()
  await expect(nav.getByText('Bug reports', { exact: true })).toBeVisible()
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
  await expect(
    nav.getByRole('button', { name: 'Replay DevTools' }),
  ).toBeVisible()
  await expect(
    nav.getByText('Time travel tools', { exact: true }),
  ).not.toBeVisible()
  await expect(nav.getByText('Internal', { exact: true })).not.toBeVisible()
})

test('reference tab shows the consolidated sections', async ({ page }) => {
  await page.goto('/reference/replay-apis')
  const nav = page.locator('nav')
  for (const section of [
    'Replay CLI',
    'APIs and credentials',
    'Replay Browser',
    'Security + Privacy',
  ]) {
    await expect(nav.getByRole('button', { name: section })).toBeVisible()
  }
  await expect(
    nav.getByText('API keys and tokens', { exact: true }),
  ).toBeVisible()
  await expect(nav.getByText('Replay APIs', { exact: true })).toBeVisible()
  await expect(nav.getByText('Replay Node', { exact: true })).toBeVisible()
  await expect(nav.getByText('Frameworks', { exact: true })).not.toBeVisible()
  await expect(nav.getByText('Test Runners', { exact: true })).not.toBeVisible()
  await expect(nav.getByText('CI Workflows', { exact: true })).not.toBeVisible()

  await clickHiddenPagesToggle(page)
  await expect(nav.getByRole('button', { name: 'Internal' })).toBeVisible()
  await expect(
    nav.getByText('Upload strategies', { exact: true }),
  ).toBeVisible()
  await clickHiddenPagesToggle(page)
})

test('Replay DevTools pages expand their group', async ({ page }) => {
  await page.goto('/reference/replay-devtools/browser-panels')
  const nav = page.locator('nav')
  await expect(nav.getByText('Browser panels', { exact: true })).toBeVisible()
  await expect(
    nav.getByText('Sharing and teams', { exact: true }),
  ).toBeVisible()
  await expect(
    nav.getByText('Managing replays', { exact: true }),
  ).not.toBeVisible()
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
  await nav.getByText('Record your Playwright test').click()
  await expect(
    nav.getByText('Recording Playwright core', { exact: true }),
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
