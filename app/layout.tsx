import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Modernism Final Project",
    template: "%s | Modernism Final Project",
  },
  description:
    "A micro-exhibit comparing WWI-era modernist responses through visual art and poetry.",
  applicationName: "Modernism Final Project",
  keywords: [
    "Modernism",
    "World War I",
    "Otto Dix",
    "Käthe Kollwitz",
    "Wilfred Owen",
    "Siegfried Sassoon",
    "W.B. Yeats",
    "Dada",
    "Trauma",
    "Memory",
  ],
  authors: [{ name: "Nik" }],
  openGraph: {
    title: "Modernism Final Project",
    description:
      "A micro-exhibit comparing rejection and healing responses to WWI in art and poetry.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modernism Final Project",
    description:
      "A micro-exhibit comparing rejection and healing responses to WWI in art and poetry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "min-h-screen",
          "text-slate-900",
          "bg-white", // fallback if a page doesn’t set its own bg
          "selection:bg-amber-200/60 selection:text-slate-900",
        ].join(" ")}
      >
        {/* Global wrapper (lightweight, doesn't conflict with your page layout) */}
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
