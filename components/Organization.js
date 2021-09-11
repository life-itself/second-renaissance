import Layout from '../components/Layout'

export default function Organization({ org }) {
  return (
    <Layout title={org.title}>
      <h1 className="text-6xl font-bold text-center my-8">
        {org.title}
      </h1>
      <p><a href={org.url}>{org.url}</a></p>
      <article>
        {org.description}
      </article>
    </Layout>
  )
}
