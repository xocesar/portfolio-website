import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});



export const metadata: Metadata = {
  title: "Cesar A. Quesada's Portfolio Website",
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
