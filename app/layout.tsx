

import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Sections/Navbar/Navbar";
import Footer from "../app/components/Sections/Footer/Footer";
import { ModalProvider } from "./context/ModalContext";
import MouseGlow from "./components/MouseGlow/MouseGlow";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "xVS Creations",
  description: "Be Creative, Stay Ahead",
};

// gsap.registerPlugin(ScrollSmoother);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // useGSAP(() => {
  //   const smoother = ScrollSmoother.create({
  //     wrapper: '#smooth-wrapper',
  //     content: '#smooth-content'
  //   })
  // })

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <ModalProvider>
              <Navbar />
              {/* <MouseGlow /> */}
              {children}
              <Footer />
            </ModalProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
