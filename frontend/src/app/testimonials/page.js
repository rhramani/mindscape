'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Quote, Star, User, Building2, MapPin, CheckCircle2, Heart, Award } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Mehta',
      position: 'Business Owner',
      project: 'Mehta Luxury Residence',
      rating: 5,
      content: 'MindScape Design transformed our fragmented house into a cohesive, breathable sanctuary. Hiten\'s eye for detail is unparalleled. The way light plays in our living room now is pure magic.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Anjali Sharma',
      position: 'Tech Executive',
      project: 'NexGen Workspace',
      rating: 5,
      content: 'Working with the MindScape team was a revelation. They understood our corporate culture and translated it into a design that motivates our employees every single day. Truly professional.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Dr. Sameer Kulkarni',
      position: 'Chief Surgeon',
      project: 'Elite Clinic Interior',
      rating: 5,
      content: 'Medical spaces need a balance of sterile efficiency and patient comfort. Hiten achieved this masterfully. Our patients as well as our staff feel much more at peace in the new environment.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop',
    },
     {
      id: 4,
      name: 'Sunita Rao',
      position: 'Art Gallery Owner',
      project: 'Heritage Villa Restoration',
      rating: 5,
      content: 'Restoring a heritage property is a massive responsibility. MindScape Design treated the structure with profound respect while introducing modern amenities seamlessly.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop',
    },
  ];

  return (
    <MainLayout>
      {/* Immersive Header */}
      <section className="relative pt-40 pb-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-30 -z-10 blur-[150px] scale-150 rotate-12" />
        <div className="container mx-auto px-6">
           <div className="max-w-4xl space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-5">
                 <span className="h-[2px] w-24 bg-primary"></span>
                 <span className="text-white uppercase tracking-[0.6em] text-xs font-black italic">The Silent Approval</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-5xl md:text-7xl lg:text-9xl leading-none font-bold uppercase tracking-widest">
                 Vox <br />
                 <span className="italic text-primary font-bold">Populi.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl text-lg uppercase italic tracking-[0.2em] font-medium leading-loose">
                 "Our greatest architectural achievements aren't built of stone alone, but from the trust and satisfaction of the people we design for."
              </motion.p>
           </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <Swiper
             modules={[Autoplay, Navigation, Pagination]}
             spaceBetween={0}
             slidesPerView={1}
             autoplay={{ delay: 5000 }}
             pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
             className="relative overflow-visible"
           >
             {testimonials.map((test, i) => (
               <SwiperSlide key={test.id}>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                       <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10" />
                       <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-2 border-zinc-50 grayscale hover:grayscale-0 transition-all duration-[2s]">
                          <img src={test.image} alt={test.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                          <div className="absolute top-10 left-10 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/10 flex items-center group-hover:bg-primary transition-all duration-500">
                             <Quote size={24} className="text-white rotate-180" />
                          </div>
                       </div>
                       <motion.div 
                          className="absolute -bottom-10 -right-10 bg-secondary p-12 rounded-3xl text-white shadow-3xl hidden lg:block border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                       >
                          <div className="flex space-x-1 mb-4 text-primary">
                             {[...Array(test.rating)].map((_, j) => <Star key={j} size={20} fill="#8db51c" strokeWidth={0} />)}
                          </div>
                          <p className="text-sm uppercase font-black italic tracking-widest text-primary mb-2">Authenticated Review</p>
                          <p className="text-xs uppercase tracking-widest font-bold text-white/40 italic">Global Standard Excellence</p>
                       </motion.div>
                    </div>

                    <div className="space-y-12">
                       <div className="space-y-6">
                          <span className="text-primary font-bold uppercase tracking-[0.5em] text-xs block leading-none">Featured Client Vision</span>
                          <h2 className="text-4xl lg:text-7xl text-secondary uppercase tracking-widest italic font-bold">"{test.content}"</h2>
                       </div>
                       
                       <div className="pt-10 flex flex-col space-y-6 border-t border-zinc-100">
                          <div className="flex items-center space-x-6">
                             <div className="w-20 h-2 bg-primary rounded-full" />
                             <h4 className="text-2xl font-bold uppercase tracking-widest text-secondary leading-none">{test.name}</h4>
                          </div>
                          <div className="flex items-center space-x-10 text-muted-foreground">
                             <div className="flex items-center space-x-3">
                                <Building2 size={16} className="text-primary" />
                                <span className="text-[10px] uppercase font-bold tracking-widest italic">{test.position}</span>
                             </div>
                             <div className="flex items-center space-x-3">
                                <MapPin size={16} className="text-primary" />
                                <span className="text-[10px] uppercase font-bold tracking-widest italic">{test.project}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
               </SwiperSlide>
             ))}
           </Swiper>
           
           <div className="swiper-custom-pagination flex justify-center mt-20 space-x-4 h-2"></div>
        </div>
      </section>

      {/* Grid of Other Reviews */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20 max-w-4xl mx-auto space-y-8">
              <span className="text-primary text-[10px] uppercase font-black italic tracking-[0.5em] block leading-none">The Collective Voice</span>
              <h2 className="text-4xl lg:text-6xl text-secondary uppercase tracking-widest font-black italic">Verified <span className="text-primary">Endorsements.</span></h2>
              <div className="mx-auto w-24 h-1 bg-primary/20" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {testimonials.concat(testimonials).map((test, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: (i % 3) * 0.1 }}
                   className="flex flex-col space-y-8 p-10 bg-white border border-zinc-100 rounded-3xl hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                >
                   <div className="flex items-center justify-between">
                      <div className="flex space-x-1 text-primary">
                         {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#8db51c" strokeWidth={0} />)}
                      </div>
                      <CheckCircle2 size={18} className="text-primary/40 group-hover:text-primary transition-colors hover:scale-125 duration-500" />
                   </div>
                   
                   <p className="text-secondary text-sm leading-loose uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity italic">
                     "{test.content.substring(0, 150)}..."
                   </p>

                   <div className="pt-8 border-t border-zinc-100 flex items-center space-x-6">
                      <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0">
                         <img src={test.image} alt={test.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                         <h4 className="text-sm font-bold uppercase tracking-widest text-secondary leading-none mb-1 group-hover:text-primary transition-colors">{test.name}</h4>
                         <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-black italic">{test.position}</span>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Rewards & Recognition CTA */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-1 space-y-8">
                 <div className="flex items-center space-x-6">
                    <Award size={48} className="text-primary animate-pulse" />
                    <h4 className="text-2xl font-bold uppercase tracking-widest text-secondary">A Tradition of <span className="italic text-primary">Trust.</span></h4>
                 </div>
                 <p className="text-muted-foreground text-sm uppercase tracking-widest leading-loose font-medium opacity-60">
                    MindScape Design is consistently ranked among India's top 10 boutique interior firms for residential excellence.
                 </p>
                 <div className="pt-6">
                    <Link href="/projects" className="px-10 py-6 bg-secondary text-white text-[10px] uppercase font-black tracking-widest hover:bg-primary transition-all shadow-3xl inline-flex items-center group">
                       View Award Projects <Heart className="ml-4 animate-bounce text-red-400 group-hover:text-white" size={18} />
                    </Link>
                 </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
                 <div className="space-y-3">
                    <p className="text-5xl font-black italic text-secondary leading-none">500+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Happy Clients</p>
                 </div>
                 <div className="space-y-3">
                    <p className="text-5xl font-black italic text-secondary leading-none">98%</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Recommendation</p>
                 </div>
                 <div className="space-y-3">
                    <p className="text-5xl font-black italic text-secondary leading-none">15+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Awards Won</p>
                 </div>
                 <div className="space-y-3">
                    <p className="text-5xl font-black italic text-secondary leading-none">12M+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Sq Ft Designed</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TestimonialsPage;
