'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Eye, Target, Compass, Sparkles, Layers, Globe, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

const VisionPage = () => {
  const coreValues = [
    { title: 'Human Centricity', desc: 'Design that prioritizes the human experience and emotional resonance within a space.', icon: <Heart size={24} /> },
    { title: 'Architectural Tech', desc: 'Integrating cutting-edge smart home technology seamlessly into luxury aesthetics.', icon: <Zap size={24} /> },
    { title: 'Spatial Ethics', desc: 'Sustainable and conscious material choices that respect both the environment and the heritage.', icon: <Globe size={24} /> },
    { title: 'Design Agility', desc: 'Creating flexible spaces that evolve with the changing needs of modern families and businesses.', icon: <Compass size={24} /> },
  ];

  return (
    <MainLayout>
      {/* Immersive Header */}
      <section className="relative pt-40 pb-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 opacity-30 -z-10 blur-[150px] scale-150 rotate-12" />
        <div className="container mx-auto px-6">
           <div className="max-w-4xl space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-5">
                 <span className="h-[2px] w-24 bg-primary"></span>
                 <span className="text-white uppercase tracking-[0.6em] text-xs font-black italic">The Future Narrative</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-5xl md:text-7xl lg:text-9xl leading-none font-bold uppercase tracking-widest">
                 Vision & <br />
                 <span className="italic text-primary font-bold">Evolution.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl text-lg uppercase italic tracking-[0.2em] font-medium leading-loose">
                 "Our vision is to redefine the global standard of luxury architecture through a lens of psychological comfort and futuristic intelligence."
              </motion.p>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white relative overflow-hidden group">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
              <div className="flex flex-col space-y-6">
                 <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs block leading-none">The MindScape Ethos</span>
                 <h2 className="text-4xl lg:text-7xl text-secondary uppercase tracking-widest italic group-hover:text-primary transition-colors">Designing with <br /> <span className="font-bold border-b-4 border-primary/20 pb-4">Conscious Vision.</span></h2>
              </div>
              <p className="text-muted-foreground text-lg uppercase tracking-widest leading-loose max-w-xl opacity-60">
                 We don't just draft plans; we create sanctuaries. Every square foot we design is an opportunity to improve the quality of life and the efficiency of labor.
              </p>
              <div className="space-y-8">
                 <div className="flex items-start space-x-8 group/card p-8 rounded-3xl border border-zinc-50 hover:bg-zinc-50 hover:-translate-y-2 transition-all">
                    <div className="p-5 bg-white shadow-xl rounded-2xl text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all">
                       <Target size={32} />
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-xl font-bold uppercase tracking-widest text-secondary">Our Mission</h4>
                       <p className="text-muted-foreground text-xs uppercase tracking-widest leading-loose italic">To provide bespoke architectural and interior solutions that elevate the dignity of every space we touch.</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-8 group/card p-8 rounded-3xl border border-zinc-50 hover:bg-zinc-50 hover:-translate-y-2 transition-all">
                    <div className="p-5 bg-white shadow-xl rounded-2xl text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all">
                       <Eye size={32} />
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-xl font-bold uppercase tracking-widest text-secondary">Our Vision</h4>
                       <p className="text-muted-foreground text-xs uppercase tracking-widest leading-loose italic">Becoming India's most respected design studio by 2030, recognized for intellectual and aesthetic excellence.</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="relative group/image">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] -z-10 group-hover/image:bg-primary/20 transition-all duration-[2s]" />
              <div className="relative h-[800px] rounded-[100px] overflow-hidden shadow-3xl border-[20px] border-white shadow-2xl skew-y-3 group-hover/image:skew-y-0 transition-transform duration-[2s]">
                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Visionary Architecture" className="h-full w-full object-cover group-hover/image:scale-110 transition-transform duration-[3s]" />
                 <div className="absolute inset-0 bg-black/40 group-hover/image:bg-black/10 transition-colors" />
                 <div className="absolute bottom-20 left-20">
                    <span className="text-white text-9xl font-black italic opacity-20 group-hover:opacity-40 transition-opacity">FUTURE</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary opacity-5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-6">
           <div className="text-center mb-24 max-w-4xl mx-auto space-y-8">
              <span className="text-primary text-[10px] uppercase font-black italic tracking-[0.5em] block leading-none">The Foundation Blocks</span>
              <h2 className="text-4xl lg:text-6xl text-white uppercase tracking-widest font-black italic">Core <span className="text-primary">Values.</span></h2>
              <p className="text-white/40 text-sm uppercase tracking-widest font-medium leading-loose opacity-60">What drives every single conceptual draft in our studio.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {coreValues.map((value, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col items-center text-center space-y-8 p-10 bg-white/5 border border-white/5 rounded-3xl hover:bg-primary/10 transition-all hover:translate-y-4 duration-500 group"
                >
                   <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                      {value.icon}
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-xl font-bold uppercase tracking-widest text-white">{value.title}</h4>
                      <p className="text-white/40 text-xs uppercase tracking-widest leading-loose font-medium">{value.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Call to Vision CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="flex flex-col space-y-12">
                  <h2 className="text-4xl lg:text-7xl text-secondary uppercase tracking-[0.1em] font-black leading-none italic">Let's Build the <span className="text-primary">Unimaginable.</span></h2>
                  <p className="text-muted-foreground text-lg uppercase tracking-widest leading-loose max-w-md italic">Collaborate with our visionaries to transform your plot of land into a legacy of architecture.</p>
                  <div className="pt-6">
                     <Link href="/contact" className="px-16 py-8 bg-secondary text-white text-xs font-bold uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-3xl inline-flex items-center group">
                        Begin the Journey <Sparkles className="ml-4 animate-pulse text-primary group-hover:text-white" size={18} />
                     </Link>
                  </div>
               </div>
               <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" alt="Sketching Future" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-secondary/60 group-hover:bg-secondary/40 transition-colors" />
                  <div className="absolute inset-20 border-[2px] border-white/20 group-hover:border-primary transition-all duration-1000 flex items-center justify-center">
                     <span className="text-white text-xs uppercase font-black italic tracking-[1em] -rotate-90">MINDSCAPE VISION 2024</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </MainLayout>
  );
};

export default VisionPage;
