import { icons } from '@/components/NavIcon'

export type NavigationItem = {
  href?: string
  icon?: keyof typeof icons
  links?: NavigationItem[]
  badge?: string
  omitFromDocumentTitle?: boolean
  title: string
}

export const navigation: NavigationItem[] = [
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
    title: 'Replay DevTools',
    icon: 'browserdevtools',
    omitFromDocumentTitle: true,
    links: [
      {
        title: 'Overview',
        href: '/replay-devtools/overview',
      },
      {
        title: 'Framework DevTools',
        href: '/replay-devtools/framework-devtools/react-panel',
        links: [
          {
            title: 'React Panel',
            href: '/replay-devtools/framework-devtools/react-panel',
          },
          {
            title: 'Redux Panel',
            href: '/replay-devtools/framework-devtools/redux-panel',
          },
          {
            title: 'Cypress Timeline',
            href: '/replay-devtools/framework-devtools/cypress-timeline',
          },
          {
            title: 'Playwright Timeline',
            href: '/replay-devtools/framework-devtools/playwright-timeline',
          },
        ],
      },
      {
        title: 'Browser DevTools',
        href: '/replay-devtools/browser-devtools/elements-panel',
        links: [
          {
            title: 'Elements Panel',
            href: '/replay-devtools/browser-devtools/elements-panel',
          },
          {
            title: 'Network Monitor',
            href: '/replay-devtools/browser-devtools/network-monitor',
          },
          {
            title: 'Console Panel',
            href: '/replay-devtools/browser-devtools/console',
          },

          {
            title: 'Source Viewer',
            href: '/replay-devtools/browser-devtools/source-viewer',
          },
          {
            title: 'Pause Panel',
            href: '/replay-devtools/browser-devtools/pause-panel  ',
          },
          {
            title: 'Replay Viewer',
            href: '/replay-devtools/browser-devtools/replay-viewer',
          },
        ],
      },
    ],
  },
  {
    title: 'Replay Test Suites',
    icon: 'analytics',
    links: [
      {
        title: 'Recent runs ',
        href: '/test-suites/runs-view',
      },
      {
        title: 'Top Failing And Flaky Tests',
        href: '/test-suites/top-failing-and-flaky-tests',
      },
      {
        title: 'PR Comments',
        href: '/test-suites/pr-comments',
      },
      {
        title: 'Performance Analysis',
        badge: 'experimental',
        href: '/test-suites/performance-analysis',
      },
      {
        title: 'Root Cause Analysis',
        badge: 'experimental',
        href: '/test-suites/root-cause-analysis',
      },
      // {
      //   title: 'Analytics',
      //   href: '/test-suites/analytics',
      //
      // },
      // {
      //   title: 'Test Flake Detection',
      //   href: '/test-suites/test-flake-detection',
      //
      // },
    ],
  },
  {
    title: 'Test Runners',
    omitFromDocumentTitle: true,
    icon: 'commands',
    links: [
      { title: 'Overview', href: '/test-runners/overview', icon: 'overview' },
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
            title: 'FAQ',
            href: '/test-runners/playwright/faq',
          },
        ],
      },
      { title: 'Selenium', href: '/test-runners/selenium', icon: 'selenium' },
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
