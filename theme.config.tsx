import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import LogosReplay from './icons/LogosReplay'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <LogosReplay width={100} />,
  project: {
    link: 'https://github.com/replayio-public/replay-documentation',
  },
  chat: {
    link: 'https://discord.gg/replayio',
  },
  docsRepositoryBase: 'https://docs.replay.io',
  footer: {
    text: '® 2023 Replay, All rights reserved.',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.replay.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Replay.io docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Replay.io is a tool that makes debugging easy. It lets you record your web app and retroactively inspect it using print statements and browser DevTools.'}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Replay.io docs'
    }
  }
}

export default config
