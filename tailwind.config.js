/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#FDF3F6",
          100: "#FAE8EC",
          200: "#F3C5D0",
          300: "#ECA2B4",
          400: "#DE5C7C",
          500: "#D01644",
          600: "#BB143D",
          700: "#7D0D29",
          800: "#5E0A1F",
          900: "#3E0714"
        }
      } 
    }
  },
  plugins: []
}