# ADR 0002 — Locale content packs as source of truth

| Field | Value |
|-------|-------|
| Status | Implemented |
| Date | 2025-10-01 |
| Type | Decision |

## Context

Portfolio copy must ship in English, Indonesian, and Japanese without a CMS.

## Decision

- Resume content: `src/constants/locale-resume/{en,id,jp}.ts`
- UI chrome strings: `src/constants/locale-ui/{en,id,jp}.ts`
- Shape into a view model via `containers/portfolio/schema.ts` (`getPortfolioData`).
- Locale preference persists in `localStorage` (`portfolio-locale`).

## Consequences

- Content edits must update **all three** locale files when structure changes.
- Prefer locale packs over editing the legacy `src/constants/resume.ts` (dashboard-only).
