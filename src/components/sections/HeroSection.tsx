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
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-left order-2 lg:order-1"
            >
                     <motion.h1
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                       className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-foreground mb-4 sm:mb-6 leading-tight"
                     >
                       Sanjay S Nagaonkar
                     </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-light tracking-wide"
              >
                Photographer | Visual Storyteller
              </motion.p>

              {/* Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange mb-1 sm:mb-2">
                    {Math.floor(yearsCount)}+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange mb-1 sm:mb-2">
                    {Math.floor(projectsCount)}+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange mb-1 sm:mb-2">
                    {Math.floor(exhibitionsCount)}+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Exhibitions</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="flex justify-start mt-6 sm:mt-8"
              >
                <button
                  onClick={scrollToGallery}
                  className="btn-premium bg-orange hover:bg-orange/90 text-white rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg font-medium"
                >
                  <span>View Portfolio</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[3/4] max-w-sm sm:max-w-md lg:max-w-lg mx-auto overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <Image
                  src="/gallery/hero-bg.jpg"
                  alt="Sanjay S Nagaonkar - Photographer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  priority
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
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToGallery}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs sm:text-sm font-light mb-1 sm:mb-2 tracking-wide">Scroll to explore</span>
          <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
