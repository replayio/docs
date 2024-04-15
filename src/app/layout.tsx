import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import Analytics from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

const ogImage = '/images/og-image.png'
export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: 'Replay docs',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
  openGraph: {
    title: 'Replay - The time-travel debugger from the future.',
    description: 'Record and replay your application with DevTools.',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    site: '@replayio',
    title: 'Replay - The time-travel debugger from the future.',
    description: 'Record and replay your application with DevTools.',
    creator: '@replayio',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <head>
        <Analytics />
      </head>
      <body className="flex min-h-full bg-white dark:bg-gray-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
