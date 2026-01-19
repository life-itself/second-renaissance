# Motivation & Context

See also main issue in https://github.com/life-itself/second-renaissance/issues/379

## Situation

* The current **Second Renaissance** website is split across two systems:
  * Framer (paid), hosting ~10 core pages.
  * FlowerShow self-hosted, with Markdown content stored in GitHub.
* This results in duplicated infrastructure, mixed editing workflows, and unclear ownership of a canonical site.
* A new target system is available: FlowerShow Cloud, Markdown-native and managed.
* Some existing content (notably the ecosystem maps) relies on dynamic React visualisations that are not compatible with FlowerShow Cloud.

## Complication

* Maintaining two systems creates ongoing cost, cognitive overhead, and technical complexity (e.g. front-end proxying).
* Content updates require coordination across tools with different paradigms (visual builder vs. Markdown/Git).
* The current setup obscures a clean information architecture and slows iteration.
* Dynamic, tool-like content (ecosystem mapping) introduces a hard technical blocker to full consolidation.

## Question

* How should we migrate the **Second Renaissance** website to a single, coherent system based on Markdown and FlowerShow Cloud?

Sub-questions:

* How do we export content from Framer into a reusable format (HTML/Markdown)?
* How do we migrate from FlowerShow self-hosted to FlowerShow Cloud with minimal disruption?
* [x] In what order should migration occur? **✅2026-01-20 FlowerShow self-hosted → FlowerShow Cloud first then Framer.**
* [x] Should the ecosystem mappings Remain part of the main Second Renaissance site, or Move to a dedicated mini-site with its own lifecycle **✅2026-01-20 🔑 split out. NB: this also aligns with existing ideas for this in https://github.com/life-itself/community/issues/1210**

## Hypothesis

* Migrate the core **Second Renaissance** site to FlowerShow Cloud as the single canonical platform.
* Standardize all core content in Markdown, versioned in Git.
* Migrate FlowerShow self-hosted content first, then extract and migrate Framer pages.
* Decommission Framer once content is extracted and verified.
* Split the ecosystem mapping content into a separate mini-site, because it depends on dynamic React visualisations that do not fit FlowerShow Cloud and would otherwise block or distort the main migration.
* Treat this split as a reversible, pragmatic staging decision rather than a permanent separation.
