import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "Project Lettuce",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
