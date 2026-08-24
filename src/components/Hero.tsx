'use client'
import { Logomark } from './Logo'
import { useTheme } from 'next-themes'
import { featureFlags } from '@/lib/featureFlags'

export function Hero() {
  const { theme } = useTheme()
  return (
    <div className="mt-[-4.75rem] max-w-8xl overflow-hidden border-b border-gray-200 bg-transparent pt-[4.75rem] dark:border-zinc-800">
      <div className="pb-16 pt-8 sm:px-2 lg:relative lg:px-0">
        <div className="max-w-3xl">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              {featureFlags.showLogo && (
                <Logomark
                  fill={theme == 'dark' ? 'white' : 'dark'}
                  className="mb-4 w-10"
                />
              )}
              <p className="font-display text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Replay QA documentation
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-gray-500 dark:text-zinc-500">
                Autonomous app testing
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-zinc-400">
                Replay QA explores your web app, discovers user journeys, writes
                Playwright tests, and delivers root cause analysis for every bug
                it finds — all powered by Replay&apos;s time-travel debugging
                engine.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/basics/replay-qa/overview"
                  className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                >
                  Replay QA overview
                </a>
                <a
                  href="https://qa.replay.io"
                  className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
                >
                  Launch Replay QA
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-zinc-500">
                <a
                  href="/basics/replay-qa/frpc-ci"
                  className="font-medium text-gray-700 underline decoration-gray-400 underline-offset-2 hover:text-gray-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-white"
                >
                  CI integration with FRPC
                </a>
              </p>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            {/* <HeroBackground className="absolute -left-[32%] -top-[45%] " /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
