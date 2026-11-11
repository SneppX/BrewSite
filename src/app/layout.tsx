import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BrewPilot — Automation, under your control",
    template: "%s | BrewPilot",
  },
  description: siteConfig.description,
  applicationName: "BrewPilot",
  openGraph: {
    type: "website",
    siteName: "BrewPilot",
    title: "BrewPilot — Automation, under your control",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "BrewPilot — Automation, under your control",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#08090d" }, { media: "(prefers-color-scheme: light)", color: "#f6f7fb" }],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
