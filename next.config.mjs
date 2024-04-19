import { withNextVideo } from 'next-video/process'
import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
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

export default withNextVideo(
  withSearch(withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)),
  { folder: 'src/videos' },
)
