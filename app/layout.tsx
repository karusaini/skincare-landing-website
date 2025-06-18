import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skincare Landing Page",
  description: "Glow naturally with premium skincare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
