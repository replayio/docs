import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import LogosReplay from './icons/LogosReplay'

const config: DocsThemeConfig = {
  logo: <LogosReplay width={100} />,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
