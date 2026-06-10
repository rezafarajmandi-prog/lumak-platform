import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';

// فونت فارسی Peyda
const peyda = localFont({
  src: [
    { path: '../../public/fonts/Peyda-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Peyda-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-peyda',
  display: 'swap',
});

// فونت فارسی Dana
const dana = localFont({
  src: [
    { path: '../../public/fonts/Dana-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Dana-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-dana',
  display: 'swap',
});

// فونت لاتین Inter
const inter = localFont({
  src: [
    { path: '../../public/fonts/Inter-Regular.woff', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Inter-SemiBold.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
});

// فونت لاتین DIN Pro
const dinPro = localFont({
  src: [
    { path: '../../public/fonts/DINProRegular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/DINProBold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-din',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: "LUMAK — معماری نور", template: "%s | LUMAK" },
  description: "نورپردازی معماری مهندسی‌شده آلمان...",
  keywords: ["نورپردازی معماری", "LED خطی", "BIM نورپردازی", "LUMAK"],
  openGraph: {
    title: "LUMAK — معماری نور",
    description: "نورپردازی معماری دقیق...",
    url: "https://lumak.ir",
    siteName: "LUMAK",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "fa_IR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${peyda.variable} ${dana.variable} ${inter.variable} ${dinPro.variable}`}
    >
      <body
        className="min-h-screen flex flex-col bg-page text-primary"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}