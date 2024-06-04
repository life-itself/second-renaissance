import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import clientPromise from "@/lib/mddb.mjs";

import Hero from "@/components/custom/PIPHero"
import TernaryPlot from "@/components/custom/TernaryPlot"
import CircularVis from "@/components/custom/CircularVis"
import ProfileSearch from "@/components/custom/ProfileSearch"
import MdxComponent from "@/components/MdxComponent";

import type { CustomAppProps } from "../_app";
import { hasRequiredProfileFields } from "@/lib/temp/hasRequiredProfileFields";


interface Props extends CustomAppProps {
    profiles: any; // TODO: type
    topics: any; // TODO: type
}

const HomePage: React.FC<Props> = ({ profiles, topics }) => {
    return (
        <>
            <Hero />
            <main className="prose dark:prose-invert mx-auto px-2 sm:px-6 lg:px-8">

            <section id="introduction" className="mt-12 sm:mt-24">
                    <MdxComponent>
                        {`
                        There is an emerging ecosystem of change agents who are recognising the need for change that is a) _paradigmatic_, i.e. a profound shift in our socio-cultural system, and b) _integrated_ in the sense of involving **“inner” change as well as “outer” change**.
                        
                        There is currently no one name for this ecosystem, but some terms associated with it are: Metamodern, Metacrisis, Integral, and Game B. 
                        
                        We began mapping this ecosystem in 2019. This page presents the continuation of that mapping work, carried out in 2021-2022. By mapping, we hope to support the ecosystem to become (more) visible, self-aware, interconnected, resourced and effective.
                        
                        We interviewed various individuals and conducted desk research to compile a database of over 200 organizations and initiatives active in, or close to, the ecosystem. We selected 95 of these for more detailed research and reflection.
                        
                        From this research, we:
                        
                        *   Created a searchable **directory of nearly 100 organizations** with classification by activity and topic;
                            
                        *   Produced **visual maps** – one mapping organizations by activity and one evaluating their approach to social change; 
                            
                        *   Identified **key features and characteristics** of the ecosystem – in particular, the “PIP” approach to social change. 
                            
                        Our work here is still early-stage and limited by both resources and our own knowledge. We welcome [feedback](https://lifeitself.us/contact) to improve it.
                        `}
                        </MdxComponent>
                    </section>

            <section id="visualizing-ecosystem" className="mt-12 sm:mt-24">
                    <h1 className="text-center">
                        Visual Map of Topics in the Ecosystem
                    </h1>
                    <MdxComponent>
                        This visualization maps organizations in the directory based on their primary topic. Click to zoom in or out. Hover over a circle to see its name.
                    </MdxComponent>
                    <div className="my-6 sm:my-8 lg:my-12">
                        <CircularVis profiles={profiles} topics={topics} />
                    </div>
                    <MdxComponent>
                    We  defined 9 topics, each of which is represented by a circle within the broader circle/topic of social change. 
                    The topics are: Arts & Culture, Community, Development & Growth, Ecology & Environment, Future of Work, Governance & Institutions, Politics & Economics, Spirituality & Religion, and Wellbeing & Health. 
                    Read more about the visualization and the topics in the [full report](https://drive.google.com/file/d/1y-DdWVe6ak-6yHVHFZkoEhLhTqty3QzY/view?usp=sharing).
                    </MdxComponent>
                </section>

                <section id="overview" className="mt-12 sm:mt-24">
                    <h1 className="text-center">
                        Overview of the Ecosystem
                    </h1>
                    <MdxComponent>
                        {`

We sense that a new ecosystem – or ecosystem of ecosystems – is emerging. A growing number of people, organizations, and initiatives are taking alternative approaches to social change which diverge from both mainstream and progressive action within society.

The ecosystem we explore is still emerging and loosely defined. There is no one name for this ecosystem, with different organizations favoring different terms to describe the space, including: Metamodern, Polycrisis, Metacrisis, Great Transition, Liminal Web, Sensemaking Web, Intellectual Deep Web, and Emergentsia, Teal, Integral, Regenerative, Systems Change, and Narrative Change. 

As mapped, it is quite broad – even disparate. At first glance, many of the organizations included in the “map” seem to be very different from each other: for example, Plum Village (a Zen Buddhist monastery) and Dark Matter Labs (a non-profit organization working for institutional and systems change on topics such as alternative governance, economics, and policy).

Nevertheless, there are commonalities. Actors within the ecosystem are linked by their recognition of, and efforts to respond to, metacrisis. **Most importantly, this ecosystem is characterized by a novel approach to social change. Specifically, an approach that is simultaneously** _**paradigmatic, integrative, and pragmatic**_**.**

There are also patterns we see in terms of high-level orientation to change: **post-individualism, (w)holism, and counterculturalism** or culture-making (in the form of new norms and narratives). Popular terms and themes include things like: **complexity, systems change, emergence, developmental models, spiritual practice, sensemaking, decentralized governance, new narratives, alternative social imaginaries, and regenerative culture**.

Nonetheless, the boundaries, relationships, and patterns of influence in the ecosystem remain indistinct. Our research here only touches the tip of the iceberg. Questions that remain open include: who exactly comprises the ecosystem; how activities and visions relate to one another; where the coherences and tensions lie; and how it might evolve.

## What makes the "PIP" ecosystem unique?

### A shared predicament: metacrisis

Actors within the ecosystem are linked by their recognition of – and efforts to respond to – a context of global, interconnected, and escalating crises which have deep structural, cultural, and spiritual roots. 

However, the main defining feature of the ecosystem is its approach to social change...

### “PIP”: A novel approach to social change

The defining feature of this ecosystem is its novel approach to social change: specifically, the combination of being paradigmatic, integrative, and pragmatic. We emphasize that it is the combination of all three that is important and distinctive.

#### Paradigmatic

There is the belief that the social change required is paradigmatic. That is to say, it seeks a transition of the entire social paradigm at both a structural and “ontological” (worldview and narratives) level. This contrasts with approaches that either simply seek reform e.g. making market liberalism better, or transformation that is deep but only in a given area e.g. transforming our structures of economic production and ownership but leaving base assumptions about who we are and how we relate to the natural world untouched.

#### Integrative

It identifies the need to incorporate methods and routes to change spanning a variety of fields and "locations" (e.g. personal, cultural, institutional etc). One central and basic example common to most actors is the belief that inner and outer transformation have to go hand in hand. In Integral terms it is "all-quadrant" and in particular prioritizes the neglected "inner" quadrants.

#### Pragmatic

Participants are actively engaging with wider society for the purposes of societal transformation. This sets it apart from groups who may be doing lots of inner work but without connecting this directly and explicitly to broader social change, for example certain parts of the spiritual, developmental, and psychedelic communities.
                    `}
                    </MdxComponent>
                </section>

                <section id="mapping-the-space" className="mt-12 sm:mt-24">
                    <h1 className="text-center">Visual Map of Approaches to Social Change</h1>
                    <MdxComponent>
                        This visualization maps organizations in the directory based on their approach to social change. Hover over the dots to see organization information. 
                    </MdxComponent>
                    <div className="my-6 sm:my-8 lg:my-12">
                        <TernaryPlot profiles={profiles} />
                    </div>
                    <MdxComponent>
                        {`
                    The three broad orientations we have mapped are inner, cultural, and systems change:

*    **Inner change** – transformation of consciousness, mental models, and perspective on reality. Transformation of ways of being in and with the world: how we relate to ourselves, to others, and to the wider world. For example, through: mindfulness, spiritual practice, trauma healing, shadow work, psychedelics, or psychotherapy. 
    
*   **Cultural change** – transformation of collective narratives, social norms, values, and patterns of behavior. Transformation of unhealthy sociocultural conditioning and power dynamics. For example, through: alternative education, collective rituals, communal living, inquiry, narrative change, relating/relational practices, or social justice work.
    
*   **Systems change** – transformation of large-scale social systems at the institutional, policy, and infrastructural level. For example, working on topics such as: alternative governance, alternative economics, alternative politics, and alternative technology.

Read more about the visualization in the [full report](https://drive.google.com/file/d/1y-DdWVe6ak-6yHVHFZkoEhLhTqty3QzY/view?usp=sharing).
                    `}
                    </MdxComponent>
                </section>

            </main>

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
    const profileFiles = await mddb.getFiles({ folder: "ecosystem/pip/profiles" });
    const profiles = profileFiles.reduce((acc, file) => {
        // TODO: 2024-04-02 can probably remove now ...
        // TODO temporary hack - some of the profiles (created by Matthew) have incorrect metadata
        if (!hasRequiredProfileFields(file.metadata)) {
            return acc;
        }
        if (file.metadata.curation_status.includes('N') || file.metadata.curation_status.includes('?')) {
            return acc;
        }
        acc.push({
            ...file.metadata,
            image: file.metadata.image?.url ?? file.metadata.image,
            urlPath: '/' + file.url_path,
        });
        return acc;
    }, []);

    const topicFiles = await mddb.getFiles({ folder: "topics" });
    const topics = topicFiles.map((file) => {
        return {
            ...file.metadata,
            urlPath: file.url_path,
        };
    });

    return {
        props: {
            meta: {
                urlPath: "/",
                showToc: false,
                showEditLink: false,
                showSidebar: false,
                showComments: false,
            },
            profiles,
            topics,
        },
    };
};

export default HomePage;
