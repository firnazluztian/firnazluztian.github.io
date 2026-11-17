# firnazluztian.github.io

Personal portfolio site for **Firnaz Luztian Adiansyah** — software engineer (React / Next.js / TypeScript).

| | |
|--|--|
| **Live** | [https://firnazluztian.github.io](https://firnazluztian.github.io) |
| **Stack** | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, Framer Motion |
| **Deploy** | GitHub Pages (static export via Actions) |
| **LLM crawl** | [`/llms.txt`](https://firnazluztian.github.io/llms.txt) · [`/llms-full.txt`](https://firnazluztian.github.io/llms-full.txt) ([spec](https://llmstxt.org/)) |

## Architecture

```text
src/app/(routes)  →  thin pages
src/containers/portfolio  →  canonical UI (i18n)
src/constants/locale-resume|locale-ui  →  EN / ID / JP content
```

Static hosting constraints: no Node server APIs on Pages ([ADR 0001](docs/adr/0001-static-github-pages.md)).

## Related AI systems (elsewhere)

This site is a static portfolio — it does **not** run RAG or moderation itself. Shipped AI work lives in sibling apps:

| Project | What to look at |
|---------|-----------------|
| [Vinove](https://github.com/firnazluztian/vinove-app) | Content **guardrails**: SAFE_MODE, LLM classifier, age gate, privacy-preserving safety logs |
| [Vibe House](https://github.com/firnazluztian/vibehouse) | **Trust boundaries** for untrusted HTML + **rubric retrieval** for vibe-signal scoring |

## AI-assisted development

| Artifact | Purpose |
|----------|---------|
| [AGENTS.md](AGENTS.md) | Agent entry — routes, content workflow, hard rules |
| [CLAUDE.md](CLAUDE.md) | Claude Code entry |
| [docs/adr/](docs/adr/README.md) | Architecture Decision Records |
| [.cursor/rules/](.cursor/rules/) | Cursor project rules |
| [.cursor/skills/](.cursor/skills/) | Content update + Pages deploy skills |

## Routes

| Path | Status |
|------|--------|
| `/`, `/portfolio` | Canonical portfolio (EN / ID / JP) |
| `/dashboard` | Legacy resume UI |
| `/project` | Work-in-progress stub |

## Content workflow

1. Edit `src/constants/locale-resume/{en,id,jp}.ts` for resume data.
2. Edit `src/constants/locale-ui/{en,id,jp}.ts` for chrome strings.
3. Keep all three locales structurally in sync.
4. SEO / Person schema: `src/app/layout.tsx`.

## Local development

```bash
npm install
npm run dev      # Turbopack
npm run build
npm run lint
```

Open [http://localhost:3000](http://localhost:3000). Production builds publish from `master` via [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml).

## About (short)

Software engineer with experience across enterprise and startup product teams (Telkom Indonesia, Oromico, Addon Tech). Full narrative lives on the site.

**Links:** [LinkedIn](https://www.linkedin.com/in/firnaz-luztian-adiansyah-6526b8194/) · [GitHub](https://github.com/firnazluztian)
