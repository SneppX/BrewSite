import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, BookOpen, LockKeyhole, Monitor, ShieldCheck } from "lucide-react";

export const metadata = createPageMetadata({ title: "Documentation", description: "Technical documentation for BrewPilot, including setup, permissions, architecture, platform support, and the local-first security model.", path: "/docs" });

const sections = [
  { icon: BookOpen, title: "Getting started", description: "Understand the product, its components, and the current development status.", href: "/docs/getting-started" },
  { icon: ShieldCheck, title: "Security model", description: "Learn how permission policies, approval boundaries, and local execution fit together.", href: "/docs/security" },
  { icon: Monitor, title: "Platform support", description: "See the supported environments and the adapter roadmap.", href: "/#platforms" },
  { icon: LockKeyhole, title: "Permissions", description: "Understand deny-by-default behavior and exact-scope approvals.", href: "/docs/permissions" },
  { icon: ShieldCheck, title: "Architecture", description: "See how ChatGPT, cloud requests, and local authorization fit together.", href: "/docs/architecture" },
];

export default function DocsPage() {
  return <section className="subpage-section"><div className="container subpage-container"><div className="eyebrow">BREWPILOT KNOWLEDGE BASE</div><h1 className="subpage-title">Documentation<span className="gradient-text">.</span></h1><p className="subpage-lead">Clear guidance for understanding BrewPilot, its security boundaries, and its evolving capabilities.</p><div className="doc-card-grid">{sections.map(({ icon: Icon, title, description, href }) => <Link className="doc-card" href={href} key={title}><span className="doc-card-icon"><Icon size={20} /></span><h2>{title}</h2><p>{description}</p><span className="text-link">Read guide <ArrowRight size={14} /></span></Link>)}</div><div className="notice-panel"><strong>Documentation status</strong><p>This documentation describes the current product direction. Features marked as in development are not yet available in a released build.</p></div></div></section>;
}
