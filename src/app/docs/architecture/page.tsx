import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Cloud, Laptop, ShieldCheck } from "lucide-react";

export const metadata = createPageMetadata({ title: "Architecture", description: "Explore BrewPilot's architecture: assistant-facing MCP tools, signed request boundaries, cloud coordination, and local authorization.", path: "/docs/architecture" });

const layers = [
  {
    icon: Cloud,
    title: "Assistant-facing cloud layer",
    body: "The intended ChatGPT Sites MCP service will expose a small set of account-scoped tools for device management and operation requests. The server factory and pairing core exist in source; the Sites hosting adapter and production service are not deployed.",
  },
  {
    icon: ShieldCheck,
    title: "Signed request boundary",
    body: "The protocol binds a request to a device, request ID, operation, resource, canonical argument digest, nonce, and short expiry. A valid signature proves integrity. It does not grant local permission.",
  },
  {
    icon: Laptop,
    title: "Local agent and policy engine",
    body: "The local agent is intended to initiate the network connection, verify each request, and independently apply local permission rules. The operating system remains the final authority for protected actions.",
  },
];

export default function ArchitecturePage() {
  return (
    <section className="subpage-section">
      <div className="container subpage-container">
        <Link className="text-link" href="/docs"><ArrowLeft size={14} /> Documentation</Link>
        <div className="eyebrow">System design</div>
        <h1 className="subpage-title">Architecture<span className="gradient-text">.</span></h1>
        <p className="subpage-lead">BrewPilot is split into separate trust domains. The assistant requests work; the local agent decides whether it may run.</p>
        <div className="doc-card-grid">
          {layers.map(({ icon: Icon, title, body }, index) => (
            <article className="doc-card" key={title}>
              <span className="doc-card-icon"><Icon size={20} /></span>
              <span className="feature-index">0{index + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="notice-panel">
          <strong>Implementation status</strong>
          <p>The signed-request protocol, local policy engine, bridge dispatcher, and cloud pairing core exist in source. The durable pairing database, authenticated outbound relay, request queue, Sites hosting adapter, and native desktop operations are not yet verified end to end.</p>
        </div>
        <h2 className="subpage-title" style={{ fontSize: "1.6rem", marginTop: "3rem" }}>Security invariants</h2>
        <ul className="prose-list">
          <li>Unmatched local capabilities are denied.</li>
          <li>Cloud approval never overrides local policy.</li>
          <li>One-time approvals are bound to exact arguments and expire quickly.</li>
          <li>Destructive and consequential external actions require fresh confirmation. Privileged actions require a separate operating-system consent flow and remain blocked until it exists.</li>
          <li>Private files, browser content, secrets, and command output are excluded from audit records by default.</li>
        </ul>
        <Link className="text-link" href="/docs/security">Read the security model <ArrowRight size={14} /></Link>
      </div>
    </section>
  );
}
