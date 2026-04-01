'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Layout, Home, Building2, Trees, Monitor, PenTool, Lightbulb, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      id: 'residential',
      title: 'Residential Interiors',
      icon: <Home size={32} />,
      desc: 'Crafting personalized, luxury home environments that resonate with your individual identity. From modern penthouses to heritage villas.',
      features: ['Bespoke Furniture Design', 'Lighting Architecture', 'Smart Home Integration', 'Sustainable Materials'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 'commercial',
      title: 'Commercial Spaces',
      icon: <Building2 size={32} />,
      desc: 'Designing high-performance, inspiring workspaces and retail environments that foster creativity and commercial success.',
      features: ['Ergonomic Workspace Layout', 'Brand Integration Design', 'Acoustics Optimization', 'Efficient Traffic Flow'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 'landscape',
      title: 'Landscape Architecture',
      icon: <Trees size={32} />,
      desc: 'Transforming outdoor environments into lush, artistic retreats that blend structural precision with raw natural beauty.',
      features: ['Ecological Garden Design', 'Water Features & Pools', 'Hardscape Drafting', 'Nighttime Lighting Design'],
      image: 'https://images.unsplash.com/photo-1558231221-191f54857991?q=80&w=2000&auto=format&fit=crop',
    },
  ];

  return (
    <MainLayout>
      {/* Immersive Header */}
      <section className="relative pt-48 pb-40 bg-secondary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Services MindScape"
            fill
            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[3000ms]"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
           <div className="max-w-4xl space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-5">
                 <span className="h-[2px] w-24 bg-primary"></span>
                 <span className="text-white uppercase tracking-[0.6em] text-[10px] font-black italic shadow-xl">The Range of Mastery</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-6xl md:text-8xl lg:text-[10rem] leading-[0.8] font-bold uppercase tracking-widest">
                 What We <br />
                 <span className="italic text-primary font-bold outline-text">Construct.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl text-lg uppercase italic tracking-[0.2em] font-medium leading-loose">
                 "Our services bridge the gap between abstract architectural vision and the physical comfort of a finished space."
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

      {/* Main Services Breakdown */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 space-y-40">
           {services.map((service, i) => (
             <motion.div 
               key={service.id} 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} group`}
             >
                <div className="w-full lg:w-1/2 relative">
                   <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000">
                      <img src={service.image} alt={service.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                   </div>
                   <div className={`absolute -bottom-10 ${i % 2 !== 0 ? '-left-10' : '-right-10'} p-12 bg-secondary rounded-2xl text-white shadow-2xl border border-white/5 hidden lg:block`}>
                      <span className="text-primary text-5xl font-black italic block mb-4">0{i+1}</span>
                      <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/40 italic">Global Standard</p>
                   </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-10">
                   <div className="space-y-6">
                      <div className="w-20 h-20 rounded-full bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl border border-zinc-100">
                         {service.icon}
                      </div>
                      <h2 className="text-4xl lg:text-6xl text-secondary uppercase tracking-widest italic group-hover:text-primary transition-colors">{service.title}</h2>
                      <p className="text-muted-foreground text-sm uppercase tracking-widest leading-loose font-medium opacity-60">
                         {service.desc}
                      </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 border-b border-zinc-100">
                      {service.features.map(feat => (
                        <div key={feat} className="flex items-center space-x-4">
                           <CheckCircle2 size={16} className="text-primary" />
                           <span className="text-[10px] uppercase font-bold tracking-widest text-secondary">{feat}</span>
                        </div>
                      ))}
                   </div>

                   <div className="pt-6">
                      <Link href={`/projects?category=${service.id.charAt(0).toUpperCase() + service.id.slice(1)}`} className="px-10 py-6 bg-secondary text-white text-[10px] uppercase tracking-[0.4em] font-black italic hover:bg-primary transition-all shadow-2xl inline-flex items-center group/btn">
                         Explore {service.title} <ArrowRight size={18} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
                      </Link>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Advisory & Consulting Section */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden group">
         <div className="container mx-auto px-6">
            <div className="bg-secondary p-12 lg:p-24 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-10 relative z-10">
                  <div className="flex items-center space-x-4">
                     <span className="h-[2px] w-12 bg-primary"></span>
                     <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-black italic leading-none">The Principal Service</span>
                  </div>
                  <h2 className="text-4xl lg:text-7xl text-white font-bold uppercase tracking-widest leading-none italic">Design <br /> <span className="text-primary">Advisory.</span></h2>
                  <p className="text-white/40 text-lg uppercase tracking-widest leading-loose italic max-w-sm">Direct architectural consulting and feasibility audits for high-ticket real estate developers.</p>
                  <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5">
                     <div className="space-y-4">
                        <Monitor size={32} className="text-primary" />
                        <h4 className="text-lg font-bold uppercase tracking-widest text-white italic leading-none">Full CAD Drafting</h4>
                     </div>
                     <div className="space-y-4">
                        <PenTool size={32} className="text-primary" />
                        <h4 className="text-lg font-bold uppercase tracking-widest text-white italic leading-none">Legal Compliance</h4>
                     </div>
                  </div>
               </div>
               <div className="relative h-[600px] overflow-hidden rounded-2xl group shadow-3xl">
                  <img src="https://images.unsplash.com/photo-1541888941257-1262f664a78c?q=80&w=2070&auto=format&fit=crop" alt="Structural Advisory" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <span className="text-white text-5xl font-black italic border-4 border-white px-10 py-5 tracking-widest opacity-20 hover:opacity-100 transition-opacity cursor-pointer">PREMIUM CONSULT</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Global Standard CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-4xl md:text-6xl lg:text-8xl text-secondary leading-none uppercase tracking-widest">
                 Ready to <span className="italic text-primary font-bold">Commission?</span>
              </h2>
              <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto uppercase tracking-widest font-medium opacity-60">
                 Our studio handles a limited number of high-quality architectural and interior commissions annually to ensure absolute design integrity.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10">
                 <Link href="/contact" className="px-16 py-8 bg-primary text-white font-heading font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl flex items-center">
                    Hire Our Atelier <ArrowRight className="ml-4" size={20} />
                 </Link>
                 <Link href="/testimonials" className="text-secondary font-black italic tracking-widest text-xs border-b-2 border-secondary pb-1 uppercase hover:text-primary hover:border-primary transition-all">
                    Hear from our clients
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
