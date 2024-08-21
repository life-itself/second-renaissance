import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import clientPromise from "@/lib/mddb.mjs";

import ProfileSearch from "@/components/custom/ProfileSearch"
import MdxComponent from "@/components/MdxComponent";

import type { CustomAppProps } from "../_app";
import { hasRequiredProfileFields } from "@/lib/temp/hasRequiredProfileFields";


interface Props extends CustomAppProps {
    profiles: any; // TODO: type
}

const HomePage: React.FC<Props> = ({ profiles }) => {
    return (
        <>
    
            <div id="profiles" className="mt-12 sm:mt-24 prose max-w-5xl mx-auto">
                <h1 className="text-center">
                    Directory
                </h1>
                <div className="text-center py-5">Explore the directory of organizations, communities, and initiatives who are active in or close to the ecosystem.</div>
                <ProfileSearch profiles={profiles} />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<Props>
> => {

    const mddb = await clientPromise;

    // TODO: this should really be a library function ...
    const profileFiles = await mddb.getFiles({ folder: "ecosystem/cohere/profiles" });
    const profiles = profileFiles.reduce((acc, file) => {
        acc.push({
            ...file.metadata,
            image: file.metadata.image?.url ?? file.metadata.image,
            topic: file.metadata.sectors,
            activity: file.metadata.activities,
            id: file.metadata.title.toLowerCase(),
            urlPath: '/' + file.url_path,
        });
        return acc;
    }, []);

    return {
        props: {
            meta: {
                urlPath: "/",
                showToc: false,
                showEditLink: false,
                showSidebar: false,
                showComments: false,
            },
            profiles
        },
    };
};

export default HomePage;
