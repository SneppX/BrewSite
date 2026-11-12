import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const pageTitle = "BrewPilot | Local-first automation with explicit permission";
const pageDescription = siteConfig.description;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "SneppX",
      url: siteConfig.url,
      sameAs: [siteConfig.repositories.local, siteConfig.repositories.cloud, siteConfig.repositories.website],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: "BrewPilot",
      url: siteConfig.url,
      description: pageDescription,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitle,
    template: "%s | BrewPilot",
  },
  description: pageDescription,
  alternates: { canonical: "/" },
  applicationName: "BrewPilot",
  openGraph: {
    type: "website",
    siteName: "BrewPilot",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#111512" }, { media: "(prefers-color-scheme: light)", color: "#f3f1e9" }],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <ThemeProvider>
          <div className="site-shell">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
