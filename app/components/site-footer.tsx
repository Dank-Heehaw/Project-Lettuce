import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link href="/" className="footer-brand">
          Rosa Vale <span aria-hidden="true">✦</span>
        </Link>
        <p>Traditional paintings, studies, and commissions.</p>
        <Link href="/#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
