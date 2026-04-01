'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { MoveRight, ChevronRight, Award, History, Users, Monitor, MapDot, Layers, Lightbulb, PenTool } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const milestones = [
    { year: '2008', title: 'Studio Inception', desc: 'MindScape Design founded as a boutique interior firm in Mumbai.' },
    { year: '2012', title: 'Architecture Shift', desc: 'Expanded into full-scale architectural services with visionary projects.' },
    { year: '2016', title: 'Award Winning', desc: 'Received first major recognition for Luxury Residential designs.' },
    { year: '2020', title: 'Modern Expansion', desc: 'Scaled our team of experts and established a materials atelier.' },
    { year: '2024', title: 'Design Evolution', desc: 'Redefining the relationship between technology and spatial design.' },
  ];

  return (
    <MainLayout>
      {/* Immersive Header */}
      <section className="relative pt-48 pb-40 bg-secondary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
            alt="About MindScape"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
           <div className="max-w-4xl space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-5">
                 <span className="h-[2px] w-28 bg-primary"></span>
                 <span className="text-white uppercase tracking-[0.8em] text-xs font-black italic">The Human Identity</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-6xl md:text-8xl lg:text-[10rem] leading-none font-bold uppercase tracking-widest leading-[0.8]">
                 Visionary behind <br />
                 <span className="italic text-primary font-bold outline-text">The Concept.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl text-lg uppercase italic tracking-[0.2em] font-medium leading-loose">
                 "Architecture is more than a structure. It is a dialogue between the person who lives and the master who creates."
              </motion.p>
           </div>
        </div>

        <style jsx>{`
          .outline-text {
             -webkit-text-stroke: 1px #8db51c;
             color: transparent;
          }
        `}</style>
      </section>

      {/* Founder Spotlight Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-10 bg-primary/10 -z-10 blur-[60px] group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
                 <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" fill alt="Mr. Hiten" className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
                 <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black via-transparent to-transparent">
                    <h3 className="text-white text-4xl font-bold uppercase tracking-widest">Mr. Hiten K.</h3>
                    <p className="text-primary text-sm uppercase tracking-[0.4em] font-black italic mt-2">Founder & Principal Design Expert</p>
                 </div>
              </div>
              <div className="absolute -bottom-12 -right-12 bg-secondary p-10 rounded-2xl text-white shadow-3xl hidden lg:block border border-white/5">
                 <p className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 leading-relaxed mb-4">Core Philosophy</p>
                 <p className="text-xl font-bold italic text-primary leading-tight">Spatial Resilience</p>
              </div>
           </div>

           <div className="order-1 lg:order-2 space-y-12">
              <div className="flex flex-col space-y-6">
                 <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs block leading-none">About the Principal</span>
                 <h2 className="text-4xl lg:text-6xl text-secondary uppercase tracking-widest leading-tight">Mastering <span className="italic">Architectural</span> Narratives.</h2>
                 <p className="text-muted-foreground text-lg uppercase tracking-widest leading-loose italic opacity-60">
                   With over 15 years of relentless pursuit for design perfection, Mr. Hiten has established MindScape Design as a powerhouse in modern architecture and interior concepts.
                 </p>
              </div>

              <div className="space-y-8">
                 <p className="text-secondary text-sm leading-loose max-w-xl uppercase tracking-widest font-medium opacity-80">
                   A graduate in Architecture from one of Mumbai's finest institutes, Hiten's work is characterized by a unique blend of heritage sensitivity and futuristic minimalism. His approach is deeply consultative, ensuring that every client's vision is treated with profound architectural respect.
                 </p>
                 <p className="text-secondary text-sm leading-loose max-w-xl uppercase tracking-widest font-medium opacity-80">
                   He believes that "Designs aren't just built; they are breathed into life." Under his leadership, MindScape has completed over 500 projects across residential, commercial, and landscape verticals.
                 </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 pt-10 border-t border-zinc-100">
                 <div className="flex flex-col space-y-4 group/icon">
                    <div className="p-5 bg-zinc-50 rounded-2xl w-fit group-hover/icon:bg-primary group-hover/icon:text-white transition-all shadow-sm border">
                       <Lightbulb size={24} className="text-primary group-hover/icon:text-white" />
                    </div>
                    <span className="text-[10px] uppercase font-black italic tracking-widest">Innovative Concepts</span>
                 </div>
                 <div className="flex flex-col space-y-4 group/icon">
                    <div className="p-5 bg-zinc-50 rounded-2xl w-fit group-hover/icon:bg-primary group-hover/icon:text-white transition-all shadow-sm border">
                       <PenTool size={24} className="text-primary group-hover/icon:text-white" />
                    </div>
                    <span className="text-[10px] uppercase font-black italic tracking-widest">Precision Drafting</span>
                 </div>
                 <div className="flex flex-col space-y-4 group/icon">
                    <div className="p-5 bg-zinc-50 rounded-2xl w-fit group-hover/icon:bg-primary group-hover/icon:text-white transition-all shadow-sm border">
                       <Layers size={24} className="text-primary group-hover/icon:text-white" />
                    </div>
                    <span className="text-[10px] uppercase font-black italic tracking-widest">Material Excellence</span>
                 </div>
              </div>
              
              <div className="pt-10">
                 <Link href="/contact" className="px-12 py-6 bg-secondary text-white text-[10px] uppercase tracking-[0.4em] font-black italic hover:bg-primary transition-all shadow-2xl flex items-center group w-fit">
                    Collaborate with Hiten <ChevronRight size={18} className="ml-4 group-hover:translate-x-2 transition-transform" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="text-center mb-24 max-w-4xl mx-auto space-y-8">
              <span className="text-primary text-[10px] uppercase font-black italic tracking-[0.5em] block leading-none">Our Genesis</span>
              <h2 className="text-4xl lg:text-6xl text-secondary uppercase tracking-widest leading-tight italic">Evolution of <span className="text-primary">MindScape.</span></h2>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium leading-loose opacity-60">The journey from a boutique studio to an industry leader.</p>
           </div>
           
           <div className="relative pt-20">
              {/* Timeline Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] bg-zinc-200 hidden lg:block" />
              
              <div className="space-y-24 lg:space-y-40">
                 {milestones.map((item, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8 }}
                       className={`flex flex-col lg:flex-row items-center justify-between group ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                    >
                       <div className={`lg:w-1/2 text-center lg:text-left ${i % 2 === 0 ? 'lg:pr-32' : 'lg:pl-32 lg:text-right'}`}>
                          <span className="text-5xl lg:text-7xl font-black italic text-primary/10 group-hover:text-primary/20 transition-all duration-[1s] leading-none block mb-6">{item.year}</span>
                          <h4 className="text-2xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors mb-4">{item.title}</h4>
                          <p className="text-muted-foreground text-sm uppercase tracking-widest leading-loose max-w-md mx-auto group-hover:text-secondary lg:mx-0 transition-colors italic">{item.desc}</p>
                       </div>

                       {/* Central Indicator */}
                       <div className="my-10 lg:my-0 relative h-12 w-12 rounded-full border-4 border-white bg-primary shadow-[0_0_40px_rgba(141,181,28,0.5)] z-10 transition-transform group-hover:scale-125 duration-500" />
                       
                       <div className="lg:w-1/2" />
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <div className="bg-secondary p-12 lg:p-24 rounded-3xl relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
              <div className="absolute right-0 top-0 h-full w-1/2 -z-10 group-hover:scale-110 transition-transform duration-[3s] opacity-20 group-hover:opacity-40">
                <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" fill alt="Our Team" className="object-cover" />
              </div>
              <div className="max-w-2xl space-y-12 relative">
                 <h2 className="text-4xl lg:text-7xl text-white font-bold uppercase tracking-widest leading-none italic">Think <span className="text-primary">Beyond</span> <br />Conventional.</h2>
                 <p className="text-white/40 text-lg uppercase tracking-widest leading-loose italic leading-loose max-w-sm">"Join our roster of clients who decided that 'Good Enough' is the enemy of 'Extraordinary'."</p>
                 <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 pt-8">
                    <Link href="/projects" className="px-10 py-6 bg-primary text-white text-[10px] uppercase font-black tracking-widest shadow-2xl hover:scale-105 transition-transform">View Full Portfolio</Link>
                    <Link href="/careers" className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold border-b border-white/20 pb-1">Join our design studio</Link>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
