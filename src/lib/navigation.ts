import { icons } from '@/components/NavIcon'

export type NavigationItem = {
  href?: string
  icon?: keyof typeof icons
  links?: NavigationItem[]
  badge?: string
  omitFromDocumentTitle?: boolean
  title: string
}

type NavigationNames = 'basics' | 'learn' | 'resources';

export const navigation: Record<NavigationNames, NavigationItem[]> = {
  basics: [
    {
      title: "Overview",
      icon: 'home',
      links: [
        {
          title: 'Why time-travel?',
          href: '/basics/overview/why-time-travel',
        },
        {
          title: 'Design Principals',
          href: '/basics/overview/design-principals',
        },
        {
          title: 'How does time-travel work?',
          href: '/basics/overview/how-does-time-travel-work',
        },
      ]
    },
    {
      title: "Getting Started",
      icon: 'rocket',
      links: [
        {
          title: 'Record your app',
          href: '/basics/getting-started/record-your-app',
        },
      ],
    },
    {
      title: "Replay DevTools",
      icon: 'browserdevtools',
      links: [
        {
          title: "Overview",
          href: '/basics/replay-devtools/overview',
        },
        {
          title: "Time Travel DevTools",
          href: '/basics/replay-devtools/time-travel-devtools/live-console-logs',
          links: [
            {
              title: "Live Console logs",
              href: '/basics/replay-devtools/time-travel-devtools/live-console-logs',
            },
            {
              title: "Collaborative DevTools",
              href: '/basics/replay-devtools/time-travel-devtools/collaborative-devtools',
            },
            {
              title: "Timeline annotation",
              href: '/basics/replay-devtools/time-travel-devtools/timeline-annotation',
            },
            {
              title: "Jump to event",
              href: '/basics/replay-devtools/time-travel-devtools/jump-to-event',
            },
            {
              title: "Focus window",
              href: '/basics/replay-devtools/time-travel-devtools/focus-window',
            }
          ]
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
      ]
    },
    {
      title: 'Test Suite Dashboard',
      icon: 'analytics',
      links: [
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
  ],
  resources: [],
  learn: [
    // quickstart guide page is hardcoded into Navigation.tsx component
    {
      title: 'Intro to time travel',
      icon: 'rocket',
      links: [
        {
          title: 'Why time travel?',
          href: '/time-travel-intro/why-time-travel',
        },
        {
          title: 'Add console logs on the fly',
          href: '/time-travel-intro/add-console-logs-on-the-fly',
        },
        {
          title: 'Collaborative devtools',
          href: '/time-travel-intro/collaborative-devtools',
        },
        {
          title: 'Visualize time. Inspect state.',
          href: '/time-travel-intro/visualize-time-inspect-state',
        },
        {
          title: 'Annotate the timeline',
          href: '/time-travel-intro/annotate-the-timeline',
        },
        {
          title: 'Bisect the problem',
          href: '/time-travel-intro/bisect-the-problem',
        },
        {
          title: 'What is time travel?',
          href: '/time-travel-intro/what-is-time-travel',
        },
      ],
    },

    {
      title: 'Test Runners',
      omitFromDocumentTitle: true,
      icon: 'commands',
      links: [
        {title: 'Overview', href: '/test-runners/overview', icon: 'overview'},
        {
          title: 'Cypress.io',
          href: '/test-runners/cypress-io/getting-started',
          links: [
            {
              title: 'Getting started',
              href: '/test-runners/cypress-io/getting-started',
            },
            {
              title: 'Record your first replay',
              href: '/test-runners/cypress-io/record-your-first-replay',
            },
            {
              title: 'Debugging tests',
              href: '/test-runners/cypress-io/debugging-tests',
            },
            {
              title: 'Recording options',
              href: '/test-runners/cypress-io/recording-options',
            },
            {
              title: 'GitHub actions',
              href: '/test-runners/cypress-io/github-actions',
            },
            {
              title: 'Other CI providers',
              href: '/test-runners/cypress-io/other-ci-providers',
            },
            {
              title: 'Examples',
              href: '/test-runners/cypress-io/examples',
            },
            {
              title: 'FAQ',
              href: '/test-runners/cypress-io/faq',
            },
          ],
        },
        {
          title: 'Playwright',
          href: '/test-runners/playwright/record-your-first-replay',
          links: [
            {
              title: 'Record your first replay',
              href: '/test-runners/playwright/record-your-first-replay',
            },
            {
              title: 'Debugging tests',
              href: '/test-runners/playwright/debugging-tests',
            },
            {
              title: 'GitHub actions',
              href: '/test-runners/playwright/github-actions',
            },
            {
              title: 'Other CI providers',
              href: '/test-runners/playwright/other-ci-providers',
            },
            {
              title: 'Examples',
              href: '/test-runners/playwright/examples',
            },
            {
              title: 'Writing new tests',
              href: '/test-runners/playwright/writing-new-tests',
            },
            {
              title: 'FAQ',
              href: '/test-runners/playwright/faq',
            },
          ],
        },
        {title: 'Selenium', href: '/test-runners/selenium', icon: 'selenium'},
        {
          title: 'WebdriverIO',
          href: '/test-runners/webdriver-io',
        },
        {
          title: 'Puppeteer',
          href: '/test-runners/puppeteer',
        },
      ],
    },
    {
      title: 'CI Workflows',
      icon: 'settings',
      links: [
        // {
        //   title: 'Setting up',
        //   href: '/ci-workflows/setting-up',
        //
        // },
        {
          title: 'Generate API key',
          href: '/ci-workflows/generate-api-key',
        },
        {
          title: 'Recording strategies',
          href: '/ci-workflows/recording-strategies',
        },
        {
          title: 'Upload strategies',
          href: '/ci-workflows/upload-strategies',
        },
      ],
    },
    {
      title: 'Replay Teams',
      icon: 'settingupateam',
      links: [
        {
          title: 'Setting up a team',
          href: '/replay-teams/setting-up-a-team',
        },
        {
          title: 'Okta integration',
          href: '/replay-teams/okta-integration',
        },
        {
          title: 'Enterprise security controls',
          href: '/replay-teams/enterprise-security-controls',
        },
        {
          title: 'Managing replays',
          href: '/replay-teams/managing-replays',
        },
        {
          title: 'Billing',
          href: '/replay-teams/billing',
        },
      ],
    },
    {
      title: 'Replay Runtimes',
      icon: 'replaychrome',
      links: [
        {
          title: 'Replay Chrome',
          href: '/replay-runtimes/replay-chrome',
        },
        {
          title: 'Replay Firefox',
          href: '/replay-runtimes/replay-firefox',
        },
        {
          title: 'Replay Node',
          href: '/replay-runtimes/replay-node',
        },
      ],
    },
    {
      title: 'Replay CLI',
      icon: 'cli',
      links: [
        {
          title: 'Replay CLI',
          href: '/replay-cli/commands',
        },
        {
          title: 'Uploading source maps',
          href: '/replay-cli/source-maps',
        },
      ],
    },
    {
      title: 'Integrations',
      icon: 'integrations',
      links: [
        {
          title: 'Replay APIs',
          href: '/integrations/replay-apis/graphql-api',
          links: [
            {
              title: 'GraphQL API',
              href: '/integrations/replay-apis/graphql-api',
            },
            {
              title: 'Replay Protocol',
              href: '/integrations/replay-apis/replay-protocol',
            },
            {
              title: 'Replay Driver',
              href: '/integrations/replay-apis/replay-driver',
            },
          ],
        },
        {
          title: 'Frameworks & libraries',
          href: '/integrations/frameworks-libraries/nextjs',
          links: [
            {
              title: 'NextJS',
              href: '/integrations/frameworks-libraries/nextjs',
            },
          ],
        },
        {
          title: '3rd Party integrations',
          href: '/integrations/3rd-party-integrations/github-embeds',
          links: [
            {
              title: 'GitHub Embeds',
              href: '/integrations/3rd-party-integrations/github-embeds',
            },
            {
              title: 'Loom Embeds',
              href: '/integrations/3rd-party-integrations/loom-embeds',
            },
          ],
        },
      ],
    },
    {
      title: 'Comparisons',
      icon: 'sort',
      links: [
        {
          title: 'Playwright',
          href: '/comparison/playwright',
        },
        {
          title: 'Cypress',
          href: '/comparison/cypress',
        },
        {
          title: `Chrome Recorder`,
          href: '/comparison/chrome',
        },
        {
          title: 'Loom',
          href: '/comparison/loom',
        },
        {
          title: 'Browser DevTools',
          href: '/comparison/devtools',
        },
      ],
    },
    {
      title: 'Additional content',
      icon: 'university',
      links: [
        {
          title: 'Privacy principles',
          href: '/additional-content/privacy-principles',
        },
        {
          title: 'Security practices',
          href: '/additional-content/security-practices',
        },
        {
          title: 'Crash course',
          href: '/additional-content/crash-course',
        },
        {
          title: 'Advanced settings',
          href: '/additional-content/advanced-settings',
        },
      ],
    },
  ]
}

export const flatNavigation = Object.keys(navigation).reduce((acc, key) => {
  return acc.concat(navigation[key as NavigationNames])
}, [] as NavigationItem[])
