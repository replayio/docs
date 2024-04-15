import Card, { CardAttributes } from '@/components/Card'
import MiniCard from '@/components/MiniCard'
import { Hero } from '@/components/Hero'

const cards: CardAttributes[] = [
  {
    icon: 'rewind',
    title: 'Intro to time travel',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/time-travel-intro/intro-to-time-travel',
  },
  {
    icon: 'terminal',
    title: 'Browser DevTools',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/time-travel-intro/add-console-logs-on-the-fly',
  },
  {
    icon: 'terminal',
    title: 'Framework DevTools',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
  {
    icon: 'replay',
    title: 'Record your first replay',
    content: 'Learn how to record your first replay in under a minute',
    href: '/getting-started/record-your-first-replay',
  },
  {
    icon: 'cypresssimple',
    title: 'Record Cypress tests',
    content: 'Integrate Replay Browser into your test run',
    href: '/test-runners/cypress-io',
  },
  {
    icon: 'playwrightsimple',
    title: 'Record Playwright tests',
    content: 'Rewind, fast-forward and inspect your application',
    href: '/devtools/console-panel',
  },
]

const miniCards: CardAttributes[] = [
  {
    icon: 'terminal',
    title: 'Add print statements',
    content: 'How to add retroactive console logs to your replay',
    href: '/devtools/console-panel',
  },
  {
    icon: 'timeline',
    title: 'Events timeline',
    content: 'Travel in time and stop at a perfect moment',
    href: '/test-runners/cypress-io',
  },
  {
    icon: 'folder',
    title: 'Source panel',
    content: 'Search and explore your code execution',
    href: '/devtools/console-panel',
  },
  {
    icon: 'pullrequest',
    title: 'Pull request comments',
    content: 'Catch regressions before going to production',
    href: '/devtools/console-panel',
  },
  {
    icon: 'analytics',
    title: 'Test suite analytics',
    content: 'Getting ahead of test flaeks via Test suite analytics',
    href: '/devtools/console-panel',
  },
  {
    icon: 'react',
    title: 'React panel',
    content: 'Examine properties, state and hooks with time-travelling',
    href: '/devtools/console-panel',
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
