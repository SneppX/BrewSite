export const siteConfig = {
  name: "BrewPilot",
  product: "BrewPilot",
  company: "SneppX",
  description:
    "A permission-first automation workspace for browser workflows and carefully authorized local computer operations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  repositories: {
    website: "https://github.com/SneppX/BrewSite",
    product: "https://github.com/SneppX/BrewPilot",
    issues: "https://github.com/SneppX/BrewSite/issues",
    releases: "https://github.com/SneppX/BrewPilot/releases",
  },
  navigation: [
    { label: "Features", href: "/#features" },
    { label: "Security", href: "/#security" },
    { label: "Platforms", href: "/#platforms" },
    { label: "Documentation", href: "/docs" },
    { label: "Changelog", href: "/changelog" },
  ],
} as const;
