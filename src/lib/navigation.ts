import { icons } from '@/components/NavIcon'

export type NavigationItem = {
  href?: string
  icon?: keyof typeof icons
  links?: NavigationItem[]
  badge?: string
  omitFromDocumentTitle?: boolean
  title: string
  defaultOpen?: boolean
}

type NavigationNames = 'basics' | 'reference'

export const navigation: Record<NavigationNames, NavigationItem[]> = {
  basics: [
    {
      title: 'Replay QA',
      icon: 'beaker',
      defaultOpen: true,
      links: [
        {
          title: 'Overview',
          href: '/basics/replay-qa/overview',
        },
        {
          title: 'How Replay QA models your app',
          href: '/basics/replay-qa/concepts',
        },
        {
          title: 'Getting good results',
          href: '/basics/replay-qa/getting-good-results',
        },
        {
          title: 'Connect your app',
          omitFromDocumentTitle: true,
          defaultOpen: true,
          links: [
            {
              title: 'Testing a localhost app',
              href: '/basics/replay-qa/localhost',
            },
            {
              title: 'Testing a PR build in GitHub Actions',
              href: '/basics/replay-qa/frpc-ci',
            },
            {
              title: 'Testing a PR build in CircleCI',
              href: '/basics/replay-qa/circleci',
            },
            {
              title: 'Continuous QA from GitHub',
              href: '/basics/replay-qa/github',
            },
          ],
        },
        {
          title: 'Work with results',
          omitFromDocumentTitle: true,
          defaultOpen: true,
          links: [
            {
              title: 'Publishing with source maps',
              href: '/basics/replay-qa/source-maps',
            },
            {
              title: 'Driving QA from a coding agent',
              href: '/basics/replay-qa/agent-integration',
            },
            {
              title: 'Using Replay QA in Obvious',
              href: '/basics/replay-qa/obvious',
            },
          ],
        },
      ],
    },
    {
      title: 'Debugging with Replay',
      icon: 'mcp',
      defaultOpen: true,
      links: [
        {
          title: 'Overview',
          href: '/basics/debugging/overview',
        },
        {
          title: 'Replay MCP',
          href: '/basics/replay-mcp/overview',
        },
        {
          title: 'How to record',
          href: '/basics/getting-started/record-your-app',
        },
      ],
    },
    {
      title: 'Getting Started',
      icon: 'home',
      defaultOpen: true,
      links: [
        {
          title: 'Record your Playwright test',
          href: '/basics/getting-started/record-your-playwright-tests',
          links: [
            {
              title: 'Overview',
              href: '/basics/getting-started/record-your-playwright-tests',
            },
            {
              title: 'Recording Playwright core',
              href: '/basics/getting-started/record-your-playwright-tests/playwright-core',
            },
            {
              title: 'Debugging tests',
              href: '/basics/getting-started/record-your-playwright-tests/debugging-tests',
            },
            {
              title: 'GitHub actions',
              href: '/basics/getting-started/record-your-playwright-tests/github-actions',
            },
            {
              title: 'PR Comments',
              href: '/basics/test-suites/pr-comments',
            },
            {
              title: 'Other CI providers',
              href: '/basics/getting-started/record-your-playwright-tests/other-ci-providers',
            },
            {
              title: 'Writing new tests',
              href: '/basics/getting-started/record-your-playwright-tests/writing-new-tests',
            },
            {
              title: 'Troubleshooting',
              href: '/basics/getting-started/record-your-playwright-tests/troubleshooting',
            },
            {
              title: 'FAQ',
              href: '/basics/getting-started/record-your-playwright-tests/faq',
            },
          ],
        },
      ],
    },
    {
      title: 'Replay Chrome Extension',
      icon: 'replaychrome',
      defaultOpen: true,
      links: [
        {
          title: 'Getting Started',
          href: '/basics/replay-chrome-extension/getting-started',
        },
      ],
    },
    {
      title: 'Test Suite Dashboard',
      icon: 'analytics',
      defaultOpen: true,
      links: [
        {
          title: 'Overview',
          href: '/basics/test-suites/overview',
        },
        {
          title: 'Recent runs',
          href: '/basics/test-suites/recent-runs',
        },
        {
          title: 'Top Failing And Flaky Tests',
          href: '/basics/test-suites/top-failing-and-flaky-tests',
        },
      ],
    },
  ],
  reference: [
    {
      title: 'Replay QA',
      icon: 'beaker',
      defaultOpen: true,
      links: [
        {
          title: 'API and MCP tools',
          href: '/reference/replay-qa/api',
        },
        {
          title: 'Polish passes',
          href: '/reference/replay-qa/polish-passes',
        },
        {
          title: 'Bug reports',
          href: '/reference/replay-qa/bug-reports',
        },
      ],
    },
    {
      title: 'Debugging with Replay',
      icon: 'mcp',
      defaultOpen: true,
      links: [
        {
          title: 'MCP tools reference',
          href: '/reference/replay-mcp/tools',
        },
        {
          title: 'How does time travel work?',
          href: '/reference/time-travel/how-does-time-travel-work',
        },
        {
          title: 'Replay DevTools',
          links: [
            {
              title: 'Overview',
              href: '/reference/replay-devtools/overview',
            },
            {
              title: 'Time travel tools',
              href: '/reference/replay-devtools/time-travel-tools',
            },
            {
              title: 'Browser panels',
              href: '/reference/replay-devtools/browser-panels',
            },
            {
              title: 'Framework panels',
              href: '/reference/replay-devtools/framework-panels',
            },
            {
              title: 'Sharing and teams',
              href: '/reference/replay-devtools/sharing-and-teams',
            },
          ],
        },
      ],
    },
    {
      title: 'Replay CLI',
      icon: 'cli',
      defaultOpen: true,
      links: [
        {
          title: 'Commands',
          href: '/reference/replay-cli/commands',
        },
        {
          title: 'Uploading source maps',
          href: '/reference/replay-cli/source-maps',
        },
      ],
    },
    {
      title: 'APIs and credentials',
      icon: 'key',
      defaultOpen: true,
      links: [
        {
          title: 'API keys and tokens',
          href: '/reference/api-keys',
        },
        {
          title: 'Replay APIs',
          href: '/reference/replay-apis',
        },
      ],
    },
    {
      title: 'Replay Browser',
      icon: 'replaychrome',
      defaultOpen: true,
      links: [
        {
          title: 'Replay Browser',
          href: '/reference/replay-runtimes/replay-chrome',
          omitFromDocumentTitle: true,
        },
        {
          title: 'Replay Node',
          href: '/reference/replay-runtimes/replay-node',
        },
      ],
    },
    {
      title: 'Security + Privacy',
      icon: 'security',
      defaultOpen: true,
      links: [
        {
          title: 'Security practices',
          href: '/reference/security-and-privacy/security-practices',
        },
        {
          title: 'Privacy principles',
          href: '/reference/security-and-privacy/privacy-principles',
        },
      ],
    },
    {
      title: 'Internal',
      icon: 'settings',
      defaultOpen: true,
      links: [
        {
          title: 'Enterprise security controls',
          href: '/reference/replay-teams/enterprise-security-controls',
        },
        {
          title: 'Test runners overview',
          href: '/reference/test-runners/overview',
        },
        { title: 'Selenium', href: '/reference/test-runners/selenium' },
        {
          title: 'WebdriverIO',
          href: '/reference/test-runners/webdriver-io',
        },
        {
          title: 'Puppeteer',
          href: '/reference/test-runners/puppeteer',
        },
        {
          title: 'Upload strategies',
          href: '/reference/ci-workflows/upload-strategies',
        },
        {
          title: 'GitHub upload action',
          href: '/reference/ci-workflows/github-action-upload',
        },
      ],
    },
  ],
}

export const flatNavigation = Object.keys(navigation).reduce((acc, key) => {
  return acc.concat(navigation[key as NavigationNames])
}, [] as NavigationItem[])
