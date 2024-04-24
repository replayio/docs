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
import { Key } from './icons/Key'
import { Home } from './icons/Home'
import { ReplayLogomark } from './icons/ReplayLogomark'
import { Record } from './icons/Record'
import { RecordYourFirstReplayIcon } from './icons/RecordYourFirstReplayIcon'
import { DebuggingTestsIcon } from './icons/DebuggingTestsIcon'
import { ReplayChromeIcon } from './icons/ReplayChromeIcon'
import { ReplayFirefoxIcon } from './icons/ReplayFirefoxIcon'
import { ReplayNodeIcon } from './icons/ReplayNodeIcon'
import { CommandsIcon } from './icons/CommandsIcon'
import { UploadingSourceMapsIcon } from './icons/UploadingSourceMapsIcon'
import { ReplayAPIsIcon } from './icons/ReplayAPIsIcon'
import { GraphQLAPIIcon } from './icons/GraphQLAPIIcon'
import { ReplayProtocolIcon } from './icons/ReplayProtocolIcon'
import { ReplayDriverIcon } from './icons/ReplayDriverIcon'
import { NextJSIcon } from './icons/NextJSIcon'
import { GitHubEmbedsIcon } from './icons/GitHubEmbedsIcon'
import { LoomEmbedsIcon } from './icons/LoomEmbedsIcon'
import { ChromeRecorderIcon } from './icons/ChromeRecorderIcon'
import { LoomIcon } from './icons/LoomIcon'
import { BrowserDevToolsIcon } from './icons/BrowserDevToolsIcon'
import { CLIIcon } from './icons/CLI'
import { SettingUpATeamIcon } from './icons/SettingUpATeamIcon'
import { OktaIntegrationIcon } from './icons/OktaIntegrationIcon'
import { EnterpriseSecurityControlsIcon } from './icons/EnterpriseSecurityControlsIcon'
import { ManagingReplaysIcon } from './icons/ManagingReplaysIcon'
import { BillingIcon } from './icons/BillingIcon'
import { PrivacyPrinciplesIcon } from './icons/PrivacyPrinciplesIcon'
import { SecurityPrinciplesIcon } from './icons/SecurityPrinciplesIcon'
import { IntegrationsIcon } from './icons/IntegrationsIcon'
import { FrameworksIcon } from './icons/FrameworksIcon'

import { EmptyIcon } from './icons/EmptyIcon'
import { OtherCiProviders } from './icons/OtherCiProviders'
import { SettingsRounded } from './icons/SettingsRounded'
import { Faq } from './icons/Faq'
import { UploadIcon } from './icons/UploadIcon'
import { University } from './icons/University'

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
  strategy: StrategyIcon,
  key: Key,
  home: Home,
  replay: ReplayLogomark,
  record: Record,
  recordyourfirstreplay: RecordYourFirstReplayIcon,
  debuggingtests: DebuggingTestsIcon,
  replaychrome: ReplayChromeIcon,
  replayfirefox: ReplayFirefoxIcon,
  replaynode: ReplayNodeIcon,
  commands: CommandsIcon,
  uploadingsourcemaps: UploadingSourceMapsIcon,
  replayapis: ReplayAPIsIcon,
  graphqlapi: GraphQLAPIIcon,
  replayprotocol: ReplayProtocolIcon,
  replaydriver: ReplayDriverIcon,
  nextjs: NextJSIcon,
  githubembeds: GitHubEmbedsIcon,
  loomembeds: LoomEmbedsIcon,
  chromerecorder: ChromeRecorderIcon,
  loom: LoomIcon,
  browserdevtools: BrowserDevToolsIcon,
  cli: CLIIcon,
  settingupateam: SettingUpATeamIcon,
  oktaintegration: OktaIntegrationIcon,
  enterprisesecuritycontrols: EnterpriseSecurityControlsIcon,
  managingreplays: ManagingReplaysIcon,
  billing: BillingIcon,
  privacy: PrivacyPrinciplesIcon,
  security: SecurityPrinciplesIcon,
  frameworks: FrameworksIcon,
  integrations: IntegrationsIcon,
  otherciproviders: OtherCiProviders,
  settings: SettingsRounded,
  faq: Faq,
  empty: EmptyIcon,
  upload: UploadIcon,
  university: University
}
export function NavIcon({
  icon = 'file',
  className,
  ...props
}: {
  icon?: keyof typeof icons
} & Omit<React.ComponentPropsWithoutRef<'svg'>, 'color'>) {
  let IconComponent = icons[icon] || FileIcon

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={clsx(
        className,
        'mr-2 inline-block h-4 w-4 fill-current text-gray-400',
      )}
      {...props}
    >
      <IconComponent />
    </svg>
  )
}
