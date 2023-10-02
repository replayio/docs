const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/overview/what-is-replay-io',
        permanent: true,
      },
    ];
  },
});
