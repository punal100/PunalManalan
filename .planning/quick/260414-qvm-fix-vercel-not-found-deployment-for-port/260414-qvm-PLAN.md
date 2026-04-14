---
quick_task: 260414-qvm
description: Fix Vercel NOT_FOUND deployment for portfolio site
created: 2026-04-14
status: ready
files_modified:
  - vercel.json
---

<objective>
Fix the Vercel production deployment so the root URL serves the Next.js portfolio instead of a Vercel `NOT_FOUND` page.

Purpose: The deployment currently serves static assets from `public/` but not the built Next.js route tree, which indicates a Vercel framework/output misconfiguration rather than an app routing bug.
Output: A source-controlled Vercel configuration that pins the project to the Next.js framework preset, plus quick-task artifacts documenting the diagnosis and required dashboard-side follow-up.
</objective>

<context>
- Local `npm run build` passes.
- `https://punal-manalan.vercel.app/` returns HTTP 404.
- `https://punal-manalan.vercel.app/profile.jpeg` resolves, proving Vercel is serving `public/` assets.
- `https://punal-manalan.vercel.app/_next/static` returns 404, which means the Next build output is not being served.
- Vercel inspect shows the deployment is Ready, so the fault is deployment configuration, not a missing alias.
</context>

<tasks>

<task>
  <name>Task 1: Pin the deployment to Next.js in source control</name>
  <files>vercel.json</files>
  <action>Add a minimal `vercel.json` that sets `framework` to `nextjs`. This gives Vercel a repo-level framework hint so future deployments do not fall back to serving only static files from `public/` when the dashboard preset is wrong or stale.</action>
  <verify>npm run build</verify>
  <done>`vercel.json` exists and the app still builds locally without route regressions.</done>
</task>

<task>
  <name>Task 2: Record the actual root cause and operator follow-up</name>
  <files>.planning/quick/260414-qvm-fix-vercel-not-found-deployment-for-port/260414-qvm-SUMMARY.md, .planning/STATE.md</files>
  <action>Capture that the deployment behaves like a static `public/` deployment: root path 404s, public asset paths work, and Next asset paths do not. Document the exact Vercel-side correction if the dashboard has an explicit Output Directory or Framework Preset override: set Framework Preset to Next.js and clear any custom Output Directory such as `public`.</action>
  <verify>Summary and STATE.md reflect the diagnosis and follow-up clearly.</verify>
  <done>The quick-task summary and state row explain both the repo fix and the Vercel dashboard setting the user must confirm.</done>
</task>

</tasks>