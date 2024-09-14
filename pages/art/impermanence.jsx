const Page = () => {
  return (
    <>
      <Hero></Hero>
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

const Hero = () => (
  <div className="overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-56">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl hidden">
              Magazine and Exhibition
            </h1>
            <p className="mt-6 text-2xl leading-8">
              For our first magazine and exhibition we chose the theme of Impermanence. Across religions there is often the practice of sitting with the impermanent nature of life, from the five remembrance to the memento mori, these contemplation allows us to grow our wisdom and insight of inter-connectedness.
            </p>
            <p className="mt-8">
              <a
                href="/assets/"
                className="btnsq btn-black text-3xl"
                >
                Download magazine
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start justify-end order-first">
          <img
            src="/assets/img/art/impermanence-cover.webp"
            alt=""
            className="max-w-none mx-auto h-screen"
          />
        </div>
      </div>
    </div>
  </div>
);