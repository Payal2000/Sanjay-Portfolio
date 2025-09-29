"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import TrustSection from "@/components/sections/TrustSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <TrustSection />
      <ContactSection />
    </main>
  );
}