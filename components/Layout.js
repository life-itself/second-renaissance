import Link from 'next/link'
import Head from 'next/head'

import Nav from '../components/Nav'

export default function Layout({ children, title='' }) {
  return (
    <>
      <Head>
        <title>{title}{title && '- '}State of Sensemaking 2021 - an Ecosystem Mapping - by Life Itself</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav /> 
      {children}
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://lifeitself.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Project of
          <img src="/life-itself-logo.svg" alt="Life Itself Logo" className="h-12 block" />
        </a>
      </footer>
    </>
  )
}
