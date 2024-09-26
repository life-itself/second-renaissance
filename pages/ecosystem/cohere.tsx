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

const Heading = () => (
    <div className="bg-teal-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl mb-10">Mapping the Paradigmatic Social Change Ecosystem in Europe</h2>
          <p className="mt-6 text-2xl font-serif leading-8 text-gray-600">
          More than 300 organisations, communities, and initiatives are taking action for paradigmatic social change in Europe and beyond.
          <br></br><br></br>
          Are you part of one of them? Where do you fit in? Find "the others" to connect and collaborate with.
          <br></br><br></br>
          Or are you curious to discover events, courses, articles and more in topics such as inner development, alternative economics, intentional communities, and more? 
          <br></br><br></br>Dive in to explore the organisation profiles and see where they take you... 
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6 my-auto">
            <button onClick={() => window.open('/ecosystem/cohere/map', '_blank')} className="bg-teal-600 hover:bg-teal-400 text-white font-bold tracking-wide py-2 px-4 rounded">
              Explore visual map
            </button>
            <button onClick={() => window.location.href = '#directory'} className="bg-teal-600 hover:bg-teal-400 text-white font-bold tracking-wide py-2 px-4 rounded">
              Explore directory
            </button>
          </div>
      </div>
  );

const Image = () => (
    <figure id="image" className="mt-12 sm:mt-24 prose max-w-5xl mx-auto">
      <a href="/ecosystem/cohere/map" target="_blank">
      <img
        className="bg-gray-50 object-cover"
        src="/assets/cohere-map-image.png"
        alt=""
      />
      </a>
      <caption className="text-m text-center mx-auto max-w-3xl block mt-5">Explore the interactive version of the visual map and see the organisations plotted on it<a className="underline" target="_blank" href="/ecosystem/cohere/map"> here &raquo;</a></caption>
    </figure>
  );

  const Intro = () => (
    <div id="intro" className="mt-12 sm:mt-24 prose max-w-5xl mx-auto">
            <p>This map contains:</p>
            <ul>
                <li>A directory (below) of 300 organisations engaged in paradigmatic social change, from over 20 European countries and some beyond – with data on organisations’ activities, sectors, size, and date founded, plus some additional notes on theory of change, learning resources (e.g. key articles, books, reading lists, videos etc.), and more. 
                </li>
                <li>A visual map (above) of key areas of the ecosystem, which displays all organisations from the directory</li>
            </ul>
            <p>Browse this map to:</p>
            <ul>
                <li>Discover organisations near to you, offering <b>events and courses</b> etc. you can participate in, in topics such as <b>permaculture, inner development, contemplative practices, systems change, relational practice</b>, and more;
                </li>
                <li>Discover projects working in similar or complementary fields of activity to yours, whose work you might read about and learn from – or whom you might get in touch with to <b>explore collaboration</b>;</li>
                <li>Share with friends who are looking for <b>inspiration and evidence that radically hopeful action is possible</b> (and happening!);</li>
            </ul>
            <p>And much more...</p>

            </div>
);

const Cohere = () => (
    <div id="cohere" className="mt-12 sm:mt-24 prose max-w-5xl mx-auto">
            <p>This mapping was co-funded by the European Union as part of the Cohere+ project, in collaboration with: The Hague Center, Institute for Integral Studies, Emerge, and Ekskaret.</p>
            <img
        className="bg-gray-50 mx-auto"
        src="/assets/cohere and co-funded EU logo xs.jpg"
        alt=""
      />
            </div>
);

const HomePage: React.FC<Props> = ({ profiles }) => {
    return (
        <>
            <Heading></Heading>
            <Image></Image>
            <Intro></Intro>
            <Cohere></Cohere>
            <div id="profiles" className="mt-12 sm:mt-24 prose max-w-5xl mx-auto">
                <h2 id="directory" className="text-center">
                    Directory
                </h2>
                <div className="text-center py-5">
                    <p>Explore the directory of organizations, communities, and initiatives who are taking action towards paradigmatic social change in Europe.</p>
                    <p>You can add or edit profiles in this directory. To do so, read our <a href="https://docs.google.com/document/d/1OMCbH3glclCSWo64pW5vrTpoWjSrQ7_bPaDSDwm34xM/edit#heading=h.993wtwfvc0or" target="_blank">guide for contributors</a>.</p>
                </div>

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
