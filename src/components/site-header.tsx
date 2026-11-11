"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link href="/" className="brand" aria-label="BrewPilot home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><span /></span>
          <span>brew<span className="brand-accent">pilot</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="button button-small button-primary header-cta" href={siteConfig.repositories.product} target="_blank" rel="noreferrer">
            Explore project <ArrowUpRight size={15} />
          </Link>
          <button className="mobile-menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav container" aria-label="Mobile navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <Link href={siteConfig.repositories.product} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Explore project <ArrowUpRight size={15} /></Link>
        </nav>
      )}
    </header>
  );
}
