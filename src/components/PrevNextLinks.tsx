'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import {NavigationItem, navigation, flatNavigation} from '@/lib/navigation'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z" />
    </svg>
  )
}

function PageLink({
  title,
  href,
  dir = 'next',
  ...props
}: Omit<React.ComponentPropsWithoutRef<'div'>, 'dir' | 'title'> & {
  title: string
  href?: string
  dir?: 'previous' | 'next'
}) {
  return (
    <div {...props}>
      { href &&
        <>
          <dt className="font-display text-sm font-medium text-gray-900 dark:text-white">
            {dir === 'next' ? 'Next' : 'Previous'}
          </dt><dd className="mt-1">
              <Link
                href={href}
                className={clsx(
                  'flex items-center gap-x-1 text-base font-semibold text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
                  dir === 'previous' && 'flex-row-reverse'
                )}
              >
                {title}
                <ArrowIcon
                  className={clsx(
                    'h-4 w-4 flex-none fill-current',
                    dir === 'previous' && '-scale-x-100'
                  )} />
              </Link>
          </dd>
        </>
      }
    </div>
  )
}

function flattenNavigation(navigation: NavigationItem[]): NavigationItem[] {
  const seen = new Set<string>()
  const flatList: NavigationItem[] = []

  function processItem(item: NavigationItem) {
    if (item.href && !seen.has(item.href)) {
      seen.add(item.href)
      flatList.push({ ...item, links: undefined })
    }

    if (item.links) {
      item.links.forEach(processItem)
    }
  }
  flatNavigation.forEach(processItem)

  return flatList
}

const allLinks = flattenNavigation(flatNavigation)
export function PrevNextLinks() {
  const pathname = usePathname()

  const linkIndex = allLinks.findIndex((link) => link.href === pathname)
  const previousPage = linkIndex > -1 ? allLinks[linkIndex - 1] : null
  const nextPage = linkIndex > -1 ? allLinks[linkIndex + 1] : null

  if (!nextPage && !previousPage) {
    return null
  }

  return (
    <dl className="mt-12 flex w-full border-t  border-gray-200 pt-6 lg:max-w-4xl dark:border-gray-800">
      {previousPage && <PageLink dir="previous" {...previousPage} />}
      {nextPage && <PageLink className="ml-auto text-right" {...nextPage} />}
    </dl>
  )
}
