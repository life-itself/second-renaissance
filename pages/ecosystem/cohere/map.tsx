const Page = () => {
  return (
    <>
        <div className="container mx-auto px-10 h-screen">

          <div className="mt-12 sm:mt-24 prose max-w-5xl mx-auto">
              <h1 className="text-center">Directory Map</h1>
              <div className="text-center py-5">Explore the directory of organizations, communities, and initiatives who are taking action towards paradigmatic social change in Europe.</div>
          </div>
          <iframe src="/map/cohere_map.html" width="100%" height="90%"></iframe>
        </div>
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        layout: "unstyled",
      },
    },
  };
}

export default Page;

