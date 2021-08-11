import Head from 'next/head'
import { getOrganizations } from "../lib/sheet";


export default function Home({ orgs }) {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>State of Sensemaking 2021 - an Ecosystem Mapping - by Life Itself</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20">
        <h1 className="text-6xl font-bold text-center my-8">
          State of Sensemaking
        </h1>
        <section>
          {orgs.map(({ title, description, url, imageurl }) => (
            <article className="bg-white shadow overflow-hidden sm:rounded-lg mb-16 p-8">
              <a
                className="p-4"
                key={title}
                href={url}
                target="_blank"
              >
                <h3 className="font-bold mb-2 text-4xl">{title}</h3>
              </a>
              <img src={imageurl} alt="" className="max-h-16" />
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </article>
          ))}
        </section>

        <div>{JSON.stringify(orgs[0],null,2)}</div>
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

export async function getStaticProps(context) {
  const orgs = await getOrganizations();
  return {
    props: {
      orgs,
    }
  };
}
