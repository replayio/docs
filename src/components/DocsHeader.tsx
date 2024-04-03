'use client'

import { usePathname } from 'next/navigation'

import { SubPagesType, navigation } from '@/lib/navigation'

export function DocsHeader({ title }: { title?: string }) {
  let pathname = usePathname()
  let subPage = pathname.split('/')[1] || 'time-travel'
  let section = navigation['/' + subPage as SubPagesType['href']].find((section) =>
    section.links.find((link) => link.href === pathname),
  )

  if (!title && !section) {
    return null
  }

  return (
    <header className="mb-9 space-y-1">
      {section && (
        <p className="font-display text-sm font-medium text-sky-500">
          {section.title}
        </p>
      )}
      {title && (
        <h1 className="font-display text-3xl tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
      )}
    </header>
  )
}
