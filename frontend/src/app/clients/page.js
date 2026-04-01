'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Building2, Globe, Heart, CheckCircle2, Award, Briefcase, Users, MessageSquare } from 'lucide-react';

const ClientsPage = () => {
  const corporateClients = [
    { name: 'Tech Solutions Inc', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?q=80&w=2070&auto=format&fit=crop', industry: 'Technology' },
    { name: 'Global Finance Corp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?q=80&w=2070&auto=format&fit=crop', industry: 'Banking' },
    { name: 'Modern Media Group', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?q=80&w=2070&auto=format&fit=crop', industry: 'Advertising' },
    { name: 'Elite Real Estate', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?q=80&w=2070&auto=format&fit=crop', industry: 'Property' },
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
                 <span className="text-white uppercase tracking-[0.6em] text-xs font-black italic">The Roster of Trust</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-5xl md:text-7xl lg:text-9xl leading-none font-bold uppercase tracking-widest">
                 Our Esteemed <br />
                 <span className="italic text-primary font-bold">Clients.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl text-lg uppercase italic tracking-[0.2em] font-medium leading-loose">
                 "Architecture is a collaboration. Our clients are our most valuable co-authors in every masterpiece we build."
              </motion.p>
           </div>
        </div>
      </section>

      {/* Corporate Grid Section */}
      <section className="py-24 bg-white relative overflow-hidden group">
        <div className="container mx-auto px-6">
           <div className="text-center mb-24 max-w-4xl mx-auto space-y-8">
              <span className="text-primary text-[10px] uppercase font-black italic tracking-[0.5em] block leading-none">Collaborative Institutions</span>
              <h2 className="text-4xl lg:text-6xl text-secondary uppercase tracking-widest font-black italic">Corporate <span className="text-primary font-bold">Partnerships.</span></h2>
              <div className="mx-auto w-24 h-1 bg-primary/20" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {corporateClients.map((client, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col items-center group/card p-12 bg-zinc-50 border border-zinc-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-4"
                >
                   <div className="relative w-40 h-24 mb-10 grayscale group-hover/card:grayscale-0 transition-all duration-700 opacity-30 group-hover/card:opacity-100 group-hover/card:scale-110">
                      <img src={client.logo} alt={client.name} className="h-full w-full object-contain" />
                   </div>
                   <div className="space-y-4 text-center">
                      <h4 className="text-lg font-bold uppercase tracking-widest text-secondary group-hover/card:text-primary transition-colors">{client.name}</h4>
                      <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-black italic opacity-60">Industry: {client.industry}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Residential Experience Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-5 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative group/img">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] -z-10 group-hover/img:bg-primary/20 transition-all duration-[2s]" />
              <div className="relative h-[700px] rounded-[100px] overflow-hidden shadow-3xl skew-y-3 group-hover/img:skew-y-0 transition-transform duration-[2s]">
                 <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="The Elite Living" className="h-full w-full object-cover group-hover/img:scale-110 transition-transform duration-[3s]" />
                 <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/10 transition-colors" />
                 <div className="absolute bottom-20 left-20">
                    <span className="text-white text-9xl font-black italic opacity-20 hover:opacity-40 transition-opacity">TRUST</span>
                 </div>
              </div>
           </div>
           
           <div className="space-y-12">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs block leading-none">The Private Segment</span>
              <h2 className="text-4xl lg:text-7xl text-white uppercase tracking-widest font-black italic group-hover:text-primary transition-colors leading-none">High-Net-Worth <br /> <span className="font-bold border-b-4 border-primary/20 pb-4">Individuals.</span></h2>
              <p className="text-white/40 text-lg uppercase tracking-widest leading-loose max-w-sm font-medium italic">
                 Discretion and precision are at the heart of our residential commissions. We transform private plots of land into masterpieces of architecture.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5">
                 <div className="space-y-4 flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl hover:bg-primary/20 transition-all cursor-pointer group">
                    <Heart size={32} className="text-primary group-hover:scale-125 transition-transform" />
                    <h4 className="text-lg font-bold uppercase tracking-widest text-white italic leading-none">Personalized Touch</h4>
                 </div>
                 <div className="space-y-4 flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl hover:bg-primary/20 transition-all cursor-pointer group">
                    <Award size={32} className="text-primary group-hover:scale-125 transition-transform" />
                    <h4 className="text-lg font-bold uppercase tracking-widest text-white italic leading-none">Award Winning</h4>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div className="space-y-6 group">
                 <div className="p-8 bg-zinc-50 rounded-full w-fit mx-auto group-hover:bg-primary transition-all shadow-xl">
                    <Briefcase size={32} className="text-primary group-hover:text-white" />
                 </div>
                 <p className="text-5xl font-black italic text-secondary leading-none">542+</p>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="space-y-6 group">
                 <div className="p-8 bg-zinc-50 rounded-full w-fit mx-auto group-hover:bg-primary transition-all shadow-xl">
                    <Users size={32} className="text-primary group-hover:text-white" />
                 </div>
                 <p className="text-5xl font-black italic text-secondary leading-none">410+</p>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Happy HNWIs</p>
              </div>
              <div className="space-y-6 group">
                 <div className="p-8 bg-zinc-50 rounded-full w-fit mx-auto group-hover:bg-primary transition-all shadow-xl">
                    <Globe size={32} className="text-primary group-hover:text-white" />
                 </div>
                 <p className="text-5xl font-black italic text-secondary leading-none">12+</p>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Cities in India</p>
              </div>
              <div className="space-y-6 group">
                 <div className="p-8 bg-zinc-50 rounded-full w-fit mx-auto group-hover:bg-primary transition-all shadow-xl">
                    <MessageSquare size={32} className="text-primary group-hover:text-white" />
                 </div>
                 <p className="text-5xl font-black italic text-secondary leading-none">94%</p>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Repeat Clients</p>
              </div>
           </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden group">
         <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
               <h2 className="text-4xl md:text-6xl lg:text-7xl text-secondary leading-none uppercase tracking-widest font-black italic">
                  Join our <span className="text-primary font-bold">Roster.</span>
               </h2>
               <p className="text-muted-foreground text-lg uppercase tracking-widest leading-loose max-w-2xl mx-auto italic font-medium opacity-60">
                 "We are always on the lookout for visionary partners and clients who value the intersection of architectural risk and high-end aesthetic."
               </p>
               <div className="pt-8 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
                  <Link href="/contact" className="px-16 py-8 bg-secondary text-white font-heading font-bold uppercase tracking-[0.4em] text-xs hover:bg-primary transition-all shadow-3xl inline-flex items-center group">
                     Begin Collaboration <Globe size={18} className="ml-4 animate-spin-slow" />
                  </Link>
                  <Link href="/projects" className="text-secondary font-black italic tracking-widest text-xs border-b-2 border-secondary pb-1 uppercase hover:text-primary hover:border-primary transition-all">
                     See our masterpiece roster
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </MainLayout>
  );
};

export default ClientsPage;
