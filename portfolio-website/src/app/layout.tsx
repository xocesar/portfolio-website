import type { Metadata } from "next";
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}
