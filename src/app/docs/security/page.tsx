import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Security model", description: "Understand BrewPilot's local-first security model, deny-by-default permissions, request verification, and current implementation boundaries.", path: "/docs/security" });

export default function SecurityPage() {
  return (
    <article className="container article-layout">
      <div className="eyebrow">Documentation / Security</div>
      <h1 className="article-title">Security model</h1>
      <p className="article-lead">
        BrewPilot separates assistant requests, cloud coordination, local authorization, and operating-system execution. Each boundary has a distinct responsibility.
      </p>

      <h2>Rules enforced by the local source</h2>
      <ul>
        <li><strong>Deny by default.</strong> An unmatched capability, operation, or resource receives no permission.</li>
        <li><strong>Least privilege.</strong> Policies should target the narrowest practical capability, operation, and resource.</li>
        <li><strong>Local enforcement.</strong> The local permission manager evaluates an operation before it reaches a local handler.</li>
        <li><strong>Fresh confirmation.</strong> Destructive and consequential external operations require a request-bound, one-time approval. A persistent allow rule cannot bypass this check.</li>
        <li><strong>Privileged actions stay blocked.</strong> Operating-system elevation is not available until a separate authorization adapter is implemented.</li>
        <li><strong>Untrusted content.</strong> Web pages, files, and tool output are data. They cannot grant themselves permission.</li>
      </ul>

      <h2>Cloud-to-local boundary</h2>
      <p>
        The intended design does not expose an unauthenticated inbound endpoint on a user&apos;s machine. The local agent should initiate an authenticated outbound connection, validate each request, and independently enforce local policy. A cloud-side approval must never override a local denial.
      </p>

      <h2>Credentials and audit data</h2>
      <p>
        Device credentials should be revocable and stored using platform-appropriate secure storage. Audit events should exclude secrets and avoid capturing page contents, file contents, or command output by default.
      </p>

      <div className="notice-panel">
        <strong>What is implemented, and what is not</strong>
        <p>
          The local repository contains permission checks, signed-request verification, an in-memory replay guard, and a transport-neutral dispatcher. Device pairing, durable replay storage, the authenticated outbound relay, cloud request queue, full native adapters, and a deployed cloud MCP service are not yet operational. This page distinguishes implemented controls from the target architecture.
        </p>
      </div>
    </article>
  );
}
