
const Page = () => {
  return (
    <>
      <Hero />
      <Signs />
      {/* <Root /> */}
      <Water />
      <Modernity />
      <Root2 />
      <Cure />
      <Darkness />
      <Regeneration />
      <Being />
      <Emerging />
      <CTA />
      {/* <Course /> */}
      {/* <Posts /> */}
    </>
  );
};

const Hero = () => (
  <>
  <div className="relative isolate overflow-hidden pt-14 sm:pt-24 pb-14 sm:pb-24">
    <img
      src="/img/homepage/sun-spoor-1874.webp"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover bg-slate-700 opacity-40"
    />
    <div className="mx-auto max-w-4xl py-8 sm:py-16 lg:py-12 text-center">
      <h2 className="text-2xl tracking-tight sm:text-5xl font-serif">
        We live in a moment of<br />civilizational crisis and awakening
      </h2>
      <h1 className="text-4xl font-bold tracking-tight sm:text-7xl mt-8">
        A Second Renaissance
      </h1>
      <div className="mt-4 sm:mt-8 text-xl tracking-tight sm:text-4xl font-serif">
        <p>
        From the old paradigm of modernity to a new paradigm of<br />interconnectedness, wisdom and inner growth, beyond capitalism
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="#" className="text-sm font-semibold leading-6">
          Continue
          <br />
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  </div>
  </>
);

const Darkness = () => (
  <div id="next" className="overflow-hidden bg-white pt-12 sm:pt-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Darkness before dawn
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              However, this is also a time of crisis. There may be darkness before dawn.
              <br /><br />
              Global crises indicate that modern civilization is in decline. Some level of societal collapse may even be likely.
            </p>
            <h3 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Crisis can inspire transformation
            </h3>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Breakdown can be a precursor for deep cultural transformation. Modernity was itself born out of civilizational collapse in Europe at the end of the mediaeval period, leading to the first Renaissance - a period of great cultural rebirth.
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
              Our world shows signs of serious illness
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              We are witnessing an escalating series of interconnected crises &ndash; ecological, political, and social.
              <br /><br />
              Our illness is serious; it might even be terminal. The systems of global civilization risk collapse, resulting in large-scale destruction of life.
            </p>
            <h3 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Accurate diagnosis is vital
            </h3>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Treating the superficial symptoms won't be enough. We must address the underlying cause.
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
             Our crises roots lie in modernity's key values
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Modernity is based on key views and values like individualism, progress, rationality, freedom and equality.
              <br /><br />
              These underpinned extraordinary material progress and advances in individual liberty.
              <br /><br />
              However, its core ideas now cast long shadows: endless growth, materialism, techno-solutionism and an addiction to certainty and control. These in turn are driving global exploitation and the destruction of nature, nihilism and loneliness and an ever-widening wisdom gap culminating in the crises we face today.
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

const Water = () => (
  <div id="water" className="overflow-hidden bg-white pt-12 sm:pt-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-8">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Foundational to civilization are shared views and values.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Like water to a fish, the views and values we live by are often invisible to us. Yet they shape our way of thinking and being, what we believe possible, what we prioritize and dismiss, what we consider "normal".
            </p>
            <h3 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              This breakdown originates in our cultural foundations
            </h3>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              The symptoms that we are witnessing have roots in views and values shared at a cultural level: the paradigm of <span className="font-bold">modernity</span>.
            </p>
          </div>
        </div>
        <img
          src="/img/homepage/fish-in-water.jpg"
          alt=""
          className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 h-screen"
        />
      </div>
    </div>
  </div>
);

const Modernity = () => (
  <div id="root" className="overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-32">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Modern views and values are at the root of our crises
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Modern views and values like individualism, progress, rationality, freedom and equality brought extraordinary material progress and advances in individual liberty.
              <br /><br />
              However, these ideas now cast long shadows. Endless growth, materialism, techno-solutionism and addiction to certainty and control are driving global exploitation and destruction of nature, nihilism and loneliness, and an ever-widening wisdom gap.
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

const Root2 = () => (
  <div id="root2" className="overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-6 lg:mt-12">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-12">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Any solution must likewise go to the roots
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              <strong>We cannot address current crises through the logic and value systems that created and continue to drive them.</strong>
              <br /><br />
              Any solution must be radical in the true sense of the word: they must go to the roots.
              <br /><br /> 
              We need profound shifts in our ways of being, thinking, feeling, and acting: the emergence of a major new cultural paradigm that transcends modernity.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-end order-first">
          <img
            src="/assets/img/homepage/flower-with-roots-johan-teyler.jpg"
            alt=""
            className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto h-screen"
          />
        </div>
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
              Cultural paradigms can and do evolve
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Views and values can change. The deep stories that shape civilization have evolved throughout history. New paradigms can emerge  transcending  old  ideas and offering responses to the problems and limitations of the old world.
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

const Regeneration = () => (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-0">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              A new, regenerative paradigm is needed
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Modern materialism has reduced complex life to a sum of parts and deprioritised the human inner world, leading to breakdown. A liveable future will demand a new paradigm rooted in understanding of the whole.
            </p>
            <h3 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Something is emerging
            </h3>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Much is yet to emerge. But what kind of views and values might underpin a wiser, weller, world?
            </p>
          </div>
        </div>
        <img
          src="/img/homepage/mary-delany-parnassium-palustris.jpg"
          alt=""
          className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 h-screen"git push
        />
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
    description: 'A new economic system beyond capitalism and socialism, grounded in new ways to assess value.'
  },
]

const Being = () => (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-0">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              New ways of being, thinking and acting 
            </h1>
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
          src="/img/homepage/dore-sun.jpg"
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
              It's already happening
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              A paradigm shift is possible - and is already starting to happen.
              <br /><br />
              An ecosystem is emerging; of individuals and organizations, bonded by a shared recognition of this historical moment, and a calling to respond.
            </p>
          </div>
        </div>
        <img
          src="/assets/img/homepage/birds-gold.webp"
          alt="https://www.etsy.com/listing/522550204/swallows-and-house-martin-limited"
          className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 h-screen"git push
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

const secondaryFeatures = [
  {
    name: 'Explore the ecosystem',
    description:
      'Discover the players and communities seeding the second renaissance.',
    href: '/ecosystem',
  },
  {
    name: 'Join the chat',
    description:
      'Join the chat to engage with the community, exchange ideas and get support.',
    href: 'https://discord.gg/nNRt6V9jA4',
  },
  {
    name: 'Download the Whitepaper',
    description:
      'Download our full whitepaper to learn more about key concepts and the theory change.',
    href: '/paper',
  },
]

const CTA = () => (
  <div className="bg-white py-8 sm:py-12">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-200 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-600">Next steps</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sign up to the newsletter<br />to learn more and stay engaged
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            
          </p>
          <iframe src="https://secondrenaissance.substack.com/embed" width="480" height="320" frameborder="0" scrolling="no" style={{border:"1px solid #EEE", background:'white', margin: 'auto'}}></iframe>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {secondaryFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>
)

const CTABak = () => (
  <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-12 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">Learn more</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Sign up to the newsletter<br />to learn more and stay engaged
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
        pulvinar et feugiat blandit at. In mi viverra elit nunc.
      </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {secondaryFeatures.map((feature) => (
          <div key={feature.name} className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              {feature.name}
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">{feature.description}</p>
              <p className="mt-6">
                <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        ))}
      </dl>
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
