import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../SmoothScrolling"; 

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

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
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {/* @ts-ignore: Bypassing React 19 type mismatch with Lenis */}
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}