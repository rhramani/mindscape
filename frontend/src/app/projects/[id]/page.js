'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  User, 
  Maximize2, 
  Share2, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  Building2 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data for project (In a real app, fetch from API)
  const project = {
    id,
    title: 'The Crystal Haven',
    category: 'Residential',
    style: 'Modern Luxury',
    location: 'Bandra, Mumbai',
    date: 'February 2024',
    budget: '50L - 1Cr+',
    area: '4,500 Sq Ft',
    description: 'A masterpiece of contemporary residential design, the Crystal Haven represents the pinnacle of urban luxury. Every space was crafted to optimize natural light while maintaining a sense of profound sanctuary. The project involved complete structural redesign and bespoke furniture curation.',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    ],
    features: [
      'Open-plan living concept',
      'Bespoke Italian marble installation',
      'Smart lighting architectural system',
      'Artisanal wall paneling',
      'Customized kitchen island',
      'Landscape integrated balcony',
    ]
  };

  return (
    <MainLayout>
      {/* Dynamic Header Section */}
      <section className="relative pt-40 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-30 -z-10 blur-[150px] scale-150" />
        <div className="container mx-auto px-6">
           <Link href="/projects" className="inline-flex items-center text-white/40 hover:text-primary transition-colors text-xs font-bold uppercase tracking-[0.3em] mb-12 group">
              <ArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" size={16} /> Back to collections
           </Link>
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl space-y-8">
              <div className="flex items-center space-x-5">
                 <span className="h-[2px] w-12 bg-primary"></span>
                 <span className="text-primary uppercase tracking-[0.4em] text-xs font-black italic">{project.category} Masterpiece</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-widest leading-none">
                 {project.title}
              </h1>
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="flex flex-col space-y-2 border-l border-white/10 pl-6 h-fit">
                   <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Location</span>
                   <span className="text-white text-sm uppercase tracking-widest font-black italic">{project.location}</span>
                </div>
                <div className="flex flex-col space-y-2 border-l border-white/10 pl-6 h-fit">
                   <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Budget Segment</span>
                   <span className="text-white text-sm uppercase tracking-widest font-black italic">{project.budget}</span>
                </div>
                <div className="flex flex-col space-y-2 border-l border-white/10 pl-6 h-fit">
                   <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Surface Area</span>
                   <span className="text-white text-sm uppercase tracking-widest font-black italic">{project.area}</span>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:h-[800px]">
              {/* Primary Image */}
              <div className="lg:col-span-8 relative h-[500px] lg:h-full rounded-3xl overflow-hidden shadow-3xl group">
                 <Image src={project.images[0]} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                 <div className="absolute top-10 right-10 flex space-x-4">
                    <button className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-primary transition-all border border-white/10 shadow-xl group/btn">
                       <Maximize2 size={24} className="group-hover/btn:scale-110 transition-transform" />
                    </button>
                    <button className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-primary transition-all border border-white/10 shadow-xl group/btn">
                       <Share2 size={24} className="group-hover/btn:scale-110 transition-transform" />
                    </button>
                 </div>
              </div>
              
              {/* Secondary Grid */}
              <div className="lg:col-span-4 grid grid-cols-1 gap-8 h-full">
                 <div className="relative h-[300px] lg:h-full rounded-3xl overflow-hidden shadow-2xl group">
                    <Image src={project.images[1]} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                 </div>
                 <div className="relative h-[300px] lg:h-full rounded-3xl overflow-hidden shadow-2xl group">
                    <Image src={project.images[2]} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                 </div>
              </div>
           </div>

           {/* Content Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
              <div className="lg:col-span-8 space-y-12">
                 <div className="space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-primary">Concept Narrative</h3>
                    <h2 className="text-4xl text-secondary uppercase tracking-widest font-bold leading-tight">Elevating Luxury through <br /><span className="italic">Spatial Resilience.</span></h2>
                    <p className="text-secondary text-lg uppercase tracking-widest leading-loose font-medium italic opacity-60">
                       {project.description}
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {project.features.map((feat, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-6 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-primary/20 transition-all group"
                      >
                         <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                            <CheckCircle2 size={18} />
                         </div>
                         <span className="text-[10px] uppercase font-bold tracking-widest text-secondary">{feat}</span>
                      </motion.div>
                    ))}
                 </div>
              </div>

              <div className="lg:col-span-4 space-y-12 h-fit sticky top-40">
                 <div className="bg-secondary p-12 rounded-3xl text-white shadow-3xl space-y-10 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="space-y-4">
                       <h4 className="text-xl font-bold uppercase tracking-widest">Project Analytics</h4>
                       <div className="h-1 w-12 bg-primary" />
                    </div>
                    
                    <div className="space-y-8">
                       <div className="flex items-center justify-between">
                          <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Timeline</span>
                          <span className="text-sm font-black italic tracking-widest text-primary">{project.date}</span>
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Architect</span>
                          <span className="text-sm font-black italic tracking-widest text-white">Mr. Hiten K.</span>
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Style</span>
                          <span className="text-sm font-black italic tracking-widest text-white">{project.style}</span>
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Status</span>
                          <span className="text-[9px] font-black italic tracking-widest text-emerald-400 px-4 py-2 border border-emerald-400/20 rounded-full">Completed</span>
                       </div>
                    </div>
                    
                    <div className="pt-8 border-t border-white/5">
                       <button className="w-full py-6 bg-primary text-white text-[10px] uppercase font-black tracking-widest italic hover:scale-105 transition-transform shadow-2xl flex items-center justify-center space-x-4 group/btn">
                          <span>Request Studio Visit</span>
                          <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                       </button>
                    </div>
                 </div>
                 
                 <div className="flex items-center space-x-6 p-10 bg-zinc-50 rounded-3xl border border-zinc-100 group cursor-pointer hover:shadow-xl transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-zinc-100">
                       <Sparkles size={28} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Premium Service</p>
                       <p className="text-lg font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Residential Mastery</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Suggested Projects Section Placeholder */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex items-center justify-between mb-16">
              <div className="space-y-4">
                 <h2 className="text-4xl text-secondary uppercase tracking-widest leading-none">Other <span className="italic text-primary font-bold">Visions.</span></h2>
                 <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">Discover similar residential masterpieces.</p>
              </div>
              <Link href="/projects" className="text-xs uppercase tracking-widest font-bold border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all">Explore All Collections</Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center py-20 border-2 border-dashed border-zinc-200 rounded-3xl opacity-30">
              <div className="space-y-4 flex flex-col items-center">
                 <Layers size={48} className="text-zinc-400" />
                 <p className="text-zinc-400 uppercase font-black tracking-widest text-xs">Portfolio loading...</p>
              </div>
           </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectDetail;
