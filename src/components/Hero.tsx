import { Button } from './Button'
import { HeroBackground } from './HeroBackground'

export function Hero() {
  return (
    <div className="mt-[-4.75rem] overflow-hidden border-b-2 border-gray-500 border-opacity-5 bg-transparent pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline font-display text-5xl tracking-tight text-gray-900 dark:text-gray-200">
                Drive test flakes to{' '}
                <span className="text-pink-500">zero.</span>
              </p>
              <p className="light:bg-white/80 light:text-gray-600 mt-3 text-lg tracking-tight dark:text-slate-400">
                Record your tests in CI. Debug failures with time travel
                enhanced browser DevTools. Fix your failing tests. And get back
                to shipping.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/getting-started/record-your-first-replay">
                  Record Your first replay
                </Button>
                <Button
                  variant="secondary"
                  href="/getting-started/record-your-first-replay"
                >
                  Explore DevTools
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <HeroBackground className="absolute -left-[32%] -top-[45%] mix-blend-darken dark:opacity-40 dark:mix-blend-color-burn" />
          </div>
        </div>
      </div>
    </div>
  )
}
