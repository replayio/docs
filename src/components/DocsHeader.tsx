'use client'
import {flatNavigation, navigation} from '@/lib/navigation'
import { usePathname } from 'next/navigation'
import { Figure } from './Figure'
import { NavIcon } from './NavIcon'

function Badge({ badge }: { badge: string }) {
  return (
    <div>
      <span className="top absolute right-4 top-4 z-10 inline-block rounded-full bg-white/50 px-4 py-1 text-xs font-semibold text-slate-800">
        <NavIcon icon="beaker" className="h-4 w-4 text-slate-800" />
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

  let section = flatNavigation.find(
    (section) => section.links?.find((link) => link.href === pathname),
  )

  if (!title && !section) {
    return null
  }

  return (
    <header className="space-y-1">
      <title>{documentTitle}</title>
      {navigation && (
        <p className="font-display text-sm font-medium text-sky-500">
          {section?.title}
        </p>
      )}
      {title && (
        <h1 className=" pb-4 font-display text-3xl tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
      )}
      {description && (
        <>
          <h2 className="pb-5 text-lg font-light tracking-tight text-gray-900 dark:text-gray-300">
            {description}
          </h2>
        </>
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
      {!image && description ? (
        <div className="py-4">
          <hr className=" border-gray-200 dark:border-slate-600" />
        </div>
      ) : null}
    </header>
  )
}
