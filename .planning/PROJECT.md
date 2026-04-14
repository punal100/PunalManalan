# Punal Manalan Portfolio

## What This Is

A single-page personal resume and portfolio built with Next.js App Router and Tailwind CSS for Punal Manalan. The page presents core profile, experience, and technical strengths in a dark, minimalist layout that works cleanly on mobile and desktop.

## Core Value

Present Punal Manalan as a credible software developer and R&D-focused builder through a polished, fast, mobile-friendly portfolio page.

## Requirements

### Validated

- [x] Phase 1: Replace the default Next.js starter page with a complete portfolio landing page.
- [x] Phase 1: Communicate profile, experience, and technical skills with clear hierarchy and semantic structure.
- [x] Phase 1: Integrate the detailed 2026 resume content, public profile links, and featured project media into the landing page.
- [x] Phase 2: Deliver a dark, responsive visual system with subtle interactive feedback.

### Active

- [ ] Add portfolio-specific metadata and finish release polish for the initial launch.

### Out of Scope

- Multi-page CMS or blog experience — the current goal is a focused single-page portfolio.
- Authentication, dashboards, or backend data management — not needed for the first public-facing release.
- Dynamic content management or database-backed editing — static authored content is sufficient for v1.

## Context

The repository started empty and has been scaffolded with Next.js 16, React 19, TypeScript, ESLint, and Tailwind CSS 4. The content source now includes both the initial portfolio brief and the detailed resume package under `.temp/PunalManalan_Resume_Context/Punal_Resume_2026`, including public profile links, expanded career history, open-source work, and Wrexa project screenshots.

The portfolio is intended to feel modern and minimal rather than like a stock template. The content emphasis is on software engineering, intelligent systems, game engines, and mobile development, with a dark-first visual direction.

Phase 2 established the current visual direction in the live page: the hero now uses a real profile image, long-form sections no longer waste desktop space on empty left columns, and featured work has been expanded into multiple case-study cards including Kingdoms Collide Mobile and the promoted Project Infinity case study, with hero snapshot counts derived from the featured project collection.

## Constraints

- **Tech stack**: Next.js App Router with Tailwind CSS and TypeScript — requested directly in the project brief.
- **Design**: Dark, modern, minimalist single-page experience — the page should prioritize clarity and atmosphere without bloated UI.
- **Content**: Use the provided personal profile and skill data as the source of truth — avoid placeholder resume copy.
- **Structure**: Use semantic HTML sections and a responsive layout — required by the implementation brief.

## Key Decisions

| Decision                                                           | Rationale                                                         | Outcome   |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- | --------- |
| Build a single-page portfolio first                                | The brief is focused on a personal landing page, not a larger app | Completed in Phase 1 |
| Use Next.js App Router + Tailwind CSS                              | Matches the requested stack and current scaffold                  | Completed in Phase 1 |
| Prioritize hero, about, experience, and technical arsenal sections | These sections were explicitly named in the brief                 | Completed in Phase 1 |
| Use a dark-first visual system with restrained interactions        | The brief prefers a dark aesthetic with subtle hover states       | Completed in Phase 2 |
| Use the resume markdown and Wrexa screenshots as Phase 1 source material | They provide the most complete authored content and real project visuals | Completed in Phase 1 |
| Use a real profile image in the top navigation and hero identity   | The first viewport should feel personal rather than generic       | Completed in Phase 2 |
| Remove split-column section headers when they create empty gutters | Long-form sections should use horizontal space efficiently on desktop | Completed in Phase 2 |
| Expand featured work into multiple case studies with direct store/demo links | Shipped work should be visible without burying it in supporting sections | Completed in Phase 2 |
| Promote Project Infinity into Featured Work once it has case-study coverage | The souls-like prototype is strong enough to stand beside shipped work as a featured showcase | Completed in Phase 2 |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):

1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):

1. Full review of all sections
2. Core Value check -> still the right priority?
3. Audit Out of Scope -> reasons still valid?
4. Update Context with current state

---

_Last updated: 2026-04-14 after Phase 2 backfill_
