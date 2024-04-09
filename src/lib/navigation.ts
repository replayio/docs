interface NavigationItemLink {
  title: string;
  href: string;
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
        { title: 'What is time travel', href: '/getting-started/what-is-time-travel' },
        { title: 'Add a console.log()', href: '/getting-started/add-a-console-log' },
      ]
    },
    {
      title: 'Replay DevTools',
      links: [
        { title: 'Console Panel', href: '/devtools/console-panel' },
        { title: 'Events Timeline', href: '/devtools/events-timeline' },
        { title: 'Playwright Timeline', href: '/devtools/playwright-timeline' },
        { title: 'Source Viewer', href: '/devtools/source-viewer' },
        { title: 'Cypress Timeline', href: '/devtools/cypress-timeline' },
        { title: 'Network Monitor', href: '/devtools/network-monitor' },
        { title: 'React Panel', href: '/devtools/react-panel' },
        { title: 'Video Player', href: '/devtools/video-player' },
        { title: 'Elements Panel', href: '/devtools/elements-panel' },
        { title: 'Pause Panel', href: '/devtools/pause-panel' },
        { title: 'Redux Panel', href: '/devtools/redux-panel' }
      ]
    },
    {
      title: "Test Runners",
      links: [
        { title: 'Overview', href: '/test-runners/overview' },
        { title: 'Cypress.io', href: '/test-runners/cypress-io', links: [
          { title: 'Create Your First replay', href: '/test-runners/cypress-io/create-your-first-replay' },
          { title: 'Debugging Tests', href: '/test-runners/cypress-io/debugging-tests' }
        ]},
        { title: 'Playwright', href: '/test-runners/playwright/installation' },
        { title: 'Selenium', href: '/test-runners/selenium' },
        { title: 'WebdriverIO', href: '/test-runners/webdriver-io' },
        { title: 'Puppeteer', href: '/test-runners/puppeteer' }
      ]
    },
    {
      title: 'Test Suite Management',
      links: [
        { title: 'Analytics', href: '/test-suite-management/analytics' },
        { title: 'PR Comments', href: '/test-suite-management/pr-comments' },
        { title: 'Top Failing And Flaky Tests', href: '/test-suite-management/top-failing-and-flaky-tests' },
        { title: 'Flake Test Detection', href: '/test-suite-management/flake-test-detection' },
        { title: 'Runs View', href: '/test-suite-management/runs-view' }
      ]
    },
    {
      title: "Running on CI/CD",
      links: [
        { title: 'Setting up', href: '/test-runners/' },
        { title: 'Pull request comments', href: '/test-runners/' },
        { title: 'Recording strategies', href: '/test-runners/' }
      ]
    }
]