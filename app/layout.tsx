import type { Metadata } from "next";
import { Inter, Alex_Brush, Inria_Serif } from "next/font/google";
import { StickyFacebookBadge } from "@/components/sticky-facebook-badge";
import { StickyMessengerButton } from "@/components/sticky-messenger-button";
import { SITE_URL } from "@/lib/site-info";
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

const TITLE = "Indy Seamstress | Bridal & Dress Alterations in Indianapolis, IN";
const DESCRIPTION =
  "Donna Pierce brings 40+ years of experience to bridal alterations, dress and clothing tailoring, heirloom gown restoration, and custom t-shirt quilts in Indianapolis, IN.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "seamstress Indianapolis",
    "bridal alterations Indianapolis",
    "wedding dress alterations",
    "tailoring Indianapolis",
    "custom t-shirt quilts",
    "heirloom gown restoration",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Indy Seamstress",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
