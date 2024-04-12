import Card, { CardAttributes } from "@/components/Card";
import MiniCard from "@/components/MiniCard";

const cards: CardAttributes[] = [{
  icon: 'replay',
  title: "Record your first replay",
  content: "Learn how to record your first replay in under a minute",
  href: '/getting-started/record-your-first-replay'
},
{
  icon: 'cypresssimple',
  title: "Record your Cypress tests",
  content: "Integrate Replay Browser into your test run",
  href: '/test-runners/cypress-io'
},
{
  icon: 'rewind',
  title: "Time travelling DevTools",
  content: "Rewind, fast-forward and inspect your application",
  href: '/devtools/console-panel'
},
{
  icon: 'playwrightsimple',
  title: "Record Playwright tests",
  content: "Rewind, fast-forward and inspect your application",
  href: '/devtools/console-panel'
},
{
  icon: 'wrench',
  title: "Set up CI/CD environments",
  content: "Rewind, fast-forward and inspect your application",
  href: '/devtools/console-panel'
},
{
  icon: 'sort',
  title: "Test Suite management",
  content: "Rewind, fast-forward and inspect your application",
  href: '/devtools/console-panel'
}
]

const miniCards: CardAttributes[] = [{
  icon: 'console',
  title: "Add print statements",
  content: "Learn how to record your first replay in under a minute",
  href: '/getting-started/record-your-first-replay'
},
{
  icon: 'cypresssimple',
  title: "What is time travelling",
  content: "Integrate Replay Browser into your test run",
  href: '/test-runners/cypress-io'
},
{
  icon: 'rewind',
  title: "Debug React Components",
  content: "Rewind, fast-forward and inspect your application",
  href: '/devtools/console-panel'
},
{
  icon: 'rewind',
  title: "Pull request comments",
  content: "Rewind, fast-forward and inspect your application",
  href: '/devtools/console-panel'
},
{
  icon: 'rewind',
  title: "Flaky test management",
  content: "Rewind, fast-forward and inspect your application",
  href: '/devtools/console-panel'
},
{
  icon: 'rewind',
  title: "Network monitor",
  content: "Rewind, fast-forward and inspect your application",
  href: '/devtools/console-panel'
}]

export default function Page() {
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="pb-20">
        <h1 className="text-3xl font-semibold pb-4">Replay Documentation</h1>
        <p className="sm:w-full lg:w-1/2">Learn how to record your first replay, integrate into your test suite, setup your CI/CD environment and use time-travelling DevTools</p>
      </div>
      <h2 className="text-2xl font-semibold pb-8">Most popular</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 pb-20 place-items-center gap-4">
        { cards.map(({ href, content, icon, title
        }) => (
          <Card 
            key={href}
            title={title}
            content={content}
            icon={icon}
            href={href}
            /> 
        ))}
      </div>
      <h2 className="text-2xl font-semibold pb-8">Learn the basics</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 pb-20 place-items-center gap-4">
      { miniCards.map(({ href, content, icon, title
        }) => (
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
