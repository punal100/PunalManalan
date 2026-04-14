<!-- GSD:project-start source:PROJECT.md -->
## Project

**Punal Manalan Portfolio**

A single-page personal resume and portfolio built with Next.js App Router and Tailwind CSS for Punal Manalan. The page presents core profile, experience, and technical strengths in a dark, minimalist layout that works cleanly on mobile and desktop.

**Core Value:** Present Punal Manalan as a credible software developer and R&D-focused builder through a polished, fast, mobile-friendly portfolio page.

### Constraints

- **Tech stack**: Next.js App Router with Tailwind CSS and TypeScript — requested directly in the project brief.
- **Design**: Dark, modern, minimalist single-page experience — the page should prioritize clarity and atmosphere without bloated UI.
- **Content**: Use the provided personal profile and skill data as the source of truth — avoid placeholder resume copy.
- **Structure**: Use semantic HTML sections and a responsive layout — required by the implementation brief.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
### Core Technologies
| Technology   | Version | Purpose                         | Why Recommended                                                                                              |
| ------------ | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Next.js      | 16.2.3  | App framework and routing       | Current official React framework with App Router support and a simple path for a static portfolio page       |
| React        | 19.2.4  | UI composition                  | Matches the scaffolded Next.js runtime and supports a component-first page structure                         |
| TypeScript   | 5.x     | Type safety and maintainability | Keeps page content structures explicit even in a small project                                               |
| Tailwind CSS | 4.x     | Styling system                  | Fast to iterate on gradients, spacing, typography, and responsive utilities without a separate design system |
### Supporting Libraries
| Library      | Version       | Purpose                             | When to Use                                                                  |
| ------------ | ------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| next/font    | bundled       | Typography loading and optimization | Use for a sharper portfolio identity without manual font loading overhead    |
| next/image   | bundled       | Optimized imagery                   | Use only if profile or project imagery is added later                        |
| lucide-react | latest stable | Iconography                         | Optional if the final page needs lightweight icon accents for skills or CTAs |
### Development Tools
| Tool   | Purpose               | Notes                                                                         |
| ------ | --------------------- | ----------------------------------------------------------------------------- |
| ESLint | Code quality          | Already scaffolded and sufficient for this project size                       |
| npm    | Dependency management | Matches the generated lockfile and bootstrap flow                             |
| Git    | Version tracking      | Useful for keeping the GSD planning docs and portfolio implementation in sync |
## Installation
# Core
# Supporting
# Dev dependencies
## Alternatives Considered
| Recommended             | Alternative                    | When to Use Alternative                                                                                    |
| ----------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Next.js App Router      | Plain React + Vite             | Use Vite only if the site never needs Next.js routing, metadata handling, or future deployment conventions |
| Tailwind CSS            | Component library + custom CSS | Use a component library only if the project expands into a larger multi-page system                        |
| Static authored content | CMS-backed portfolio           | Use a CMS only if frequent non-code content editing becomes necessary                                      |
## What NOT to Use
| Avoid                                 | Why                                                                                   | Use Instead                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Heavy animation frameworks by default | They add complexity quickly for a simple portfolio and can make the page feel generic | Use Tailwind transitions and minimal motion                                       |
| Large UI kits for the initial page    | They push the design toward stock patterns and unnecessary abstractions               | Compose the page directly with semantic markup and utilities                      |
| Client-side state libraries           | A single static portfolio page does not need them                                     | Keep the page as a server component unless interactivity truly requires otherwise |
## Stack Patterns by Variant
- Keep content inside `app/page.tsx` or a tiny local data module
- Because the implementation stays easy to reason about and avoids premature abstraction
- Introduce route segments or server actions incrementally
- Because Next.js App Router can grow with the project without a rewrite
## Version Compatibility
| Package A       | Compatible With          | Notes                                   |
| --------------- | ------------------------ | --------------------------------------- |
| next@16.2.3     | react@19.2.4             | Current scaffold pairing                |
| tailwindcss@4.x | @tailwindcss/postcss@4.x | Required pairing in the generated setup |
## Sources
- /vercel/next.js — App Router project structure and page component guidance
- /tailwindlabs/tailwindcss.com — responsive design, gradient, hover, and typography utility guidance
- Generated project scaffold — verified installed package versions in `package.json`
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.github/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
