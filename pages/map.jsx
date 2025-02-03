const Page = () => {
  return (
    <section>
      <figure id="graphic" className="">
        <a href="/map/ecosystem_map.html">
        <img
          className="bg-gray-50 object-cover"
          src="/assets/img/ecosystem/second-renaissance-ecosystem-map.webp"
          alt="Map of the Second Renaissance Changemaking Ecosystem as created by Life Itself and friends May 2024"
        />
        </a>
        <figcaption className="text-xs sm:text-sm text-center mx-auto max-w-3xl block mt-5">An impressionistic map of the second renaissance "paradigmatic changemakers" ecosystem. It shows some of the different communities, movements and spaces (primarily in the Global North) that aspire to and/or act to foster paradigmatic change with a second renaissance perspective.
          <br></br><br></br>
        Click <a className="underline" href="/map/ecosystem_map.html">here</a> or anywhere on the map to explore a large-scale, interactive version, where you can click on the names of individuals and organisations to learn more about them. 
          <br></br><br></br>
          <a className="underline" href="https://secondrenaissance.substack.com/p/map-of-second-renaissance-changemaking">Read more &raquo;</a></figcaption>
      </figure>
    </section>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        layout: 'unstyled'
      }
    }
  }
}

export default Page;
