import { withNextVideo } from 'next-video/process'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from 'rehype-slug'
import remarkCodeMeta from './src/lib/remark-code-meta.mjs'
import withSearch from './src/lib/search.mjs'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'frontmatter' }],
      remarkCodeMeta,
    ],
    rehypePlugins: [rehypeSlug],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  productionBrowserSourceMaps: true,

  async redirects() {
    return [
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
