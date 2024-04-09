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
        { title: 'Add console logs on the Fly', href: '/getting-started/add-console-logs-on-the-fly' },
        { title: 'Intro To Time Travel', href: '/getting-started/intro-to-time-travel' },
        { title: 'Visualize time. Inspect state.', href: '/getting-started/visualize-time-inspect-state' },
        { title: 'Annotate the timeline', href: '/getting-started/annotate-the-timeline' },
        { title: 'Bisect the Problem', href: '/getting-started/bisect-the-problem' },
        { title: 'How Time Travel Works', href: '/getting-started/how-time-travel-works' },
      ]
    },
    {
      title: 'Replay DevTools',
      links: [
        { title: 'Video Player', href: '/devtools/video-player' },
        { title: 'Events Timeline', href: '/devtools/events-timeline' },
        { title: 'Cypress Timeline', href: '/devtools/cypress-timeline' },
        { title: 'Playwright Timeline', href: '/devtools/playwright-timeline' },
        { title: 'Source Viewer', href: '/devtools/source-viewer' },
        { title: 'Console Panel', href: '/devtools/console-panel' },
        { title: 'Elements Panel', href: '/devtools/elements-panel' },
        { title: 'Network Monitor', href: '/devtools/network-monitor' },
        { title: 'Pause Panel', href: '/devtools/pause-panel' },
        { title: 'React Panel', href: '/devtools/react-panel' },
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