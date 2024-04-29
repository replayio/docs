import { icons } from '@/components/NavIcon'

export type NavigationItem = {
  href: string
  icon?: keyof typeof icons
  links?: NavigationItem[]
  omitFromDocumentTitle?: boolean
  title: string
}

export const navigation: NavigationItem[] = [
  {
    title: 'Intro to time travel',
    href: '/time-travel-intro',
    icon: "hourglass",
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
    title: 'Browser DevTools',
    href: '/browser-devtools',
    icon: "browserdevtools",
    links: [
      {
        title: 'Elements Panel',
        href: '/browser-devtools/elements-panel',
      },
      {
        title: 'Network Monitor',
        href: '/browser-devtools/network-monitor',
      },
      {
        title: 'Console Panel',
        href: '/browser-devtools/console',
      },

      {
        title: 'Source Viewer',
        href: '/browser-devtools/source-viewer',
      },

      {
        title: 'Pause Panel',
        href: '/browser-devtools/pause-panel',
      },
      {
        title: 'Replay Viewer',
        href: '/browser-devtools/replay-viewer',
      },
    ],
  },
  {
    title: 'Framework DevTools',
    href: '/devtools',
    icon: "frameworks",
    links: [
      {
        title: 'React Panel',
        href: '/framework-devtools/react-panel',
      },
      {
        title: 'Redux Panel',
        href: '/framework-devtools/redux-panel',
      },
      {
        title: 'Cypress Timeline',
        href: '/framework-devtools/cypress-timeline',
      },
      {
        title: 'Playwright Timeline',
        href: '/framework-devtools/playwright-timeline',
      },
    ],
  },
  {
    title: 'Replay Test Suites',
    href: '/test-suites',
    icon: "replay",
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
      // {
      //   title: 'Analytics',
      //   href: '/test-suites/analytics',
      // },
      // {
      //   title: 'Test Flake Detection',
      //   href: '/test-suites/test-flake-detection',
      // },
    ],
  },
  {
    title: 'Test Runners',
    href: '/test-runners',
    omitFromDocumentTitle: true,
    icon: "otherciproviders",
    links: [
      { title: 'Overview', href: '/test-runners/overview' },
      {
        title: 'Cypress.io',
        href: '/test-runners/cypress-io',
        links: [
          {
            title: 'Getting started',
            href: '/test-runners/cypress-io',
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
            title: 'FAQ',
            href: '/test-runners/playwright/faq',
          },
        ],
      },
      { title: 'Selenium', href: '/test-runners/selenium' },
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
    href: '/ci-workflows',
    icon: "settings",
    links: [
      // {
      //   title: 'Setting up',
      //   href: '/ci-workflows/setting-up',
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
    href: '/replay-teams',
    icon: "settingupateam",
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
    href: '/replay-runtimes',
    icon: "runsview",
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
    href: '/replay-cli',
    icon: "cli",
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
    href: '/integrations',
    icon: "integrations",
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
    href: '/comparison',
    icon: "sort",
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
    href: '/additional-content',
    icon: "university",
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
    ],
  },
]
