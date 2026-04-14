# Phase 2: Visual Identity and Responsive Experience - Context

**Gathered:** 2026-04-14
**Status:** Backfilled after completion

<domain>
## Phase Boundary

Turn the content-complete portfolio into a more polished dark interface that uses horizontal space efficiently, keeps long-form sections readable across breakpoints, and makes featured work feel like a set of real case studies instead of a single static spotlight.

</domain>

<decisions>
## Implementation Decisions

### Hero identity and top fold

- **D-01:** Replace the initials badge with the real profile photo served from `public/profile.jpeg`.
- **D-02:** Keep public LinkedIn and GitHub links visible in the hero area instead of burying them inside the About section, and align the shared LinkedIn URL to the current canonical profile path.
- **D-03:** Preserve clear hero CTAs into the rest of the page while tightening the snapshot copy and top-fold density.

### Section layout density

- **D-04:** Remove split-column header/content layouts when they create obvious empty gutters on desktop.
- **D-05:** Stack About and Experience headers above their content so the cards can use the full page width.
- **D-06:** Keep the dark card system and typography rhythm rather than introducing a radically different visual language.

### Featured work treatment

- **D-07:** Expand featured work from a single spotlight into multiple case-study cards.
- **D-08:** Add Kingdoms Collide Mobile as featured work using official store screenshots saved locally under `public/kingdoms-collide/`.
- **D-09:** Link Kingdoms Collide to the official Google Play and App Store pages instead of chasing a separate direct trailer URL.
- **D-10:** Keep featured project action links grouped in the card header and continue using local public assets for galleries.
- **D-11:** Promote the souls-like Unreal prototype (Project Infinity) into Featured Work instead of leaving it in the generic project list.
- **D-12:** Derive the hero snapshot counts from `featuredProjects` and total featured screenshot volume so the summary block stays accurate as case studies grow.

### the agent's Discretion

- Exact spacing, card sizing, and badge styling so long as the layout stays dense, dark, and readable.
- Exact CTA button variant styling as long as primary vs secondary actions remain visually distinct.

</decisions>

<specifics>
## Specific Ideas

- User feedback repeatedly called out "empty space" and unused left columns in About, Experience, and Featured Work.
- The intended correction was to let the grid extend to the right rather than reserving decorative header columns.
- Kingdoms Collide should read as a shipped featured case study, not as a buried experience footnote.
- The souls-like Unreal project should also read as a real featured case study rather than a generic supporting project entry.

</specifics>

<canonical_refs>

## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase definition

- `.planning/ROADMAP.md` — Phase 2 goal, requirements, and plan split.
- `.planning/REQUIREMENTS.md` — `SKIL-02`, `UI-02`, `UI-03`, `UI-04`, and `PRES-01` coverage.

### Source material

- `.temp/PunalManalan_Resume_Context/Punal_Resume_2026/Punal_Resume_2026.md` — Resume copy and Kingdoms Collide experience details.

### Live implementation anchors

- `app/page.tsx` — Section layout, hero composition, and featured-work rendering.
- `app/portfolio-data.ts` — Source of truth for featured projects, profile links, and project galleries.

</canonical_refs>

<code_context>

## Existing Code Insights

### Reusable Assets

- `app/portfolio-data.ts`: Shared content module that allows layout changes without duplicating resume copy in JSX and keeps profile URLs plus featured case studies centralized.
- `public/profile.jpeg`: Local profile asset used for first-view identity.
- `public/wrexa/*`, `public/kingdoms-collide/*`, `public/projects/projectinfinity/*`: Local screenshot galleries for featured case studies.

### Established Patterns

- Long-form portfolio content is rendered from the shared TypeScript content module, not hard-coded inline strings.
- Outbound links consistently open in new tabs and use rounded button/card treatments.
- Section cards and badges rely on restrained hover states instead of heavy animation.

### Integration Points

- Hero identity and public profiles live in `app/page.tsx` but render from `portfolioData.identity`.
- Featured work is driven from `portfolioData.featuredProjects` and the page derives both case-study counts and total featured screenshot counts from that structure.
- Responsive layout tuning happens inside section-level Tailwind class changes rather than through new components.

</code_context>

<deferred>
## Deferred Ideas

- Metadata, title/description polish, and other launch-readiness checks belong to Phase 3.
- Resume download, contact flow, and additional project growth work stay outside the current phase.

</deferred>

---

_Phase: 02-visual-identity-and-responsive-experience_
_Context gathered: 2026-04-14_
