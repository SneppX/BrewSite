# BrewSite engineering rules

## Product constraints
- This repository is the public-facing frontend for BrewPilot.
- Keep it frontend-only for the current phase. Do not add authentication, user accounts, payment processing, databases, or custom backend services without an explicit product decision.
- Bug reports and feature requests must go through the public BrewSite GitHub Issues templates.
- Do not expose private repository links, private release endpoints, credentials, or internal operational details in public pages.
- Never imply that a planned feature or unreleased binary is already available.

## Engineering standards
- TypeScript strict mode is mandatory. Avoid any and unsafe type assertions.
- Keep route content server-rendered unless browser interaction is required.
- Client components must have a clear reason to exist.
- Respect prefers-reduced-motion. Do not make essential information depend on animation.
- Keep WebGL effects decorative, low-cost, and optional.
- All interactive controls need keyboard access, visible focus, accessible names, and appropriate semantics.
- Use semantic HTML, responsive layouts, and sufficient contrast in both themes.
- Never store secrets in source or NEXT_PUBLIC variables.

## Design system
- Use the existing CSS variables and component classes in src/app/globals.css.
- Keep the dark-first charcoal, violet, and cyan visual identity.
- Premium motion should be restrained and purposeful.
- Avoid heavy visual assets that block the first contentful render.

## Quality gates
- npm run typecheck
- npm run lint
- npm run build
- Verify all internal links and public GitHub links.
- Keep commits focused and descriptive.
