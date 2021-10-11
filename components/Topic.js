export default function Topic({ topic }) {
  // combination of a tailwinui hero https://tailwindui.com/components/marketing/sections/heroes
  // specifically https://tailwindui.com/components/marketing/sections/heroes#component-e5c15b9d1a503738005e35302043c802
  //
  // And standard profile list
  return (
    <main>
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1530368333607-c100785945b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTMwMzUzMQ&ixlib=rb-1.2.1&q=80&w=1080"
                alt="{topic.name}"
              />
              <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl text-gray-100 font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {topic.name}
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-2xl text-gray-200 sm:max-w-3xl">
                {topic.description}
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                  <a
                    href="#profiles"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-indigo-50 sm:px-8"
                  >
                    Browse Profiles in {topic.name}
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}
