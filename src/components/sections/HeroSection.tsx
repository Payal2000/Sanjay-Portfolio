"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [exhibitionsCount, setExhibitionsCount] = useState(0);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Counter animation effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    // Years counter (0 to 10)
    const yearsInterval = setInterval(() => {
      setYearsCount(prev => {
        if (prev >= 10) {
          clearInterval(yearsInterval);
          return 10;
        }
        return prev + (10 / steps);
      });
    }, stepDuration);

    // Projects counter (0 to 500)
    const projectsInterval = setInterval(() => {
      setProjectsCount(prev => {
        if (prev >= 500) {
          clearInterval(projectsInterval);
          return 500;
        }
        return prev + (500 / steps);
      });
    }, stepDuration);

    // Exhibitions counter (0 to 25)
    const exhibitionsInterval = setInterval(() => {
      setExhibitionsCount(prev => {
        if (prev >= 25) {
          clearInterval(exhibitionsInterval);
          return 25;
        }
        return prev + (25 / steps);
      });
    }, stepDuration);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(projectsInterval);
      clearInterval(exhibitionsInterval);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-left"
            >
                     <motion.h1
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                       className="text-6xl md:text-7xl lg:text-8xl font-serif text-foreground mb-6 leading-tight"
                     >
                       Sanjay S Nagaonkar
                     </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="body-lg text-muted-foreground mb-8 font-light tracking-wide"
              >
                Photographer | Visual Storyteller
              </motion.p>

              {/* Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="flex items-center space-x-12 mb-8"
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange mb-2">
                    {Math.floor(yearsCount)}+
                  </div>
                  <div className="text-base text-muted-foreground font-medium">Years Experience</div>
                </div>
                <div className="w-px h-16 bg-muted-foreground/30"></div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange mb-2">
                    {Math.floor(projectsCount)}+
                  </div>
                  <div className="text-base text-muted-foreground font-medium">Projects Completed</div>
                </div>
                <div className="w-px h-16 bg-muted-foreground/30"></div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange mb-2">
                    {Math.floor(exhibitionsCount)}+
                  </div>
                  <div className="text-base text-muted-foreground font-medium">Exhibitions</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="flex justify-start mt-8"
              >
                <button
                  onClick={scrollToGallery}
                  className="btn-premium bg-orange hover:bg-orange/90 text-white rounded-full px-10 py-5 flex items-center space-x-3 text-lg font-medium"
                >
                  <span>View Portfolio</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Grey Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/gallery/hero-bg.jpg"
                  alt="Sanjay S Nagaonkar - Photographer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToGallery}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-light mb-2 tracking-wide">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
