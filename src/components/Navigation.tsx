'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation, NavigationItem } from '@/lib/navigation'
import { Disclosure } from '@headlessui/react'
import { Icon } from './Icon'
import { NavIcon } from './NavIcon'
import styles from './Navigation.module.css'

function ItemLink({
  item,
  pathname,
  onLinkClick,
  className,
}: {
  item: NavigationItem
  pathname: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
  className?: string
}) {
  return (
    <Link
      href={item.href || '#'}
      onClick={item.href ? onLinkClick : undefined}
      className={clsx(
        styles.item,
        className,
        item.href && pathname.includes(item.href) && styles.selected,
      )}
    >
      <NavIcon
        icon={item.icon}
        aria-hidden="true"
        className="ml-1 fill-inherit stroke-inherit text-inherit"
      />
      {item.title}
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
            'flex w-full items-center justify-between rounded-md pb-1 text-left leading-6',
            pathname.includes('/quickstart')
              ? 'text-sky-500'
              : 'hover:text-gray-900 dark:hover:text-gray-300',
          )}
        >
          Quickstart Guide
        </Link>
        {navigation.map((section) => {
          return (
            <li key={section.title}>
              <Disclosure
                as="div"
                defaultOpen={
                  section.href !== '' && pathname.includes(section.href)
                }
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={clsx(
                        styles.category,
                        section.href !== '' && pathname.includes(section.href),
                      )}
                    >
                      {section.title}
                      <Icon
                        icon="chevron"
                        className={clsx(
                          open
                            ? 'rotate-90 '
                            : 'text-gray-600 dark:text-gray-400',
                          'w-5 shrink-0',
                          pathname.includes(section.href) &&
                            'text-gray-900 dark:text-gray-200',
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
                                      pathname={pathname}
                                      onLinkClick={onLinkClick}
                                    />
                                  </Disclosure.Button>
                                  {subItem.links && (
                                    <Disclosure.Panel as="ul">
                                      {subItem.links.map((tertiary) => (
                                        <li key={tertiary.title}>
                                          <Disclosure.Button
                                            className={`${styles.button} ${styles.tertiary}`}
                                          >
                                            <Link
                                              href={tertiary.href}
                                              onClick={onLinkClick}
                                              className={clsx(styles.item)}
                                            >
                                              {tertiary.title}
                                            </Link>
                                          </Disclosure.Button>
                                        </li>
                                      ))}
                                    </Disclosure.Panel>
                                  )}
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
