import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Script async src="https://analytics.eu.umami.is/script.js" data-website-id="9dab9357-6fa2-48ab-966a-82c4e1bb67fe" />
    <Component {...pageProps} />
  </>
}

export default MyApp
