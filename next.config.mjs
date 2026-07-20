import { withNextVideo } from 'next-video/process'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from 'rehype-slug'
import remarkCodeMeta from './src/lib/remark-code-meta.mjs'
import remarkDocsLayout from './src/lib/remark-docs-layout.mjs'
import withSearch from './src/lib/search.mjs'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'frontmatter' }],
      remarkCodeMeta,
      remarkDocsLayout,
    ],
    rehypePlugins: [rehypeSlug],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  productionBrowserSourceMaps: true,

  async rewrites() {
    return [
      // Agent-readiness discovery endpoints. We host the routes under
      // /well-known/* (Next.js does not include `.`-prefixed folders in the
      // app-router route tree) and rewrite the canonical /.well-known/*
      // paths so RFC compliance still holds.
      {
        source: '/.well-known/:path*',
        destination: '/well-known/:path*',
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/basics/replay-qa/overview',
        permanent: false,
      },
      {
        source: '/getting-started/record-your-first-replay',
        destination: '/quickstart',
        permanent: true,
      },
    ]
  },
}

export default withNextVideo(withSearch(withMDX(nextConfig)), {
  folder: 'src/videos',
})
