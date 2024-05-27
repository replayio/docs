'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation, NavigationItem } from '@/lib/navigation'
import { Disclosure } from '@headlessui/react'
import { Icon } from './Icon'
import { NavIcon } from './NavIcon'
import styles from './Navigation.module.css'

function Badge({ type }: { type: string }) {
  const icon = type === 'experimental' ? 'beaker' : 'wifi'
  return (
    <NavIcon
      icon={icon}
      className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400"
    />
  )
}

function ItemLinkInnerItem({
  item,
  parent,
  pathname,
  open,
}: {
  item: NavigationItem
  parent?: NavigationItem
  pathname: string
  open?: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={'flex items-center'}>
        {item.icon && (
          <NavIcon
            icon={item.icon}
            aria-hidden="true"
            className="ml-1 fill-inherit stroke-inherit text-inherit"
          />
        )}
        {item.title}
      </span>
      {item.badge && <Badge type={item.badge} />}
      {item.links && (
        <Icon
          icon="chevron"
          className={clsx(
            open ? 'rotate-90 ' : 'text-gray-600 dark:text-gray-400',
            'ml-auto w-5 shrink-0',
          )}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

function ItemLinkDisclosure({
  item,
  onLinkClick,
  parent,
  pathname,
}: {
  item: NavigationItem
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
  parent?: NavigationItem
  pathname: string
}) {
  return (
    <Disclosure
      as="div"
      defaultOpen={Boolean(
        item.defaultOpen ||
          (pathname !== '/' &&
            item.links?.find((link) => {
              return link.links
                ? // sublinks
                  link.links.find((l) => l.href?.includes(pathname))
                : // links
                  link.href?.includes(pathname)
            })),
      )}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full">
            <ItemLinkInnerItem
              item={item}
              parent={parent}
              pathname={pathname}
              open={open}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="ml-7" as="ul" role="list">
            {item.links?.map((subitem) => (
              <li key={subitem.title}>
                {subitem.links ? (
                  <ItemLinkDisclosure
                    item={subitem}
                    parent={item}
                    pathname={pathname}
                  />
                ) : (
                  <ItemLink
                    item={subitem}
                    parent={item}
                    pathname={pathname}
                    onLinkClick={onLinkClick}
                  />
                )}
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function ItemLink({
  item,
  onLinkClick,
  parent,
  pathname,
}: {
  item: NavigationItem
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
  parent?: NavigationItem
  pathname: string
}) {
  const isSelected =
    parent && item.href === parent.href
      ? // This is for sub item with same link as parent (For example: Cypress of Test Runner)
        pathname === parent.href
      : // Rest of items
        item.href && pathname.includes(item.href)

  return (
    <Link
      href={item.href || '#'}
      onClick={item.href ? onLinkClick : undefined}
      className={clsx(isSelected && styles.selected)}
    >
      <ItemLinkInnerItem item={item} parent={parent} pathname={pathname} />
    </Link>
  )
}

export function Navigation({
  className,
  onLinkClick,
}: {
  className?: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  let pathname = usePathname()
  let initialRoute = pathname.split('/')[1] as
    | 'basics'
    | 'learn'
    | 'reference'
    | undefined
  if (
    !initialRoute ||
    !['basics', 'learn', 'reference'].includes(initialRoute)
  ) {
    initialRoute = 'basics'
  }

  const localizedNavigation = navigation[initialRoute] ?? []

  return (
    <nav className={clsx('text-base', className)}>
      <ul role="list" className="space-y-1 text-sm">
        {localizedNavigation.map((section) => {
          return (
            <li key={section.title}>
              {section.links ? (
                <ItemLinkDisclosure
                  item={section}
                  pathname={pathname}
                  onLinkClick={onLinkClick}
                />
              ) : (
                <ItemLink
                  item={section}
                  pathname={pathname}
                  onLinkClick={onLinkClick}
                />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
