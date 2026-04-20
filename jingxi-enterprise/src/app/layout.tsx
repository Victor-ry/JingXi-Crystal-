import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavigationBar } from "@/app/navbar";
import { Footer } from "@/app/footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JX Enterprise",
  description: "Renovation and construction services in Johor Bahru",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    ],
    shortcut: "/favicon-96x96.png",
  },
  robots: "index, follow",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fffcfc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Bar */}
        <NavigationBar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
