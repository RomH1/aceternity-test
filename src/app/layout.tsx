import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "בסמח אלפא השתלמויות",
  description: "ברוכים הבאים לבסמח אלפא השתלמויות",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="w-full h-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {children}
        </div>
      </body>
    </html>
  );
}