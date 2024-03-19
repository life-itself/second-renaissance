const Hero = () => (
  <div className="relative isolate overflow-hidden pt-14">
    <img
      src="/img/homepage/hero-bg.jpg"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div className="mx-auto max-w-4xl py-12 sm:py-32 lg:py-20">
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
        <p className="mt-4 text-3xl font-serif">
          Learn more about the Second Renaissance and the practical ways to contribute to it through our courses, articles, blogs, books and interviews.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Subscribe for updates
          </a>
          <a href="#next" className="text-sm font-semibold leading-6">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const features = [
  {
    name: 'Ecological crisis',
    description: 'Extreme weather and wildfires 🔥. Shortages of water and other resources 🚰. 6th mass extinctions & biodiversity loss 🌳.',
    icon: ''
  },
  {
    name: 'Meaning crisis',
    description: 'Mental health epidemic with rising depression and suicide. Pervasive nihilism where people see little purpose or meaning in their lives. Reflected in rising addiction, decline of religion and rise of fundamentalism.',
    icon: ''
  },
  {
    name: 'Political crisis',
    description: 'Declining trust in institutions and leaders. Growing polarization and culture wars with authoritarianism and populism on the rise.',
    icon: ''
  },
  {
    name: 'Economic crisis',
    description: 'Rising inequality whilst growth is stagnating. Even in the richest countries, healthcare, education, housing systems are creaking.',
    icon: ''
  },
]

const Signs = () => (
  <>
  <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Visible signs of illness</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our societies are seriously sick</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are witnessing major breakdowns in our societies. A constellation of escalating and interwoven crises ranging from ecosphere degradation to political polarization.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-0">
                  <dt className="inline font-bold text-gray-900">
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex items-start justify-end order-first">
          <img
            src="/assets/img/homepage/body.jpg"
            alt=""
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  </div>
  </>
);

const features2 = [
  {
    name: 'Modernity is ending',
    description:
      'We are experiencing this crisis because we are experiencing the end of an ideological period / cultural paradigm that we call modernity'
  },
  {
    name: 'Water we swim in',
    description: 'Modernity is the water we are still swimming in ... though it is starting to decompose.'
  },
  {
    name: 'Key ideals are failing',
    description: 'The key ideals of modernity are no longer fit for purpose. They are leading to the crises we are experiencing. Reason has become a desolation of spirit, progress has become growth at all costs, freedom has become a narrow individualism, and democracy has become a system of power and control.'
  },
]

const Root = () => (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Source of the illness</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lies at the root of our civilization</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              In our ways of thinking and being. In our views and values.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features2.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <img
          src="/assets/img/homepage/roots-5.jpg"
          alt=""
          className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width={2432}
          height={1442}
        />
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
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">What we Believe</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ...
          </p>
        </div>
      </div>
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
