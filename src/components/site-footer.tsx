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
          <p className="footer-copy">Automation, under your control.</p>
        </div>
        <div className="footer-links">
          <div><span className="footer-label">Explore</span><Link href="/docs">Documentation</Link><Link href="/changelog">Changelog</Link><Link href="/downloads">Downloads</Link></div>
          <div><span className="footer-label">Community</span><Link href={siteConfig.repositories.issues} target="_blank" rel="noreferrer">Report an issue</Link><Link href={siteConfig.repositories.website} target="_blank" rel="noreferrer">Website source</Link><Link href={siteConfig.repositories.product} target="_blank" rel="noreferrer">Product source</Link></div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.company}. Built with care.</span>
        <Link href={siteConfig.repositories.website} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></Link>
      </div>
    </footer>
  );
}
