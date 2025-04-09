import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

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
        {/* not using the navbar currently so commenting it for now */}
        {/* <Navbar/> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
