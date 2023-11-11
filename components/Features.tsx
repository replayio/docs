import Bug from '../icons/Bug'
import HeroiconsCommandLine from '../icons/HeroiconsCommandLine'
import MaterialSymbolsFlaky from '../icons/MaterialSymbolsFlaky'
import MagnifyingApps from '../icons/MagnifyingApps'

const items = [
  {
    name: 'See what happened on CI',
    description:
      'Tests fail on CI but pass locally? Recording a replay of your tests will give you insight you needed.',
    icon: HeroiconsCommandLine,
  },
  {
    name: 'Debug with ease',
    description:
      'Finding a root cause is much easier whan your test flake is recorded in a replay. No more guessing games. Examine the test flake at the very place it happened.',
    icon: Bug,
  },
  {
    name: 'Goodbye flaky tests',
    description:
      'With Replay DevTools you dive deeper than with any other tool. Test flakiness is no longer a mystery, but something that can be found and fixed.',
    icon: MaterialSymbolsFlaky,
  },
  {
    name: 'Explore both test and app code',
    description:
      'Flakiness can come from anywhere - both the app and the test. You cannot make them stable by ignoring one or the other. Replay allows you to take them both into consideration',
    icon: MagnifyingApps,
  },
]

export default function Features() {
  return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {items.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
  )
}
