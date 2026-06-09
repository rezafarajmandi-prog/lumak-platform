import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LUMAK — Architecting Light",
    template: "%s | LUMAK",
  },
  description:
    "German-engineered architectural lighting for specification-grade projects. Explore linear, track, recessed, and wall-washer luminaires with BIM support.",
  keywords: ["architectural lighting", "specification grade", "linear LED", "BIM lighting", "LUMAK"],
  openGraph: {
    title: "LUMAK — Architecting Light",
    description: "Precision architectural lighting for projects that demand performance.",
    url: "https://lumak.com",
    siteName: "LUMAK",
    images: [
      {
        url: "/og-image.jpg", // بعداً اضافه کن
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-graphite text-warmwhite font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}