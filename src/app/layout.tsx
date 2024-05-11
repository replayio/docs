import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

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

const virgil = localFont({
  src: '../fonts/Virgil.woff2',
  display: 'swap',
  variable: '--font-virgil',
})

const ogImage = '/images/og-image.png'
export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: 'Replay docs',
  },
  description:
    'Replay is the first deterministic browser. Once a bug or flaky test is captured, anyone can inspect it with Browser DevTools without having to replicate it locally.',
  openGraph: {
    title: 'Replay - Browser DevTools from the future.',
    description:
      'Investigate bugs and flaky tests with perfect reproducibility.',
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    site: '@replayio',
    title: 'Replay - Browser DevTools from the future.',
    description:
      'Investigate bugs and flaky tests with perfect reproducibility.',
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
      className={clsx('h-full antialiased', inter.variable, lexend.variable, virgil.variable)}
      suppressHydrationWarning
    >
      <head>
        <Analytics />
      </head>
      <body className="flex min-h-full bg-white dark:bg-gray-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <VercelAnalytics />
      </body>
    </html>
  )
}
