# BrewSite

The official BrewPilot website by SneppX.

## Live website

- Production: https://brewsite-two.vercel.app
- Documentation: https://brewsite-two.vercel.app/docs
- Architecture: https://brewsite-two.vercel.app/docs/architecture
- Downloads: https://brewsite-two.vercel.app/downloads
- GitHub Issues: https://github.com/SneppX/BrewSite/issues

## Project scope

BrewSite is a frontend-first product website. It currently has no user accounts, authentication, payment processing, or application backend. Bug reports and feature requests use GitHub Issues.

## Release availability

No public BrewPilot installers or GitHub Releases have been published yet. The Downloads page links to the official BrewLocal release channel; do not treat development commits as installable releases. Publish signed platform artifacts and checksums before marking a platform as downloadable.

## Quality gates

- TypeScript type-check
- ESLint
- Production Next.js build
- npm audit at high severity or above

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run typecheck
npm run lint
npm run build
```
