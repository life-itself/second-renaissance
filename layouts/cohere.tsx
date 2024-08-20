// @ts-nocheck
import {
    GlobeAltIcon,
    LocationMarkerIcon,
    UserCircleIcon,
    BriefcaseIcon,
    HashtagIcon,
    CalendarIcon,
    BuildingOfficeIcon
} from '@heroicons/react/solid';

export default function CohereProfile({ children, ...frontMatter }) {
    const { title, url, locations, start, sectors, activities, size } = frontMatter;
    // these can look like [[../../../assets/42-acres-homepage.png]] (obsidian like)
    let image = frontMatter.image;
    image = image.replaceAll("[[../../../", "/").replaceAll("]]", "");
    const topic = sectors; // changed name in cohere vs pip

    return (
        <div className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {title}
                </h1>
            </div>
            <div className="lg:grid lg:grid-cols-1 lg:gap-x-8">
                {/* details */}
                <div className="lg:self-end text-gray-500">
                    <div className="flex flex-col mt-6 gap-y-3 not-prose">
                        {url && (
                            <div className="flex flex-row">
                                <GlobeAltIcon className="h-5 w-5" />
                                <ul className=" ml-2 text-sm">
                                    <a href={url} className="underline">
                                        {url}
                                    </a>
                                </ul>
                            </div>
                        )}
                        {locations?.length > 0 && (
                            <div className="flex flex-row">
                                <LocationMarkerIcon className="h-5 w-5" title="Locations" />
                                <ul className=" ml-2 text-sm text-gray-500">
                                    {locations.map((value, index) => {
                                        return (
                                            <li key={index} className="inline-block mr-2">
                                                {value}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                        {activities?.length > 0 && (
                            <div className="flex flex-row">
                                <BriefcaseIcon className="h-5 w-5" />
                                <ul className="ml-2 text-sm text-gray-500 capitalize">
                                    {activities.map((value, index) => {
                                        return (
                                            <li key={index} className="inline-block mr-2">
                                                {value + (index === activities.length - 1 ? '' : ',')}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                        {topic?.length > 0 && (
                            <div className="flex flex-row">
                                <HashtagIcon className="h-5 w-5" />
                                <ul className="ml-2 text-sm text-gray-500 capitalize">
                                    {topic.map((value, index) => {
                                        return (
                                            <li key={index} className="inline-block mr-2">
                                                {value + (index === topic.length - 1 ? '' : ',')}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                          {start && (
                            <div className="flex flex-row">
                                <CalendarIcon className="h-5 w-5" />
                                <ul className=" ml-2 text-sm">
                                    <p>
                                        {start}
                                    </p>
                                </ul>
                            </div>
                        )}
        
                    </div>
                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Organization information
                        </h2>
                        <div className="mt-6 space-y-6 text-base text-gray-500">{children}</div>
                    </section>
                </div>
                {/* image */}

                <div className="mt-10 lg:mt-0 row-span-1">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
