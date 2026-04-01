'use client';

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BeforeAfterSlider from '@/components/gallery/BeforeAfterSlider';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Search, X, ChevronLeft, ChevronRight, Camera, Grid, Layout } from 'lucide-react';
import Image from 'next/image';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Residential', 'Commercial', 'Luxury', 'Landscape', 'Details'];

  const galleryItems = [
    { id: 1, src: '/assets/images/unsplash/gallery1.jpg', category: 'Residential', title: 'Modern Living Room' },
    { id: 2, src: '/assets/images/unsplash/commercial1.jpg', category: 'Commercial', title: 'Executive Office' },
    { id: 3, src: '/assets/images/unsplash/gallery2.jpg', category: 'Residential', title: 'Minimalist Bedroom' },
    { id: 4, src: '/assets/images/unsplash/lux1.jpg', category: 'Luxury', title: 'Crystal Villa' },
    { id: 5, src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80', category: 'Commercial', title: 'Corporate Lounge' },
    { id: 6, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', category: 'Residential', title: 'Modern Kitchen' },
    { id: 7, src: 'https://images.unsplash.com/photo-1558231221-191f54857991?auto=format&fit=crop&q=80', category: 'Landscape', title: 'Artistic Garden' },
    { id: 8, src: 'https://images.unsplash.com/photo-1507089947368-19c1da977535?auto=format&fit=crop&q=80', category: 'Details', title: 'Bespoke Lighting' },
    { id: 9, src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80', category: 'Luxury', title: 'Golden Suite' },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const nextIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="relative pt-48 pb-40 bg-secondary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
            alt="Gallery MindScape"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center space-x-3 mb-6">
              <span className="h-[2px] w-12 bg-primary"></span>
              <span className="text-white uppercase tracking-[0.4em] text-xs font-bold leading-none">Visual Narrative</span>
           </motion.div>
           <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-widest leading-[0.8]">
              Interactive <br />
              <span className="italic text-primary font-bold outline-text">Gallery.</span>
           </motion.h1>
           <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 max-w-2xl text-sm md:text-lg uppercase italic tracking-[0.2em] font-medium leading-loose mt-10">
              "Architecture is music in space, as it were a frozen music." Step into our symphony of designs.
           </motion.p>
        </div>

        <style jsx>{`
          .outline-text {
             -webkit-text-stroke: 1px #8db51c;
             color: transparent;
          }
        `}</style>
      </section>

      {/* Before/After Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16 space-y-6">
              <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold block">Transformation Showcase</span>
              <h2 className="text-3xl lg:text-4xl text-secondary uppercase tracking-widest">Witness the <span className="italic">Metamorphosis</span></h2>
              <div className="mx-auto w-16 h-1 bg-primary/20" />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                 <h3 className="text-4xl text-secondary uppercase tracking-[0.1em] leading-tight">Mastering the art of <br /><span className="italic text-primary">Redesign.</span></h3>
                 <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] leading-relaxed max-w-xl">
                   Experience the drastic transition from dull structures to vibrant, intelligent living environments. Use the slider to see how we redefine perfection.
                 </p>
                 <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-2">
                       <span className="text-primary text-3xl font-bold italic">Old</span>
                       <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Shadowy, fragmented, and dated architectural elements.</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-primary text-3xl font-bold italic">New</span>
                       <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Light-filled, ergonomic, and breathtaking luxury concepts.</p>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <BeforeAfterSlider 
                  beforeImage="https://images.unsplash.com/photo-1513519247388-4e28dc056630?q=80&w=2000&auto=format&fit=crop" 
                  afterImage="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop"
                />
              </div>
           </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-zinc-50 py-12 border-y border-zinc-100 sticky top-20 lg:top-[7.5rem] z-40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
           <div className="flex items-center space-x-4">
              <Layout size={18} className="text-primary" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">Collections</h4>
           </div>
           
           <div className="flex items-center space-x-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap shadow-sm border ${
                    activeCategory === cat ? 'bg-primary text-white border-primary shadow-xl scale-110' : 'bg-white text-muted-foreground border-zinc-200 hover:border-primary/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>

           <div className="hidden lg:flex items-center space-x-3 text-muted-foreground">
             <Grid size={18} />
             <span className="text-[10px] uppercase font-bold tracking-widest">Masonry Layout</span>
           </div>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="py-24 bg-white min-h-screen">
        <div className="container mx-auto px-6">
           <Masonry
             breakpointCols={breakpointColumnsObj}
             className="flex w-auto -ml-8"
             columnClassName="pl-8 bg-clip-padding"
           >
             {filteredItems.map((item, index) => (
               <motion.div
                 layout
                 key={item.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="mb-8 group relative overflow-hidden rounded-2xl shadow-xl cursor-zoom-in"
                 onClick={() => openLightbox(item, index)}
               >
                 <div className="relative overflow-hidden pt-[125%] lg:pt-[100%] group-hover:scale-105 transition-transform duration-1000">
                    <Image src={item.src} alt={item.title} fill className="object-cover" />
                 </div>
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 pointer-events-none">
                    <span className="text-primary text-[10px] uppercase font-bold tracking-[0.3em] mb-2">{item.category}</span>
                    <h4 className="text-white text-2xl font-bold uppercase tracking-widest mb-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h4>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                       <Maximize2 size={24} />
                    </div>
                 </div>
               </motion.div>
             ))}
           </Masonry>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="relative w-full max-w-7xl h-full max-h-screen flex flex-col items-center justify-center"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 p-6 text-white/40 hover:text-white transition-colors z-50 group"
              >
                <X size={40} className="group-hover:rotate-90 transition-transform" />
              </button>

              <div className="relative w-full h-[80%] rounded-2xl overflow-hidden shadow-2xl">
                 <Image src={selectedImage.src} alt={selectedImage.title} fill className="object-contain" />
                 
                 {/* Navigation */}
                 <button 
                   onClick={(e) => { e.stopPropagation(); prevImage(); }}
                   className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all shadow-xl group border border-white/10"
                 >
                   <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                 </button>
                 <button 
                   onClick={(e) => { e.stopPropagation(); nextImage(); }}
                   className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all shadow-xl group border border-white/10"
                 >
                   <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

              <div className="mt-12 text-center space-y-3">
                 <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold">{selectedImage.category} Collection</span>
                 <h2 className="text-white text-3xl font-bold uppercase tracking-widest">{selectedImage.title}</h2>
                 <p className="text-white/40 uppercase text-[10px] tracking-widest font-bold font-heading italic">0{currentIndex + 1} / 0{filteredItems.length}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default GalleryPage;
