import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CartProvider } from "../lib/cart-context";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "KINETIX – Premium E‑Bike Brand",
  description: "Bold, kinetic electric bikes for adventure and city life.",
  openGraph: {
    title: "KINETIX – Premium E‑Bike Brand",
    description: "Bold, kinetic electric bikes for adventure and city life.",
    images: [{ url: "/images/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KINETIX – Premium E‑Bike Brand",
    description: "Bold, kinetic electric bikes for adventure and city life.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}> 
      <body className="bg-background text-onSurface min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
