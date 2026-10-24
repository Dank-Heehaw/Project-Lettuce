"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/#works" },
  { label: "Studies", href: "/#studies" },
  { label: "Journal", href: "/about" },
  { label: "Contact", href: "/about#contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand" href="/" aria-label="Rosa Vale — home">
            <span className="brand-mark" aria-hidden="true">
              RV
            </span>
            <span className="brand-text">
              <strong>Rosa Vale</strong>
              <span>Traditional artist</span>
            </span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`menu-backdrop ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      <aside
        id="site-menu"
        className={`menu-panel ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Slide out menu"
      >
        <div className="menu-panel-header">
          <Link className="brand brand--panel" href="/" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              RV
            </span>
            <span className="brand-text">
              <strong>Rosa Vale</strong>
              <span>Traditional artist</span>
            </span>
          </Link>

          <button
            type="button"
            className="menu-close"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="menu-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.label} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="menu-meta">
          <p className="eyebrow">Availability</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </aside>
    </>
  );
}
