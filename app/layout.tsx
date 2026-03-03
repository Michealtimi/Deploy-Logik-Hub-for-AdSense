import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// 1. Setup the font
const inter = Inter({ subsets: ["latin"] });

// 2. Setup the "Identity" (Metadata) for Google
export const metadata: Metadata = {
  title: "Logik Systems | AI & Digital Utility Hub",
  description: "The central home for Logik AI Visibility Audit, World Cup 2026 Tracking, and Driving SaaS solutions.",
  keywords: ["AI Audit", "World Cup 2026", "SaaS", "Logik Systems"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 3. The AdSense Script - REMEMBER: Replace YOUR_ADSENSE_ID with your actual ca-pub number! */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3191981833978007"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}