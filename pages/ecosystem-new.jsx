const Hero = () => (
  <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-6xl py-12 sm:py-16 lg:py-20 text-center">
        <img
      src="/img/dandelion-hasan-almasi-unsplash.jpg"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover bg-slate-700 opacity-40"
        />
          <h2 className="text-4xl tracking-normal sm:text-4xl font-serif -mt-20 mb-20">
            A <span className="text-5xl">growing network</span> of individuals, organisations, communities, and initiatives
            are developing ideas, practices, and infrastructures for <span className="text-5xl">radical transformation</span>
          </h2>
          <h1 className="text-4xl font-medium tracking-wide sm:text-7xl py-7">
            A Second Renaissance <span className="text-8xl font-bold">ecosystem</span> is <span className="text-8xl font-bold">emerging</span>
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6 my-20">
            <a href="https://google.com"><button class="bg-amber-500 hover:bg-teal-600 text-white font-bold tracking-wide py-2 px-4 rounded">
              What does it look like?
            </button></a>
            <button class="bg-amber-500 hover:bg-teal-600 text-white font-bold tracking-wide py-2 px-4 rounded">
              Who is part of it?
            </button>
            <button class="bg-amber-500 hover:bg-teal-600 text-white font-bold tracking-wide py-2 px-4 rounded">
              Learn more
            </button>
            <a href="https://lifeitself.org/get-involved"><button class="bg-amber-500 hover:bg-teal-600 text-white font-bold tracking-wide py-2 px-4 rounded">
              Get involved
            </button></a>
          </div>
        </div>
      </div>
);

const New = () => (
  <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 -mb-40">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl mb-10">A new ecosystem for social change is gaining traction</h2>
        <p className="mt-6 text-2xl font-serif leading-8 text-gray-600">
        We are seeing a growing ecosystem of people and organisations who are recognising the need for a <span className="underline">major civilisational transition</span> from Modernity 
to a <span className="underline">new cultural paradigm</span>. They are choosing alternative ways of living and working to support that shift.
        <br></br><br></br>
        We’ve been mapping it since 2019, and know others who have been mapping it too. 
We’ve profiled over 200 organisations who are part of it, and outlined some of the ecosystem's key characteristics.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6 my-20">
            <a href="https://google.com"><button class="bg-teal-600 hover:bg-teal-400 text-white font-bold tracking-wide py-2 px-4 rounded">
              See mapping projects
            </button></a>
          </div>
    </div>
);

const Potential = () => (
  <div className="bg-teal-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl mb-10">The ecosystem has ripening potential to make a real difference</h2>
        <p className="mt-6 text-2xl font-serif leading-8 text-gray-600">
        Change often happens on the margins. We think this ecosystem holds powerful knowledge and perspectives, which diverge from the mainstream <span className="italic">and</span> the progressive, on
what is needed in response to current crises – as well as practical experience and learnings in <span className="underline">how to cultivate deep-rooted change</span>.
        <br></br><br></br>
        Communities and individuals in the ecosystem have been innovating, combining, and experimenting with new processes, practices, theories, technologies, and infrastructures, 
drawing from a wide range of bodies of knowledge – from ancient and traditional wisdom, 
to contemporary science and technology. 
        </p>
      </div>
    </div>
);

const Resources = () => {
  return (
    <ul role="list" className="mx-auto my-6 !pl-0 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/initiatives/conscious-coliving" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/images/don't-join-a-cult-5-cult-documentaries.jpg" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">Conscious Coliving</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">More than ever there is a deep need for community and connection. Our Conscious Coliving project aims to bring knowledge about living consciously in community to everyone</p>
      </div>
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/initiatives/conscious-coliving" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/images/don't-join-a-cult-5-cult-documentaries.jpg" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">Conscious Coliving</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">More than ever there is a deep need for community and connection. Our Conscious Coliving project aims to bring knowledge about living consciously in community to everyone</p>
      </div>
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/initiatives/conscious-coliving" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/images/don't-join-a-cult-5-cult-documentaries.jpg" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">Conscious Coliving</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">More than ever there is a deep need for community and connection. Our Conscious Coliving project aims to bring knowledge about living consciously in community to everyone</p>
      </div>
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/initiatives/conscious-coliving" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/images/don't-join-a-cult-5-cult-documentaries.jpg" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">Conscious Coliving</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">More than ever there is a deep need for community and connection. Our Conscious Coliving project aims to bring knowledge about living consciously in community to everyone</p>
      </div>
      {/* Repeat similar structures for other items */}
    </ul>
  );
}

const Page = () => {
  return (
    <>
      <Hero></Hero>
      <New></New>
      <Potential></Potential>
      <Resources></Resources>
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