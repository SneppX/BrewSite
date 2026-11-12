import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "BrewPilot — local-first automation with explicit permission",
};

export function createPageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [socialImage.url],
    },
  };
}
