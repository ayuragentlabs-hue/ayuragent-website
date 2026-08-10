import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/structured-data";
import SmoothScroll from "@/components/smooth-scroll";
import { SITE, SITE_URL } from "@/lib/site";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Ayurveda Marketer in Kerala | AyurAgent Labs",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  category: "Marketing agency",
  keywords: [
    "ayurveda marketing",
    "ayurveda marketing agency",
    "best ayurveda marketer",
    "ayurveda digital marketing Kerala",
    "ayurveda clinic marketing",
    "panchakarma centre marketing",
    "patient acquisition for clinics",
    "ayurveda SEO",
    "Meta ads for ayurveda clinics",
    "WhatsApp automation for clinics",
    "Malayalam content marketing",
    "AyurAgent Labs",
    "Aswin Reghu",
  ],
  authors: [{ name: SITE.founder.name }],
  creator: SITE.founder.name,
  publisher: SITE.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE.name,
    title: "Best Ayurveda Marketer in Kerala | AyurAgent Labs",
    description: SITE.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Ayurveda Marketer in Kerala | AyurAgent Labs",
    description: SITE.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let answer engines quote the page in full rather than truncating it.
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${interTight.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <StructuredData />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
