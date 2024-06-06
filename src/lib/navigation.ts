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
      title: 'Getting Started',
      icon: 'home',
      defaultOpen: true,
      links: [
        {
          title: 'Record your app',
          href: '/basics/getting-started/record-your-app',
        },
        {
          title: 'Record your Cypress.io test',
          href: '/basics/getting-started/record-your-cypress-tests',
        },
        {
          title: 'Record your Playwright test',
          href: '/basics/getting-started/record-your-playwright-tests',
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
              title: 'Cypress Timeline',
              href: '/basics/replay-devtools/framework-devtools/cypress-timeline',
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
        {
          title: 'PR Comments',
          href: '/basics/test-suites/pr-comments',
        },
        {
          title: 'Performance Analysis',
          badge: 'experimental',
          href: '/basics/test-suites/performance-analysis',
        },
        {
          title: 'Root Cause Analysis',
          badge: 'experimental',
          href: '/basics/test-suites/root-cause-analysis',
        },
        // {
        //   title: 'Analytics',
        //   href: '/basics/test-suites/analytics',
        //
        // },
        // {
        //   title: 'Test Flake Detection',
        //   href: '/basics/test-suites/test-flake-detection',
        //
        // },
      ],
    },
    {
      title: 'Replay Teams',
      icon: 'person',
      defaultOpen: true,
      links: [
        {
          title: 'Setting up a team',
          href: '/basics/replay-teams/setting-up-a-team'
        },
        {
          title: 'Managing replays',
          href: '/basics/replay-teams/managing-replays'
        },
        {
          title: 'Billing',
          href: '/basics/replay-teams/billing'
        },
        {
          title: 'Enterprise security controls',
          href: '/basics/replay-teams/enterprise-security-controls'
        },
        {
          title: 'Okta integration',
          href: '/basics/replay-teams/okta-integration'
        }
      ]
    }
  ],
  reference: [
    {
      title: 'Test Runners',
      omitFromDocumentTitle: true,
      icon: 'commands',
      defaultOpen: true,
      links: [
        { title: 'Overview', href: '/reference/test-runners/overview' },
        {
          title: 'Cypress.io',
          href: '/reference/test-runners/cypress-io/overview',
          links: [
            {
              title: 'Overview',
              href: '/reference/test-runners/cypress-io/overview',
            },
            {
              title: 'Debugging tests',
              href: '/reference/test-runners/cypress-io/debugging-tests',
            },
            {
              title: 'Recording options',
              href: '/reference/test-runners/cypress-io/recording-options',
            },
            {
              title: 'GitHub actions',
              href: '/reference/test-runners/cypress-io/github-actions',
            },
            {
              title: 'Other CI providers',
              href: '/reference/test-runners/cypress-io/other-ci-providers',
            },
            {
              title: 'FAQ',
              href: '/reference/test-runners/cypress-io/faq',
            },
          ],
        },
        {
          title: 'Playwright',
          href: '/reference/test-runners/playwright/overview',
          links: [
            {
              title: 'Overview',
              href: '/reference/test-runners/playwright/overview',
            },
            {
              title: 'Recording Playwright core',
              href: '/reference/test-runners/playwright/playwright-core',
            },
            {
              title: 'Debugging tests',
              href: '/reference/test-runners/playwright/debugging-tests',
            },
            {
              title: 'GitHub actions',
              href: '/reference/test-runners/playwright/github-actions',
            },
            {
              title: 'Other CI providers',
              href: '/reference/test-runners/playwright/other-ci-providers',
            },
            {
              title: 'Writing new tests',
              href: '/reference/test-runners/playwright/writing-new-tests',
            },
            {
              title: 'Troubleshooting',
              href: '/reference/test-runners/playwright/troubleshooting',
            },
            {
              title: 'FAQ',
              href: '/reference/test-runners/playwright/faq',
            },
          ],
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
          title: 'Recording strategies',
          href: '/reference/ci-workflows/recording-strategies',
        },
        {
          title: 'Upload strategies',
          href: '/reference/ci-workflows/upload-strategies',
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
          href: '/learn/examples/playwright'
        },
        {
          title: 'Cypress.io',
          href: '/learn/examples/cypress-io'
        },
      ]
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
          title: 'Cypress',
          href: '/learn/comparisons/cypress',
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
