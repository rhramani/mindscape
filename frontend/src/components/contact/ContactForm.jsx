'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import api from '@/lib/api';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().optional(),
});

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      // Simulate API call
      // await api.post('/contact', data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const projectTypes = ['Residential', 'Commercial', 'Luxury', 'Landscape', 'Consulting'];
  const budgets = ['Under 5 Lakhs', '5 - 15 Lakhs', '15 - 30 Lakhs', '30 - 50 Lakhs', '50 Lakhs+'];

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-2xl p-10 lg:p-20 relative overflow-hidden rounded-3xl shadow-3xl">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/80 rounded-full blur-[100px] -z-10 opacity-30" />

      <h3 className="text-3xl lg:text-5xl text-white uppercase tracking-widest font-bold mb-10 leading-tight">
        Let's Start Your <span className="text-primary italic">Transformation.</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
             <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Full Name</label>
             <input
               {...register('name')}
               placeholder="John Doe"
               className={`w-full bg-white/5 border-b-2 px-6 py-5 text-white focus:outline-none transition-all placeholder:text-white/10 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest ${
                 errors.name ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-primary focus:bg-primary/5'
               }`}
             />
             {errors.name && <p className="text-red-400 text-[10px] uppercase tracking-widest font-bold mt-2">{errors.name.message}</p>}
          </div>

          <div className="space-y-4">
             <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Phone Number</label>
             <input
               {...register('phone')}
               placeholder="+91 00000 00000"
               className={`w-full bg-white/5 border-b-2 px-6 py-5 text-white focus:outline-none transition-all placeholder:text-white/10 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest ${
                 errors.phone ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-primary focus:bg-primary/5'
               }`}
             />
             {errors.phone && <p className="text-red-400 text-[10px] uppercase tracking-widest font-bold mt-2">{errors.phone.message}</p>}
          </div>

          <div className="space-y-4">
             <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Project Type</label>
             <select
               {...register('projectType')}
               className={`w-full bg-white/5 border-b-2 px-6 py-5 text-white focus:outline-none transition-all appearance-none cursor-pointer placeholder:uppercase placeholder:text-xs placeholder:tracking-widest ${
                 errors.projectType ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-primary focus:bg-primary/5'
               }`}
             >
               <option value="" className="bg-secondary text-white/40 italic">Select Project Type</option>
               {projectTypes.map(type => (
                 <option key={type} value={type} className="bg-secondary text-white uppercase tracking-widest text-[10px] py-4">{type}</option>
               ))}
             </select>
             {errors.projectType && <p className="text-red-400 text-[10px] uppercase tracking-widest font-bold mt-2">{errors.projectType.message}</p>}
          </div>

          <div className="space-y-4">
             <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Proposed Budget</label>
             <select
               {...register('budget')}
               className={`w-full bg-white/5 border-b-2 px-6 py-5 text-white focus:outline-none transition-all appearance-none cursor-pointer ${
                 errors.budget ? 'border-red-500 bg-red-500/5' : 'border-white/10 focus:border-primary focus:bg-primary/5'
               }`}
             >
               <option value="" className="bg-secondary text-white/40 italic">Select Budget Range</option>
               {budgets.map(bud => (
                 <option key={bud} value={bud} className="bg-secondary text-white uppercase tracking-widest text-[10px] py-4">{bud}</option>
               ))}
             </select>
             {errors.budget && <p className="text-red-400 text-[10px] uppercase tracking-widest font-bold mt-2">{errors.budget.message}</p>}
          </div>
        </div>

        <div className="space-y-4">
           <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-1">Message (Optional)</label>
           <textarea
             {...register('message')}
             placeholder="Tell us about your vision..."
             rows={4}
             className="w-full bg-white/5 border-b-2 border-white/10 px-6 py-5 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all placeholder:text-white/10 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
           />
        </div>

        <div className="pt-8 relative z-10 flex items-center justify-between">
           <button
             type="submit"
             disabled={status === 'loading'}
             className="px-16 py-8 bg-primary text-white font-heading font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center group shadow-[0_20px_50px_rgba(141,181,28,0.3)] hover:shadow-primary/50"
           >
             {status === 'loading' ? (
               <>
                 <Loader2 className="animate-spin mr-3" size={18} /> Sending Your Request...
               </>
             ) : (
               <>
                 Transmit Vision <span className="ml-4 h-4 w-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform"><ArrowUpRight size={10} /></span>
               </>
             )}
           </button>
           
           <div className="hidden lg:flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                 <Send size={18} className="translate-x-[2px] -translate-y-[2px]" />
              </div>
              <span className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">Secure Submission</span>
           </div>
        </div>

        {/* Success/Error Messages Overlay */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 bg-secondary flex flex-col items-center justify-center text-center p-12 z-20 rounded-2xl"
            >
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-8 animate-bounce">
                <CheckCircle2 size={64} />
              </div>
              <h4 className="text-3xl text-white font-bold uppercase tracking-widest mb-4">Vision Received Successfully.</h4>
              <p className="text-white/40 uppercase tracking-widest text-[10px] leading-loose max-w-sm">
                Our lead designers are already analyzing your project requirements. Expect a callback within 24 working hours.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-12 text-primary font-bold uppercase tracking-widest text-[10px] border-b border-primary pb-1"
               >
                Send Another Vision
              </button>
            </motion.div>
          )}
          
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 bg-red-950 flex flex-col items-center justify-center text-center p-12 z-20 rounded-2xl"
            >
              <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 mb-8 animate-shake">
                <AlertCircle size={64} />
              </div>
              <h4 className="text-2xl text-white font-bold uppercase tracking-widest mb-4">Transmission Failed.</h4>
              <p className="text-white/40 uppercase tracking-widest text-[10px] leading-loose max-w-sm">
                There was a technical error while processing your request. Please try again or call us directly.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-12 text-white font-bold uppercase tracking-widest text-[10px] border-b border-white pb-1"
               >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactForm;
