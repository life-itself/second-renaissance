import { allDocuments, allProfiles } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxPage from "../components/MDX";

const testData = [
  {name: "First", value: 1},
  {name: "Second", value: 2}
]

export default function Page({ body, ...rest }) {
  const filteredProfiles = allProfiles.filter(profile => 
    !(profile.curation_status.includes('N') || profile.curation_status.includes('?'))
  )

  const Component = useMDXComponent(body.code, {
    orgs: filteredProfiles
  });
  
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
  return { props: page };
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
