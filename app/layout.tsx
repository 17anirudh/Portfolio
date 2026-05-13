import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Figtree } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/header";
import Grainient from "@/components/ui/Grainient";

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
      <body className="min-h-screen w-screen overflow-x-hidden flex flex-col relative bg-foreground text-background">
        <div className="absolute -z-10 inset-0">
          <Grainient
            color1="#252388"
            color2="#181818"
            color3="#613639"
            timeSpeed={0.25}
            colorBalance={-0.32}
            warpStrength={1.55}
            warpFrequency={5}
            warpSpeed={1.8}
            warpAmplitude={24}
            blendAngle={6}
            blendSoftness={0.07}
            rotationAmount={500}
            noiseScale={3.25}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <Header />
        <main className="flex-1 z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
