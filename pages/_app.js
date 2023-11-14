import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <Script async src="/stats/script.js" data-website-id="9dab9357-6fa2-48ab-966a-82c4e1bb67fe" strategy='afterInteractive' />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
