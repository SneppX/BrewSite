import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Check, FileText, FolderOpen, GitBranch,
  Globe2, KeyRound, LockKeyhole, Monitor, ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { MotionReveal } from "@/components/motion-reveal";

const capabilities = [
  { icon: Globe2, number: "01", title: "Browser automation", description: "A local MCP server can launch an isolated Chromium session, inspect pages, interact with visible controls, and extract structured page data.", status: "Implemented in source" },
  { icon: FolderOpen, number: "02", title: "Scoped file tools", description: "List directories and read, create, overwrite, or delete bounded UTF-8 text files. Operations are limited to explicit local paths.", status: "Implemented in source" },
  { icon: KeyRound, number: "03", title: "Local permission checks", description: "A deny-by-default policy engine evaluates capability, operation, resource, and risk before a local action can run.", status: "Implemented in source" },
  { icon: GitBranch, number: "04", title: "Signed request foundation", description: "The repositories contain canonical request envelopes, signature verification, expiry checks, and replay-protection foundations.", status: "Foundation in place" },
  { icon: FileText, number: "05", title: "Minimal audit records", description: "Local decisions can be recorded without placing file contents, secrets, or raw command output into audit events.", status: "Implemented in source" },
  { icon: Monitor, number: "06", title: "Cross-platform groundwork", description: "The project is tested across Windows, macOS, and Linux. Native operating-system control adapters remain in development.", status: "In development" },
];

const principles = ["Local policy is authoritative", "Exact-resource permissions", "Fresh confirmation for risky actions", "No public inbound listener"];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow">A local-first automation project</div>
            <h1>Useful automation.<br /><span className="gradient-text">Clear permission.</span></h1>
            <p className="hero-description">BrewPilot is being built around a simple boundary: an assistant can request an action, but the local machine decides whether that action is allowed.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/docs">Read the documentation <ArrowRight size={17} /></Link>
              <Link className="button button-quiet" href={siteConfig.repositories.local} target="_blank" rel="noreferrer">Explore the source <ArrowUpRight size={16} /></Link>
            </div>
            <div className="hero-proof">
              <span><Check size={14} /> Local permission enforcement</span>
              <span><Check size={14} /> Windows, macOS and Linux CI</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustrative BrewPilot permission review">
            <div className="terminal-card">
              <div className="terminal-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>Example · local permission review</span>
                <span className="terminal-live">ILLUSTRATION</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="terminal-prompt">›</span> request <b>files.write</b></div>
                <div className="terminal-line terminal-muted">resource: /workspace/notes.txt</div>
                <div className="permission-card">
                  <div className="permission-icon"><LockKeyhole size={17} /></div>
                  <div><strong>Review this operation</strong><span>Exact path and action are shown before approval.</span></div>
                  <span className="permission-pill">ASK</span>
                </div>
                <div className="terminal-line terminal-success"><Check size={14} /> One-time approval · exact request</div>
                <div className="terminal-line"><span className="terminal-prompt">›</span> local policy <b>allows this request</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>DESIGN PRINCIPLES</span>{principles.map((item) => <span key={item}>{item}</span>)}</div></section>

      <section className="section section-features" id="features">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">What exists today</div>
            <h2>Built in layers.<br /><span className="muted-heading">Verified in the open.</span></h2>
            <p>These are repository-level implementation details, not promises that every component is already packaged in a public release.</p>
          </div>
          <MotionReveal><div className="feature-grid">{capabilities.map(({ icon: Icon, number, title, description, status }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon"><Icon size={20} strokeWidth={1.7} /></div>
              <span className="feature-index">{number}</span>
              <h3>{title}</h3><p>{description}</p><span className="capability-status">{status}</span>
            </article>
          ))}</div></MotionReveal>
        </div>
      </section>

      <section className="section security-section" id="security">
        <div className="container security-layout">
          <div className="security-copy">
            <div className="eyebrow">The security boundary</div>
            <h2>The assistant asks.<br /><span className="gradient-text">Your machine decides.</span></h2>
            <p>Cloud-side approval is never enough. The local permission manager checks the requested capability, operation, and resource before dispatch. Destructive and consequential external actions require fresh, request-bound confirmation. Privileged operating-system actions remain unavailable until a separate authorization adapter exists.</p>
            <Link className="text-link" href="/docs/security">Read the security model <ArrowUpRight size={15} /></Link>
          </div>
          <MotionReveal className="security-panel">
            <div className="security-panel-inner">
              <div className="panel-header"><ShieldCheck size={18} /><span>Local policy decision</span><span className="panel-indicator">LOCAL</span></div>
              <div className="policy-row"><span className="policy-symbol">01</span><div><strong>No matching policy</strong><small>No permission is assumed</small></div><span className="policy-state state-deny">DENY</span></div>
              <div className="policy-row"><span className="policy-symbol">02</span><div><strong>Exact scoped operation</strong><small>Capability, action and resource match</small></div><span className="policy-state state-ask">CHECK</span></div>
              <div className="policy-row"><span className="policy-symbol">03</span><div><strong>Destructive or external action</strong><small>Fresh one-time approval required</small></div><span className="policy-state state-ask">ASK</span></div>
              <div className="panel-foot"><span className="status-dot" /> Local policy remains authoritative</div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="section platform-section" id="platforms">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">Platform work</div>
            <h2>One codebase.<br /><span className="muted-heading">Three test environments.</span></h2>
            <p>Automated checks run on Windows, macOS, and Linux. That is CI coverage, not a claim that every native operating-system adapter is finished.</p>
          </div>
          <div className="platform-grid">
            <div className="platform-card"><div className="platform-symbol">⊞</div><h3>Windows</h3><span>CI tested · native adapters in development</span></div>
            <div className="platform-card"><div className="platform-symbol">⌘</div><h3>macOS</h3><span>CI tested · native adapters in development</span></div>
            <div className="platform-card"><div className="platform-symbol">◈</div><h3>Linux</h3><span>CI tested · native adapters in development</span></div>
          </div>
        </div>
      </section>

      <section className="cta-section"><div className="container cta-inner">
        <div className="eyebrow">Follow the engineering work</div>
        <h2>Read the code.<br /><span className="gradient-text">Check the claims.</span></h2>
        <p>The cloud relay, device pairing, native system adapters, and public installers are still under development. Follow the repositories for implementation updates.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/docs">Read the docs <ArrowRight size={16} /></Link>
          <Link className="button button-quiet" href={siteConfig.repositories.issues} target="_blank" rel="noreferrer">Report an issue <ArrowUpRight size={15} /></Link>
        </div>
      </div></section>
    </>
  );
}
