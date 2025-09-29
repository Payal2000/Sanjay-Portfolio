import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanjay S Nagaonkar | Photographer & Visual Storyteller",
  description: "Premium photography portfolio showcasing nature, portraits, travel, and street photography by Sanjay S Nagaonkar. Visual storytelling through the lens.",
  keywords: ["photography", "portfolio", "visual storytelling", "nature photography", "portrait photography", "travel photography", "street photography"],
  authors: [{ name: "Sanjay S Nagaonkar" }],
  creator: "Sanjay S Nagaonkar",
  openGraph: {
    title: "Sanjay S Nagaonkar | Photographer & Visual Storyteller",
    description: "Premium photography portfolio showcasing nature, portraits, travel, and street photography by Sanjay S Nagaonkar.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay S Nagaonkar | Photographer & Visual Storyteller",
    description: "Premium photography portfolio showcasing nature, portraits, travel, and street photography by Sanjay S Nagaonkar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
