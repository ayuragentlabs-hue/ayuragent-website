import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

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
  title: "AyurAgent Labs — A growth studio for Ayurveda",
  description:
    "Brand, web, campaigns and automation for Ayurveda clinics, retreats and practitioners. We build the patient acquisition systems that fill your consultation calendar.",
  openGraph: {
    title: "AyurAgent Labs — A growth studio for Ayurveda",
    description:
      "Patient acquisition systems for Ayurveda clinics, retreats and practitioners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
