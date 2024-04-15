'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation, NavigationItemLink } from '@/lib/navigation'
import { Disclosure } from '@headlessui/react'
import { Icon } from './Icon'
import { NavIcon } from './NavIcon'

function ItemLink({
  item,
  pathname,
  onLinkClick,
  className,
}: {
  item: NavigationItemLink
  pathname: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
  className?: string
}) {
  return (
    <Link
      href={item.href}
      onClick={onLinkClick}
      className={clsx(
        `ml-.5 block h-full w-full pl-1.5 transition-all`,
        className,
        pathname.includes(item.href)
          ? 'font-semibold text-sky-500'
          : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300',
      )}
    >
      <NavIcon
        icon={item.icon}
        aria-hidden="true"
        className="fill-inherit stroke-inherit text-inherit"
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
        {navigation.map((section) => {
          return (
            <li key={section.title}>
              <Disclosure
                as="div"
                defaultOpen={pathname.includes(section.href)}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={clsx(
                        'flex w-full items-center justify-between rounded-md text-left font-semibold leading-6 hover:text-gray-900 dark:hover:text-gray-300',
                        pathname.includes(section.href)
                          ? 'text-gray-900 dark:text-gray-200'
                          : 'text-gray-600 dark:text-gray-400',
                      )}
                    >
                      {section.title}
                      <Icon
                        icon="chevron"
                        className={clsx(
                          open
                            ? 'rotate-90 '
                            : 'text-gray-600 dark:text-gray-400',
                          'h-7 w-7 shrink-0',
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
                      {section.links.map((item) => (
                        <li key={item.title}>
                          <Disclosure.Button className="relative h-7 w-full rounded-md text-left transition-all hover:bg-gray-500 hover:bg-opacity-10">
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
                                  <Disclosure.Button className="ml-4 h-7 w-52 rounded-md text-left transition-all hover:bg-gray-500 hover:bg-opacity-10">
                                    <ItemLink
                                      item={subItem}
                                      pathname={pathname}
                                      onLinkClick={onLinkClick}
                                    />
                                  </Disclosure.Button>
                                  {subItem.links && (
                                    <Disclosure.Panel as="ul">
                                      {subItem.links.map((thirdLevelItem) => (
                                        <li key={thirdLevelItem.title}>
                                          <Disclosure.Button className="ml-4 h-7 w-52 rounded-md text-left transition-all hover:bg-gray-500 hover:bg-opacity-10">
                                            <Link
                                              href={thirdLevelItem.href}
                                              onClick={onLinkClick}
                                              className={clsx(
                                                'block h-full border pl-4 transition-all',
                                                thirdLevelItem.href === pathname
                                                  ? ' text-sky-500'
                                                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300',
                                              )}
                                            >
                                              {thirdLevelItem.title}
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
