# Stack Research

**Domain:** Personal resume and portfolio website
**Researched:** 2026-04-14
**Confidence:** HIGH

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

```bash
# Core
npm install next react react-dom

# Supporting
npm install lucide-react

# Dev dependencies
npm install -D typescript eslint eslint-config-next tailwindcss @tailwindcss/postcss @types/node @types/react @types/react-dom
```

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

**If the project stays single-page:**

- Keep content inside `app/page.tsx` or a tiny local data module
- Because the implementation stays easy to reason about and avoids premature abstraction

**If the project later adds case studies or contact flows:**

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

---

_Stack research for: personal resume and portfolio website_
_Researched: 2026-04-14_
