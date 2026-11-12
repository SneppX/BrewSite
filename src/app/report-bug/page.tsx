import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight, Bug, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({ title: "Report a bug", description: "Report a BrewPilot or BrewSite bug with reproducible steps, environment details, and safe diagnostic information.", path: "/report-bug" });

export default function ReportBugPage() {
  return <section className="subpage-section"><div className="container subpage-container"><div className="eyebrow">HELP US IMPROVE</div><h1 className="subpage-title">Report a bug<span className="gradient-text">.</span></h1><p className="subpage-lead">Share a reproducible problem with the product or website. Reports are handled through GitHub Issues.</p><div className="report-panel"><div className="report-icon"><Bug size={22} /></div><div><h2>Before you submit</h2><ul><li>Check whether the issue has already been reported.</li><li>Include the product version and operating system.</li><li>Describe expected behavior and what actually happened.</li><li>Include safe reproduction steps and relevant redacted logs.</li></ul><div className="security-warning"><ShieldAlert size={17} /><span>Never include passwords, access tokens, cookies, MFA codes, private keys, personal data, or unredacted screenshots.</span></div><Link className="button button-primary" href={siteConfig.repositories.issues + "/new?template=bug_report.yml"} target="_blank" rel="noreferrer">Open bug report <ArrowUpRight size={15} /></Link></div></div></div></section>;
}
