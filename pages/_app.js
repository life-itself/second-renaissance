import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import 'tailwindcss/tailwind.css'

import '../styles/global.css';
import siteConfig from '../config/siteConfig.js'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  // Google Analytics
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  // end Google Analytics
 
  return (
    <>
      {/* TODO: this is not working and can't figure out why 2021-10-23 */}
      // <DefaultSeo
      //   titleTemplate={'%s | ' + siteConfig.title}
      //   defaultTitle={siteConfig.title}
      //   description={siteConfig.description}
      //   />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.analytics}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
