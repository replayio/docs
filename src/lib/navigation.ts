import { icons } from '@/components/NavIcon'

export type NavigationItem = {
  href: string
  icon?: keyof typeof icons
  links?: NavigationItem[]
  omitFromDocumentTitle?: boolean
  title: string
}


export const navigation: NavigationItem[] = [
  // {
  //   title: 'Quickstart Guide',
  //   href: '/quickstart',
  // },
  
  {
    title: 'Intro to time travel',
    href: '/time-travel-intro',
    links: [
      {
        title: 'What is time travel?',
        href: '/time-travel-intro/what-is-time-travel',
        icon: 'hourglass',
      },
      {
        title: 'Add console logs on the fly',
        href: '/time-travel-intro/add-console-logs-on-the-fly',
        icon: 'console',
      },
      {
        title: 'Visualize time. Inspect state.',
        href: '/time-travel-intro/visualize-time-inspect-state',
        icon: 'inspect',
      },
      {
        title: 'Annotate the timeline',
        href: '/time-travel-intro/annotate-the-timeline',
        icon: 'pencil',
      },
      {
        title: 'Bisect the problem',
        href: '/time-travel-intro/bisect-the-problem',
        icon: 'razor',
      },
      {
        title: 'Design principles',
        href: '/time-travel-intro/intro-to-time-travel',
        icon: 'timetravel',
      },
      {
        title: 'How time travel works',
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
        title: 'Console Panel',
        href: '/browser-devtools/console',
        icon: 'console',
      },

      {
        title: 'Source Viewer',
        href: '/browser-devtools/source-viewer',
        icon: 'folder',
      },

      {
        title: 'Pause Panel',
        href: '/browser-devtools/pause-panel',
        icon: 'pause',
      },
      {
        title: 'Replay Viewer',
        href: '/browser-devtools/replay-viewer',
        icon: 'video',
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
        title: 'Recent runs ',
        href: '/test-suites/runs-view',
        icon: 'runsview',
      },
      {
        title: 'Top Failing And Flaky Tests',
        href: '/test-suites/top-failing-and-flaky-tests',
        icon: 'sort',
      },
      {
        title: 'PR Comments',
        href: '/test-suites/pr-comments',
        icon: 'pullrequest',
      },
      // {
      //   title: 'Analytics',
      //   href: '/test-suites/analytics',
      //   icon: 'analytics',
      // },
      // {
      //   title: 'Test Flake Detection',
      //   href: '/test-suites/test-flake-detection',
      //   icon: 'flake',
      // },
    ],
  },
  {
    title: 'Test Runners',
    href: '/test-runners',
    omitFromDocumentTitle: true,
    links: [
      { title: 'Overview', href: '/test-runners/overview', icon: 'overview' },
      {
        title: 'Cypress.io',
        href: '',
        icon: 'cypress',
        links: [
          {
            title: 'Getting started',
            href: '/test-runners/cypress-io',
            icon: 'rocket',
          },
          {
            title: 'Record your first replay',
            href: '/test-runners/cypress-io/record-your-first-replay',
            icon: 'record',
          },
          {
            title: 'Debugging tests',
            href: '/test-runners/cypress-io/debugging-tests',
            icon: 'debuggingtests',
          },
          {
            title: 'Recording options',
            href: '/test-runners/cypress-io/recording-options',
            icon: 'settings',
          },
          {
            title: 'GitHub actions',
            href: '/test-runners/cypress-io/github-actions',
            icon: 'githubembeds',
          },
          {
            title: 'Other CI providers',
            href: '/test-runners/cypress-io/other-ci-providers',
            icon: 'otherciproviders',
          },
          {
            title: 'FAQ',
            href: '/test-runners/cypress-io/faq',
            icon: 'faq',
          },
        ],
      },
      {
        title: 'Playwright',
        href: '',
        icon: 'playwright',
        links: [
          {
            title: 'Record your first replay',
            href: '/test-runners/playwright/record-your-first-replay',
            icon: 'record',
          },
          // {
          //   title: 'Debugging tests',
          //   href: '/test-runners/playwright/debugging-tests',
          //   icon: 'debuggingtests'
          // },
          {
            title: 'GitHub actions',
            href: '/test-runners/playwright/github-actions',
            icon: 'githubembeds',
          },
          {
            title: 'Other CI providers',
            href: '/test-runners/playwright/other-ci-providers',
            icon: 'otherciproviders',
          },
          {
            title: 'FAQ',
            href: '/test-runners/playwright/faq',
            icon: 'faq',
          },
        ],
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
      // {
      //   title: 'Setting up',
      //   href: '/ci-workflows/setting-up',
      //   icon: 'wrench',
      // },
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
      {
        title: 'Upload strategies',
        href: '/ci-workflows/upload-strategies',
        icon: 'upload',
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
        icon: 'settingupateam',
      },
      {
        title: 'Okta integration',
        href: '/replay-teams/okta-integration',
        icon: 'oktaintegration',
      },
      {
        title: 'Enterprise security controls',
        href: '/replay-teams/enterprise-security-controls',
        icon: 'enterprisesecuritycontrols',
      },
      {
        title: 'Managing replays',
        href: '/replay-teams/managing-replays',
        icon: 'managingreplays',
      },
      {
        title: 'Billing',
        href: '/replay-teams/billing',
        icon: 'billing',
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
        icon: 'replaychrome',
      },
      {
        title: 'Replay Firefox',
        href: '/replay-runtimes/replay-firefox',
        icon: 'replayfirefox',
      },
      {
        title: 'Replay Node',
        href: '/replay-runtimes/replay-node',
        icon: 'replaynode',
      },
    ],
  },
  {
    title: 'Replay CLI',
    href: '/replay-cli',
    links: [
      {
        title: 'Replay CLI',
        href: '/replay-cli/commands',
        icon: 'commands',
      },
      {
        title: 'Uploading source maps',
        href: '/replay-cli/source-maps',
        icon: 'uploadingsourcemaps',
      },
    ],
  },
  {
    title: 'Integrations',
    href: '/integrations',
    links: [
      {
        title: 'Replay APIs',
        href: '',
        icon: 'replayapis',
        links: [
          {
            title: 'GraphQL API',
            href: '/integrations/replay-apis/graphql-api',
            icon: 'graphqlapi',
          },
          {
            title: 'Replay Protocol',
            href: '/integrations/replay-apis/replay-protocol',
            icon: 'replayprotocol',
          },
          {
            title: 'Replay Driver',
            href: '/integrations/replay-apis/replay-driver',
            icon: 'replaydriver',
          },
        ],
      },
      {
        title: 'Frameworks & libraries',
        href: '',
        icon: 'frameworks',
        links: [
          {
            title: 'NextJS',
            href: '/integrations/frameworks-libraries/nextjs',
            icon: 'nextjs',
          },
        ],
      },
      {
        title: '3rd Party integrations',
        href: '',
        icon: 'integrations',
        links: [
          {
            title: 'GitHub Embeds',
            href: '/integrations/3rd-party-integrations/github-embeds',
            icon: 'githubembeds',
          },
          {
            title: 'Loom Embeds',
            href: '/integrations/3rd-party-integrations/loom-embeds',
            icon: 'loomembeds',
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
        title: `Chrome Recorder`,
        href: '/comparison/chrome',
        icon: 'chromerecorder',
      },
      {
        title: 'Loom',
        href: '/comparison/loom',
        icon: 'loom',
      },
      {
        title: 'Browser DevTools',
        href: '/comparison/devtools',
        icon: 'browserdevtools',
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
        icon: 'privacy',
      },
      {
        title: 'Security practices',
        href: '/additional-content/security-practices',
        icon: 'security',
      },
    ],
  },
]
