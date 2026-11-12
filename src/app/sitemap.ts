import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/docs", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/docs/getting-started", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/docs/security", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/docs/permissions", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/docs/architecture", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/downloads", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/roadmap", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/changelog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/report-bug", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/request-feature", priority: 0.3, changeFrequency: "yearly" as const },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency,
    priority,
  }));
}
