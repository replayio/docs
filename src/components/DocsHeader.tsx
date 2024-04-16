'use client'
import { navigation } from '@/lib/navigation'
import { usePathname } from 'next/navigation'
import { Figure } from './Figure'

export function DocsHeader({
  description,
  documentTitle,
  image,
  title,
}: {
  description?: string
  documentTitle: string
  image?: string
  title?: string
}) {
  let pathname = usePathname()

  let section = navigation.find(
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
        <h1 className="pb-4 font-display text-3xl tracking-tight text-gray-900 dark:text-white">
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
      {image && (
        <Figure
          src={image}
          alt={title || ''}
          showRadius={false}
          className=""
          ripple={false}
          width={870}
          height={870}
        />
      )}
      {!image && description ? (
        <div className="py-4">
          <hr className=" border-gray-200 dark:border-slate-600" />
        </div>
      ) : null}
    </header>
  )
}
