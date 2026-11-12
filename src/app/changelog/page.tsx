import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";

export const metadata = createPageMetadata({ title: "Changelog", description: "Read dated BrewPilot engineering updates, source changes, release notes, and product development progress.", path: "/changelog" });

export default function ChangelogPage() {
  return (
    <section className="subpage-section">
      <div className="container subpage-container">
        <div className="eyebrow">Engineering notes</div>
        <h1 className="subpage-title">Changelog<span className="gradient-text">.</span></h1>
        <p className="subpage-lead">Dated changes to the repositories. These entries describe engineering work, not a public software release unless stated otherwise.</p>

        <div className="timeline-entry">
          <div className="timeline-icon"><GitCommitHorizontal size={18} /></div>
          <div>
            <span className="timeline-date">11 November 2026 · Website</span>
            <h2>Reworked the product presentation</h2>
            <p>Replaced generic promotional language and neon styling with a quieter visual system. The homepage now labels repository-level capabilities accurately and distinguishes implementation from release availability.</p>
            <ul>
              <li>Revised security, permissions, architecture, and roadmap documentation.</li>
              <li>Added direct links to the local and cloud source repositories.</li>
              <li>Removed a duplicate feature-request link and clarified download status.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-icon"><GitCommitHorizontal size={18} /></div>
          <div>
            <span className="timeline-date">11 November 2026 · Cloud source</span>
            <h2>Added the device-pairing core</h2>
            <p>The cloud MCP repository now contains a pairing service that generates 128-bit one-time codes, stores only their hashes, binds enrollment to an Ed25519 public key, and expires codes after five minutes.</p>
            <ul>
              <li>Requires atomic code consumption and device registration from the persistence adapter.</li>
              <li>Adds tests for expiry, replay, key validation, and concurrent completion.</li>
              <li>Closes an authorization gap that could have let application-level grants reach privileged operations.</li>
            </ul>
            <p>The database adapter, authenticated relay, and Sites hosting adapter are still pending.</p>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-icon"><GitCommitHorizontal size={18} /></div>
          <div>
            <span className="timeline-date">November 2026 · Local source</span>
            <h2>Expanded permission-gated file operations</h2>
            <p>The BrewLocal source repository contains bounded UTF-8 file creation, overwrite, and deletion tools, with exact-path permission checks, symlink rejection, and fresh confirmation for destructive changes.</p>
            <p>These source changes have not been packaged into the existing private plugin release.</p>
          </div>
        </div>

        <div className="notice-panel">
          <strong>Public releases</strong>
          <p>There are no public installers published yet. Binary release notes and checksums will appear here after artifacts are built and verified.</p>
          <Link className="text-link" href="/downloads">View download status <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}
