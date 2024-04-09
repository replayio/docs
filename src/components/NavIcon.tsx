import clsx from 'clsx'

import FileIcon from './icons/FileIcon'
import { Hourglass } from './icons/Hourglass'
import { ConsoleSymbol } from './icons/ConsoleSymbol'
import { TimeTravelIcon } from './icons/TimeTravelIcon'
import { InspectLine } from './icons/InspectLine'
import { LeadPencil } from './icons/LeadPencil'
import { RazorBlade } from './icons/RazorBlade'
import { TwotoneQuestionMark } from './icons/TwotoneQuestionMark'
import { VideocamSharp } from './icons/VideocamSharp'
import { TimelineOutline } from './icons/TimelineOutline'
import { CypressSimple } from './icons/CypressSimple'
import { PlaywrightSimple } from './icons/PlaywrightSimple'
import { FolderOpen } from './icons/FolderOpen'
import { ConsolePanel } from './icons/ConsolePanel'
import { RocketIcon } from './icons/RocketIcon'
import { PauseIcon } from './icons/PauseIcon'
import { ReactIcon } from './icons/ReactIcon'
import { ReduxIcon } from './icons/ReduxIcon'
import { Overview } from './icons/Overview'
import { SeleniumSimple } from './icons/SeleniumSimple'
import { WebdriverioSimple } from './icons/WebdriverioSimple'
import { PuppeteerSimple } from './icons/PuppeteerSimple'
import { AnalyticsIcon } from './icons/AnalyticsIcon'
import { PullRequestIcon } from './icons/PullRequestIcon'
import { SortIcon } from './icons/SortIcon'
import { SnowflakeCheck } from './icons/SnowflakeCheck'
import { RunsViewIcon } from './icons/RunsViewIcon'
import { WrenchIcon } from './icons/WrenchIcon'
import { StrategyIcon } from './icons/StrategyIcon'

export const icons = {
  file: FileIcon,
  hourglass: Hourglass,
  console: ConsoleSymbol,
  timetravel: TimeTravelIcon,
  inspect: InspectLine,
  pencil: LeadPencil,
  razor: RazorBlade,
  questionmark: TwotoneQuestionMark,
  video: VideocamSharp,
  timeline: TimelineOutline,
  cypress: CypressSimple,
  playwright: PlaywrightSimple,
  folder: FolderOpen,
  consolepanel: ConsolePanel,
  rocket: RocketIcon,
  pause: PauseIcon,
  react: ReactIcon,
  redux: ReduxIcon,
  overview: Overview,
  selenium: SeleniumSimple,
  webdriverio: WebdriverioSimple,
  puppeteer: PuppeteerSimple,
  analytics: AnalyticsIcon,
  pullrequest: PullRequestIcon,
  sort: SortIcon,
  flake: SnowflakeCheck,
  runsview: RunsViewIcon,
  wrench: WrenchIcon,
  strategy: StrategyIcon
}
export function NavIcon({
  icon = 'file',
  className,
  ...props
}: {
  icon?: keyof typeof icons
} & Omit<React.ComponentPropsWithoutRef<'svg'>, 'color'>) {
  let IconComponent = icons[icon]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={clsx(className, 'w-4 h-4 mr-2 fill-current text-gray-400 inline-block')}
      {...props}
    >
      <IconComponent />
    </svg>
  )
}