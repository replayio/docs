'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Logo, Logomark } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'
import { useTheme } from 'next-themes'

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  )
}

function DiscordIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path>
    </svg>
  )
}

function Header() {
  return (
    <header className="border-b px-12 py-5 shadow-none shadow-gray-900/5 transition duration-500 sm:px-12  sm:py-5 lg:px-12 dark:border-gray-800 dark:bg-gray-900 dark:bg-gray-900/95 dark:shadow-none dark:shadow-gray-900/5 dark:backdrop-blur dark:transition dark:duration-500">
      <div>
        <div className="flex flex-none flex-wrap items-center justify-between">
          <div className="mr-6 flex lg:hidden">
            <MobileNavigation />
          </div>
          <div className="relative flex flex-grow basis-0 items-center">
            <Link href="/" aria-label="Home page">
              <Logomark className="h-7 w-7 fill-black lg:hidden dark:fill-white" />
              <Logo className="hidden h-6 w-auto fill-black lg:block dark:fill-white" />
            </Link>
          </div>
          <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
            <Search />
          </div>
          <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
            <ThemeSelector className="relative z-10" />
            <Link
              href="https://github.com/replayio"
              className="group"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-6 w-6 fill-gray-400 group-hover:fill-gray-500 dark:group-hover:fill-gray-300" />
            </Link>
            <Link
              href="https://replay.io/discord"
              className="group"
              aria-label="Discord"
            >
              <DiscordIcon className="h-6 w-6 fill-gray-400 group-hover:fill-gray-500 dark:group-hover:fill-gray-300" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function SubheaderNavigationLink({
  href,
  baseHref,
  name,
  isDefault,
}: {
  href: string
  baseHref: string
  name: string
  isDefault?: boolean
}) {
  let pathname = usePathname()

  const isActive =
    pathname.startsWith(baseHref) || (isDefault && pathname === '/')

  return (
    <a
      className="relative flex h-full items-center py-3 text-sm font-medium text-gray-500"
      href={href}
    >
      {name}
      {isActive && (
        <div className="absolute -bottom-px h-1 w-full rounded-full bg-sky-500"></div>
      )}
    </a>
  )
}

function SubheaderNavigation() {
  return (
    <div className="h-pages-nav border-y border-gray-200 bg-gray-50">
      <div className="container px-12">
        <nav className="flex h-full items-center gap-4">
          <SubheaderNavigationLink
            name={'Basics'}
            isDefault={true}
            baseHref={'/basics'}
            href={'/basics/overview/why-time-travel'}
          />
          <SubheaderNavigationLink
            name={'Learn'}
            baseHref={'/learn'}
            href={'/learn/replay-course'}
          />
          <SubheaderNavigationLink
            name={'Resources'}
            baseHref={'/resources'}
            href={'/resources/test-runners/overview'}
          />
        </nav>
      </div>
    </div>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  let { theme } = useTheme()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      console.log('dark')
    } else {
      document.documentElement.classList.remove('dark')
      console.log('no dark')
    }
  }, [theme])

  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="flex w-full flex-col">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
        <div className="flex h-screen w-full flex-none justify-end bg-gradient-to-tr from-white via-white to-pink-500 opacity-5 dark:from-gray-800 dark:via-sky-600 dark:opacity-10"></div>
      </div>
      <div
        className={clsx(
          'sticky top-0 z-20',
          isScrolled
            ? 'backdrop-blur dark:bg-gray-900/95 [@supports(backdrop-filter:blur(0))]:bg-white/45 dark:[@supports(backdrop-filter:blur(0))]:bg-gray-900/75'
            : 'bg-transparent',
        )}
      >
        <Header />
        <SubheaderNavigation />
      </div>

      <div className="relative mx-auto flex w-full  flex-auto  sm:px-2 lg:px-8 xl:px-12">
        <div className="mr-12 hidden lg:relative lg:block lg:flex-none">
          {
            <>
              <div className="absolute inset-y-0 right-0 w-[50vw] border-r border-r-gray-200 dark:hidden" />
              <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-gray-800 dark:block" />
              <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-gray-800 dark:block" />
              <div className="sticky top-[6rem] -ml-0.5 h-[calc(100vh-6rem)] w-72 overflow-y-auto overflow-x-hidden py-8 pl-0.5 pr-2 xl:pr-2">
                <Navigation />
              </div>
            </>
          }
        </div>

        <div
          data-test-id="main-content"
          className="flex w-full flex-auto grow flex-col items-center justify-center"
        >
          <div className="flex w-full grow flex-row ">{children}</div>
        </div>
      </div>
    </div>
  )
}
