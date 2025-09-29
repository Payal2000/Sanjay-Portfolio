"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-foreground mb-4">About the Artist</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Behind the lens, capturing moments that tell stories and creating visual narratives that resonate.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
        >
          {/* Portrait Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
              <Image
                src="/gallery/about-portrait.jpg"
                alt="Sanjay S Nagaonkar - Photographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-accent/20 rounded-full blur-xl" />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 space-y-4 sm:space-y-6"
          >
            <motion.div variants={textVariants}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-tight text-foreground mb-4">
                Visual Storytelling Through Photography
              </h3>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                With over a decade of experience behind the lens, I specialize in capturing 
                authentic moments that resonate with emotion and authenticity. My work spans 
                across nature, portraits, travel, and street photography, each image telling 
                a unique story.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Based in the heart of creative inspiration, I believe that photography is 
                not just about capturing what you see, but about revealing what you feel. 
                Every project is approached with meticulous attention to detail and a deep 
                respect for the subject&apos;s narrative.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                My work has been featured in numerous exhibitions and publications, but the 
                greatest reward comes from creating images that connect with people on a 
                personal level, evoking memories and emotions that transcend the moment.
              </p>
            </motion.div>

            <motion.div
              variants={textVariants}
              className="pt-4 sm:pt-6 border-t border-border"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-foreground mb-1 sm:mb-2">Experience</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">10+ Years</p>
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-foreground mb-1 sm:mb-2">Projects</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">500+ Completed</p>
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-foreground mb-1 sm:mb-2">Exhibitions</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">25+ Shows</p>
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-foreground mb-1 sm:mb-2">Awards</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">15+ Recognitions</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={textVariants} className="pt-4 sm:pt-6">
              <button className="btn-premium w-full sm:w-auto">
                View Full Portfolio
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
