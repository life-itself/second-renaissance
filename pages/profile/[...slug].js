import { NextSeo } from 'next-seo'

import { getOrganizations } from "../../lib/db";
import Organization from '../../components/Organization'
import config from '../../config/siteConfig'


export default function Page({ org }) {
  const orgImage = org.image.cached ?? (org.logo.cached || org.logo.url);
  return (
    <>
      <NextSeo
        title={org.name + " - " + config.title}
        description={org.description.split("\n")[0].split(".")[0]}
        openGraph={{
          images: [
            {
              url: orgImage,
              width: 1200,
              height: 630,
              alt: org.name,
            },
          ],
        }}
        twitter={{
          handle: "@forlifeitself",
          site: "ecosystem.lifeitself.us",
          cardType: "summary_large_image",
        }}
      />
      <Organization org={org} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const orgSlug = params['slug'][0]
  const orgs = await getOrganizations()
  const org = orgs.filter(org => org.id == orgSlug)[0]
  return {
    props: {
      org: org
    }
  }
}

export const getStaticPaths = async () => {
  const orgs = await getOrganizations()
  var paths = orgs.map((org) => org.id)

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
