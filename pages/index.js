import Head from 'next/head'

import Layout from '../components/Layout'
import { getOrganizations } from "../lib/sheet"


export default function Home({ orgs }) {
  return (
    <Layout>
      <h1 className="text-6xl font-bold text-center my-8">
        State of Sensemaking
      </h1>
      <section>
        {orgs.map((org) => (
          <article className="bg-white shadow overflow-hidden sm:rounded-lg mb-16 p-8">
            <a
              className="p-4"
              key={org.title}
              href={org.url}
              target="_blank"
            >
              <h3 className="font-bold mb-2 text-4xl">{org.title}</h3>
            </a>
            <img src={org.imageurl} alt="" className="max-h-16" />
            <div dangerouslySetInnerHTML={{ __html: org.description }} />
          </article>
        ))}
      </section>
    </Layout>
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
