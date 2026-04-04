import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Figtree } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import BgWrapper from "@/lib/bg-wrapper";
import Header from "@/components/header";

const figtreeHeading = Figtree({ subsets: ["latin"], variable: "--font-heading" });
const merriweather = Merriweather({ subsets: ["latin"], variable: "--font-serif" });
const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anirudh",
  description: "Vedala Anirudh's personal portfolio website",
  icons: '/favicon.png',
  openGraph: {
    type: "website",
    url: "https://17anirudh.vercel.app/",
    title: "Anirudh",
    description: "Vedala Anirudh's personal portfolio website",
    images: [{ url: "https://raw.githubusercontent.com/17anirudh/anirudhh/main/public/landing.png" }]
  }
};

type Props = { children: ReactNode }

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className={`h-full antialiased ${geistSans.variable} ${geistMono.variable} font-serif ${merriweather.variable} ${figtreeHeading.variable}`}>
      <body className="min-h-screen w-screen overflow-x-hidden flex flex-col relative bg-accent-foreground text-muted">
        <BgWrapper />
        <Header />
        <main className="flex-1 z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
