import mql from '@microlink/mql'
import React, { useState, useEffect } from 'react'


export default function Page() {
  const [url, setUrl] = useState("")
  const [info, setInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		const urlSent = e.target.value
    setUrl(urlSent)
	}
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    async function fetchMyAPI() {
      setIsLoading(true)
      const microlinkInfo = await mql(url, {
        screenshot: true
      })
      setIsLoading(false)
      setInfo(microlinkInfo)
    }

    if (url) {
      fetchMyAPI()
    }
  }, [url])

  return (
    <>
      <main className="mx-auto max-w-7xl pt-16 pb-16">
        <h1 className="text-4xl text-center font-bold">Quick Research</h1>
        <form className="grid grid-cols-1 gap-6 max-w-md mt-8"
          onSubmit={handleSubmit}
          >
          <label className="block">
            <span className="text-gray-700">Site</span>
            <input
              type="text"
              className="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder="https://lifeitself.us"
              defaultValue={url}
              onBlur={handleChange}
            />
          </label>
          {/*
          <div className="justify-end">
            <button
              type="submit"
              className="justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go
            </button>
          </div>
          */}
        </form>
        <section className="mt-16 prose">
          <h2>Results</h2>
          {isLoading &&
            <div>
              <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </div>
          }
          {(!isLoading && info.data) &&
            <InfoBlock info={info} />
          }
        </section>
      </main>
    </>
  )
}

function InfoBlock({info}) {
  return (
    <>
      <p>
        Url is: {info.data.url}
      </p>
      <p>
        Title: {info.data.title}
      </p>
      
      <h4>Logo</h4>
      <img src={info.data.logo.url} />

      <h4>Image</h4>
      <img src={info.data.image.url} className="bg-yellow"/>

      <h4>Screenshot</h4>
      <img src={info.data.screenshot.url} />

      <h3>Raw JSON</h3>
      <pre className="mt-6">
        <code>
          {JSON.stringify(info, null, 2)}
        </code>
      </pre>
    </>
  )
}