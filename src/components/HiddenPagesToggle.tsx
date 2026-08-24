'use client'

import { useSyncExternalStore } from 'react'
import clsx from 'clsx'

const STORAGE_KEY = 'replay-docs:showHidden'

function readShowHidden(): boolean {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem(STORAGE_KEY) === '1'
}

function subscribe(onStoreChange: () => void) {
  const handler = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      onStoreChange()
    }
  }
  window.addEventListener('storage', handler)
  window.addEventListener('replay-docs:showHidden', onStoreChange)
  return () => {
    window.removeEventListener('storage', handler)
    window.removeEventListener('replay-docs:showHidden', onStoreChange)
  }
}

export function useShowHidden(): [boolean, (next: boolean) => void] {
  const showHidden = useSyncExternalStore(
    subscribe,
    readShowHidden,
    () => false,
  )

  const setShowHidden = (next: boolean) => {
    if (typeof window === 'undefined') return
    if (next) {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } else {
      window.localStorage.removeItem(STORAGE_KEY)
    }
    window.dispatchEvent(new Event('replay-docs:showHidden'))
  }

  return [showHidden, setShowHidden]
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1.5 8s2.2-4 6.5-4 6.5 4 6.5 4-2.2 4-6.5 4S1.5 8 1.5 8Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2.2 2.2 13.8 13.8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M6.4 6.6A2.2 2.2 0 0 0 8 11.2a2.2 2.2 0 0 0 1.4-.5M4.3 4.8C3 5.7 2 6.9 1.5 8s2.2 4 6.5 4c1 0 1.9-.2 2.7-.5M11.2 11.2c1.3-.9 2.3-2.1 2.8-3.2-1.1-2.2-3.4-4-6.5-4-.6 0-1.2.1-1.7.2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HiddenPagesToggle({ className }: { className?: string }) {
  const [showHidden, setShowHidden] = useShowHidden()

  return (
    <div
      className={clsx(
        'transition-opacity duration-200',
        '[@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/sidebar-footer:opacity-100',
        'focus-within:opacity-100',
        showHidden &&
          '[@media(hover:hover)]:opacity-40 [@media(hover:hover)]:group-hover/sidebar-footer:opacity-100',
        className,
      )}
    >
      <button
        type="button"
        data-testid="hidden-pages-toggle"
        onClick={() => setShowHidden(!showHidden)}
        aria-pressed={showHidden}
        aria-label={showHidden ? 'Hide hidden pages' : 'Show hidden pages'}
        className={clsx(
          'flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-medium transition-colors',
          showHidden
            ? 'border border-amber-200/70 bg-amber-50/90 text-amber-900 hover:bg-amber-100/90 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:bg-amber-950/60'
            : 'border border-transparent text-zinc-500 hover:border-gray-200/80 hover:bg-gray-100/80 hover:text-zinc-700 dark:text-zinc-500 dark:hover:border-zinc-700/80 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-300',
        )}
      >
        {showHidden ? (
          <EyeOffIcon className="h-3.5 w-3.5 shrink-0 opacity-80" />
        ) : (
          <EyeIcon className="h-3.5 w-3.5 shrink-0 opacity-70" />
        )}
        <span>
          {showHidden ? 'Hide Internal Pages' : 'Show Internal Pages'}
        </span>
      </button>
    </div>
  )
}
