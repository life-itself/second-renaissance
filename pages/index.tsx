import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import clientPromise from "@/lib/mddb.mjs";

import Hero from "@/components/custom/Hero"
import TernaryPlot from "@/components/custom/TernaryPlot"
/* import CircularVis from "components/custom/CircularVis" */
/* import ProfileSearch from "components/ecosystem/ProfileSearch.jsx" */
import type { CustomAppProps } from "./_app";


interface Props extends CustomAppProps {
    profiles: any; // TODO: type
    topics: any; // TODO: type
}

const HomePage: React.FC<Props> = ({ profiles, topics }) => {
    return (
        <main>
            <Hero />
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <h1 className="mt-16 mb-8 text-4xl text-center">Mapping the Space</h1>
                <TernaryPlot profiles={profiles} />
            </div>

            <div className="prose max-w-4xl mx-auto">

                <h1 className="mt-16 mb-8 text-4xl text-center">
                    Visualizing the Ecosystem
                </h1>
                This visualization maps organizations based on their primary topic. Click to zoom in or out. Hover over a circle to see its name. [Read more about the visualization and the topics here](/vis#visualizing-the-ecosystem-by-topic)
                {/* <CircularVis profiles={profiles} topics={topics} /> */}

            </div>

            <section id="profiles" className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:mb-8 text-center">
                            Profiles
                        </h1>
                        {/* <ProfileSearch profiles={profiles} /> */}
                    </div>
                </div>
            </section>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<Props>
> => {

    const mddb = await clientPromise;

    const profileFiles = await mddb.getFiles({ folder: "profiles" });
    const profiles = profileFiles.reduce((acc, file) => {
        const metadata = file.metadata;
        if (!metadata.curation_status) return acc;
        if (metadata.curation_status.includes('N') || metadata.curation_status.includes('?')) {
            return acc;
        }
        acc.push(metadata);
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
