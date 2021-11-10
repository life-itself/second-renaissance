import Search from "../components/Search.js"
import { getOrganizations } from "../lib/db.js"

export default function Page({ orgs }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="mt-16 mb-8 text-4xl">Search</h1>
        <Search orgs={orgs} />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const orgs = await getOrganizations();
  return {
    props: {
      orgs,
    }
  }
}
