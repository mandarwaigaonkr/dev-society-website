import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollToAnchor } from "@/components/layout/ScrollToAnchor";
import { Nav } from "@/components/layout/Nav";
import { BlurTop } from "@/components/layout/BlurTop";
import { BuyPill } from "@/components/layout/BuyPill";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  title: "Developer Society Portfolio",
  description: "Designer and developer portfolio for Developer Society, Christ University."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ScrollToAnchor>
          <BlurTop />
          <Nav />
          {children}
          <Footer />
          <BuyPill />
        </ScrollToAnchor>
      </body>
    </html>
  );
}
