import Card, { CardAttributes } from '@/components/Card'
import MiniCard from '@/components/MiniCard'
import { Hero } from '@/components/Hero'
import Link from 'next/link'

const cards: CardAttributes[] = [
  {
    icon: 'replay',
    title: 'Replay QA overview',
    content:
      'Autonomous app testing that explores your web app, writes Playwright tests, captures recordings, and delivers root cause analysis.',
    href: '/basics/replay-qa/overview',
  },
  {
    icon: 'github',
    title: 'CI integration with FRPC',
    content:
      'Run Replay QA against every change in your pipeline with the FRPC CI integration.',
    href: '/basics/replay-qa/frpc-ci',
  },
  {
    icon: 'uploadicon',
    title: 'Publishing with source maps',
    content:
      'Publish your app with source maps so Replay QA traces failures back to your original source code.',
    href: '/basics/replay-qa/source-maps',
  },
]

const miniCards: CardAttributes[] = [
  {
    icon: 'replay',
    title: 'Launch Replay QA',
    content:
      'Give Replay QA a URL and let it autonomously navigate, test, and report bugs.',
    href: '/basics/replay-qa/overview',
  },
  {
    icon: 'github',
    title: 'Connect a GitHub repo',
    content:
      'Install the GitHub App and test every change as it lands—no CI configuration required.',
    href: '/basics/replay-qa/overview',
  },
  {
    icon: 'uploadicon',
    title: 'Source maps guide',
    content:
      'Get root cause analyses that reference the right files and line numbers.',
    href: '/basics/replay-qa/source-maps',
  },
]

export default function Page() {
  return (
    <div
      data-test-id="page"
      className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 lg:px-8"
    >
      <Hero />
      <h2 className="py-8 text-2xl font-semibold text-gray-900 dark:text-white">
        Replay QA guides
      </h2>
      <div className="grid grid-cols-1 gap-4 pb-12 sm:grid-cols-2 lg:grid-cols-3">
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
      <h2 className="pb-8 text-2xl font-semibold">Get started</h2>
      <div className="grid place-items-stretch gap-4 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {miniCards.map(({ href, content, icon, title }) => (
          <MiniCard
            key={title}
            title={title}
            content={content}
            icon={icon}
            href={href}
          />
        ))}
      </div>

      <p className="pb-12 text-center text-sm text-gray-500 dark:text-zinc-500">
        Ready to try Replay QA?{' '}
        <Link
          href="https://qa.replay.io"
          className="font-medium text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-600 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          Launch Replay QA
        </Link>
      </p>
    </div>
  )
}
