# ADR 0001 — Static export on GitHub Pages

| Field | Value |
|-------|-------|
| Status | Implemented |
| Date | 2025-02-10 |
| Type | Decision |

## Context

The site is a personal portfolio hosted at `firnazluztian.github.io`. GitHub Pages serves static assets; a Node server is unavailable in production.

## Decision

- Deploy via GitHub Actions (`.github/workflows/nextjs.yml`) as a static Next.js export (`./out`).
- Keep pages client-heavy (`"use client"`, `dynamic(..., { ssr: false })` where needed) rather than introducing server-only APIs.
- Do not add Route Handlers or server features that require a Node runtime on Pages.

## Consequences

- No server secrets or backend endpoints in this repo.
- Features that need a backend belong in separate apps (e.g. Vinove, Vibe House).
