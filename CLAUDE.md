# CLAUDE.md — Portfolio

Static Next.js portfolio on GitHub Pages. Full guidance: **[AGENTS.md](AGENTS.md)**. ADRs: **[docs/adr/](docs/adr/README.md)**.

## Must-read

- [AGENTS.md](AGENTS.md) — routes, content packs, hard rules
- Locale packs under `src/constants/locale-resume/` and `locale-ui/`

## Non-negotiables

- Canonical UI: `src/containers/portfolio` (`/` and `/portfolio`).
- Content changes: update EN + ID + JP together.
- Stay static-export compatible — no Pages-incompatible server APIs.
- Legacy `/dashboard` and `/project` are not the default surface.
