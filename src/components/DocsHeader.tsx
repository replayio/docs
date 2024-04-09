'use client'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'

export function DocsHeader({ title, description }: { title?: string, description?: string }) {

  let pathname = usePathname()

  let section = navigation.find((section) =>
  section.links.find((link) => link.href === pathname),
)

  if (!title && !section) {
    return null
  }

  return (
    <header className="space-y-1">
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
            <h1 className="pb-5 font-light text-lg tracking-tight text-gray-900 dark:text-gray-300">
              {description}
            </h1>
          <hr className='dark:border-gray-300 border-gray-900 opacity-20 py-4'/>
        </>
      )}
    </header>
  )
}
