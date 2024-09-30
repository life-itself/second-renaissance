const Page = () => {
  return (
    <>
      <Hero></Hero>
      <Catalyst></Catalyst>
      <SecondRenaissance />
      <Manifesto></Manifesto>
    </>
  );
};

const magazineLink = '/assets/docs/impermanence-magazine-art-of-second-renaissance.pdf';
const manifestoLink = '/assets/docs/art-of-second-renaissance-manifesto.pdf';

const Hero = () => (
  <div
    className="relative isolate overflow-hidden pt-24 sm:pt-32 bg-center bg-cover min-h-screen bg-black"
    style={{
      backgroundImage: "url('/assets/img/art/trees.webp')",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}>
    <div className="mx-auto max-w-7xl md:px-6 lg:px-8 text-white">
      
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div className="px-6 lg:px-0 lg:pr-8 lg:pt-4">
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
            Art of the second renaissance
          </h1>
          <h3 className="mt-6 text-2xl leading-8 sm:text-4xl">
            We are an artists collective making art to bring forth a second
            renaissance.
          </h3>
        </div>
        <div className="sm:px-6 lg:px-0">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/mtsN-mBImfA?si=QmCuc6Oe-E4FGDvY&rel=0"
            title="Art of the Second Renaissance intro"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
      </div>
      <div className="mt-32 flex items-center justify-center gap-x-6 text-center">
        <a href="#catalyst" className="text-sm font-semibold leading-6">
          Continue
          <br />
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  </div>
);

const Catalyst = () => (
  <div id="catalyst" className="overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10 mb-10">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-8">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-3xl font-inter font-bold  text-gray-900 ">
              Art as a catalyst for transformation
            </h1>
            <p className="mt-6 text-xl leading-8">
              Art is an expression of our consciousness and humanity, from the
              prehistoric cave paintings to the graffiti in the streets of our
              towns, art has always been a gateway to transformation.
            </p>
            <h3 className="mt-10 text-xl font-bold  text-gray-900 sm:text-3xl ">
              Impermanence: our first theme
            </h3>
            <p className="mt-6 text-xl leading-8">
              Each year we curate an exhibition and a magazine to share with the
              world the artistic embodiment of transformation for a Second
              Renaissance. Our latest exhibition is on the theme of Impermanence
              and took place in Thénac France in April 2024.
            </p>
            <p className="mt-8">
              <a href="/art/impermanence" className="btnsq btn-black text-xl">
                See the exhibition and magazine
              </a>
            </p>
          </div>
        </div>
        <div className="pt-24">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/BCNPMCZ_leI?si=q8Al5Oz4RCks6Pb6&rel=0&modestbranding=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
);

const SecondRenaissance = () => (
  <div id="SecondRenaissance" className="overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 mb-10">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-8">
          <div className="lg:max-w-lg">
            <h2 className="text-5xl mb-6">
              Art of the
              <br />
              Second
              <br />
              Renaissance
            </h2>
            <h2 className="text-xl font-bold text-red-500 mb-4">
              Manifesto & Essay
            </h2>
            <p className="mb-4 text-xl leading-8">
              Seeking an artistic tribe for an emerging cultural paradigm.
            </p>
            <p className="mb-6 text-xl leading-8">
              Marrying the artistic, political and spiritual world.
            </p>
            <p className="mt-8">
              <a href={manifestoLink} className="btnsq btn-black text-xl">
              Download
              </a>
            </p>
          </div>
        </div>
        <div className="pt-24">
          <h2 className="text-3xl font-bold mb-4">The philosophy behind</h2>
          <p className="mt-6 text-xl leading-8">
            We have written a manifesto and essay to explain in more detail the
            philosophy behind the Art of the Second Renaissance. This is in the
            context of forming an art collective for the emerging cultural
            paradigm, which marries the artistic, political and spiritual world.
          </p>
          <p className="mt-6 text-xl leading-8">
            Subscribe for updates about art of the second renaissance
          </p>
          <p className="mt-8">
            <a href="https://secondrenaissance.substack.com/s/art" className="btnsq btn-black text-xl">
              Sign on our substack newsletter
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Manifesto = () => (
  <div className="bg-white px-6 py-32 lg:px-8">
    <div className="mx-auto max-w-3xl text-base leading-7 text-gray-600 text-center text-lg leading-8">
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center mb-8">
        Manifesto
      </h1>

    <div className="prose-lg text-center">
      <p>
        We are a collective of artists making art to bring forth the second
        renaissance.
      </p>
      <p>
        We are alchemists
        <br />
        We create a new world through our work.
        <br />
        We are the bridge between the dying past and the future unborn.
      </p>
      <p>
        Art is an expression of our consciousness and humanity, this is our path
        of transformation. Life as an art.
      </p>
      <p>
        So what will be an Art for the Second Renaissance? It is the dawn,
        calling us to value interbeingness, awakening, wisdom and
        inner-evolution. Because we believe and witness that there is an innate
        calling in life to be deeply and truly free. A freedom which includes
        and transcends the freedom to have, to feel and to think. A freedom to
        be and become. It is a Liberation.
      </p>
      <p>
        That this life movement can not be repressed by fear, war, terror,
        death, dictatorship. That our ability to understand, love, care and
        contribute is an expression of our intuitive knowledge of the truth of
        our interbeingness. By doing so we become the author of tomorrow's
        future and the priests to the dying past.
      </p>

      <ul className="list-none mt-16">
        <li>
          Our work is to create a space to be with all of it. To be with the
          joy, the darkness, the hope, the sadness, the unknown.
        </li>
        <li>
          Our work is to inquire about what would a world that works for
          everyone look like?
        </li>
        <li>
          What would be asked of us to let go and develop for this to be
          fulfilled?
        </li>
        <li>Our work is a practice to inquire about the nature of reality.</li>
        <li>
          Our work is mystical, political, spiritual, religious and artistic.
        </li>
        <li>Our work inquires about the good through community.</li>
        <li>Our work expresses beauty through art.</li>
        <li>
          Our work inquires about the truth through the practice of wisdom.
        </li>
        <li>Our work is grounded in practice.</li>
        <li>
          Our work stands to liberate ourselves from nihilism and relativism.{" "}
        </li>
        <li>
          Our work stands to go beyond the limitation of the superiority,
          equality and inferiority complex.{" "}
        </li>
        <li>Our work embraces ethics. </li>
        <li>
          Our work looks for the middle way in the Buddhist sense, not as a
          pursuit of the ‘average’{" "}
        </li>
        <li>Our work explores impermanence and eternity. </li>
        <li>Our work is a practice of the power authenticity with oneself. </li>
        <li>Our work is a demonstration of the power of vulnerability. </li>
        <li>Our work is a practice of being with our cognitive dissonance. </li>
        <li>Our work is expressed and unapologetic </li>
        <li>Our work is understanding and compassionate. </li>
        <li>Our work is a practice of non-self and interbeingness. </li>
        <li>Our work is contemplative and activist at the same time. </li>
        <li>Our work is a practice of liberation. </li>
        <li>Our work is life as an art. </li>
        <li>Our work is ritualistic. </li>
        <li>Our work is the practice of equanimity. </li>
        <li>
          Our work touches the ultimate dimension and links it to the relative
          world.{" "}
        </li>
        <li>Our work are prayers. </li>
        <li>Our work is an embrace to the earth and mother nature.</li>
      </ul>
    </div>
      <p className="mt-8">
        <a href="/assets/docs/impermanence-magazine-art-of-second-renaissance.pdf" className="btnsq btn-black text-xl">
          Download
        </a>
      </p>
    </div>
  </div>
);

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
