'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        duration: 0.8, 
        easing: (t) => t * (2 - t), 
        smoothWheel: true, 
        smoothTouch: true, 
        direction: 'vertical', 
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <AnimatePresence mode="wait">
          {children && <div>{children}</div>} 
        </AnimatePresence>
      </body>
    </html>
  );
}
