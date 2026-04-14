# Quick Task 260414-qvm: Fix Vercel NOT_FOUND deployment for portfolio site - Context

**Gathered:** 2026-04-14
**Status:** Ready for planning

<domain>
## Task Boundary

Diagnose why the Vercel production deployment returns NOT_FOUND even though the portfolio builds locally and the deployment is marked Ready, then apply the smallest repo-side fix if the issue is in source control or document the required Vercel-side configuration change if the issue is external.

</domain>

<decisions>
## Implementation Decisions

### Deployment diagnosis
- Use the Vercel NOT_FOUND guidance as the troubleshooting baseline.
- Prefer fixing repo configuration if the problem is source-controlled; otherwise capture the exact Vercel setting the user must change.

### the agent's Discretion
- Exact investigation order across local files, deployment URL checks, and Vercel settings surface.
- Whether a repo change is necessary after the live diagnosis.

</decisions>

<specifics>
## Specific Ideas

- Deployment is marked Ready Latest on Vercel but the preview appears to be a Vercel 404 page.
- The local app builds successfully with `npm run build`.

</specifics>

<canonical_refs>
## Canonical References

- `https://vercel.com/docs/errors/NOT_FOUND` — Vercel troubleshooting guidance for this exact deployment symptom.

</canonical_refs>
