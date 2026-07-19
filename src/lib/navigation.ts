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

type NavigationNames = 'basics' | 'learn' | 'reference'

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
          title: 'Test a URL',
          href: '/basics/replay-qa/test-a-url',
        },
        {
          title: 'Connect a Repo',
          href: '/basics/replay-qa/connect-a-repo',
        },
        {
          title: 'Publishing with source maps',
          href: '/basics/replay-qa/source-maps',
        },
      ],
    },
    {
      title: 'Getting Started',
      icon: 'home',
      defaultOpen: true,
      links: [
        {
          title: 'How to record',
          href: '/basics/getting-started/record-your-app',
        },
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
      title: 'Replay MCP',
      icon: 'mcp',
      defaultOpen: true,
      links: [
        {
          title: 'Overview',
          href: '/basics/replay-mcp/overview',
        },
        {
          title: 'Quickstart',
          href: '/basics/replay-mcp/quickstart',
        },
        {
          title: 'Tools Reference',
          href: '/basics/replay-mcp/tools',
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
    {
      title: 'Replay DevTools',
      icon: 'browserdevtools',
      defaultOpen: true,
      links: [
        {
          title: 'Overview',
          href: '/basics/replay-devtools/overview',
        },
        {
          title: 'Time Travel DevTools',
          href: '/basics/replay-devtools/time-travel-devtools/live-console-logs',
          links: [
            {
              title: 'Live Console logs',
              href: '/basics/replay-devtools/time-travel-devtools/live-console-logs',
            },
            {
              title: 'Collaborative DevTools',
              href: '/basics/replay-devtools/time-travel-devtools/collaborative-devtools',
            },
            {
              title: 'Timeline annotation',
              href: '/basics/replay-devtools/time-travel-devtools/timeline-annotation',
            },
            {
              title: 'Jump to event',
              href: '/basics/replay-devtools/time-travel-devtools/jump-to-event',
            },
            {
              title: 'Focus window',
              href: '/basics/replay-devtools/time-travel-devtools/focus-window',
            },
          ],
        },
        {
          title: 'Framework DevTools',
          href: '/basics/replay-devtools/framework-devtools/react-panel',
          links: [
            {
              title: 'React Panel',
              href: '/basics/replay-devtools/framework-devtools/react-panel',
            },
            {
              title: 'Redux Panel',
              href: '/basics/replay-devtools/framework-devtools/redux-panel',
            },
            {
              title: 'Playwright Timeline',
              href: '/basics/replay-devtools/framework-devtools/playwright-timeline',
            },
          ],
        },
        {
          title: 'Browser DevTools',
          href: '/basics/replay-devtools/browser-devtools/elements-panel',
          links: [
            {
              title: 'Elements Panel',
              href: '/basics/replay-devtools/browser-devtools/elements-panel',
            },
            {
              title: 'Network Monitor',
              href: '/basics/replay-devtools/browser-devtools/network-monitor',
            },
            {
              title: 'Console Panel',
              href: '/basics/replay-devtools/browser-devtools/console',
            },

            {
              title: 'Source Viewer',
              href: '/basics/replay-devtools/browser-devtools/source-viewer',
            },
            {
              title: 'Pause Panel',
              href: '/basics/replay-devtools/browser-devtools/pause-panel',
            },
            {
              title: 'Replay Viewer',
              href: '/basics/replay-devtools/browser-devtools/replay-viewer',
            },
          ],
        },
      ],
    },
    {
      title: 'Time Travel',
      icon: 'rocket',
      defaultOpen: true,
      links: [
        {
          title: 'Why time travel?',
          href: '/basics/time-travel/why-time-travel',
        },
        {
          title: 'How does time travel work?',
          href: '/basics/time-travel/how-does-time-travel-work',
        },
      ],
    },
  ],
  reference: [
    {
      title: 'Replay Teams',
      icon: 'person',
      defaultOpen: true,
      links: [
        // {
        //   title: 'Setting up a team',
        //   href: '/reference/replay-teams/setting-up-a-team',
        // },
        {
          title: 'Managing replays',
          href: '/reference/replay-teams/managing-replays',
        },
        {
          title: 'Billing',
          href: '/reference/replay-teams/billing',
        },
        {
          title: 'Enterprise security controls',
          href: '/reference/replay-teams/enterprise-security-controls',
        },
        {
          title: 'Okta integration',
          href: '/reference/replay-teams/okta-integration',
        },
      ],
    },
    {
      title: 'Test Runners',
      omitFromDocumentTitle: true,
      icon: 'commands',
      defaultOpen: true,
      links: [
        { title: 'Overview', href: '/reference/test-runners/overview' },
        { title: 'Selenium', href: '/reference/test-runners/selenium' },
        {
          title: 'WebdriverIO',
          href: '/reference/test-runners/webdriver-io',
        },
        {
          title: 'Puppeteer',
          href: '/reference/test-runners/puppeteer',
        },
      ],
    },
    {
      title: 'CI Workflows',
      icon: 'settings',
      defaultOpen: true,
      links: [
        // {
        //   title: 'Setting up',
        //   href: '/reference/ci-workflows/setting-up',
        // },
        {
          title: 'Generate API key',
          href: '/reference/ci-workflows/generate-api-key',
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
    {
      title: 'Replay Runtimes',
      icon: 'replaychrome',
      defaultOpen: true,
      links: [
        {
          title: 'Replay Chrome',
          href: '/reference/replay-runtimes/replay-chrome',
        },
        {
          title: 'Replay Firefox',
          href: '/reference/replay-runtimes/replay-firefox',
        },
        {
          title: 'Replay Node',
          href: '/reference/replay-runtimes/replay-node',
        },
      ],
    },
    {
      title: 'Replay CLI',
      icon: 'cli',
      defaultOpen: true,
      links: [
        {
          title: 'Replay CLI',
          href: '/reference/replay-cli/commands',
        },
        {
          title: 'Uploading source maps',
          href: '/reference/replay-cli/source-maps',
        },
      ],
    },
    {
      title: 'Integrations',
      icon: 'integrations',
      defaultOpen: true,
      links: [
        {
          title: 'Replay APIs',
          href: '/reference/integrations/replay-apis/graphql-api',
          links: [
            {
              title: 'GraphQL API',
              href: '/reference/integrations/replay-apis/graphql-api',
            },
            {
              title: 'Replay Protocol',
              href: '/reference/integrations/replay-apis/replay-protocol',
            },
            {
              title: 'Replay Driver',
              href: '/reference/integrations/replay-apis/replay-driver',
            },
          ],
        },
        {
          title: 'Frameworks & libraries',
          href: '/reference/integrations/frameworks-libraries/nextjs',
          links: [
            {
              title: 'NextJS',
              href: '/reference/integrations/frameworks-libraries/nextjs',
            },
            {
              title: 'React Version Support',
              href: '/reference/integrations/frameworks-libraries/react-sourcemaps',
            },
          ],
        },
        {
          title: '3rd Party integrations',
          href: '/reference/integrations/3rd-party-integrations/github-embeds',
          links: [
            {
              title: 'GitHub Embeds',
              href: '/reference/integrations/3rd-party-integrations/github-embeds',
            },
            {
              title: 'Loom Embeds',
              href: '/reference/integrations/3rd-party-integrations/loom-embeds',
            },
          ],
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
      title: 'Additional reference',
      icon: 'overview',
      defaultOpen: true,
      links: [
        {
          title: 'Advanced settings',
          href: '/reference/additional-content/advanced-settings',
        },
      ],
    },
  ],
  learn: [
    {
      title: 'Replay course',
      icon: 'university',
      href: '/learn/replay-course',
    },
    {
      title: 'Examples',
      icon: 'additionalcontent',
      defaultOpen: true,
      links: [
        {
          title: 'Playwright',
          href: '/learn/examples/playwright',
        },
        {
          title: 'Next.js',
          href: '/learn/examples/nextjs',
        },
        {
          title: 'Vercel',
          href: '/learn/examples/vercel',
        },
      ],
    },
    {
      title: 'Comparisons',
      icon: 'sort',
      defaultOpen: true,
      links: [
        {
          title: 'Playwright',
          href: '/learn/comparisons/playwright',
        },
        {
          title: `Chrome Recorder`,
          href: '/learn/comparisons/chrome',
        },
        {
          title: 'Loom',
          href: '/learn/comparisons/loom',
        },
        {
          title: 'Browser DevTools',
          href: '/learn/comparisons/devtools',
        },
      ],
    },
  ],
}

export const flatNavigation = Object.keys(navigation).reduce((acc, key) => {
  return acc.concat(navigation[key as NavigationNames])
}, [] as NavigationItem[])
