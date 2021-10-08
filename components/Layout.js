import Link from 'next/link'
import Head from 'next/head'
import { XIcon } from '@heroicons/react/outline'

import Nav from '../components/Nav'

export default function Layout({ children, title='' }) {
  return (
    <>
      <Head>
        <title>{title}{title && '- '}State of Sensemaking 2021 - an Ecosystem Mapping - by Life Itself</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
      </Head>
      <div className="relative bg-yellow-300">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="pr-16 sm:text-center sm:px-16">
            <p className="font-medium">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Note: this effort is still early stage and limited by our resources and knowledge.
               </span>
              <span className="block sm:ml-2 sm:inline-block">
                <a href="about#disclaimer" className="font-bold underline">
                  {' '}
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
            <button
              type="button"
              className="flex p-2 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
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
