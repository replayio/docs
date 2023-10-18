import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider>
    <Script async src="https://analytics.eu.umami.is/script.js" data-website-id="9dab9357-6fa2-48ab-966a-82c4e1bb67fe" />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
