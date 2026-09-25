import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { getSiteOrigin } from '@/lib/agentReadiness'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'
import Analytics from '@/components/Analytics'
import Script from 'next/script'
import { WebMCPProvider } from '@/components/WebMCPProvider'

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

const ogImage = '/replayQA_og-image.png'
const title = 'Replay QA — AI wrote the app. Replay QA finds what broke.'
const description =
  'Connect a GitHub repo for continuous testing, or drop in a URL to test on demand. Replay QA finds real bugs and gives your coding agent the root cause and fix.'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  title: {
    template: '%s - Docs',
    default: title,
  },
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: [{ url: ogImage, width: 1200, height: 642 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@replayio',
    title,
    description,
    creator: '@replayio',
    images: [{ url: ogImage, width: 1200, height: 642 }],
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
      className={clsx(
        'h-full antialiased',
        inter.variable,
        lexend.variable,
        virgil.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <Analytics />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-244NMJ9B93');
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-244NMJ9B93"
          strategy="afterInteractive"
        />
        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "8830930";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `,
          }}
        />
        <Script
          id="x-conversion-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','rakvy');
            `,
          }}
        />
        <Script
          id="apollo-website-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n = Math.random().toString(36).substring(7);
                var o = document.createElement("script");
                o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
                o.async = true;
                o.defer = true;
                o.onload = function(){
                  window.trackingFunctions.onLoad({appId: "69987d99eda3b200117689e4"});
                };
                document.head.appendChild(o);
              }
              initApollo();
            `.trim(),
          }}
        />
      </head>
      <body className="flex min-h-full bg-gray-50 text-gray-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8830930&fmt=gif"
          />
        </noscript>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <WebMCPProvider />
        <VercelAnalytics />
      </body>
    </html>
  )
}
