import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rosa Vale | Traditional Artist",
    template: "%s | Rosa Vale",
  },
  description:
    "Traditional artist portfolio featuring studies, seasonal work, and commissions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="site-shell">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
