import type { Metadata } from "next";
import { CheckCircle2, CircleDashed, Clock3 } from "lucide-react";

export const metadata: Metadata = { title: "Roadmap", description: "BrewPilot engineering milestones, current implementation, and planned work." };

const milestones = [
  {
    title: "Existing local plugin",
    status: "complete",
    label: "Published privately",
    items: ["Chromium-based browser automation", "Isolated browser profiles", "Permission-gated browser operations", "Basic system information"],
  },
  {
    title: "Local agent source",
    status: "progress",
    label: "Source implementation",
    items: ["Bounded local file list and read operations", "Permission-gated text file creation, overwrite, and deletion", "Symlink rejection and atomic overwrite path", "Cross-platform CI checks for Windows, macOS, and Linux"],
  },
  {
    title: "Cloud protocol and pairing foundation",
    status: "progress",
    label: "Core in source · integration pending",
    items: ["Signed request envelope and local verification", "Deny-by-default cloud policy engine", "Single-use Ed25519 pairing core with hashed five-minute codes", "Persistent database adapter and durable request store still required"],
  },
  {
    title: "Cloud relay and ChatGPT integration",
    status: "planned",
    label: "Not deployed",
    items: ["Authenticated outbound connection from the local agent", "Durable request queue and cancellation propagation", "Official ChatGPT Sites MCP hosting adapter", "Device presence, revocation, and end-to-end integration tests"],
  },
  {
    title: "Native operating-system capabilities",
    status: "planned",
    label: "Not shipped",
    items: ["Windows native adapter", "macOS native adapter with TCC compliance", "Linux desktop and Wayland-aware adapter", "Window, process, and additional file-management operations"],
  },
  {
    title: "Verified public releases",
    status: "planned",
    label: "Release work pending",
    items: ["Signed platform installers and checksums", "Update and rollback guidance", "Independent security review", "Public release notes and support process"],
  },
];

const statusIcon = { complete: CheckCircle2, progress: Clock3, planned: CircleDashed };

export default function RoadmapPage() {
  return (
    <section className="subpage-section">
      <div className="container subpage-container">
        <div className="eyebrow">Engineering plan</div>
        <h1 className="subpage-title">Roadmap<span className="gradient-text">.</span></h1>
        <p className="subpage-lead">A working record of what is shipped, what exists in source, and what still needs to be built. Source code is not the same as a packaged release.</p>
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
