const Hero = () => (
  <div className="relative isolate overflow-hidden pt-14">
    <img
      src="/img/homepage/hero-bg.jpg"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40">
      <div className="text-center">
        <h1 className="text-2xl tracking-tight sm:text-5xl font-serif">
          We live in a moment of<br />civilizational crisis and awakening
        </h1>
        <h1 className="text-4xl font-bold tracking-tight sm:text-7xl mt-8">
          The Second Renaissance
        </h1>
        <p className="mt-4 text-3xl font-serif">
          It is a time between worlds, as we witness the breakdown<br />of the old paradigm and the birth of the new<br />
          – moving from modernity into what comes next. 
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Subscribe for updates
          </a>
          <a href="#next" className="text-sm font-semibold leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Signs = () => (
  <div id="next" className="bg-[#B7AAC7] min-h-[60vh] flex bg-center bg-cover"
    style={{ backgroundImage: "url(/img/homepage/illness-bg.jpg)" }}>
    <div className="w-fit m-auto bg-white bg-opacity-80 px-8 py-6">
      <div className="font-light max-w-xl text-center flex flex-col">
        <div>There are</div>
        <div className="text-homepagelarge max-md:text-homepagemedium font-semibold my-2">
          visible signs of illness
        </div>
        <div>as we witness major breakdowns</div>
        <div>ecological crisis</div>
        <div>meaning crisis</div>
        <div>political crisis</div>
        <div>economic crisis</div>
      </div>
    </div>
  </div>
);

const Root = () => (
  <div className="bg-[white] h-screen flex">
    <div className="w-fit m-auto bg-white p-4">
      <div className="font-light max-w-xl text-center flex flex-col">
        <div>The source of the illness</div>
        <div className="text-homepagelarge max-md:text-homepagemedium font-semibold my-2">lies at the root</div>
        <div>of our civilization.</div>
        <div>In our ways of thinking and being.</div>
        <div>Modernity is dying...</div>
      </div>
    </div>
  </div>
);

const Cure = () => (
  <div className="bg-[#56555C] h-screen flex">
    <div className="w-fit m-auto bg-white p-4">
      <div className="font-light max-w-xl text-center flex flex-col">
        <div className="text-homepagelarge max-md:text-homepagemedium font-semibold my-2">
          A cure: the Second Renaissance
        </div>
        <div>birth of a new cultural paradigm</div>
      </div>
    </div>
  </div>
);

const Being = () => (
  <div className="bg-[#CFDDE5] h-screen flex">
    <div className="w-fit m-auto bg-white p-4">
      <div className="font-light max-w-xl text-center flex flex-col">
        <div>The paradigm would have these kinds of features...</div>
        <div className="font-semibold my-2 text-homepagelarge max-md:text-homepagemedium">Primacy of Being</div>
        <div>Interbeing</div>
        <div>Wisdom</div>
        <div>Inner growth</div>
        <div>Integration</div>
      </div>
    </div>
  </div>
);

const Ecosystem = () => (
  <div className="bg-[#F1D791] h-screen flex bg-cover bg-center px-4"
  style={{ backgroundImage: "url(/img/homepage/ecosystem-bg.jpg)" }}>
    <div className="w-fit m-auto bg-[#F3DEA5] border border-[#3a3a3a44] px-12 py-16">
      <div className="font-light max-w-xl  flex flex-col">
        <div>We are seeing the emergence of</div>
        <div className="text-homepagelarge max-md:text-homepagemedium font-medium my-2">
          an ecosystem of individuals and organisations
        </div>
        <div>
          Tied together by a shared recognition of this historical moment, and a
          calling to respond to it.
        </div>
        <button className="bg-slate-900 text-white w-fit px-4 py-2 m-auto font-light mt-8">
          Subscribe For Updates
        </button>
      </div>
    </div>
  </div>
);
const Page = () => {
  return (
    <>
      <Hero />
      <Signs />
      <Root />
      <Cure />
      <Being />
      <Ecosystem />
    </>
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
