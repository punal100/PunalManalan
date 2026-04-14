# Punal Manalan Portfolio

## What This Is

A single-page personal resume and portfolio built with Next.js App Router and Tailwind CSS for Punal Manalan. The page presents core profile, experience, and technical strengths in a dark, minimalist layout that works cleanly on mobile and desktop.

## Core Value

Present Punal Manalan as a credible software developer and R&D-focused builder through a polished, fast, mobile-friendly portfolio page.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Replace the default Next.js starter page with a complete portfolio landing page.
- [ ] Communicate profile, experience, and technical skills with clear hierarchy and semantic structure.
- [ ] Integrate the detailed 2026 resume content, public profile links, and featured project media into the landing page.
- [ ] Deliver a dark, responsive visual system with subtle interactive feedback.

### Out of Scope

- Multi-page CMS or blog experience — the current goal is a focused single-page portfolio.
- Authentication, dashboards, or backend data management — not needed for the first public-facing release.
- Dynamic content management or database-backed editing — static authored content is sufficient for v1.

## Context

The repository started empty and has been scaffolded with Next.js 16, React 19, TypeScript, ESLint, and Tailwind CSS 4. The content source now includes both the initial portfolio brief and the detailed resume package under `.temp/PunalManalan_Resume_Context/Punal_Resume_2026`, including public profile links, expanded career history, open-source work, and Wrexa project screenshots.

The portfolio is intended to feel modern and minimal rather than like a stock template. The content emphasis is on software engineering, intelligent systems, game engines, and mobile development, with a dark-first visual direction.

## Constraints

- **Tech stack**: Next.js App Router with Tailwind CSS and TypeScript — requested directly in the project brief.
- **Design**: Dark, modern, minimalist single-page experience — the page should prioritize clarity and atmosphere without bloated UI.
- **Content**: Use the provided personal profile and skill data as the source of truth — avoid placeholder resume copy.
- **Structure**: Use semantic HTML sections and a responsive layout — required by the implementation brief.

## Key Decisions

| Decision                                                           | Rationale                                                         | Outcome   |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- | --------- |
| Build a single-page portfolio first                                | The brief is focused on a personal landing page, not a larger app | — Pending |
| Use Next.js App Router + Tailwind CSS                              | Matches the requested stack and current scaffold                  | — Pending |
| Prioritize hero, about, experience, and technical arsenal sections | These sections were explicitly named in the brief                 | — Pending |
| Use a dark-first visual system with restrained interactions        | The brief prefers a dark aesthetic with subtle hover states       | — Pending |
| Use the resume markdown and Wrexa screenshots as Phase 1 source material | They provide the most complete authored content and real project visuals | — Pending |

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

_Last updated: 2026-04-14 after initialization_
