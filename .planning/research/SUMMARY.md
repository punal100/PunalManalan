# Project Research Summary

**Project:** Punal Manalan Portfolio
**Domain:** Personal resume and portfolio website
**Researched:** 2026-04-14
**Confidence:** HIGH

## Executive Summary

This project is a focused personal portfolio rather than a multi-feature product. The strongest implementation path is a static, server-first Next.js App Router page that uses Tailwind CSS for a distinct dark visual system and keeps the content authored directly in code.

Research points toward a light architecture: one route, semantic sections, and minimal abstraction. The main risks are visual sameness, weak mobile hierarchy, and content that feels generic or unverified. The roadmap should therefore start with accurate content and semantic structure, move into visual and responsive refinement, and finish with metadata and final polish.

## Key Findings

### Recommended Stack

Next.js 16, React 19, TypeScript, and Tailwind CSS 4 are already scaffolded and are a strong fit for this portfolio. The page can remain mostly static while still benefiting from App Router metadata handling and a clean growth path if the site later expands.

**Core technologies:**

- Next.js: routing, metadata, and production-ready app structure — recommended because the repo is already scaffolded correctly
- Tailwind CSS: layout, responsive behavior, and visual styling — recommended because it makes dark-theme iteration fast
- TypeScript: typed content structures and maintainability — recommended because it keeps the implementation explicit even at small scale

### Expected Features

The must-have feature set is narrow but important: a strong hero, concise about section, recent experience, grouped skills, responsive layout, and subtle interaction cues.

**Must have (table stakes):**

- Hero identity and summary — users need immediate context
- About, experience, and technical arsenal sections — users expect a complete professional snapshot
- Responsive layout and interaction cues — users expect the page to feel modern and usable on phones

**Should have (competitive):**

- Distinct visual atmosphere — helps the page feel authored instead of templated
- In-page CTA or anchor flow — improves narrative movement through the page

**Defer (v2+):**

- Case studies, downloadable resume, or contact form — useful later, not required for the first launch

### Architecture Approach

Use a single App Router page with semantic sections and small local content objects for any repeated data. Keep the page server-rendered and use `app/layout.tsx` plus metadata for the document shell. Extract components only when the page becomes noisy enough to justify it.

**Major components:**

1. Root layout — document shell and metadata
2. Portfolio page — hero, about, experience, and skills composition
3. Global styling — restrained custom theme support on top of Tailwind utilities

### Critical Pitfalls

1. **Template-looking design** — avoid by building a deliberate palette, spacing rhythm, and typography hierarchy
2. **Weak mobile hierarchy** — avoid by designing mobile-first and validating the text flow early
3. **Skill overload** — avoid by grouping skills instead of listing everything at once
4. **Content inaccuracy** — avoid by locking the supplied facts before polishing visuals

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Portfolio Content Foundation

**Rationale:** Accurate structure and authored content are prerequisites for every later refinement.
**Delivers:** Semantic sections, core copy, grouped skill data, and removal of starter content.
**Addresses:** Table-stakes content expectations.
**Avoids:** Content accuracy and skill overload pitfalls.

### Phase 2: Visual Identity and Responsive Experience

**Rationale:** Once the content exists, the page can be shaped into a distinct dark interface without fighting moving targets.
**Delivers:** Responsive layout tuning, dark visual system, hover states, and in-page CTA flow.
**Uses:** Tailwind utility styling and small global theme support.
**Implements:** Presentation-layer refinement.

### Phase 3: Metadata and Final Polish

**Rationale:** Discoverability and completion checks are most useful after the core page is stable.
**Delivers:** Metadata, polish, and readiness checks.

### Phase Ordering Rationale

- Content-first ordering prevents visual work from hiding factual gaps.
- Responsive and atmosphere work belongs after the section structure is fixed.
- Final metadata and polish are easier once the final narrative and visuals are settled.

### Research Flags

Phases likely needing deeper research during planning:

- **Phase 2:** only if the design introduces custom motion or extra asset pipelines

Phases with standard patterns (skip research-phase):

- **Phase 1:** straightforward content composition in App Router
- **Phase 3:** metadata and QA follow standard Next.js patterns

## Confidence Assessment

| Area         | Confidence | Notes                                                                     |
| ------------ | ---------- | ------------------------------------------------------------------------- |
| Stack        | HIGH       | Verified against current scaffold and official docs                       |
| Features     | HIGH       | The project brief is explicit about required content and design direction |
| Architecture | HIGH       | Single-page portfolio architecture is standard and low risk               |
| Pitfalls     | HIGH       | Common failure modes are well understood for this project type            |

**Overall confidence:** HIGH

### Gaps to Address

- No external contact or social URLs were provided — use in-page calls to action first or add outbound links later.
- No finalized visual brand assets were provided — typography and palette choices should carry the identity for v1.

## Sources

### Primary (HIGH confidence)

- /vercel/next.js — App Router page and layout guidance
- /tailwindlabs/tailwindcss.com — responsive design and utility guidance
- Repository `package.json` — installed versions

### Secondary (MEDIUM confidence)

- Contemporary developer portfolio conventions — used for feature expectations and pitfall framing

---

_Research completed: 2026-04-14_
_Ready for roadmap: yes_
