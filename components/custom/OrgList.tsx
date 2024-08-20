// import Link from 'next/link';
import { useRouter } from 'next/router';

export default function OrgList({ orgs }) {
    const { asPath } = useRouter();
    const isCohere = asPath.toLowerCase().includes("cohere");
    let imgSrc="";

    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
            {orgs.map((org) => {
                if ( isCohere ){
                    imgSrc = org.logo || org.image; 
                } else {
                    imgSrc= (org.logo?.cached_new || org.logo?.url) ?? (org.image?.cached_new || org.image.url || org.image);
                }
                imgSrc = imgSrc?.replaceAll("[[../../../", "/").replaceAll("]]", "");                
                if (org) return (
                    <div key={org.id} className="group relative">
                        <div className="w-full aspect-square bg-beige rounded-md overflow-hidden group-hover:opacity-75">
                            <img
                                src={imgSrc}
                                alt={org.title}
                                className="w-full h-full m-0 object-contain"
                            />
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div>
                                <a className="extra-small exception font-medium tracking-wide text-accent uppercase">{org.category}</a>
                                <h3 className="text-base font-medium hover:underline text-semiblack">
                                    {/* <Link href={org.urlPath}> */}
                                    <a href={org.urlPath} className="!visible">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {org.title}
                                    </a>
                                    {/* </Link> */}
                                </h3>
                                {/* <p className="mt-1 text-sm text-darkgray pb-1">{org.url}</p> */}
                                {/* <p className="text-sm text-gray-700">{org.body.raw.slice(0, 100) + '…'}</p> */}
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    )
}
