import type { Metadata } from "next";
import { CheckCircle2, CircleDashed, Clock3 } from "lucide-react";

export const metadata: Metadata = { title: "Roadmap", description: "BrewPilot development milestones and planned capabilities." };

const milestones = [
  {
    title: "Local browser automation",
    status: "complete",
    label: "Existing local release",
    items: ["Chromium-based browser sessions", "Isolated persistent browser profiles", "Permission-gated browser operations", "Basic system information"],
  },
  {
    title: "Secure cloud and bridge foundation",
    status: "progress",
    label: "In progress",
    items: ["Signed request envelope and replay protection", "Request-bound local permission approvals", "Strict assistant-facing tool contracts", "Local bridge dispatch boundary and redacted audit foundation"],
  },
  {
    title: "Cross-platform system capabilities",
    status: "planned",
    label: "Planned",
    items: ["Windows native adapter", "macOS native adapter with TCC compliance", "Linux desktop and Wayland-aware adapter", "Window, file, and process management"],
  },
  {
    title: "Cloud integration and device management",
    status: "planned",
    label: "Planned",
    items: ["ChatGPT Sites MCP hosting adapter", "Secure device pairing and revocation", "Authenticated outbound device relay", "Request cancellation and connection controls"],
  },
  {
    title: "Release and ecosystem",
    status: "planned",
    label: "Planned",
    items: ["Verified platform installers and checksums", "Public release notes and update guidance", "Expanded documentation and integration tests", "Security review before broader availability"],
  },
];

const statusIcon = {
  complete: CheckCircle2,
  progress: Clock3,
  planned: CircleDashed,
};

export default function RoadmapPage() {
  return (
    <section className="subpage-section">
      <div className="container subpage-container">
        <div className="eyebrow">THE BUILD PLAN</div>
        <h1 className="subpage-title">Roadmap<span className="gradient-text">.</span></h1>
        <p className="subpage-lead">A living view of what exists, what is being built, and what is still planned. A roadmap item is not a shipped feature.</p>
        <div className="roadmap-list">
          {milestones.map((milestone, index) => {
            const Icon = statusIcon[milestone.status as keyof typeof statusIcon];
            return (
              <article className="roadmap-item" key={milestone.title}>
                <div className={"roadmap-marker roadmap-" + milestone.status}><Icon size={18} /></div>
                <div className="roadmap-content">
                  <div className="roadmap-meta"><span>PHASE 0{index + 1}</span><span>{milestone.label}</span></div>
                  <h2>{milestone.title}</h2>
                  <ul>{milestone.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
