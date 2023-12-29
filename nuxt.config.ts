// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  colorMode: {
    preference: 'dark'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image'
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon', 'UBadge'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons', 'logos', 'ic']
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['mux-player', 'you-tube-player'].includes(tag),
    },
  },
  // Fonts
  fontMetrics: {
    fonts: ['Inter']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: [400, 500, 600, 700]
    }
  },
  routeRules: {
      '/discord': { redirect: 'https://discord.gg/Wh9w3KMr7J' },
      '/getting-started': { redirect: '/getting-started/introduction' },
      '/resources': { redirect: '/resources/get-help' },
      '/reference-guide': { redirect: '/reference-guide/debugging/print-statements' },
      '/debugging-guide': { redirect: '/debugging-guide/debugging/print-statements' },
      '/docs/replay-oss-751fc053a0a14c32812c4766d7c65e4d': { redirect: '/learn-more/workflows/oss-projects' },
      '/docs/recording-bug-reports-80c37d7d6753485f81497570625d06f0': { redirect: '/learn-more/workflows/recording-bug-reports' },
      '/docs/resources-and-examples-d25ae319114e4d109022458cd47f38ec': { redirect: '/resources/get-help' },
      '/docs/recording-a-web-app-5fc7ace7f3e449ce903e89e59d4b93ba': { redirect: '/getting-started/recording-your-first-replay' },
      '/docs/contact-and-community-096224a3bca4479b982ac572dc5c81d0': { redirect: '/resources/get-help/contact-community' },
      '/docs/billing-e01f0740cd9548f1b8725c9773b217f6': { redirect: '/getting-started/teams-admin/billing' },
      '/docs/case-studies-and-comparisons-3bd958ab68234ae697cdac5904bbc36e': { redirect: '/resources/replay-io-case-studies' },
      '/bug-reports': { redirect: '/getting-started/recording-your-first-replay' },
      '/reference-guide/react': { redirect: '/reference-guide/dev-tools/react' },
      '/reference-guide/print-statements': { redirect: '/reference-guide/debugging/print-statements' },
      '/reference-guide/events#b1a0e7f432f5426888b80e9b00e7b226': { redirect: '/reference-guide/viewer/events' },
      '/resources-and-examples/security-practices': { redirect: '/resources/security-practices' },
      '/recording-browser-tests-\\(beta\\)': { redirect: '/getting-started/test-suite-integration' },
      '/case-studies-and-comparisons/replay-vs.-session-replay': { redirect: '/resources/comparisons/session-replay-vs-runtime-replay' },
      '/case-studies-and-comparisons/replay-vs.-chrome-recorder': { redirect: '/resources/comparisons/chrome-recorder-vs-replay' },
      '/case-studies-and-comparisons/replay-vs.-loom': { redirect: '/resources/comparisons/loom-vs-replay' },
      '/recording-a-web-app/sharing-your-replay': { redirect: '/getting-started/replay-browser/sharing-your-replay' },
      '/recording-a-web-app/viewing-and-collaborating': { redirect: '/getting-started/replay-browser/viewing-and-collaborating' },
      '/recording-browser-tests-\\(beta\\)/cypress-instructions': { redirect: '/test-suites/cypress/installation' },
      '/recording-browser-tests-\\(beta\\)/pull-request-comments': { redirect: '/test-suites/features/pull-request-comments' },
      '/recording-browser-tests-\\(beta\\)/test-suite-dashboard': { redirect: '/test-suites/features/test-suite-dashboard' },
      '/recording-browser-tests-\\(beta\\)/test-replays': { redirect: '/test-suites' },
      '/reference-guide/cypress-panel': { redirect: '/test-suites/cypress/panel' },
      '/resources-and-examples': { redirect: '/resources/get-help' },
      '/resources-and-examples#7375c6180b8848f48be37c4bf1026007': { redirect: '/resources/get-help' },
      '/case-studies-and-comparisons': { redirect: '/resources/replay-io-case-studies' },
      '/case-studies-and-comparisons#ff284e483831445ba1a6928c24afc2b5': { redirect: '/resources/replay-io-case-studies' },
      '/contribute': { redirect: '/learn-more/contribute' },
      '/reference-guide/console': { redirect: '/reference-guide/dev-tools/console' },
      '/reference-guide/elements': { redirect: '/reference-guide/dev-tools/elements' },
      '/reference-guide/breakpoints': { redirect: '/reference-guide/debugger/breakpoints' },
      '/reference-guide/events': { redirect: '/reference-guide/viewer/events' },
      '/reference-guide/network': { redirect: '/reference-guide/dev-tools/network' },
      '/get-help': { redirect: '/resources/get-help/contact-community' },
      '/resources/replay.io-case-studies/midnite-builds-time-travel-workflows-for-its-fast-paced-betting-platform': { redirect: '/resources/ay-io-case-studies/midnite-builds-time-travel-workflows-for-its-fast' },
      '/test-suites/cypress': { redirect: '/test-suites/cypress/installation' },
      '/test-suites/playwright': { redirect: '/test-suites/playwright/installation' },
      '/docs/recording-automated-tests-5bf7d91b65cd46deab1867b07bd12bdf': { redirect: '/test-suites' },
      '/contribute/contributing-to-replay': { redirect: '/learn-more/contribute/contributing-to-replay' },
      '/getting-started/bug-reports/installing-the-replay-browser': { redirect: '/getting-started/replay-browser/installation' },
      '/getting-started/bug-reports/installing-the-replay-browser/installing-replay-chrome': { redirect: '/getting-started/replay-browser/allation#cli-replay-chrome-new' },
      '/getting-started/bug-reports/installing-the-replay-browser/installing-on-linux': { redirect: '/getting-started/replay-browser/installation#linux' },
      '/getting-started/bug-reports/installing-the-replay-browser/installing-on-windows': { redirect: '/getting-started/replay-browser/allation#windows-beta' },
    '/api/search.json': { prerender: true },
    '/public/assets/shiki-theme.json': { prerender: true },
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
