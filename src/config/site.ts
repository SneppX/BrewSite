export const siteConfig = {
  name: "BrewPilot",
  product: "BrewPilot",
  company: "SneppX",
  description: "BrewPilot is a local-first automation project by SneppX. Explore permission-gated browser automation, scoped local tools, its security model, architecture, and development roadmap.",
  keywords: [
    "BrewPilot", "local-first automation", "permission-gated automation", "browser automation",
    "MCP server", "Model Context Protocol", "local AI assistant tools", "computer automation security",
    "least privilege", "local permission engine", "SneppX",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brewsite-two.vercel.app",
  repositories: {
    website: "https://github.com/SneppX/BrewSite",
    local: "https://github.com/SneppX/BrewLocal",
    cloud: "https://github.com/SneppX/BrewPilot",
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
