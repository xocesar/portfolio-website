import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Cesar A. Quesada's Portfolio",
  description: "Personal website of Cesar A. Quesada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar/>
        {children}
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
