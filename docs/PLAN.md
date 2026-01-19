# Plan

## Planning

- [x] Write MOTIVATION.md
- [x] Write PLAN.md

## First pass

* want an initial, low-risk plan to migrate the **Second Renaissance** site to FlowerShow Cloud.
* expect to start by getting existing FlowerShow self-hosted Markdown content deploying cleanly on FlowerShow Cloud.
* then want to experiment with migrating Framer content.
* are unsure whether to work:
  * In the existing repo (branching / force-pushing later), or
  * In a new, clean repo containing only the content that should survive.
* have decided to **leave ecosystem mapping content where it is for now** and not let it block progress.
* want to know the best way to get started with minimal complexity and reversibility.

Concise recommendation

* **Do not start with the ecosystem split**; treat it as already decided and out of scope for the first steps.
* **Create a new, clean repo for the FlowerShow Cloud site** and copy only the core Markdown content you intend to keep.
  * Rationale: reduces cognitive load, avoids legacy cruft, avoids risky force-pushes, and makes the new site feel intentional.
* First milestone:
  * Get FlowerShow self-hosted content deploying end-to-end on FlowerShow Cloud.
* Second milestone:
  * Run a small experiment migrating 1–2 Framer pages (export → clean → Markdown) to validate effort and tooling.
* Keep the old repo and Framer site untouched until the new site is clearly viable, then decommission deliberately.

### Tasks

- [ ] Analyse what is in old site outside of ecosystem
- [ ] Copy over pages
- [ ] Copy over base markdown




# Inbox

- [ ] ➕2026-01-20 💤 split out the pip and cohere assets to their own subfolders so it is clean (rewrite markdown for this)