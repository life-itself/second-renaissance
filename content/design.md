---
title: Design
---

## Quick start

- Scan this quickly: https://ecosystem.lifeitself.org
- Read a profile or two e.g. ...
- Read this blog post: https://lifeitself.us/2021/12/09/mapping-for-emergence/  - covers both "why map" and "what are we mapping"
- Then dive into the below

## Background

This is optional background on the purpose and history of the project.

It's fine to skip this and go straight to the more design oriented sections below.

### Purpose of the project

From  [[why|Why]]

> Short answer: mapping is a first step in building an emerging field/movement and we want to build a field/movement for inner-led paradigmatic change -- for a second renaissance and awakening societies!
>
> More near-term: Establishing a field brings credibility. It means having a name, having an area with well defined participants etc. Right now, we don't even have a common agreed name or key principles for what defines this emerging movement. That makes it hard to "find the others", to get resources, to be seen from outside the area etc.

### Timeline

- 2019-2020: start looking at ecosystem mapping systematically
- May 2020: start formal research
- **2020 September**: 🔥 publish first report https://lifeitself.org/blog/2020/09/02/weve-published-our-ecosystem-snapshot-report
- **Autumn 2020 to Spring 2021**: conduct first interview series. TODO dig these out!
- **Sep 2021**: 🔥 publish major update with over one hundred organizations, a dedicated website in time for Emerge gathering
  - Oct-Nov 2021: Add visualizations
- **Dec 2021**: 🔥 Publish "[Mapping for Emergence](https://lifeitself.org/blog/2021/12/09/mapping-for-emergence)" piece outlining the purpose and idea
- **2022 H1**: write pages about key ideas and movements in the ecosystem TODO: link
- 2022 Q1: collaborate on an Erasmus proposal that becomes Cohere+
- **2023 Jan**: 🚀 Erasmus funded Cohere+ launches - https://lifeitself.org/blog/2023/08/30/cohere-erasmus-mapping-announce

## Job Stories

### High Level Job Stories

In short: Better understanding of the ecosystem so that it becomes (more) self-aware and hence more known, interconnected, resourced and effective etc
  
- For people to discover this ecosystem both inside, proximate and outside
- For members of the ecosystem to find each other etc: Who is there? Who can we partner with? Who has expertise in this area? etc
  - Overview: I want an overview of the whole space so that i can get a sense of it and how things relate
  - Specific actors: Who is in the ecosystem
  - Situate myself: Where do I sit (and what are the gaps where I can contribute
- Meta-goal: ecosystem is visible to itself and others (and starts to have coherent identity)
  - What brings together this disparate set of actors (why are we talking about complex systems and buddhists in the same breath)
  - "Naming": metamodernists? Teal? Integral? Engaged Buddhists? Contemplatives? What are the names for the sub-tribes … ?  

Job stories: As Jamie B I want somewhere I can send people to find out about this space (what are its defining ideas and characteristics) and how it connects with other spaces …

As a recent discoverer of some part of this area I want to be able to find out more about the orgs/people I’ve encountered, explore similar content and understand the wider picture they fit into...

[Original full job stories google doc from 2021](https://docs.google.com/document/d/1vWcBp9l40-KRDxRIhHSuFK0vP4B_zMzzZ1bcJL_eRJ0/edit)

### Key questions

Key questions

- Who are the inspirations (people, orgs, movements) for people in this field?
- What field would people describe themselves as acting in / belonging to?
- How do people call "this" field? Do they think there is a "field"?
- Who are the main actors in this field?
- What stage are we at in the evolution of this field / movement?
- Is this a critical moment and if so why?
- How do actors' objectives overlap and diverge? 
- Where do they sit relative to one another, and across which dimensions?

What’s the number one thing i want to know: What is this ecosystem/space

- [What is it called] - that's hard actually!   
- What are its features i.e. key ideas, intellectual / spiritual influences
- Who is in it? Who are the key orgs, people etc
  - Who’s doing work that’s interesting/relevant to me
- How do the component people/orgs/ideas fit together
- How do i find out more
- How does it relate to existing ecosystems / spaces?
  - e.g. permaculture, regen agriculture, zen, deep ecology and ecospirituality, socialism or progressive politics, web3 and decentralization, transhumanism and tech utopians, integral, intentional communities etc

What are secondary things i want to know
    
- What is the overall goal of the project (i.e. this ecosystem mapping effort)
- Who’s behind it
- How can i get involved etc

## Architecture

### Technical

- Markdown-based site TODO: link to a page that explains that!
- Self-published with https://flowershow.app
  - Flowershow is a NextJS based framework publishing markdown-based websites
  - Static build
  - Use cloudflare for deployment
- All markdown content for site is in `content` folder
- Can have bespoke js and react components and do everything you can do in NextJS as Flowershow is built on NextJS

### Domain model

- Organization - see [[templates/profile|profile]] for current metadata model
- Person
- ? Activity/Initiative
- Topic

#### Organization - dimensions

> [!note]
> 
> These are ideas not all of which are process into the metadata model.

- What is it? Org  (podcast, …)
- What do they do? e.g. Education, Activism ...
- What is their interest/focus? e.g. environment, business ...
- What is their alignment value / culture wise? (??)

Detailed

- What kind of thing are they?
  - Individual or Organization
  - Type of org
-  "Horizontal": Areas of focus - see [[topics]]
- "Vertical": Methods/approaches - see [[activitys]]

  
Other possible dimensions

- Secular - Spiritual
- Focus area: Broad / Narrow e.g. Perspectiva (Meta-crisis) vs Psychedelic Society
- Change aimed for: Holistic-siloed
- Near vs Long-Term (Operation)
- Doing vs Reflecting
- Business vs ...
- Fun vs Serious
- Open vs Exclusivity
- Swiss vs California (i.e. organized, puritan vs laid-back and let it all hang out)
- Collectivism vs individualism
- Political vs Apolitical
- Mainstream vs countercultural (? - maybe all latter)


Key Figures/Orgs/Movements to ask abou
  - Wilber and Integral
  - Roberto Unger
  - Karl Marx
  - Marcuse
  - Post-modernists
  - Deleuze etc
  - Complexity
  - Bateson
  - Jung

What traditions
    
- E.g. Zen    
- Osho
- ...

TODO: look this list up in our spreadsheet and transfer to a wiki page here ...

### Information Architecture

Key components of the site - following from job stories and questions.

- Idea / intro / overview
- Directory (profiles etc)
- Maps / Viz
- Glossary

## Project Management
### Roadmap

See this Github board https://github.com/orgs/life-itself/projects/6