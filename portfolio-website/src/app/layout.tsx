import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "Cesar A. Quesada's Portfolio",
  description: "Personal portfolio website of Cesar A. Quesada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
