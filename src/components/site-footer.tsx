import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark"><span /></span>
            <span>brew<span className="brand-accent">pilot</span></span>
          </Link>
          <p className="footer-copy">Automation with explicit permission.</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Explore</span>
            <Link href="/docs">Documentation</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/downloads">Downloads</Link>
          </div>
          <div>
            <span className="footer-label">Project</span>
            <Link href="/report-bug">Report a bug</Link>
            <Link href="/request-feature">Request a feature</Link>
            <Link href={siteConfig.repositories.local} target="_blank" rel="noreferrer">Local source</Link>
            <Link href={siteConfig.repositories.cloud} target="_blank" rel="noreferrer">Cloud source</Link>
            <Link href={siteConfig.repositories.website} target="_blank" rel="noreferrer">Website source</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.company}. Independent software project.</span>
        <Link href={siteConfig.repositories.website} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></Link>
      </div>
    </footer>
  );
}
