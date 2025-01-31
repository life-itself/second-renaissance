const Cohere = () => (

  <div id="cohere" className="mt-12 sm:mt-24 prose max-w-5xl text-center object-center mx-auto">
      <p>This mapping was co-funded by the European Union as part of the Cohere+ project, in collaboration with: The Hague Center, Institute for Integral Studies, Emerge, and Ekskaret. This phase of mapping focused primarily on organisations active within Europe.</p>
      <img
        className="bg-gray-50 object-center mx-auto"
        src="/assets/cohere and co-funded EU logo xs.jpg"
        alt=""
       />
  </div>
);

const Page = () => {
  return (
    <>

<div className="container mx-auto px-10 h-screen">

<div className="mt-12 sm:mt-24 prose max-w-5xl mx-auto">
    <h1 className="text-center">Map of Paradigmatic Social Change Ecosystem</h1>
    <div className="text-center py-5">Explore the map of organizations, communities, and initiatives who are taking action towards paradigmatic social change in Europe.</div>
</div>
<iframe src="/map/ecosystem_map.html" width="120%" height="80%"></iframe>
</div>
      <Cohere></Cohere>
        
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

