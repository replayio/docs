import Link from 'next/link'
import { Icon, icons } from './Icon'

export interface CardAttributes {
  title: string
  content: string
  icon: keyof typeof icons
  href: string
  testId?: string
}

/** Resource card — matches Replay app dashboard (icon tile + title + muted description). */
export default function Card({
  title,
  content,
  icon,
  href,
  testId,
}: CardAttributes) {
  return (
    <Link href={href} className="flex h-full min-w-0" data-testid={testId}>
      <div className="flex h-full w-full gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/80">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-zinc-800">
          <Icon
            icon={icon}
            viewBox={24}
            className="h-6 w-6 text-gray-600 dark:text-zinc-400"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-gray-900 dark:text-white">
            {title}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-zinc-400">
            {content}
          </p>
        </div>
      </div>
    </Link>
  )
}
