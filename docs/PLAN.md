# Plan

## Overview

Planning

- [x] Write MOTIVATION.md
- [x] Write PLAN.md

Implementation

*Keep the old repo and Framer site untouched until the new site is clearly viable, then decommission deliberately.*

- [ ] Flowershow Self-hosted to Cloud
- [ ] Framer to Flowershow
- [ ] Remove frontend proxy

## Flowershow Self-hosted to Cloud

* **Will not start with the ecosystem split**; treat it as already decided and out of scope for the first steps.
* **Create a new, clean repo for the FlowerShow Cloud site** and copy only the core Markdown content you intend to keep.
  * Rationale: reduces cognitive load, avoids legacy cruft, avoids risky force-pushes, and makes the new site feel intentional.
* First milestone:
  * Get FlowerShow self-hosted content deploying end-to-end on FlowerShow Cloud.

### Tasks

- [x] Analyse what is in old site outside of ecosystem
- [x] Copy over base markdown **✅2026-01-20**
- [ ] Migrate nextjs style pages (two of them: index.jsx and map.jsx)
  - [ ] Copy over pages (next)
  - [ ] Convert those pages to markdown
- [ ] Add back in the map?

---

## Framer to Flowershow

- [x] What content is there
- [ ] Analyse how to migrate a framer page (focus on art)
- [ ] Home page
  - [ ] Just re-add video

### Pages on Framer (to migrate)

```
* / (home) # NB: i think this has not changed much from what we had in old flowershow site
* /art
  * /exhibition
  * /collective
  * /residency
  * /magazine
  * /manifesto
  * /magazine-submission
* /course  # not much changed from original in Flowershow self-hosted
* /about
* /unconference
* /oasis
* /ecosystem
* /paper
```

## Tidy-ups / themeing

- [ ] Set favicon


# Inbox

- [ ] ➕2026-01-20 💤 split out the pip and cohere assets to their own subfolders so it is clean (rewrite markdown for this)
- [ ] ➕2026-01-20 work out what we do with old /wiki - kind of random and only standard thing is overview-mapping-efforts.md
  - [x] have moved overview-mapping-efforts to root
    - [ ] Create a redirect for this ...