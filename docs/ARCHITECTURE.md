# BrewSite architecture

## Runtime

BrewSite uses Next.js App Router with React and strict TypeScript. Pages are server components by default. Client components are reserved for interactive behavior such as the theme switch, mobile navigation, motion reveals, and the decorative WebGL hero.

## Presentation layers

- Global design tokens and responsive styles live in src/app/globals.css.
- Public product links, navigation, and metadata defaults live in src/config/site.ts.
- SiteHeader and SiteFooter are shared layout components.
- ThemeProvider and ThemeToggle provide persistent light/dark preference through next-themes.
- HeroScene is a decorative React Three Fiber scene with a reduced-motion-aware render loop.
- MotionReveal provides viewport-triggered transitions and disables initial movement for reduced-motion preferences.

## Routes

- / — product landing page.
- /docs — documentation index.
- /docs/getting-started — product components and current capabilities.
- /docs/security — trust boundaries and security model.
- /docs/permissions — permission modes and high-risk operations.
- /roadmap — development milestones, clearly distinguishing completed, in-progress, and planned work.
- /downloads — public release availability status.
- /changelog — development milestones and release history.
- /report-bug and /request-feature — GitHub Issue template handoffs.

## No-backend constraint

The initial website intentionally has no authentication, database, payment processing, or custom backend. Public feedback is submitted directly to GitHub Issues. Product downloads are not advertised until public, verifiable release artifacts exist.

## Deployment

The project is designed to be connected to a Git-based frontend hosting provider. Deployment is not considered complete until a production build succeeds and a live URL is verified.
