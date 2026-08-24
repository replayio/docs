'use client'

import { Suspense, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Dialog } from '@headlessui/react'

import { Logomark } from '@/components/Logo'
import { HiddenPagesToggle } from '@/components/HiddenPagesToggle'
import { Navigation } from '@/components/Navigation'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M5 5l14 14M19 5l-14 14" />
    </svg>
  )
}

function CloseOnNavigation({ close }: { close: () => void }) {
  let pathname = usePathname()
  let searchParams = useSearchParams()

  useEffect(() => {
    close()
  }, [pathname, searchParams, close])

  return null
}

export function MobileNavigation() {
  let [isOpen, setIsOpen] = useState(false)
  let close = useCallback(() => setIsOpen(false), [setIsOpen])

  function onLinkClick(event: React.MouseEvent<HTMLAnchorElement>) {
    let link = event.currentTarget
    if (
      link.pathname + link.search + link.hash ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      close()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Open navigation"
      >
        <MenuIcon className="h-6 w-6 stroke-gray-500" />
      </button>
      <Suspense fallback={null}>
        <CloseOnNavigation close={close} />
      </Suspense>
      <Dialog
        open={isOpen}
        onClose={() => close()}
        className="fixed inset-0 z-50 flex items-start overflow-y-auto bg-gray-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
      >
        <Dialog.Panel className="flex h-[100dvh] max-h-[100dvh] w-full max-w-xs flex-col overflow-hidden border-r border-gray-200 bg-white dark:border-zinc-800 dark:bg-black sm:max-w-xs">
          <div className="shrink-0 px-4 pt-5 sm:px-6">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => close()}
                aria-label="Close navigation"
              >
                <CloseIcon className="h-6 w-6 stroke-gray-500" />
              </button>
              <Link href="/" className="ml-6" aria-label="Home page">
                <Logomark className="h-9 w-9 fill-rose-500" />
              </Link>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 sm:px-6">
            <Navigation className="mt-5 px-1" onLinkClick={onLinkClick} />
          </div>
          <div className="group/sidebar-footer shrink-0 border-t border-gray-100 bg-gray-50/70 px-4 py-4 pb-8 dark:border-zinc-800/80 dark:bg-zinc-950/50 sm:px-6">
            <HiddenPagesToggle />
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
