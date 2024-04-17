import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="font-display text-sm font-medium text-gray-900 dark:text-white">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-gray-900 dark:text-white">
          Page not found
        </h1>
        <Image src="/images/404.png" width={450} height={450} alt="Broken Delorean" placeholder='empty' />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          You might need to travel back in time.
        </p>
        <Link
          href="/"
          className="mt-8 text-sm font-medium text-gray-900 dark:text-white"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
