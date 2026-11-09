import type { ReactNode } from "react";
import "./site-frame.scss";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div id="content">{children}</div>
      <footer className="site-footer">
        <p>© 2026 Sophia Fusco. All rights reserved. The work is not free to use.</p>
      </footer>
    </>
  );
}
