const { withNextVideo } = require('next-video/process')

const fs = require('fs')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    rehypePrettyCodeOptions: {
      // VSCode theme or built-in Shiki theme, see Shiki documentation for more information
      theme: JSON.parse(
        fs.readFileSync('./public/assets/shiki-theme.json', 'utf8')
      )
    }
  }
});

module.exports = withNextVideo(withNextra({}));
