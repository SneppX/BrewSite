import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Request a feature" };

export default function RequestFeaturePage() {
  return <section className="subpage-section"><div className="container subpage-container"><div className="eyebrow">SHAPE WHAT COMES NEXT</div><h1 className="subpage-title">Request a feature<span className="gradient-text">.</span></h1><p className="subpage-lead">Tell us what workflow you want to improve, what is missing, and why it matters.</p><div className="report-panel"><div className="report-icon"><Lightbulb size={22} /></div><div><h2>Make your proposal useful</h2><ul><li>Describe the problem before prescribing a solution.</li><li>Explain who benefits and how often the workflow occurs.</li><li>Include an example of the expected experience.</li><li>Consider privacy, permissions, and platform differences.</li></ul><Link className="button button-primary" href={siteConfig.repositories.issues + "/new?template=feature_request.yml"} target="_blank" rel="noreferrer">Submit feature request <ArrowUpRight size={15} /></Link></div></div></div></section>;
}
