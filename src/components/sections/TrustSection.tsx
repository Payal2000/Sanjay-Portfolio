"use client";

import { motion } from "framer-motion";
import { Award, Shield, Heart, Camera } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Award,
      title: "Award-Winning Work",
      description: "Recognized by international photography competitions and exhibitions.",
    },
    {
      icon: Shield,
      title: "Professional Equipment",
      description: "State-of-the-art cameras and lighting for exceptional quality.",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Every project is approached with care and attention to detail.",
    },
    {
      icon: Camera,
      title: "Creative Vision",
      description: "Bringing unique perspectives to every photograph and story.",
    },
  ];

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

  return (
    <section id="trust" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-orange">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white mb-4">Trust & Excellence from First Click</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Professional photography services with a commitment to quality and client satisfaction.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange" />
              </div>
              <h3 className="font-serif text-base sm:text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
