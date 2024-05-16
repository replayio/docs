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

function ItemLink({
  className,
  item,
  onLinkClick,
  parent,
  pathname,
}: {
  className?: string
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
      className={clsx(styles.item, className, isSelected && styles.selected)}
    >
      <span className="ml-6 flex items-center justify-between ">
        {item.title}
        {item.badge && <Badge type={item.badge} />}
      </span>
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
  return (
    <nav className={clsx('text-base', className)}>
      <ul role="list" className="space-y-1 text-sm">
        <Link
          href="/quickstart"
          className={clsx(
            'flex w-full items-center rounded-md pb-1 text-left leading-6',
            pathname.includes('/quickstart')
              ? 'text-sky-500'
              : 'hover:text-gray-900 dark:hover:text-gray-300',
          )}
        >
          <NavIcon
            icon={'home'}
            aria-hidden="true"
            className="ml-1 fill-inherit stroke-inherit text-inherit"
          />
          Quickstart Guide
        </Link>
        {navigation.map((section) => {
          return (
            <li key={section.title}>
              <Disclosure
                as="div"
                defaultOpen={
                  Boolean(section.links?.find(link => {
                    return link.links ?
                    // sublinks
                    link.links.find(l => l.href?.includes(pathname)) :
                    // links
                    link.href?.includes(pathname)
                  }))
                }
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={clsx(
                        styles.category,
                      )}
                    >
                      <NavIcon
                        icon={section.icon}
                        aria-hidden="true"
                        className="ml-1 fill-inherit stroke-inherit text-inherit"
                      />
                      {section.title}
                      <Icon
                        icon="chevron"
                        className={clsx(
                          open
                            ? 'rotate-90 '
                            : 'text-gray-600 dark:text-gray-400',
                          'ml-auto w-5 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      as="ul"
                      className="ml-1 pr-4 text-sm"
                      role="list"
                    >
                      {section.links?.map((item) => (
                        <li key={item.title}>
                          <Disclosure.Button className={styles.button}>
                            <ItemLink
                              item={item}
                              pathname={pathname}
                              onLinkClick={onLinkClick}
                            />
                          </Disclosure.Button>
                          {item.links && (
                            <Disclosure.Panel as="ul">
                              {item.links.map((subItem) => (
                                <li key={subItem.title}>
                                  <Disclosure.Button
                                    className={`${styles.button} ${styles.tertiary}`}
                                  >
                                    <ItemLink
                                      item={subItem}
                                      parent={item}
                                      pathname={pathname}
                                      onLinkClick={onLinkClick}
                                    />
                                  </Disclosure.Button>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          )}
                        </li>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
