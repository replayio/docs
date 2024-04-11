import { useId } from 'react'
import clsx from 'clsx'

import { InstallationIcon } from '@/components/icons/InstallationIcon'
import { LightbulbIcon } from '@/components/icons/LightbulbIcon'
import { PluginsIcon } from '@/components/icons/PluginsIcon'
import { PresetsIcon } from '@/components/icons/PresetsIcon'
import { ThemingIcon } from '@/components/icons/ThemingIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'
import { TreeViewSolid } from '@/components/icons/TreeViewSolid'
import { JumpToCode } from '@/components/icons/JumpToCodeIcon'
import { InsightIcon } from '@/components/icons/InsightIcon'
import { ConsoleIcon } from '@/components/icons/ConsoleIcon'
import { BuildIcon } from '@/components/icons/BuildIcon'
import { BracketsCurlyIcon } from '@/components/icons/BracketsCurlyIcon'
import { CypressIcon } from '@/components/icons/CypressIcon'
import { PlaywrightIcon } from './icons/PlaywrightIcon'
import { SeleniumIcon } from './icons/SeleniumIcon'
import { WebdriverIOIcon } from './icons/WebdriverIOIcon'
import { PuppeteerIcon } from './icons/PuppeteerIcon'
import { ConditionalIcon } from './icons/ConditionalIcon'
import { PlusButtonIcon } from './icons/PlusButtonIcon'
import {PlayButtonIcon} from './icons/PlayButtonIcon'
import { CommentIcon } from './icons/CommentIcon'
import { PrefixBadgeIcon } from './icons/PrefixBadgeIcon'
import Chevron from './icons/Chevron'
import Clipboard from './icons/Clipboard'
import FileIcon from './icons/FileIcon'
import { ErrorIcon } from './icons/ErrorIcon'
import { ArrowUp } from './icons/ArrowUp'
import { GitHubIcon } from './icons/GitHubIcon'
import { ConsoleSymbol } from './icons/ConsoleSymbol'

const icons = {
  bracketscurly: BracketsCurlyIcon,
  build: BuildIcon,
  chevron: Chevron,
  clipboard: Clipboard,
  comment: CommentIcon,
  conditional: ConditionalIcon,
  console: ConsoleIcon,
  cypress: CypressIcon,
  error: ErrorIcon,
  file: FileIcon,
  insight: InsightIcon,
  installation: InstallationIcon,
  jumptocode: JumpToCode,
  lightbulb: LightbulbIcon,
  playButton: PlayButtonIcon,
  playwright: PlaywrightIcon,
  plugins: PluginsIcon,
  plusButton: PlusButtonIcon,
  prefixBadge: PrefixBadgeIcon,
  presets: PresetsIcon,
  puppeteer: PuppeteerIcon,
  selenium: SeleniumIcon,
  theming: ThemingIcon,
  treeview: TreeViewSolid,
  warning: WarningIcon,
  webdriverio: WebdriverIOIcon,
  arrowup: ArrowUp,
  github: GitHubIcon,
  terminal: ConsoleSymbol
}

export const iconStyles = {
  blue: '[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]',
  amber:'[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]',
  pink:'[--icon-foreground:theme(colors.pink.900)] [--icon-background:theme(colors.pink.100)]'
}

export function Icon({
  icon,
  color = 'blue',
  className,
  ...props
}: {
  color?: keyof typeof iconStyles
  icon: keyof typeof icons
} & Omit<React.ComponentPropsWithoutRef<'svg'>, 'color'>) {
  let id = useId()
  let IconComponent = icons[icon]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  )
}

const gradients = {
  pink: [
    { stopColor: '##ff537e' },
    { stopColor: '#f41c52', offset: '.527' },
    { stopColor: '#F02D5E', offset: 1 },
  ],
  blue: [
    { stopColor: '#0EA5E9' },
    { stopColor: '#22D3EE', offset: '.527' },
    { stopColor: '#818CF8', offset: 1 },
  ],
  amber: [
    { stopColor: '#FDE68A', offset: '.08' },
    { stopColor: '#F59E0B', offset: '.837' },
  ],
}

export function Gradient({
  color = 'blue',
  ...props
}: {
  color?: keyof typeof gradients
} & Omit<React.ComponentPropsWithoutRef<'radialGradient'>, 'color'>) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, stopIndex) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  )
}

export function LightMode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'g'>) {
  return <g className={clsx('dark:hidden', className)} {...props} />
}

export function DarkMode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'g'>) {
  return <g className={clsx('hidden dark:inline', className)} {...props} />
}
