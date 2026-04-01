'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import api from '@/lib/api';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeHero = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackBanners = [
    {
      _id: 'fallback-1',
      title: 'Architectural Excellence.',
      subtitle: 'Premium residential designs that define your lifestyle.',
      image_url: '/assets/images/unsplash/res1.jpg',
      cta_text: 'Explore Projects',
      cta_link: '/projects'
    },
    {
      _id: 'fallback-2',
      title: 'Structural Narratives.',
      subtitle: 'Blending nature with modern minimalism in every landscape.',
      image_url: '/assets/images/unsplash/lsc1.jpg',
      cta_text: 'Our Expertise',
      cta_link: '/services'
    },
    {
      _id: 'fallback-3',
      title: 'Visionary Interiors.',
      subtitle: 'Sustainable materials meeting futuristic ergonomics.',
      image_url: '/assets/images/unsplash/lux1.jpg',
      cta_text: 'Connect Now',
      cta_link: '/contact'
    }
  ];

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await api.get('/banner');
        const homeBanners = response.data.filter(b => b.page === 'home' || b.page === 'Home');
        if (homeBanners.length > 0) {
          setBanners(homeBanners);
        } else {
          setBanners(fallbackBanners);
        }
      } catch (error) {
        setBanners(fallbackBanners);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  return (
    <section className="relative h-screen w-full bg-secondary overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={true}
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
           clickable: true,
           renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`
        }}
        navigation={{
           prevEl: '.hero-prev',
           nextEl: '.hero-next'
        }}
        className="h-full w-full"
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={banner._id} className="relative h-full w-full overflow-hidden">
            {({ isActive }) => (
              <>
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                  <div className="h-full w-full">
                    <Image
                      src={banner.image_url}
                      alt={banner.title}
                      fill
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </div>

                {/* Content Layer - Only show if active to prevent mashup */}
                <div className="container mx-auto px-6 h-full flex items-center relative z-20">
                  {/* Subtle White Glow / Light Leak on the Left */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -z-10" />
                  
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <div className="max-w-4xl space-y-10">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="flex items-center space-x-6"
                        >
                          <span className="h-[2px] w-20 bg-primary"></span>
                          <span className="text-white uppercase tracking-[0.5em] text-[10px] font-black italic">Collection 0{i + 1} / 0{banners.length}</span>
                        </motion.div>

                        <motion.h1
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                          className="text-white text-6xl md:text-8xl lg:text-[10rem] font-black italic tracking-tighter leading-[0.8] uppercase"
                        >
                          {banner.title.split(' ')[0]} <br />
                          <span className="text-primary italic outline-text ml-20 lg:ml-40 block">{banner.title.split(' ')[1]}</span>
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 30 }}
                          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                          className="text-white/40 max-w-xl text-lg uppercase tracking-[0.2em] italic font-medium leading-loose"
                        >
                          "{banner.subtitle}"
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                          className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 pt-10"
                        >
                          <a href={banner.cta_link} className="inline-flex items-center space-x-6 group">
                            <div className="w-20 h-20 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 hover:scale-110">
                              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-white text-xs font-black tracking-widest uppercase mb-1">{banner.cta_text || 'View Concept'}</span>
                              <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">Discover full details</span>
                            </div>
                          </a>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}

        {/* Global Navigation Controls */}
        <div className="absolute bottom-20 right-20 z-40 hidden lg:flex items-center space-x-10">
           <button className="hero-prev w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
              <ArrowLeft size={20} />
           </button>
           <button className="hero-next w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
              <ArrowRight size={20} />
           </button>
        </div>
      </Swiper>

      {/* Hero Styles Integration */}
      <style jsx global>{`
        .custom-bullet {
           width: 40px !important;
           height: 3px !important;
           border-radius: 0 !important;
           background: rgba(255,255,255,0.2) !important;
           opacity: 1 !important;
           transition: all 0.5s ease !important;
        }
        .swiper-pagination-bullet-active {
           background: #8db51c !important;
           width: 80px !important;
        }
        .outline-text {
           -webkit-text-stroke: 1px #8db51c;
           color: transparent;
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
