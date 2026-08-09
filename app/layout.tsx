import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// We updated this path to look in the main folder where your file actually is!
import SmoothScrolling from "../SmoothScrolling"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AyurAgent Labs | Digital Growth",
  description: "Advanced patient acquisition frameworks for wellness clinics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-ignore: Bypassing React 19 type mismatch with Lenis */}
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}