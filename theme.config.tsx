import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import ReplayLogotype from './icons/ReplayLogotype'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <ReplayLogotype width={100} />,
  project: {
    link: 'https://github.com/replayio-public/replay-documentation',
  },
  chat: {
    link: 'https://docs.replay.io/discord',
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
        <meta name='image' content={`https://docs.replay.io/api/og?title=${frontMatter.title}`} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={frontMatter.title} />
        <meta property='og:description' content={frontMatter.description} />
        <meta property='og:image'content={`https://docs.replay.io/api/og?title=${frontMatter.title}`} />
        <meta property='twitter:card' content= 'summary_large_image' />
        <meta property='twitter:creator' content='@replayio' />
        <meta property='twitter:title' content={frontMatter.title} />
        <meta property='twitter:description' content={frontMatter.description} />
        <meta property='twitter:image' content={`https://docs.replay.io/api/og?title=${frontMatter.title}`} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="canonical" href={url} />
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
