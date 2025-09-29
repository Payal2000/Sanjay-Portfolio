"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

// Sample gallery data - replace with actual photos
const galleryData = {
  all: [
    { id: 1, src: "/gallery/nature-1.jpg", alt: "Mountain landscape", category: "nature", title: "Mountain Vista" },
    { id: 2, src: "/gallery/potrait-1.jpg", alt: "Portrait photography", category: "portraits", title: "Portrait Study" },
    { id: 3, src: "/gallery/travel-1.jpg", alt: "Travel photography", category: "travel", title: "Wanderlust" },
    { id: 4, src: "/gallery/street-1.jpg", alt: "Street photography", category: "street", title: "Urban Stories" },
    { id: 5, src: "/gallery/nature-2.jpg", alt: "Forest scene", category: "nature", title: "Forest Path" },
    { id: 6, src: "/gallery/potrait-2.jpg", alt: "Portrait photography", category: "portraits", title: "Character Study" },
    { id: 7, src: "/gallery/travel-2.jpg", alt: "Travel photography", category: "travel", title: "Cultural Heritage" },
    { id: 8, src: "/gallery/street-2.jpg", alt: "Street photography", category: "street", title: "City Life" },
    { id: 9, src: "/gallery/nature-3.jpg", alt: "Ocean view", category: "nature", title: "Ocean Waves" },
    { id: 10, src: "/gallery/potrait-3.jpg", alt: "Portrait photography", category: "portraits", title: "Emotional Portrait" },
  ],
  nature: [
    { id: 1, src: "/gallery/nature-1.jpg", alt: "Mountain landscape", category: "nature", title: "Mountain Vista" },
    { id: 5, src: "/gallery/nature-2.jpg", alt: "Forest scene", category: "nature", title: "Forest Path" },
    { id: 9, src: "/gallery/nature-3.jpg", alt: "Ocean view", category: "nature", title: "Ocean Waves" },
  ],
  portraits: [
    { id: 2, src: "/gallery/potrait-1.jpg", alt: "Portrait photography", category: "portraits", title: "Portrait Study" },
    { id: 6, src: "/gallery/potrait-2.jpg", alt: "Portrait photography", category: "portraits", title: "Character Study" },
    { id: 10, src: "/gallery/potrait-3.jpg", alt: "Portrait photography", category: "portraits", title: "Emotional Portrait" },
  ],
  travel: [
    { id: 3, src: "/gallery/travel-1.jpg", alt: "Travel photography", category: "travel", title: "Wanderlust" },
    { id: 7, src: "/gallery/travel-2.jpg", alt: "Travel photography", category: "travel", title: "Cultural Heritage" },
  ],
  street: [
    { id: 4, src: "/gallery/street-1.jpg", alt: "Street photography", category: "street", title: "Urban Stories" },
    { id: 8, src: "/gallery/street-2.jpg", alt: "Street photography", category: "street", title: "City Life" },
  ],
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  const currentImages = galleryData[currentCategory as keyof typeof galleryData] || galleryData.all;

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "next") {
      newIndex = (currentIndex + 1) % currentImages.length;
    } else {
      newIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(currentImages[newIndex].id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">Bringing Your Vision to Life</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A curated collection of moments captured through the lens, each telling a unique story.
          </p>
          <div className="flex justify-center">
            <button className="text-orange hover:text-orange/80 underline text-sm font-medium">
              View All Works
            </button>
          </div>
        </motion.div>

        <Tabs value={currentCategory} onValueChange={setCurrentCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-muted/50">
            <TabsTrigger 
              value="all" 
              className={`transition-colors ${
                currentCategory === "all" 
                  ? "bg-orange text-white" 
                  : "bg-transparent !text-gray-500 hover:!text-gray-700"
              }`}
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="nature" 
              className={`transition-colors ${
                currentCategory === "nature" 
                  ? "bg-orange text-white" 
                  : "bg-transparent !text-gray-500 hover:!text-gray-700"
              }`}
            >
              Nature
            </TabsTrigger>
            <TabsTrigger 
              value="portraits" 
              className={`transition-colors ${
                currentCategory === "portraits" 
                  ? "bg-orange text-white" 
                  : "bg-transparent !text-gray-500 hover:!text-gray-700"
              }`}
            >
              Portraits
            </TabsTrigger>
            <TabsTrigger 
              value="travel" 
              className={`transition-colors ${
                currentCategory === "travel" 
                  ? "bg-orange text-white" 
                  : "bg-transparent !text-gray-500 hover:!text-gray-700"
              }`}
            >
              Travel
            </TabsTrigger>
            <TabsTrigger 
              value="street" 
              className={`transition-colors ${
                currentCategory === "street" 
                  ? "bg-orange text-white" 
                  : "bg-transparent !text-gray-500 hover:!text-gray-700"
              }`}
            >
              Street
            </TabsTrigger>
          </TabsList>

          <TabsContent value={currentCategory} className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {currentImages.map((image) => (
                  <motion.div
                    key={image.id}
                    variants={itemVariants}
                    layout
                    className="group cursor-pointer"
                    onClick={() => openLightbox(image.id)}
                  >
                    <Card className="card-premium overflow-hidden border-0 shadow-lg bg-white">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                        </div>
                        <div className="p-6 bg-white">
                          <h3 className="font-serif text-lg text-foreground mb-2">{image.title}</h3>
                          <p className="text-sm text-muted-foreground capitalize mb-4">{image.category}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium">Time:</span> 2-4 hours
                            </div>
                            <button className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white hover:bg-orange/90 transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full h-full max-h-[90vh] p-0 bg-black/95 border-0">
            {selectedImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>
                
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                <div className="relative w-full h-full flex items-center justify-center p-8">
                  {(() => {
                    const image = currentImages.find(img => img.id === selectedImage);
                    if (!image) return null;
                    
                    return (
                      <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-full max-h-full"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={800}
                          className="object-contain max-w-full max-h-full"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-serif text-xl mb-1">{image.title}</h3>
                          <p className="text-sm opacity-90 capitalize">{image.category}</p>
                        </div>
                      </motion.div>
                    );
                  })()}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;