import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Cloud, Laptop, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Architecture", description: "How BrewPilot separates ChatGPT tools, cloud coordination, and local execution." };

const layers = [
  { icon: Cloud, title: "ChatGPT Site and cloud MCP", body: "The Site-hosted MCP layer exposes narrowly scoped tools to ChatGPT. It is responsible for authenticated user context, pairing workflows, request routing, and redacted cloud-side metadata." },
  { icon: ShieldCheck, title: "Signed request boundary", body: "Each remote request is bound to a device, request ID, operation, exact resource, canonical argument digest, nonce, and short expiry. Signatures prove request integrity; they do not grant local permission." },
  { icon: Laptop, title: "Local agent and policy engine", body: "The local agent initiates outbound connections, verifies each request, and independently applies local permission rules. The operating system remains the final authority for protected actions." },
];

export default function ArchitecturePage() {
  return <section className="subpage-section"><div className="container subpage-container"><Link className="text-link" href="/docs"><ArrowLeft size={14} /> Documentation</Link><div className="eyebrow">SYSTEM DESIGN</div><h1 className="subpage-title">Architecture<span className="gradient-text">.</span></h1><p className="subpage-lead">BrewPilot separates the assistant-facing cloud interface from the machine that performs local work.</p><div className="doc-card-grid">{layers.map(({ icon: Icon, title, body }, index) => <article className="doc-card" key={title}><span className="doc-card-icon"><Icon size={20} /></span><span className="feature-index">0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</div><div className="notice-panel"><strong>Development status</strong><p>The signed-request protocol and local permission foundations are under development. The outbound relay, durable pairing service, Site-hosted MCP publication, and native desktop operations are not yet a verified end-to-end release.</p></div><h2 className="subpage-title" style={{ fontSize: "1.6rem", marginTop: "3rem" }}>Security invariants</h2><ul className="prose-list"><li>Unmatched local capabilities are denied.</li><li>Cloud approval never overrides local policy.</li><li>One-time approvals are bound to exact arguments and expire quickly.</li><li>Destructive, privileged, and consequential external actions require fresh confirmation.</li><li>Private files, browser content, secrets, and command output are excluded from audit records by default.</li></ul><Link className="text-link" href="/docs/security">Read the security model <ArrowRight size={14} /></Link></div></section>;
}
