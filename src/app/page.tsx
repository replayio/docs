import Card, { CardAttributes } from '@/components/Card'
import MiniCard from '@/components/MiniCard'
import { Hero } from '@/components/Hero'

const cards: CardAttributes[] = [
  {
    icon: 'rewind',
    title: 'Time travel',
    content: 'Learn how to inspect your application in new ways.',
    href: '/time-travel-intro/what-is-time-travel',
  },
  {
    icon: 'terminal',
    title: 'Browser DevTools',
    content: 'Inspect your application with Browser DevTools after the fact.',
    href: '/browser-devtools/elements-panel',
  },
  {
    icon: 'terminal',
    title: 'Framework DevTools',
    content: 'Inspect your application with Framework DevTools after the fact.',
    href: '/framework-devtools/react-panel',
  },
  {
    icon: 'replay',
    title: 'Record your first replay',
    content: 'Record your app with with the Replay browser in under a minute.',
    href: '/getting-started/record-your-first-replay',
  },
  {
    icon: 'cypresssimple',
    title: 'Record your Cypress tests',
    content: 'Learn how to setup our Cypress plugin and record your tests.',
    href: '/test-runners/cypress-io',
  },
  {
    icon: 'playwrightsimple',
    title: 'Record your Playwright tests',
    content: 'Learn how to setup our Playwright plugin and record your tests.',
    href: '/test-runners/playwright/installation',
  },
]

const miniCards: CardAttributes[] = [
  {
    icon: 'terminal',
    title: 'Live console logs',
    content: 'Add console logs in your code with a single click.',
    href: '/time-travel-intro/add-console-logs-on-the-fly',
  },
  {
    icon: 'react',
    title: 'React components',
    content: 'Inspect React component props, state, and hooks.',
    href: '/framework-devtools/react-panel',
  },
  {
    icon: 'folder',
    title: 'Hit counts',
    content: 'Explore your source code with built-in code coverage.',
    href: '/browser-devtools/source-viewer',
  },
  {
    icon: 'cypresssimple',
    title: 'Cypress Timeline',
    content:
      'Debug your test as if it’s running locally with test step details.',
    href: '/framework-devtools/cypress-timeline',
  },
  {
    icon: 'analytics',
    title: 'Top failing tests',
    content: 'Burn down the backlog of failing and flaky tests.',
    href: '/test-suites/top-failing-and-flaky-tests',
  },
  {
    icon: 'analytics',
    title: 'PR comments',
    content: 'Catch regressions before they ship to prod with PR comments.',
    href: '/test-suites/pr-comments',
  },
]

export default function Page() {
  return (
    <div data-test-id="page" className="mx-auto flex max-w-4xl flex-col py-8">
      <Hero />
      <h2 className="pb-8 text-2xl font-semibold">Most popular</h2>
      <div className="grid place-items-center gap-4 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ href, content, icon, title }) => (
          <Card
            key={href}
            title={title}
            content={content}
            icon={icon}
            href={href}
          />
        ))}
      </div>
      <h2 className="pb-8 text-2xl font-semibold">Learn the basics</h2>
      <div className="grid place-items-center gap-4 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {miniCards.map(({ href, content, icon, title }) => (
          <MiniCard
            key={href}
            title={title}
            content={content}
            icon={icon}
            href={href}
          />
        ))}
      </div>
    </div>
  )
}

// **Inspect React components**
// Inspect React component props, state, and hooks.

// **Explore your source code**
// Search, View, and explore your source code with built-in code coverage data.

// **Cypress Timeline**
// Debug your test as if it’s running locally with test step details and jump to code.

// **PR comments**
// Catch regressions before they ship to prod with PR comments.

// **Top failing tests**
// Burn down the flaky test backlog with test suite analytics.
