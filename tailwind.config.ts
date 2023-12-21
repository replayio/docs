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
          50: '#fff1f3',
          100: '#ffe4e8',
          200: '#fdced8',
          300: '#fca5b7',
          400: '#f97391',
          500: '#f02d5e',
          600: '#de2059',
          700: '#bc144a',
          800: '#9d1445',
          900: '#861541',
          950: '#4b061f'
        },
      }
    }
  }
}
