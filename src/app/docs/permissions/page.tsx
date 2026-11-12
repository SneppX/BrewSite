import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Permissions", description: "Learn how BrewPilot scopes local automation permissions, handles destructive actions, and enforces least privilege.", path: "/docs/permissions" });

export default function PermissionsPage() {
  return (
    <article className="container article-layout">
      <div className="eyebrow">Documentation / Permissions</div>
      <h1 className="article-title">Permissions</h1>
      <p className="article-lead">
        Local permission decisions are scoped to a capability, operation, and resource. A broad grant should never be the easiest path.
      </p>

      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Mode</th><th>Behavior</th><th>Typical use</th></tr></thead>
          <tbody>
            <tr><td>deny</td><td>Always blocks the matching request.</td><td>Untrusted or unwanted operations.</td></tr>
            <tr><td>ask</td><td>Requires explicit approval for each request.</td><td>New or sensitive capabilities.</td></tr>
            <tr><td>session</td><td>Allows an exact scoped request during the active session after approval.</td><td>Repeated low-risk task steps.</td></tr>
            <tr><td>always</td><td>Allows the exact configured scope persistently, except actions that always require fresh confirmation.</td><td>Trusted, low-risk repetitive operations.</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Actions that need a fresh decision</h2>
      <p>
        Destructive operations and consequential external actions require a new, request-bound confirmation. This includes overwriting or deleting files and sending or publishing data outside the device. A persistent policy cannot silently authorize these actions.
      </p>

      <h2>Operating-system privileges</h2>
      <p>
        Administrator access, protected resources, and other elevated operations are a separate authorization domain. Application-level one-time, session, or persistent grants cannot authorize them. These operations remain blocked until a platform-specific authorization adapter and operating-system consent flow are implemented.
      </p>

      <h2>Policy changes</h2>
      <p>
        Permission changes should be visible, auditable, and reversible. Resetting policy must return the system to deny-by-default behavior.
      </p>
    </article>
  );
}
