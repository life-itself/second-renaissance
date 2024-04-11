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
          A Second Renaissance Movement is forming.
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