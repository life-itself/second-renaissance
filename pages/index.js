import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>State of Sensemaking 2021 - an Ecosystem Mapping - by Life Itself</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          State of Sensemaking
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://lifeitself.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Project of {' '}
          <img src="/life-itself-logo.svg" alt="Life Itself Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
