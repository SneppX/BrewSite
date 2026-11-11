export const siteConfig = {
  name: "BrewPilot",
  product: "BrewPilot",
  company: "SneppX",
  description:
    "A permission-first automation workspace for browser workflows and carefully authorized local computer operations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brewsite-two.vercel.app",
  repositories: {
    website: "https://github.com/SneppX/BrewSite",
    issues: "https://github.com/SneppX/BrewSite/issues",
    releases: "https://github.com/SneppX/BrewLocal/releases",
  },
  navigation: [
    { label: "Features", href: "/#features" },
    { label: "Security", href: "/#security" },
    { label: "Platforms", href: "/#platforms" },
    { label: "Documentation", href: "/docs" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Changelog", href: "/changelog" },
  ],
} as const;
