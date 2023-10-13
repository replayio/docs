const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/getting-started/what-is-replay-io',
        permanent: true,
      },
      {
        source: '/test-suites',
        destination: '/test-suites/test-runners',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/resources/get-help',
        permanent: true,
      }
    ];
  },
});
