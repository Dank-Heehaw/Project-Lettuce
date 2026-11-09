import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Permanent_Marker, Zilla_Slab } from "next/font/google";
import { SiteFrame } from "./components/site-frame/site-frame";
import "./tailwind.css";
import "./styles/globals.scss";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const slab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-slab",
  display: "swap",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sophia Fusco",
    template: "%s · Sophia Fusco",
  },
  description:
    "Portfolio of Sophia Fusco, The Hobby Collector — a traditional and multi-media artist in Vaughan, Ontario.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${slab.variable} ${marker.variable}`}
    >
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
