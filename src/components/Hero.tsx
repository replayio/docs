import { Button } from './Button'
import { HeroBackground } from './HeroBackground'

export function Hero() {
  return (
    <div className="mt-[-4.75rem] max-w-8xl  overflow-hidden border-b-2 border-gray-500 border-opacity-5 bg-transparent pt-[4.75rem]">
      <div className="pb-16 pt-8 sm:px-2 lg:relative lg:px-0">
        <div className=" max-w-2xl">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline font-display text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-200">
                Replay documentation
              </p>
              <p className="mt-3 text-lg tracking-tight text-gray-400">
                Get an overview of Replay DevTools and how to fixing your flaky
                tests.
              </p>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <HeroBackground className="absolute -left-[32%] -top-[45%] mix-blend-darken dark:bg-black dark:mix-blend-color-burn" />
          </div>
        </div>
      </div>
    </div>
  )
}
