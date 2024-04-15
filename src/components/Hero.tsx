'use client'
import { Logomark } from './Logo'
import { useTheme } from 'next-themes'
import { featureFlags } from '@/lib/featureFlags'

export function Hero() {
  const { theme } = useTheme()
  return (
    <div className="mt-[-4.75rem] max-w-8xl  overflow-hidden border-b-2 border-gray-500 border-opacity-5 bg-transparent pt-[4.75rem]">
      <div className="pb-16 pt-8 sm:px-2 lg:relative lg:px-0">
        <div className=" max-w-2xl">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              {featureFlags.showLogo && (
                <Logomark
                  fill={theme == 'dark' ? 'white' : 'dark'}
                  className="mb-4 w-10"
                />
              )}
              <p className="inline font-display text-3xl font-medium tracking-tight text-gray-900 dark:text-slate-100">
                Replay documentation
              </p>
              <p className="mt-3 text-lg tracking-tight text-gray-600 dark:text-slate-400">
                Get an overview on how to record your first replay, inspect your
                app with Replay DevTools, and drive your test flakes to zero.
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
