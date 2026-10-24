import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about#contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" href="/" aria-label="Soph Fusco — home">
          <span className="brand-mark" aria-hidden="true">
            sf
          </span>
          <span className="brand-text">
            <strong>Soph Fusco</strong>
            <span>Independent designer</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              className={item.label === "Contact" ? "nav-contact" : undefined}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="header-note">
          <span className="availability-dot" aria-hidden="true" />
          Open to good projects
        </span>
      </div>
    </header>
  );
}
