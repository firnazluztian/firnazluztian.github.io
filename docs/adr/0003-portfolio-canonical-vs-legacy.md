# ADR 0003 — Portfolio canonical vs legacy routes

| Field | Value |
|-------|-------|
| Status | Implemented |
| Date | 2025-10-01 |
| Type | Decision |

## Context

Older dashboard/project UIs remain in the App Router while the marketed surface is the i18n portfolio.

## Decision

| Route | Status |
|-------|--------|
| `/` and `/portfolio` | **Canonical** — `containers/portfolio` |
| `/dashboard` | Legacy resume UI (`constants/resume.ts`) |
| `/project` | WIP stub |

Product work defaults to the portfolio container. Do not invest in dashboard/project unless explicitly requested.

## Consequences

- SEO metadata in `src/app/layout.tsx` describes the portfolio experience.
- Agents should not “fix” locale drift by editing only the legacy resume file.
