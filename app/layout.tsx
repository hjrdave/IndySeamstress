import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

// Confirmed from Figma's design tokens (get_variable_defs): body font is Inter.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Placeholder for the hero's script/cursive logo wordmark — Figma access
// wasn't available to pull the exact font family for this scaffolding pass.
// Verify against the live Figma node and swap if it doesn't match (#9).
const displayScript = Dancing_Script({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indy Seamstress",
  description: "Something Stitched, Something Sewn — Indianapolis, IN.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${displayScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
