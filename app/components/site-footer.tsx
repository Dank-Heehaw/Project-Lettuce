import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link href="/" className="footer-brand">
          Soph Fusco <span aria-hidden="true">✳</span>
        </Link>
        <p>Made thoughtfully, one detail at a time.</p>
        <Link href="/#home">Back to top ↑</Link>
      </div>
    </footer>
  );
}
