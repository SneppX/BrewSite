import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Command, Fingerprint, Laptop, LockKeyhole, ShieldCheck, Sparkles, Terminal, Workflow } from "lucide-react";
import { siteConfig } from "@/config/site";

const features = [
  { icon: Workflow, title: "Browser workflows", description: "Navigate, inspect, interact with, and automate supported browser sessions through deliberate, permission-aware actions." },
  { icon: Laptop, title: "Local computer operations", description: "A cross-platform local agent is being built for carefully scoped operations on Windows, macOS, and Linux." },
  { icon: ShieldCheck, title: "Permissions first", description: "Explicit policies, exact-resource approvals, and a deny-by-default posture keep the user in control." },
  { icon: Terminal, title: "Built for real workflows", description: "Bring repeatable browser and computer tasks into one consistent assistant workflow." },
  { icon: Fingerprint, title: "Traceable actions", description: "A structured audit trail is part of the architecture, with sensitive values excluded from recorded events." },
  { icon: Command, title: "You stay in control", description: "Sensitive, destructive, and elevated operations are designed to require fresh confirmation." },
];

const principles = ["Deny by default", "Least-privilege access", "Explicit approvals", "Local execution boundary", "Auditable decisions", "Cross-platform adapters"];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> A new standard for controlled automation</div>
            <h1>Automation.<br /><span className="gradient-text">Under your control.</span></h1>
            <p className="hero-description">BrewPilot brings browser workflows and authorized computer operations into one assistant-ready workspace. You decide what it can do.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/docs">Explore documentation <ArrowRight size={17} /></Link>
              <Link className="button button-quiet" href={siteConfig.repositories.product} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={16} /></Link>
            </div>
            <div className="hero-proof"><span><Check size={14} /> Permission-first design</span><span><Check size={14} /> Windows · macOS · Linux</span></div>
          </div>
          <div className="hero-visual" aria-label="Abstract BrewPilot automation interface illustration">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-glow" />
            <div className="terminal-card">
              <div className="terminal-top"><div className="window-dots"><i /><i /><i /></div><span>brewpilot / session</span><span className="terminal-live">● LIVE</span></div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="terminal-prompt">›</span> request <b>browser.navigate</b></div>
                <div className="terminal-line terminal-muted">resource: docs.example.com</div>
                <div className="permission-card"><div className="permission-icon"><LockKeyhole size={17} /></div><div><strong>Permission required</strong><span>Review this exact action before it runs.</span></div><span className="permission-pill">ASK</span></div>
                <div className="terminal-line terminal-success"><Check size={14} /> Approved for this action only</div>
                <div className="terminal-line"><span className="terminal-prompt">›</span> workflow <b>completed</b><span className="terminal-cursor" /></div>
              </div>
            </div>
            <div className="floating-chip chip-top"><ShieldCheck size={15} /> Permission aware</div>
            <div className="floating-chip chip-bottom"><Sparkles size={15} /> Human in control</div>
          </div>
        </div>
        <Link href="#features" className="scroll-cue"><span>Discover BrewPilot</span><ArrowDown size={15} /></Link>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>DESIGNED AROUND</span>{principles.map((item) => <span key={item}>{item}</span>)}</div></section>

      <section className="section section-features" id="features">
        <div className="container">
          <div className="section-heading"><div className="eyebrow">CAPABILITIES</div><h2>Powerful workflows.<br /><span className="muted-heading">Clear boundaries.</span></h2><p>One product direction, three clear priorities: useful automation, explicit control, and a trustworthy local execution boundary.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, description }, index) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={20} strokeWidth={1.7} /></div><span className="feature-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="feature-line" /></article>)}</div>
        </div>
      </section>

      <section className="section security-section" id="security">
        <div className="container security-layout">
          <div className="security-copy"><div className="eyebrow">CONTROL IS THE FEATURE</div><h2>Nothing happens<br />without <span className="gradient-text">a boundary.</span></h2><p>BrewPilot is being designed around a simple rule: an assistant should never receive more authority than the task requires. Local operations remain behind a separate, user-controlled bridge.</p><Link className="text-link" href="/docs/security">Read the security model <ArrowUpRight size={15} /></Link></div>
          <div className="security-panel"><div className="panel-header"><ShieldCheck size={18} /><span>Permission policy</span><span className="panel-indicator">ENFORCED</span></div><div className="policy-row"><span className="policy-symbol">01</span><div><strong>Unmatched request</strong><small>No explicit policy found</small></div><span className="policy-state state-deny">DENY</span></div><div className="policy-row"><span className="policy-symbol">02</span><div><strong>Scoped operation</strong><small>Exact capability and resource</small></div><span className="policy-state state-ask">ASK</span></div><div className="policy-row"><span className="policy-symbol">03</span><div><strong>Destructive action</strong><small>Fresh confirmation required</small></div><span className="policy-state state-ask">CONFIRM</span></div><div className="panel-foot"><span className="status-dot" /> User authority remains local</div></div>
        </div>
      </section>

      <section className="section platform-section" id="platforms">
        <div className="container"><div className="section-heading centered"><div className="eyebrow">YOUR MACHINE, YOUR CHOICE</div><h2>One experience.<br /><span className="muted-heading">Three platforms.</span></h2><p>The local agent architecture targets the operating systems people actually use.</p></div><div className="platform-grid"><div className="platform-card"><div className="platform-symbol">⊞</div><h3>Windows</h3><span>Native adapter in development</span></div><div className="platform-card"><div className="platform-symbol">⌘</div><h3>macOS</h3><span>Native adapter in development</span></div><div className="platform-card"><div className="platform-symbol">◈</div><h3>Linux</h3><span>Native adapter in development</span></div></div></div>
      </section>

      <section className="cta-section"><div className="container cta-inner"><div className="eyebrow">FOLLOW THE BUILD</div><h2>Automation should<br /><span className="gradient-text">answer to you.</span></h2><p>Explore the architecture, follow development, or help shape what comes next.</p><div className="hero-actions"><Link className="button button-primary" href="/docs">Read the docs <ArrowRight size={16} /></Link><Link className="button button-quiet" href={siteConfig.repositories.issues} target="_blank" rel="noreferrer">Share feedback <ArrowUpRight size={15} /></Link></div></div></section>
    </>
  );
}
