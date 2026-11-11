import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Changelog", description: "BrewPilot development and release updates." };

export default function ChangelogPage() {
  return <section className="subpage-section"><div className="container subpage-container"><div className="eyebrow">WHAT'S CHANGING</div><h1 className="subpage-title">Changelog<span className="gradient-text">.</span></h1><p className="subpage-lead">A transparent record of shipped changes and development milestones.</p><div className="timeline-entry"><div className="timeline-icon"><GitCommitHorizontal size={18} /></div><div><span className="timeline-date">November 2026 · Project foundation</span><h2>BrewPilot ecosystem development begins</h2><p>The separate cloud integration and product website repositories are established. The existing local plugin remains independent and is preserved.</p><ul><li>Defined cloud/local trust boundaries.</li><li>Established the website frontend foundation.</li><li>Started security and permissions documentation.</li></ul></div></div><div className="notice-panel"><strong>Release history</strong><p>Published binary releases will be listed here when they are available. Development milestones are not installable releases.</p><Link className="text-link" href={siteConfig.repositories.releases} target="_blank" rel="noreferrer">Open GitHub releases <ArrowUpRight size={14} /></Link></div></div></section>;
}
