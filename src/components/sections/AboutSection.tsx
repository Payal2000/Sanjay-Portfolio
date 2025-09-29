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
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">About the Artist</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Behind the lens, capturing moments that tell stories and creating visual narratives that resonate.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Portrait Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
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
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 space-y-6"
          >
            <motion.div variants={textVariants}>
              <h3 className="heading-md text-foreground mb-4">
                Visual Storytelling Through Photography
              </h3>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-4">
              <p className="body-md text-muted-foreground leading-relaxed">
                With over a decade of experience behind the lens, I specialize in capturing 
                authentic moments that resonate with emotion and authenticity. My work spans 
                across nature, portraits, travel, and street photography, each image telling 
                a unique story.
              </p>
              
              <p className="body-md text-muted-foreground leading-relaxed">
                Based in the heart of creative inspiration, I believe that photography is 
                not just about capturing what you see, but about revealing what you feel. 
                Every project is approached with meticulous attention to detail and a deep 
                respect for the subject's narrative.
              </p>
              
              <p className="body-md text-muted-foreground leading-relaxed">
                My work has been featured in numerous exhibitions and publications, but the 
                greatest reward comes from creating images that connect with people on a 
                personal level, evoking memories and emotions that transcend the moment.
              </p>
            </motion.div>

            <motion.div
              variants={textVariants}
              className="pt-6 border-t border-border"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Experience</h4>
                  <p className="body-sm text-muted-foreground">10+ Years</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Projects</h4>
                  <p className="body-sm text-muted-foreground">500+ Completed</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Exhibitions</h4>
                  <p className="body-sm text-muted-foreground">25+ Shows</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Awards</h4>
                  <p className="body-sm text-muted-foreground">15+ Recognitions</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={textVariants} className="pt-6">
              <button className="btn-premium">
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
