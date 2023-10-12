import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import LogosReplay from './icons/LogosReplay'

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
  head: (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </>
  )
}

export default config
