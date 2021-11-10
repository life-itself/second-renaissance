import { GlobeAltIcon, LocationMarkerIcon, UserCircleIcon, BriefcaseIcon, HashtagIcon } from '@heroicons/react/solid'

export default function Organization({ org }) {
  // TODO: set the title ...
  // <Layout title={org.name}> 
  return (
    <div className="max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{org.name}</h1>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end text-gray-500">
          <div className="flex flex-col mt-6 gap-y-3">
            <div className="flex flex-row">
              <GlobeAltIcon className="h-5 w-5" />
              <ul className=" ml-2 text-sm">
                <a href={org.url} className="underline">{org.url}</a>
              </ul>
            </div>
            <div className="flex flex-row">
              <LocationMarkerIcon className="h-5 w-5" title="Locations" />
              <ul className=" ml-2 text-sm text-gray-500">
                {org.locations.map((value, index) => {
                    return <li key={index} className="inline-block mr-2">{value}</li>
                  })}
              </ul>
            </div>
            <div className="flex flex-row">
              <UserCircleIcon className="h-5 w-5" />
              <ul className="ml-2 text-sm text-gray-500">
                {org.people.map((value, index) => {
                    return <li key={index} className="inline-block mr-2">{value}</li>
                  })}
              </ul>
            </div>
            <div className="flex flex-row">
              <BriefcaseIcon className="h-5 w-5" />
              <ul className="ml-2 text-sm text-gray-500">
                {org.activity.map((value, index) => {
                    return <li key={index} className="inline-block mr-2">{value},</li>
                  })}
              </ul>
            </div>
            <div className="flex flex-row">
              <HashtagIcon className="h-5 w-5" />
              <ul className="ml-2 text-sm text-gray-500">
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

            <div className="mt-4 space-y-6 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: org.descriptionHtml }}>
            </div>
          </section>
        </div>
        {/* Product image */}
        <div className="mt-10 lg:mt-0 row-span-2">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img src={org.image.url} alt={org.name} className="w-full h-full object-center object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
