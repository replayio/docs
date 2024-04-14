import { icons } from '@/components/NavIcon'

interface NavigationItemLink {
  title: string
  href: string
  icon?: keyof typeof icons
  links?: NavigationItemLink[]
}

type NavigationType = Array<{
  title: string
  href: string
  links: NavigationItemLink[]
}>

export const navigation: NavigationType = [
  {
    title: 'Getting started',
    href: '/getting-started',
    links: [
      {
        title: 'What is time travel',
        href: '/getting-started/what-is-time-travel',
        icon: 'hourglass',
      },
      {
        title: 'Record Your First Replay',
        href: '/getting-started/record-your-first-replay',
        icon: 'record',
      },
    ],
  },
  {
    title: 'Intro to time travel',
    href: '/time-travel-intro',
    links: [
      {
        title: 'Add console logs on the Fly',
        href: '/time-travel-intro/add-console-logs-on-the-fly',
        icon: 'console',
      },
      {
        title: 'Intro To Time Travel',
        href: '/time-travel-intro/intro-to-time-travel',
        icon: 'timetravel',
      },
      {
        title: 'Visualize time. Inspect state.',
        href: '/time-travel-intro/visualize-time-inspect-space',
        icon: 'inspect',
      },
      {
        title: 'Annotate the timeline',
        href: '/time-travel-intro/annotate-the-timeline',
        icon: 'pencil',
      },
      {
        title: 'Bisect the Problem',
        href: '/time-travel-intro/bisect-the-problem',
        icon: 'razor',
      },
      {
        title: 'How Time Travel Works',
        href: '/time-travel-intro/how-time-travel-works',
        icon: 'questionmark',
      },
    ],
  },
  {
    title: 'Browser DevTools',
    href: '/browser-devtools',
    links: [
      {
        title: 'Replay Viewer',
        href: '/browser-devtools/replay-viewer',
        icon: 'video',
      },

      {
        title: 'Source Viewer',
        href: '/browser-devtools/source-viewer',
        icon: 'folder',
      },
      {
        title: 'Console Panel',
        href: '/browser-devtools/console',
        icon: 'console',
      },
      {
        title: 'Elements Panel',
        href: '/browser-devtools/elements-panel',
        icon: 'inspect',
      },
      {
        title: 'Network Monitor',
        href: '/browser-devtools/network-monitor',
        icon: 'rocket',
      },
      {
        title: 'Pause Panel',
        href: '/browser-devtools/pause-panel',
        icon: 'pause',
      },
    ],
  },
  {
    title: 'Framework DevTools',
    href: '/devtools',
    links: [
      {
        title: 'React Panel',
        href: '/framework-devtools/react-panel',
        icon: 'react',
      },
      {
        title: 'Redux Panel',
        href: '/framework-devtools/redux-panel',
        icon: 'redux',
      },
      {
        title: 'Cypress Timeline',
        href: '/framework-devtools/cypress-timeline',
        icon: 'cypress',
      },
      {
        title: 'Playwright Timeline',
        href: '/framework-devtools/playwright-timeline',
        icon: 'playwright',
      },
    ],
  },

  {
    title: 'Replay Test Suites',
    href: '/test-suites',
    links: [
      {
        title: 'Analytics',
        href: '/test-suites/analytics',
        icon: 'analytics',
      },
      {
        title: 'PR Comments',
        href: '/test-suites/pr-comments',
        icon: 'pullrequest',
      },
      {
        title: 'Top Failing And Flaky Tests',
        href: '/test-suites/top-failing-and-flaky-tests',
        icon: 'sort',
      },
      {
        title: 'Flake Test Detection',
        href: '/test-suites/flake-test-detection',
        icon: 'flake',
      },
      {
        title: 'Runs View',
        href: '/test-suites/runs-view',
        icon: 'runsview',
      },
    ],
  },
  {
    title: 'Test Runners',
    href: '/test-runners',
    links: [
      { title: 'Overview', href: '/test-runners/overview', icon: 'overview' },
      {
        title: 'Cypress.io',
        href: '/test-runners/cypress-io',
        icon: 'cypress',
        links: [
          {
            title: 'Record Your First replay',
            href: '/test-runners/cypress-io/record-your-first-replay',
          },
          {
            title: 'Debugging Tests',
            href: '/test-runners/cypress-io/debugging-tests',
          },
        ],
      },
      {
        title: 'Playwright',
        href: '/test-runners/playwright/installation',
        icon: 'playwright',
      },
      { title: 'Selenium', href: '/test-runners/selenium', icon: 'selenium' },
      {
        title: 'WebdriverIO',
        href: '/test-runners/webdriver-io',
        icon: 'webdriverio',
      },
      {
        title: 'Puppeteer',
        href: '/test-runners/puppeteer',
        icon: 'puppeteer',
      },
    ],
  },

  {
    title: 'CI Workflows',
    href: '/ci-workflows',
    links: [
      {
        title: 'Setting up',
        href: '/ci-workflows/setting-up',
        icon: 'wrench',
      },
      {
        title: 'Generate API key',
        href: '/ci-workflows/generate-api-key',
        icon: 'key',
      },
      {
        title: 'Recording strategies',
        href: '/ci-workflows/recording-strategies',
        icon: 'strategy',
      },
    ],
  },

  {
    title: 'Replay Teams',
    href: '/replay-teams',
    links: [
      {
        title: 'Setting up a team',
        href: '/replay-teams/setting-up-a-team',
        icon: 'console',
      },
      {
        title: 'Okta integration',
        href: '/replay-teams/okta-integration',
        icon: 'console',
      },
      {
        title: 'Enterprise security controls',
        href: '/replay-teams/enterprise-security-controls',
        icon: 'console',
      },
      {
        title: 'Managing replays',
        href: '/replay-teams/managing-replays',
        icon: 'console',
      },
      {
        title: 'Billing',
        href: '/replay-teams/billing',
        icon: 'console',
      },
    ],
  },
  {
    title: 'Replay Runtimes',
    href: '/replay-runtimes',
    links: [
      {
        title: 'Replay Chrome',
        href: '/replay-runtimes/replay-chrome',
        icon: 'console',
      },
      {
        title: 'Replay Firefox',
        href: '/replay-runtimes/replay-firefox',
        icon: 'console',
      },
      {
        title: 'Replay Node',
        href: '/replay-runtimes/replay-node',
        icon: 'console',
      },
    ],
  },
  {
    title: 'Replay CLI',
    href: '/replay-cli',
    links: [
      { title: 'Commands', href: '/replay-cli/commands', icon: 'console' },
      {
        title: 'Uploading Source Maps',
        href: '/replay-cli/source-maps',
        icon: 'console',
      },
    ],
  },
  {
    title: 'Integrations',
    href: '/integrations',
    links: [
      {
        title: 'Replay APIs',
        href: '/integrations/replay-apis',
        icon: 'console',
        links: [
          {
            title: 'GraphQL API',
            href: '/integrations/replay-apis/graphql-api',
            icon: 'console',
          },
          {
            title: 'Replay Protocol',
            href: '/integrations/replay-apis/replay-protocol',
            icon: 'console',
          },
          {
            title: 'Replay Driver',
            href: '/integrations/replay-apis/replay-driver',
            icon: 'console',
          },
        ],
      },
      {
        title: 'Frameworks & Libraries',
        href: '/integrations/frameworks-libraries',
        icon: 'console',
        links: [
          {
            title: 'NextJS',
            href: '/integrations/frameworks-libraries/nextjs',
            icon: 'console',
          },
        ],
      },
      {
        title: '3rd Party Integrations',
        href: '/integrations/3rd-party-integrations',
        icon: 'console',
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
    links: [
      {
        title: 'Playwright',
        href: '/comparison/playwright',
        icon: 'playwright',
      },
      {
        title: 'Cypress',
        href: '/comparison/cypress',
        icon: 'cypress',
      },
      {
        title: `Chrome's Recorder`,
        href: '/comparison/chrome',
        icon: 'console',
      },
      {
        title: 'Loom',
        href: '/comparison/loom',
        icon: 'console',
      },
      {
        title: 'Browser DevTools',
        href: '/comparison/devtools',
        icon: 'console',
      },
    ],
  },
  {
    title: 'Additional Content',
    href: '/additional-content',
    links: [
      {
        title: 'Privacy principles',
        href: '/additional-content/privacy-principles',
        icon: 'console',
      },
      {
        title: 'Security practices',
        href: '/additional-content/security-practices',
        icon: 'console',
      },
    ],
  },
]
