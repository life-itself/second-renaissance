import { getOrganizations } from "../../lib/sheet";
import Organization from '../../components/Organization'

export default function Page({org}) {
  return (
    <Organization org={org} />
  )
}

export const getStaticProps = async ({ params }) => {
  const orgSlug = params['slug'][0]
  const orgs = await getOrganizations()
  const org = orgs.filter(org => org.slug == orgSlug)[0]
  return {
    props: {
      org: org
    }
  }
}

export const getStaticPaths = async () => {
  const orgs = await getOrganizations()
  var paths = orgs.map((org) => org.slug)

  // Map the path into the static paths object required by Next.js
  paths = paths.map((slug) => {
    // /demo => [demo]
    const parts = slug.split('/')
    return { params: { slug: parts } }
  })

  return {
    paths,
    fallback: false,
  }
}
