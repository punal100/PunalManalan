---
quick_task: 260414-qvm
description: Fix Vercel NOT_FOUND deployment for portfolio site
completed: 2026-04-14
commit: 337f998
---

# Quick Task 260414-qvm Summary

## Outcome

Added a source-controlled Vercel configuration in `vercel.json` that pins the project to the `nextjs` framework preset.

## Root Cause

The live deployment was not serving the built Next.js app. The evidence was:

- `https://punal-manalan.vercel.app/` returned Vercel `NOT_FOUND`
- `https://punal-manalan.vercel.app/profile.jpeg` loaded successfully
- `https://punal-manalan.vercel.app/_next/static` returned 404

That combination means Vercel was exposing files from `public/` but not serving any Next.js route or build asset tree. This is a deployment-configuration problem, not a missing `app/page.tsx` route.

## Repo Change Applied

- Added `vercel.json` with:
  - `$schema`: `https://openapi.vercel.sh/vercel.json`
  - `framework`: `nextjs`

This makes the framework preset explicit in source control so future deployments do not depend on a stale or incorrect dashboard preset.

## Required Vercel Dashboard Check

If the site still returns 404 after the next deployment, the remaining issue is almost certainly a dashboard override.

Verify in Vercel Project Settings:

1. **Framework Preset** is set to **Next.js**
2. **Build and Output Settings** does **not** have a custom **Output Directory** like `public`
3. **Root Directory** points to the repo root, not a nested folder that excludes `app/` and `package.json`

The most likely bad setting is a custom Output Directory that makes Vercel deploy `public/` as a static site.

## Validation

- `npm run build` passed locally after adding `vercel.json`

## Commit

- Code fix: `337f998` — `fix(quick-260414-qvm): pin vercel to nextjs framework`
