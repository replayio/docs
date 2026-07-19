'use client'
import { flatNavigation, navigation } from '@/lib/navigation'
import { usePathname } from 'next/navigation'
import { Figure } from './Figure'
import { NavIcon } from './NavIcon'

function Badge({ badge }: { badge: string }) {
  return (
    <div>
      <span className="top absolute right-4 top-4 z-10 inline-block rounded-full bg-white/50 px-4 py-1 text-xs font-semibold text-gray-800 dark:bg-gray-900/80 dark:text-gray-200">
        <NavIcon
          icon="beaker"
          className="h-4 w-4 text-gray-800 dark:text-gray-200"
        />
        <span className="uppercase">In the lab</span>
      </span>
    </div>
  )
}

export function DocsHeader({
  description,
  documentTitle,
  image,
  title,
  imageHeight,
  badge,
}: {
  description?: string
  documentTitle: string
  image?: string
  title?: string
  imageHeight?: number
  badge?: string
}) {
  let pathname = usePathname()

  let section = flatNavigation.find((section) =>
    section.links?.find((link) => link.href === pathname),
  )

  if (!title && !section) {
    return null
  }

  return (
    <header className="space-y-2">
      <title>{documentTitle}</title>
      {navigation && section?.title && (
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/80 dark:text-primary">
          {section?.title}
        </p>
      )}
      {title && (
        <h1 className="pb-2 font-display text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
      )}
      {description && (
        <p className="pb-6 text-lg leading-relaxed text-gray-600 dark:text-zinc-400">
          {description}
        </p>
      )}
      <div className="relative">
        {badge && <Badge badge={badge} />}
        {image && (
          <Figure
            src={image}
            alt={title || ''}
            showRadius={false}
            className=""
            ripple={false}
            width={870}
            height={imageHeight || 420}
          />
        )}
      </div>
      {!image && description ? <div className="pb-2 pt-4" /> : null}
    </header>
  )
}
