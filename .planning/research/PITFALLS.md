# Pitfalls Research

**Domain:** Personal resume and portfolio website
**Researched:** 2026-04-14
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Template-looking design

**What goes wrong:** The page looks like an untouched starter or interchangeable portfolio clone.

**Why it happens:** Developers keep scaffold defaults or stack generic sections without a visual point of view.

**How to avoid:** Build a deliberate palette, section rhythm, and typography hierarchy around the supplied content.

**Warning signs:** Placeholder copy remains, the hero has no identity, or every section uses the same flat card treatment.

**Phase to address:** Phase 2

---

### Pitfall 2: Weak mobile hierarchy

**What goes wrong:** The page reads well on desktop but becomes cramped or confusing on phones.

**Why it happens:** Mobile spacing and text rhythm are treated as a later cleanup step.

**How to avoid:** Design mobile-first with unprefixed Tailwind utilities, then layer larger breakpoints selectively.

**Warning signs:** Headlines wrap awkwardly, cards become too dense, or users need excessive scrolling to find context.

**Phase to address:** Phase 2

---

### Pitfall 3: Skill overload without structure

**What goes wrong:** The portfolio turns into an unscannable wall of tools and buzzwords.

**Why it happens:** Every skill gets equal emphasis instead of being grouped into a readable system.

**How to avoid:** Organize skills into a few categories and emphasize the strongest signals first.

**Warning signs:** Long comma-separated lists, no grouping, or repeated technology concepts.

**Phase to address:** Phase 1

---

### Pitfall 4: Polished visuals with stale content accuracy

**What goes wrong:** The page looks good but undermines credibility because dates, role details, or wording are inaccurate.

**Why it happens:** Design work overtakes content verification.

**How to avoid:** Lock the supplied profile details first, then style around verified content.

**Warning signs:** Placeholder role descriptions, incorrect dates, or vague copy where specifics were provided.

**Phase to address:** Phase 1

## Technical Debt Patterns

| Shortcut                                        | Immediate Benefit    | Long-term Cost                          | When Acceptable                                                              |
| ----------------------------------------------- | -------------------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| One very large JSX tree with no content objects | Fast first pass      | Harder to maintain once sections expand | Acceptable only for the first implementation if the structure stays readable |
| Adding animation libraries immediately          | Quick visual novelty | More code and tuning for little value   | Rarely justified for this scope                                              |
| Using arbitrary colors everywhere               | Fast experimentation | Inconsistent visual identity            | Never acceptable beyond prototyping                                          |

## Integration Gotchas

| Integration    | Common Mistake                                 | Correct Approach                                                   |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| External links | Opening new tabs without proper rel attributes | Use `target="_blank"` with `rel="noreferrer noopener"` when needed |
| Web fonts      | Loading fonts manually or redundantly          | Prefer `next/font` for optimized loading                           |

## Performance Traps

| Trap                            | Symptoms                          | Prevention                                  | When It Breaks                                  |
| ------------------------------- | --------------------------------- | ------------------------------------------- | ----------------------------------------------- |
| Heavy background media          | Slow first load, layout jank      | Favor gradients, shapes, and sparse imagery | Breaks immediately on slower mobile connections |
| Too many shadow and blur layers | Muddy visuals and costly painting | Use a few high-value layers only            | Shows up on mid-range mobile devices            |

## Security Mistakes

| Mistake                                  | Risk               | Prevention                                                   |
| ---------------------------------------- | ------------------ | ------------------------------------------------------------ |
| Unsafe external links                    | Reverse tabnabbing | Use safe rel attributes                                      |
| Exposing personal secrets in repo config | Accidental leakage | Keep portfolio content static and do not commit real secrets |

## UX Pitfalls

| Pitfall                           | User Impact                          | Better Approach                                            |
| --------------------------------- | ------------------------------------ | ---------------------------------------------------------- |
| Dense paragraphs in every section | Visitors skim past important details | Use compact, high-signal copy with supporting labels       |
| Hover-only affordances            | Mobile and keyboard users miss cues  | Pair hover styling with visible structure and focus states |
| Flat section styling              | Hard to distinguish content blocks   | Vary scale, spacing, and surface treatment intentionally   |

## "Looks Done But Isn't" Checklist

- [ ] **Hero:** Often missing a clear call to action — verify the next step is obvious
- [ ] **Experience:** Often missing concrete role context — verify the OpEzee description reflects the brief
- [ ] **Skills:** Often missing grouping — verify skills are categorized, not dumped as one list
- [ ] **Responsive layout:** Often missing mobile polish — verify content hierarchy holds at narrow widths
- [ ] **Metadata:** Often missing title and description — verify the page identifies the portfolio clearly in browser and previews

## Recovery Strategies

| Pitfall                 | Recovery Cost | Recovery Steps                                                      |
| ----------------------- | ------------- | ------------------------------------------------------------------- |
| Template-looking design | MEDIUM        | Rework the visual system before adding more sections                |
| Weak mobile hierarchy   | LOW           | Audit spacing, typography, and stacking order at mobile breakpoints |
| Skill overload          | LOW           | Regroup and trim the skills into stronger categories                |

## Pitfall-to-Phase Mapping

| Pitfall                 | Prevention Phase | Verification                                                     |
| ----------------------- | ---------------- | ---------------------------------------------------------------- |
| Template-looking design | Phase 2          | Visual review confirms distinct palette, hierarchy, and surfaces |
| Weak mobile hierarchy   | Phase 2          | Responsive checks confirm readable mobile layout                 |
| Skill overload          | Phase 1          | Section review confirms grouped, scannable technical arsenal     |
| Content inaccuracy      | Phase 1          | Copy review confirms facts match the provided brief              |

## Sources

- Project brief and requested design direction
- Tailwind responsive design guidance
- Common issues seen in developer portfolio implementations

---

_Pitfalls research for: personal resume and portfolio website_
_Researched: 2026-04-14_
