import { icons } from "@/components/NavIcon";

interface NavigationItemLink {
  title: string;
  href: string;
  icon?: keyof typeof icons
  links?: NavigationItemLink[]
}

type NavigationType = Array<{
    title: string;
    links: NavigationItemLink[];
  }>;

export const navigation: NavigationType = [
    {
      title: 'Getting started',
      links: [
        { title: 'What is time travel', href: '/getting-started/what-is-time-travel', icon: 'hourglass' },
        { title: 'Add console logs on the Fly', href: '/getting-started/add-console-logs-on-the-fly', icon: 'console' },
        { title: 'Intro To Time Travel', href: '/getting-started/intro-to-time-travel', icon: 'timetravel' },
        { title: 'Visualize time. Inspect state.', href: '/getting-started/visualize-time-inspect-state', icon: 'inspect' },
        { title: 'Annotate the timeline', href: '/getting-started/annotate-the-timeline', icon: 'pencil' },
        { title: 'Bisect the Problem', href: '/getting-started/bisect-the-problem', icon: 'razor' },
        { title: 'How Time Travel Works', href: '/getting-started/how-time-travel-works', icon: 'questionmark' },
      ]
    },
    {
      title: 'Replay CLI',
      links: [
        { title: 'Create Your First Replay', href: '/replay-cli/create-your-first-replay', icon: 'overview' },
        { title: 'Generate API key', href: '/replay-cli/generate-api-key', icon: 'key' },
        { title: 'Commands', href: '/replay-cli/commands', icon: 'console' },
      ]
    },
    {
      title: 'Replay DevTools',
      links: [
        { title: 'Video Player', href: '/devtools/video-player', icon: 'video' },
        { title: 'Events Timeline', href: '/devtools/events-timeline', icon: 'timeline' },
        { title: 'Cypress Timeline', href: '/devtools/cypress-timeline', icon: 'cypress' },
        { title: 'Playwright Timeline', href: '/devtools/playwright-timeline', icon: 'playwright' },
        { title: 'Source Viewer', href: '/devtools/source-viewer', icon: 'folder' },
        { title: 'Console Panel', href: '/devtools/console-panel', icon: 'consolepanel' },
        { title: 'Elements Panel', href: '/devtools/elements-panel', icon: 'inspect' },
        { title: 'Network Monitor', href: '/devtools/network-monitor', icon: 'rocket' },
        { title: 'Pause Panel', href: '/devtools/pause-panel', icon: 'pause' },
        { title: 'React Panel', href: '/devtools/react-panel', icon: 'react' },
        { title: 'Redux Panel', href: '/devtools/redux-panel', icon: 'redux' }
      ]
    },
    {
      title: "Test Runners",
      links: [
        { title: 'Overview', href: '/test-runners/overview', icon: 'overview' },
        { title: 'Cypress.io', href: '/test-runners/cypress-io', icon: 'cypress', links: [
          { title: 'Create Your First replay', href: '/test-runners/cypress-io/create-your-first-replay' },
          { title: 'Debugging Tests', href: '/test-runners/cypress-io/debugging-tests' }
        ]},
        { title: 'Playwright', href: '/test-runners/playwright/installation', icon: 'playwright' },
        { title: 'Selenium', href: '/test-runners/selenium', icon: 'selenium' },
        { title: 'WebdriverIO', href: '/test-runners/webdriver-io', icon: 'webdriverio' },
        { title: 'Puppeteer', href: '/test-runners/puppeteer', icon: 'puppeteer' }
      ]
    },
    {
      title: 'Test Suite Management',
      links: [
        { title: 'Analytics', href: '/test-suite-management/analytics', icon: 'analytics' },
        { title: 'PR Comments', href: '/test-suite-management/pr-comments', icon: 'pullrequest' },
        { title: 'Top Failing And Flaky Tests', href: '/test-suite-management/top-failing-and-flaky-tests', icon: 'sort' },
        { title: 'Flake Test Detection', href: '/test-suite-management/flake-test-detection', icon: 'flake' },
        { title: 'Runs View', href: '/test-suite-management/runs-view', icon: 'runsview' }
      ]
    },
    {
      title: "Running on CI/CD",
      links: [
        { title: 'Setting up', href: '/running-on-ci-cd/setting-up', icon: 'wrench' },
        { title: 'Recording strategies', href: '/running-on-ci-cd/recording-strategies', icon: 'strategy' }
      ]
    }
]