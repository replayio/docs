'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation } from '@/lib/navigation'
import { Disclosure } from '@headlessui/react'
import { Icon } from './Icon'
import { NavIcon } from './NavIcon'

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
      <ul role="list" className="space-y-1">
      {navigation.map((section) => (
          <li key={section.title}>
              <Disclosure as="div">
                {({ open }) => (
                  <>
                  <Disclosure.Button
                      className=
                        'flex items-center justify-between w-full text-left rounded-md p-2 leading-6 font-semibold text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                    >
                      {section.title}
                      <Icon icon='chevron'
                        className={clsx(
                          open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                          'h-7 w-7 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel as="ul" className="ml-3 text-sm space-y-2 border-l-2 border-gray-100 lg:space-y-2 lg:border-gray-200 dark:border-gray-800" role="list">
                      {section.links.map((item) => (
                        <li key={item.title}>
                          <Disclosure.Button className="relative w-full text-left pr-4">
                            <Link href={item.href}
                              onClick={onLinkClick}
                              className={clsx(
                              'block w-full pl-2.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full hover:bg-gradient-to-r hover:from-transparent hover:to-gray-100 dark:hover:to-gray-800 rounded',
                              pathname.includes(item.href)
                                ? 'font-semibold text-sky-500 before:bg-sky-500'
                                : 'text-gray-500 before:hidden before:bg-gray-300 hover:text-gray-600 hover:before:block dark:text-gray-400 dark:before:bg-gray-700 dark:hover:text-gray-300',
                            )}>
                            <NavIcon icon={item.icon} aria-hidden="true" className="fill-inherit stroke-inherit text-inherit" />
                            {item.title}
                            </Link>
                          </Disclosure.Button>
                          { item.links && 
                            <Disclosure.Panel as="ul">
                              {item.links.map(subItem => (
                                <li key={subItem.title}>
                                  <Disclosure.Button className="relative w-full text-left pr-4">
                                  <Link href={subItem.href}
                                    onClick={onLinkClick}
                                    className={clsx(
                                    'block w-full pl-12 ml-[2px] pt-1.5 text-sm hover:bg-gradient-to-r hover:from-transparent hover:to-gray-100 dark:hover:to-gray-800 rounded',
                                    subItem.href === pathname
                                      ? 'text-gray-900 dark:text-gray-200 font-medium'
                                      : 'text-gray-500  hover:text-gray-600 dark:text-gray-400  dark:hover:text-gray-300',
                                  )}>
                                  {subItem.title}
                                  </Link>
                                </Disclosure.Button>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          }
                        </li>
                      ))}
                    </Disclosure.Panel>                    
                  </>
                )}
              </Disclosure>
          </li>
        ))}
      </ul>
    </nav>
  )
}
