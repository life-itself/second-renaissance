export default function OrgList({ orgs }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {orgs.map((org) => (
        <div key={org.id} className="group relative">
          <div className="w-full min-h-80 bg-beige aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={(org.logo.cached || org.logo.url) ?? (org.image.cached || org.image.url)}
              alt={org.name}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-2 flex justify-between">
            <div>
            <a className="extra-small exception font-medium tracking-wide text-accent uppercase">{org.category}</a>
              <h3 className="text-base font-medium hover:underline text-semiblack">
                <a href={'/profile/' + org.id}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {org.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-darkgray pb-1">{org.url}</p>
              <p className="text-sm text-gray-700">{org.description.slice(0, 100) + '…'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
