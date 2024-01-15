export default defineAppConfig({
  ui: {
    primary: 'pink',
    gray: 'zinc',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Replay.io',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/replayio/replay-documentation',
      target: '_blank',
      'aria-label': 'Replay.io docs on GitHub'
    }]
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
    links: [{
      icon: 'i-logos-replay-icon',
      to: 'https://replay.com',
      target: '_blank',
      'aria-label': 'Replay.io Website'
    }, {
      icon: 'i-simple-icons-discord',
      to: 'https://replay.io/discord',
      target: '_blank',
      'aria-label': 'Replay.io on Discord'
    }, {
      icon: 'i-simple-icons-x',
      to: 'https://x.com/replayio',
      target: '_blank',
      'aria-label': 'Replay.io on X'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/replayio',
      target: '_blank',
      'aria-label': 'Replay.io on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/replayio/replay-documentation/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/replay/replay-documentation',
        target: '_blank',
      }]
    }
  }
})
