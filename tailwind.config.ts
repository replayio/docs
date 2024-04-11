import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,md}'],
  darkMode: 'selector',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        display: ['var(--font-lexend)', { fontFeatureSettings: '"ss01"' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'nav-active': "0px 0px 5px 1px rgba(17,147,230,1)",
        ripple: `0px 0px 0px 10px rgba(255,255,255,0.1), 0px 0px 0px 20px rgba(255,255,255,0.1), 0px 0px 0px 30px rgba(255,255,255,0.1)`
      },
      colors: {
        'pink': {
          '50': '#fff1f3',
          '100': '#ffe4e8',
          '200': '#fdced8',
          '300': '#fca5b7',
          '400': '#f97391',
          '500': '#f02d5e',
          '600': '#de2059',
          '700': '#bc144a',
          '800': '#9d1445',
          '900': '#861541',
          '950': '#4b061f',
        },
        'sky': {
          '50': '#f0f8ff',
          '100': '#e0f0fe',
          '200': '#bbe1fc',
          '300': '#7fc8fa',
          '400': '#41b0f6',
          '500': '#1193e6',
          '600': '#0474c5',
          '700': '#055c9f',
          '800': '#094f83',
          '900': '#0d426d',
          '950': '#092a48',
      },
      }
    },
  },
  plugins: [typographyPlugin],
} satisfies Config
