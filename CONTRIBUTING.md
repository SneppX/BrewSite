# Contributing to BrewSite

## Local development

Requirements: Node.js 22 or later and npm.

    npm install
    npm run dev

The development server starts on http://localhost:3000.

## Quality checks

    npm run typecheck
    npm run lint
    npm run build

## Project structure

- src/app: Next.js App Router pages and metadata routes.
- src/components: shared navigation, theme, motion, and visual components.
- src/config: public site configuration.
- .github/ISSUE_TEMPLATE: public issue forms.
- .github/workflows: continuous integration.

## Current product boundaries

BrewSite is frontend-only in this phase. Do not add authentication, a database, payments, or a custom API. Use GitHub Issues for public bug reports and feature requests.

## Pull requests

- Explain the user-facing change and the reason for it.
- Include screenshots for significant visual changes.
- Mention accessibility and reduced-motion behavior for animation changes.
- Keep commits focused and avoid generated build artifacts.
