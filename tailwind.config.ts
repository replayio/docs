import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        pink: {
          50: '#ffe4e8',
          100: '#fdced8',
          200: '#fca5b7',
          300: '#f97391',
          400: '#f02d5e',
          500: '#de2059',
          600: '#bc144a',
          700: '#9d1445',
          800: '#861541',
          900: '#4b061f',
          950: '#340416'
        },
      }
    }
  }
}
