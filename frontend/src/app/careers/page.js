'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, X, Upload, Send, CheckCircle2, AlertCircle, FileText, User, Mail, Phone, Building2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const applySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please specify your experience'),
  resumeUrl: z.string().optional(),
});

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [status, setStatus] = useState('idle');

  const jobs = [
    {
      id: 1,
      title: 'Senior Interior Designer',
      location: 'Andheri, Mumbai',
      type: 'Full-time',
      experience: '5-8 Years',
      salary: '8.0L - 12.0L PA',
      skills: ['AutoCAD', '3ds Max', 'Revit', 'Luxury Interiors'],
      description: 'We are looking for a visionary designer who can translate client requirements into practical, high-end spatial narratives.',
    },
    {
      id: 2,
      title: 'Principal Architecture Lead',
      location: 'Hybrid / Mumbai',
      type: 'Contract',
      experience: '10+ Years',
      salary: 'Open for discussion',
      skills: ['Sustainability', 'Heritage Restoration', 'Project Management'],
      description: 'Lead our most prestigious architectural projects from conceptualization to structural integrity audits.',
    },
    {
      id: 3,
      title: 'Junior 3D Visualizer',
      location: 'Andheri, Mumbai',
      type: 'Full-time',
      experience: '1-3 Years',
      salary: '3.5L - 5.0L PA',
      skills: ['V-Ray', 'Lumion', 'Photoshop', 'Corona Renderer'],
      description: 'Bring our 2D concepts into breathtaking 3D life. High attention to material textures and lighting is a must.',
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      reset();
      setTimeout(() => {
        setStatus('idle');
        setIsApplying(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <MainLayout>
      {/* Immersive Header */}
      <section className="relative pt-40 pb-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 opacity-30 -z-10 blur-[150px] scale-150 rotate-12" />
        <div className="container mx-auto px-6">
           <div className="max-w-4xl space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-5">
                 <span className="h-[2px] w-24 bg-primary"></span>
                 <span className="text-white uppercase tracking-[0.6em] text-xs font-black italic">The Roster of Visionaries</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-5xl md:text-7xl lg:text-9xl leading-none font-bold uppercase tracking-widest">
                 Join the <br />
                 <span className="italic text-primary font-bold">Concept Elite.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl text-lg uppercase italic tracking-[0.2em] font-medium leading-loose">
                 "We don't search for employees; we search for visionary architects whose blueprints tell stories of tomorrow."
              </motion.p>
           </div>
        </div>
      </section>

      {/* Careers Content Section */}
      <section className="py-24 bg-white relative overflow-hidden group">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 space-y-8 lg:space-y-0">
             <div className="space-y-4">
                <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold block leading-none">Studio Vacancies</span>
                <h2 className="text-4xl lg:text-5xl text-secondary uppercase tracking-widest italic group-hover:text-primary transition-colors">Available <span className="font-bold border-b-4 border-primary/20 pb-4">Studio Positions.</span></h2>
             </div>
             <p className="text-muted-foreground max-w-sm text-[10px] uppercase tracking-widest font-bold font-heading italic leading-loose pb-2 opacity-60">
                Join our roster of high-caliber design professionals. Every role in MindScape is a step toward architectural mastery.
             </p>
           </div>

           <div className="space-y-8">
              {jobs.map((job, i) => (
                <motion.div 
                   key={job.id} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white border-b border-zinc-100 hover:bg-zinc-50 hover:shadow-2xl hover:rounded-3xl hover:border-transparent transition-all duration-700 overflow-hidden"
                >
                   <div className="p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
                      <div className="flex flex-col space-y-6 flex-grow">
                         <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm border">
                               <Briefcase size={28} />
                            </div>
                            <div className="space-y-2">
                               <h4 className="text-3xl font-bold uppercase tracking-widest text-secondary">{job.title}</h4>
                               <div className="flex items-center space-x-6 text-[10px] uppercase font-bold tracking-widest text-muted-foreground italic">
                                  <span className="flex items-center"><MapPin size={14} className="mr-2 text-primary" /> {job.location}</span>
                                  <span className="flex items-center"><Clock size={14} className="mr-2 text-primary" /> {job.type}</span>
                               </div>
                            </div>
                         </div>
                         <div className="flex flex-wrap gap-3 pt-4">
                            {job.skills.map(skill => (
                               <span key={skill} className="px-5 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-[9px] uppercase font-bold tracking-widest text-muted-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                                 {skill}
                               </span>
                            ))}
                         </div>
                      </div>

                      <div className="flex items-center space-x-12">
                         <div className="hidden lg:flex flex-col items-end">
                            <span className="text-[10px] uppercase font-black italic tracking-widest text-secondary opacity-20">Salary Appraisal</span>
                            <span className="text-2xl font-black italic tracking-widest text-secondary leading-none mt-2">{job.salary}</span>
                         </div>
                         <button 
                            onClick={() => { setSelectedJob(job); setIsApplying(true); }}
                            className="px-12 py-6 bg-secondary text-white text-[10px] uppercase font-black italic tracking-[0.4em] hover:bg-primary shadow-2xl transition-all flex items-center group/btn"
                         >
                            Apply Now <ArrowRight size={18} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
                         </button>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-5 rounded-full blur-[100px]" />
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group/img">
               <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10 group-hover/img:bg-primary/20 transition-all duration-[3s]" />
               <div className="relative h-[700px] rounded-[100px] overflow-hidden shadow-3xl skew-x-2 group-hover/img:skew-x-0 transition-transform duration-[2s]">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" alt="The Atelier" className="h-full w-full object-cover group-hover/img:scale-110 transition-transform duration-[4s]" />
                  <div className="absolute inset-0 bg-secondary/80 group-hover/img:bg-secondary/40 transition-colors" />
                  <div className="absolute bottom-20 left-20">
                     <span className="text-white text-9xl font-black italic opacity-20 hover:opacity-40 transition-opacity">TEAM</span>
                  </div>
               </div>
            </div>
            <div className="space-y-12">
               <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs block leading-none">Culture of Excellence</span>
               <h2 className="text-4xl lg:text-7xl text-secondary uppercase tracking-widest italic group-hover:text-primary transition-colors">Life at the <br /> <span className="font-bold border-b-4 border-primary/20 pb-4">Concept Studio.</span></h2>
               <div className="grid grid-cols-2 gap-10 pt-10">
                  <div className="space-y-4">
                     <h4 className="text-lg font-bold uppercase tracking-widest text-secondary italic">Global Projects</h4>
                     <p className="text-muted-foreground text-[10px] uppercase tracking-widest leading-loose font-medium opacity-60 italic">Work on some of India's most architecturally significant luxury properties.</p>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-lg font-bold uppercase tracking-widest text-secondary italic">Design Freedom</h4>
                     <p className="text-muted-foreground text-[10px] uppercase tracking-widest leading-loose font-medium opacity-60 italic">We encourage experimental drafts and innovative material engineering.</p>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-lg font-bold uppercase tracking-widest text-secondary italic">Mentorship</h4>
                     <p className="text-muted-foreground text-[10px] uppercase tracking-widest leading-loose font-medium opacity-60 italic">Direct training under Principal Architect Mr. Hiten on complex structural narratives.</p>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-lg font-bold uppercase tracking-widest text-secondary italic">Modern Stack</h4>
                     <p className="text-muted-foreground text-[10px] uppercase tracking-widest leading-loose font-medium opacity-60 italic">Access to the latest parametric design software and structural analysis tools.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isApplying && selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsApplying(false)} className="absolute inset-0 bg-black/90 backdrop-blur-3xl" />
            
            <motion.div 
               initial={{ scale: 0.9, y: 20, opacity: 0 }} 
               animate={{ scale: 1, y: 0, opacity: 1 }} 
               exit={{ scale: 1.1, y: -20, opacity: 0 }} 
               className="relative bg-white/5 border border-white/10 backdrop-blur-2xl w-full max-w-4xl p-10 lg:p-20 overflow-hidden shadow-[0_0_100px_rgba(141,181,28,0.2)] rounded-3xl"
            >
               <button onClick={() => setIsApplying(false)} className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors">
                  <X size={32} />
               </button>

               <div className="text-center mb-16 space-y-6">
                  <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold">Transmit Resume</span>
                  <h2 className="text-white text-3xl lg:text-5xl font-bold uppercase tracking-widest italic">{selectedJob.title}</h2>
               </div>

               <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Full Name</label>
                        <div className="relative group">
                           <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary" />
                           <input {...register('name')} placeholder="Candidate Name" className="w-full bg-white/5 border-b-2 border-white/10 px-16 py-5 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all text-sm tracking-widest placeholder:text-white/10 uppercase" />
                        </div>
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Electronic Mail</label>
                        <div className="relative group">
                           <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary" />
                           <input {...register('email')} placeholder="visionary@email.com" className="w-full bg-white/5 border-b-2 border-white/10 px-16 py-5 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all text-sm tracking-widest placeholder:text-white/10 uppercase" />
                        </div>
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Mobile Number</label>
                        <div className="relative group">
                           <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary" />
                           <input {...register('phone')} placeholder="+91 00000 00000" className="w-full bg-white/5 border-b-2 border-white/10 px-16 py-5 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all text-sm tracking-widest placeholder:text-white/10 uppercase" />
                        </div>
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Current Experience</label>
                        <div className="relative group">
                           <Clock size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary" />
                           <input {...register('experience')} placeholder="Years of drafting" className="w-full bg-white/5 border-b-2 border-white/10 px-16 py-5 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all text-sm tracking-widest placeholder:text-white/10 uppercase" />
                        </div>
                     </div>
                  </div>

                  <div className="p-12 border-2 border-dashed border-white/10 rounded-3xl group/dash hover:border-primary/50 transition-all cursor-pointer flex flex-col items-center justify-center text-center space-y-6">
                     <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-white/30 group-hover/dash:bg-primary group-hover/dash:text-white transition-all shadow-2xl">
                        <Upload size={32} />
                     </div>
                     <div className="space-y-2">
                        <p className="text-white text-sm uppercase tracking-widest font-bold">Architectural Portfolio & CV</p>
                        <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">PDF, DOCX (Max 10MB)</p>
                     </div>
                  </div>

                  <div className="flex flex-col items-center space-y-10 pt-10">
                     <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="px-20 py-8 bg-primary text-white text-[10px] uppercase font-black italic tracking-[0.5em] hover:scale-105 transition-transform shadow-[0_20px_60px_rgba(141,181,28,0.4)] disabled:opacity-50 flex items-center"
                     >
                        {status === 'loading' ? 'Transmitting Data...' : 'Submit Application'}
                        {status === 'idle' && <Send size={18} className="ml-4" />}
                     </button>
                     <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold italic">Private & Encrypted Transmission</p>
                  </div>

                  {/* Overlay Feedback */}
                  <AnimatePresence>
                     {status === 'success' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-secondary flex flex-col items-center justify-center text-center p-12 z-30 rounded-2xl">
                           <CheckCircle2 size={100} className="text-primary mb-8 animate-bounce" />
                           <h4 className="text-4xl text-white font-bold uppercase tracking-widest italic mb-4">Application Transmitted.</h4>
                           <p className="text-white/40 uppercase tracking-widest text-[10px] leading-loose max-w-sm">Our talent acquisition lead will analyze your portfolio and reach out if your vision aligns with ours.</p>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default CareersPage;
