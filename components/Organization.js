export default function Organization({ org }) {
  // TODO: set the title ...
  // <Layout title={org.name}>
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{org.name}</h1>
            <a href={org.url} className="text-accent underline">{org.url}</a>
          </div>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-6" fill="none" viewBox="0 0 24 24" stroke="darkgray">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <ul className="mt-6 ml-2 text-sm text-gray-500">
              {org.locations.map((value, index) => {
                  return <li key={index} className="inline-block mr-2">{value}</li>
                })}
            </ul>
          </div>
          <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-2" fill="none" viewBox="0 0 24 24" stroke="darkgray">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <ul className="mt-2 ml-2 text-sm text-gray-500">
              {org.activity.map((value, index) => {
                  return <li key={index} className="inline-block mr-2">{value},</li>
                })}
            </ul>
          </div>
          <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-2" fill="none" viewBox="0 0 24 24" stroke="darkgray">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            <ul className="mt-2 ml-2 text-sm text-gray-500">
              {org.topic.map((value, index) => {
                  return <li key={index} className="inline-block mr-2">{value},</li>
                })}
            </ul>
          </div>
        </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Organization information
            </h2>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{org.description}</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img src={org.image.url} alt={org.name} className="w-full h-full object-center object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
