import type { Metadata } from "next";
import { Inter, Alex_Brush, Inria_Serif } from "next/font/google";
import { StickyFacebookBadge } from "@/components/sticky-facebook-badge";
import { StickyMessengerButton } from "@/components/sticky-messenger-button";
import "./globals.css";

// Confirmed from Figma get_design_context (#9): body/contact-detail font is Inter.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Confirmed from Figma get_design_context (#9): the "Indy Seamstress" hero
// wordmark uses Alex Brush.
const displayScript = Alex_Brush({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

// Confirmed from Figma get_design_context (#9): headings/taglines/buttons use
// Inria Serif.
const inriaSerif = Inria_Serif({
  weight: ["400", "700"],
  variable: "--font-heading",
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
      className={`${inter.variable} ${displayScript.variable} ${inriaSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <StickyFacebookBadge />
        <StickyMessengerButton />
      </body>
    </html>
  );
}
