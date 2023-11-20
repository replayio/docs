import Script from 'next/script'
import 'nextra-theme-docs/style.css' // beware of css import order
import '../styles/globals.css'
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

  // only initialize when in the browser
  if (typeof window !== 'undefined') {
    LogRocket.init('4sdo4i/replay-docs');
    setupLogRocketReact(LogRocket);
  }

function MyApp({ Component, pageProps }) {

  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Script async src="/stats/script.js" data-website-id="9dab9357-6fa2-48ab-966a-82c4e1bb67fe" strategy='afterInteractive' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
