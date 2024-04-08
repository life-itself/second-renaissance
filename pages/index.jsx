const Hero = () => (
  <>
  <div className="relative isolate overflow-hidden pt-14">
    <img
      src="/img/homepage/sun-spoor-1874.webp"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover bg-slate-700 opacity-40"
    />
    <div className="mx-auto max-w-4xl py-12 sm:py-16 lg:py-20 text-center">
      <h1 className="text-2xl tracking-tight sm:text-5xl font-serif">
        We live in a moment of<br />civilizational crisis and awakening
      </h1>
      <h1 className="text-4xl font-bold tracking-tight sm:text-7xl mt-8">
        The Second Renaissance
      </h1>
      <div className="mt-4 text-3xl font-serif">
        <p>
          The old world is dying and a new world is yet to be born. The civilization crisis we are living is also precursor of an awakening.
          <br /><br />
          From the old paradigm of modernity to the birth of a new dawn for humanity.
          <br /><br />
          Come discover and dream with others.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="#next" className="text-sm font-semibold leading-6">
          Continue
          <br />
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  </div>
  </>
);

const HeroFollowOn = () => (
  <div id="next" className="overflow-hidden bg-white pt-12 sm:pt-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              What comes next?
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              So what does come next? What will be born during this second renaissance? A future that is radically weller and wiser.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Darkness before dawn
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              However, it is also a time of crisis. There is darkness before dawn. The last renaissance was preceded by the black death, famine and war following the breakdown of the medieval world.
              <br /><br />
              <a href="#signs" className="font-semibold leading-6">
                Continue <span aria-hidden="true">↓</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start justify-end order-first">
          <img
            src="/assets/img/homepage/solar-eclipse-butler-1923.webp"
            alt=""
            className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 bg-yellow-200 w-full"
          />
        </div>
      </div>
    </div>
  </div>
);

const Signs = () => (
  <div id="signs" className="overflow-hidden bg-white pt-12 sm:pt-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              There are visible signs of illness
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              We are witnessing  a constellation of escalating crises.
              <br /><br />
              There is a real risk of civilizational collapse and large-scale destruction of life due to intertwined ecological, political, social, and meaning crises.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-end order-first">
          <img
            src="/assets/img/homepage/body.jpg"
            alt=""
            className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 h-cover mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
);

const Root = () => (
  <div id="root" className="overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-32">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Source lies at the roots of our civilization
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              In our ways of thinking and being.
              <br /><br />
              We are experiencing this crisis because we are at the end of an cultural paradigm that we call modernity.
              <br /><br />
              "We cannot solve our problems with the same thinking we used to create them."
              <br /><br />
              Modernity is the water we are swimming in... The root cause of our civilizational breakdown
            </p>
          </div>
        </div>
        <img
          src="/assets/img/homepage/roots-5.jpg"
          alt=""
          className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 opacity-40 contrast-200"
        />
      </div>
    </div>
  </div>
);

const Cure = () => (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              A cure is possible: the Second Renaissance
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              We cannot address current crises through the logic and value systems that created and continue to drive them. 
              <br /><br />
              Any solution must be radical in the true sense of the word: they must go to the the roots.
              <br /><br />
              We need profound shifts in our ways of being, thinking, feeling, and acting: the emergence of a major new cultural paradigm that transcends modernity.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-end order-first">
          <img
            src="/assets/img/homepage/yellow-plant.jpg"
            alt=""
            className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto h-screen"
          />
        </div>
      </div>
    </div>
  </div>
);

const features = [
  {
    name: 'Inner growth',
    description: 'inner growth prioritized over material growth with a recognition of our potential to consciously evolve personally and collectively in multiple dimensions: to wake up, grow up, clean up, and show up.'
  },
  {
    name: 'Wisdom',
    description: 'A renewed cultivation of wisdom based in a recognition of the limits (and value) of reason, of the importance of the whole, and the value of a long term that includes all of the living.',
  },
  {
    name: 'Interbeing',
    description: 'Seeing clearly our profoundly interdependent relationship to each other and the planet in way that is regenerative, ecological and connecting.',
  },
  {
    name: 'Spirituality',
    description: 'Going beyond secularity to reintegrate spirituality and religion into collective life.',
  },
  {
    name: 'Beyond capitalism',
    description: 'A new economical system beyond capitalism and socialism, grounded in new ways to assess value.'
  },
]

const Being = () => (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-0">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              What would it look like?
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Whilst much is yet to emerge, we believe this new cultural paradigm will include views and values like:
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-lg leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    &raquo;{' '}
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <img
          src="/img/homepage/mary-delany-parnassium-palustris.jpg"
          alt=""
          className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 h-screen"
        />
      </div>
    </div>
  </div>
);

const Emerging = () => (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-0">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              It is already happening
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              A transformation of cultural paradigm is possible and is already starting to happen.
              <br /><br />
              We are seeing the emergence of an ecosystem of individuals and organisations, tied together by a shared recognition of this historical moment, and a calling to respond to it.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="/ecosystem" className="text-lg font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <img
          src="/assets/img/homepage/birds-gold.webp"
          alt="https://www.etsy.com/listing/522550204/swallows-and-house-martin-limited"
          className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 h-screen"
        />
      </div>
    </div>
  </div>
);

const Posts = () => (
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
)

const Course = () => (
  <div className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Join our free course<br />Introducing the Second Renaissance
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-8 text-gray-300">
          The course introduces the idea of a second renaissance: this moment of civilizational crisis and transition as we move from modernity into what comes next. It covers the idea of views and values as "foundations" of our societies, cultural paradigms and their role history, the birth and decay of modernity, and what comes next!
        </p>
        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Sign me up
          </button>
        </form>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
)

const Page = () => {
  return (
    <>
      <Hero />
      <HeroFollowOn />
      <Signs />
      <Root />
      <Cure />
      <Being />
      <Emerging />
      <div id="diagnosis" className="bg-slate-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Conclusion</h2>
          <p className="mt-6 text-2xl leading-8 text-gray-600">
            The Second Renaissance is both period and a movement.
            <br /><br />
            A "time between worlds"<br />and a growing movement of those who recognize it.
            <br /><br />
            The two most important common beliefs are: an awareness that we are witnessing the end of a cultural paradigm which underpins much of what we see in our socieities. Second, a belief in the "primacy of being": that the transition to what comes next must be based in the inner dimension and the conscious evolution of ourselves and our cultures.
            <br /><br />
            Most of all, the future it envisions is one that prioritizes inner rather than outer growth.
          </p>
        </div>
      </div>
      <Course />
      {/* <Posts /> */}
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
