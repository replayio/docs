import Bug from '../../icons/Bug'
import HeroiconsCommandLine from '../../icons/HeroiconsCommandLine'
import MaterialSymbolsFlaky from '../../icons/MaterialSymbolsFlaky'
import MagnifyingApps from '../../icons/MagnifyingApps'

export const items = [
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