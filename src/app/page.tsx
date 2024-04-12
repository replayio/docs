import Card, { CardAttributes } from '@/components/Card'
import MiniCard from '@/components/MiniCard'

const cards: CardAttributes[] = [
  {
    icon: 'replay',
    title: 'Record your first replay',
    content: 'Learn how to record your first replay in under a minute',
    href: '/getting-started/record-your-first-replay',
  },
  {
    icon: 'replay',
    title: 'Intro to time travel',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
  {
    icon: 'rewind',
    title: 'Time travel DevTools',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
  {
    icon: 'cypresssimple',
    title: 'Record your Cypress suite',
    content: 'Integrate Replay Browser into your test run',
    href: '/test-runners/cypress-io',
  },

  {
    icon: 'playwrightsimple',
    title: 'Record your Playwright suite',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
  {
    icon: 'sort',
    title: 'Replay Test Suites',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
]

const miniCards: CardAttributes[] = [
  {
    icon: 'console',
    title: 'Add print statements',
    content: 'Learn how to record your first replay in under a minute',
    href: '/getting-started/record-your-first-replay',
  },
  {
    icon: 'cypresssimple',
    title: 'What is time travelling',
    content: 'Integrate Replay Browser into your test run',
    href: '/test-runners/cypress-io',
  },
  {
    icon: 'rewind',
    title: 'Debug React Components',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
  {
    icon: 'rewind',
    title: 'Pull request comments',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
  {
    icon: 'rewind',
    title: 'Flaky test management',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
  {
    icon: 'rewind',
    title: 'Network monitor',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
]

export default function Page() {
  return (
    <div className="flex-autopy-16 min-w-0 max-w-2xl py-8 lg:max-w-none lg:pr-0 xl:pr-16">
      <div className="pb-20">
        <h1 className="pb-4 text-3xl font-semibold">Replay Documentation</h1>
        <p className="sm:w-full lg:w-1/2 dark:text-slate-400">
          Learn how to record your first replay, integrate into your test suite,
          setup your CI/CD environment and use time-travelling DevTools
        </p>
      </div>
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
