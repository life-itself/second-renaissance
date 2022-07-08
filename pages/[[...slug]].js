import { allDocuments } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxPage from "../components/MDX";
import getProfiles from "../lib/db";

export default function Page({ page: { body, ...rest }, orgs }) {
  const Component = useMDXComponent(body.code, { orgs });
  
  const children = {
    Component,
    frontMatter: {
      ...rest,
    },
  };
  return <MdxPage children={children} />;
}

export async function getStaticProps({ params }) {
  // params.slug is undefined for root index page
  const urlPath = params.slug ? params.slug.join("/") : '';
  const page = allDocuments.find((p) => p.url_path === urlPath);

  //  load orgs only for pages that require them (eg. pages containing a vis).
  const orgs = /{orgs}/.test(page.body.code) ? await getProfiles() : null

  return { props: { page, orgs } };
}

export async function getStaticPaths() {
  const paths = allDocuments.map((page) => {
    const parts = page.url_path.split("/");
    return { params: { slug: parts } };
  });

  return {
    paths,
    fallback: false,
  };
}
