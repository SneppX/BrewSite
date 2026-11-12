import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };


export default function NotFound() {
  return <section className="subpage-section"><div className="container not-found"><div className="eyebrow">404 / NOT FOUND</div><h1 className="subpage-title">This page went<br /><span className="gradient-text">off the map.</span></h1><p className="subpage-lead">The page may have moved or does not exist.</p><Link className="button button-primary" href="/"><ArrowLeft size={16} /> Back to home</Link></div></section>;
}
