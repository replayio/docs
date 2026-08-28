'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Logo, Logomark } from '@/components/Logo'
import { useShowHidden } from '@/components/HiddenPagesToggle'
import { MobileNavigation } from '@/components/MobileNavigation'
import { HiddenPagesToggle } from '@/components/HiddenPagesToggle'
import { Navigation } from '@/components/Navigation'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'

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
    <header className="border-b border-gray-200/80 bg-white px-12 py-4 transition duration-500 dark:border-zinc-800/80 dark:bg-black sm:px-12 sm:py-4 lg:px-12">
      <div>
        <div className="flex flex-none flex-wrap items-center justify-between">
          <div className="mr-6 flex lg:hidden">
            <MobileNavigation />
          </div>
          <div className="relative flex flex-grow basis-0 items-center">
            <Link href="/" aria-label="Home page">
              <Logomark className="h-7 w-7 fill-rose-500 lg:hidden" />
              <Logo className="hidden h-6 w-auto lg:block" />
            </Link>
          </div>
          <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
            <Search />
          </div>
          <div className="relative flex basis-0 items-center justify-end gap-6 sm:gap-8 md:flex-grow">
            <a
              href="https://www.producthunt.com/products/replayio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-replay-qa"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Replay QA - Replay QA tells you what is broken before your users do | Product Hunt"
                width={250}
                height={54}
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1186303&theme=neutral&t=1784570145347"
              />
            </a>
            <ThemeSelector className="relative z-30" />
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
            <Link
              href="https://qa.replay.io"
              className="group hidden items-center rounded-full border border-gray-900 bg-transparent px-4 py-1.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 lg:inline-flex"
              aria-label="Replay"
            >
              Log in
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
      className={clsx(
        'relative flex h-full items-center px-1 py-3 text-sm font-medium tracking-tight transition-colors',
        isActive
          ? 'text-gray-900 dark:text-white'
          : 'text-gray-500 hover:text-gray-800 dark:text-zinc-400 dark:hover:text-zinc-200',
      )}
      href={href}
    >
      {name}
      {isActive && (
        <div className="absolute -bottom-px h-0.5 w-full rounded-full bg-primary" />
      )}
    </a>
  )
}

function SubheaderNavigation() {
  const [showHidden] = useShowHidden()

  return (
    <div className="h-pages-nav border-b border-gray-200/80 bg-white dark:border-zinc-800/80 dark:bg-black">
      <div className="container px-0">
        <nav className="flex h-full items-center gap-6">
          <SubheaderNavigationLink
            name={'Basics'}
            isDefault={true}
            baseHref={'/basics'}
            href={'/basics/replay-qa/overview'}
          />
          {showHidden && (
            <SubheaderNavigationLink
              name={'Reference'}
              baseHref={'/reference'}
              href={'/reference/test-runners/overview'}
            />
          )}
        </nav>
      </div>
    </div>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // find spans with the text https://app.replay.io
    const links = document.querySelectorAll('span')
    for (const link of links) {
      if (
        link.textContent?.includes('app.replay.io/recording') ||
        link.textContent?.includes('replay.run')
      ) {
        // replace the text with a link to the replay.io website
        const replayLink = document.createElement('a')
        replayLink.href = link.textContent
        replayLink.textContent = link.textContent
        link.replaceWith(replayLink)
      }
    }
  }, [])

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
    // overflow-x-clip prevents any rogue child (negative margins, wide
    // <pre> blocks, embedded iframes, etc.) from creating a horizontal
    // scrollbar at the page level.
    <div className="flex w-full flex-col overflow-x-clip">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
        <div className="flex h-screen w-full flex-none justify-end bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100/80 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900/50" />
      </div>
      <div
        className={clsx(
          'sticky top-0 z-20',
          isScrolled
            ? 'backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-white/90 dark:[@supports(backdrop-filter:blur(0))]:bg-black/90'
            : 'bg-transparent',
        )}
      >
        <Header />
        <SubheaderNavigation />
      </div>

      {/* Right-side padding gives the table of contents (which uses a small
          negative right margin) room without re-introducing any padding on
          the left — the sidebar should stay flush with the viewport edge. */}
      <div className="relative flex min-h-[calc(100vh-7rem)] w-full flex-auto pr-0 lg:pr-8 xl:pr-12">
        {/* Sidebar — flush against the left edge, wide enough to keep nav
            items on a single line without wrapping. */}
        <aside className="hidden w-80 shrink-0 self-start border-r border-gray-200/80 bg-white dark:border-zinc-800/80 dark:bg-black lg:sticky lg:top-[6rem] lg:block lg:h-[calc(100vh-6rem)] lg:max-h-[calc(100vh-6rem)] xl:w-[22rem]">
          <div className="flex h-full flex-col overflow-hidden">
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-5 py-8 xl:px-6">
              <Navigation />
            </div>
            <div
              className="group/sidebar-footer shrink-0 border-t border-gray-100 bg-gray-50/70 px-5 py-4 pb-5 dark:border-zinc-800/80 dark:bg-zinc-950/50 xl:px-6"
              data-testid="sidebar-footer"
            >
              <HiddenPagesToggle />
            </div>
          </div>
        </aside>

        <div
          data-test-id="main-content"
          className="flex w-full min-w-0 flex-auto grow flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950"
        >
          <div className="flex w-full min-w-0 grow flex-row">{children}</div>
        </div>
      </div>
    </div>
  )
}
