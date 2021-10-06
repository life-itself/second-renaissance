import Head from 'next/head'
import Image from 'next/image'

import { getOrganizations } from "../lib/sheet"


export default function Home({ orgs }) {
  return (
    <>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
            </svg>
          </div>
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">State of Sensemaking</span>{' '}
                <span className="block text-yellow-300 xl:inline">2021</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                An ecosystem mapping by Life Itself
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                  >
                    Download Report
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Browse Profiles 
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Profiles</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {orgs.map((org) => (
                <div key={org.slug} className="group relative">
                  <div className="w-full min-h-80 bg-beige aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={org.logourl}
                      alt={org.title}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div>
                    <a className="extra-small exception font-medium tracking-wide text-accent uppercase">{org.category}</a>
                      <h3 className="text-base font-medium hover:underline text-semiblack">
                        <a href={'/entity/' + org.slug}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {org.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-darkgray pb-1">{org.url}</p>
                      <p className="text-sm text-gray-700">{org.description.slice(0, 100) + '…'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps(context) {
  const orgs = await getOrganizations();
  return {
    props: {
      orgs,
    }
  };
}
