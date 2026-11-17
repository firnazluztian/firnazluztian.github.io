---
name: pages-deploy-check
description: Verify the portfolio stays GitHub Pages static-export compatible. Use before adding server features, API routes, or changing deploy assumptions.
---

# Pages deploy check

1. Confirm no new Route Handlers / server actions required for core pages (ADR 0001).
2. `npm run build` must succeed locally.
3. Deploy path: `.github/workflows/nextjs.yml` → static `./out` on `master`.
4. Avoid runtime env secrets for the marketed portfolio surface.
5. If a feature needs a backend, recommend a separate app (Vinove / Vibe House) instead of breaking Pages.
