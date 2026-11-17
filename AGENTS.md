# AGENTS.md — firnazluztian.github.io

Personal portfolio / resume site for Firnaz Luztian Adiansyah. **Next.js 15 App Router**, React 19, TypeScript, Tailwind, Framer Motion. Deployed as a **static site** on GitHub Pages.

Live: [https://firnazluztian.github.io](https://firnazluztian.github.io). Agent crawl index: [`/llms.txt`](public/llms.txt).

ADRs: [docs/adr/](docs/adr/README.md).

## Commands

```bash
npm run dev          # next dev --turbopack
npm run dev:classic  # next dev
npm run build
npm run lint
```

Production deploy: push to `master` → `.github/workflows/nextjs.yml` builds static `./out`.

## Layout

| Path | Role |
|------|------|
| `src/app/` | App Router pages + SEO layout |
| `src/containers/portfolio/` | **Canonical** product UI |
| `src/containers/dashboard/` | Legacy |
| `src/constants/locale-resume/` | EN/ID/JP resume content |
| `src/constants/locale-ui/` | EN/ID/JP UI strings |
| `src/components/` | Shared layout/motion/UI |
| `docs/adr/` | Architecture Decision Records |

## Routes

| Path | Notes |
|------|--------|
| `/`, `/portfolio` | Canonical portfolio (i18n) |
| `/dashboard` | Legacy — prefer portfolio |
| `/project` | WIP stub |

## Content edits

1. Edit `src/constants/locale-resume/{en,id,jp}.ts` and/or `locale-ui/{en,id,jp}.ts`.
2. Keep the three locales structurally in sync.
3. SEO / Person JSON-LD: `src/app/layout.tsx`.
4. Do **not** treat `src/constants/resume.ts` as the live source (dashboard only).

## Hard rules

1. No Node server APIs on GitHub Pages — keep the site static-export friendly (ADR 0001).
2. Prefer `containers/portfolio` for product work (ADR 0003).
3. No secrets required; do not introduce `.env` dependencies for core pages.

## Skills

- `.cursor/skills/add-adr`
- `.cursor/skills/update-portfolio-content`
- `.cursor/skills/pages-deploy-check`
