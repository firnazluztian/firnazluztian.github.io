---
name: update-portfolio-content
description: Update portfolio resume or UI copy across EN, ID, and JP locale packs. Use when changing experience, projects, about text, or portfolio chrome strings.
---

# Update portfolio content

## Checklist

```
- [ ] Identify whether change is resume data or UI chrome
- [ ] Edit locale-resume/{en,id,jp}.ts and/or locale-ui/{en,id,jp}.ts
- [ ] Keep structural keys/arrays aligned across locales
- [ ] If schema shape changes, update containers/portfolio/schema.ts
- [ ] Skip legacy src/constants/resume.ts unless working on /dashboard
- [ ] Spot-check locale switcher in the browser
```

## Paths

- Resume: `src/constants/locale-resume/`
- UI: `src/constants/locale-ui/`
- Mapping: `src/containers/portfolio/schema.ts`

See ADR 0002.
