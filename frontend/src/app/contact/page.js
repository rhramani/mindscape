'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContactForm from '@/components/contact/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe, ArrowUpRight, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ContactPage = () => {
  const contactDetails = [
    {
      title: 'Our Headquarters',
      icon: <MapPin size={24} className="text-primary" />,
      content: 'A-117/118, 1st Floor, Crystal Plaza, New Link Road, Opp. Infiniti Mall, Andheri (W), Mumbai - 400053',
    },
    {
      title: 'Voice Support',
      icon: <Phone size={24} className="text-primary" />,
      content: '+91 93240 10214 / 022 4971 7848',
    },
    {
      title: 'Electronic Mail',
      icon: <Mail size={24} className="text-primary" />,
      content: 'info@mindscapedesign.co.in',
    },
  ];

  const socialLinks = ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'WhatsApp'];

  return (
    <MainLayout>
      {/* Dynamic Header Section */}
      <section className="relative pt-48 pb-64 bg-secondary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Contact MindScape"
            fill
            className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[3000ms]"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
           <div className="max-w-4xl space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-4">
                 <span className="h-[2px] w-16 bg-primary"></span>
                 <span className="text-white uppercase tracking-[0.5em] text-xs font-bold leading-none">Connect with Excellence</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-6xl md:text-8xl lg:text-[10rem] leading-[0.8] font-bold uppercase tracking-widest leading-[0.8]">
                 Sketching Your <br />
                 <span className="italic text-primary font-bold outline-text">Concept Story.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl text-lg uppercase italic tracking-[0.2em] font-medium leading-loose">
                 "Our philosophy is simple: we create spaces that resonate with your soul. Let's start sketching your future today."
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

      {/* Contact Content Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
           {/* Form Area */}
           <div className="lg:col-span-12 -mt-64 relative z-20">
              <ContactForm />
           </div>

           {/* Information Grid */}
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex flex-col space-y-6 group">
                   <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100">
                      {detail.icon}
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">{detail.title}</h4>
                      <p className="text-muted-foreground text-sm leading-loose max-w-[280px] uppercase tracking-widest font-medium">{detail.content}</p>
                   </div>
                </div>
              ))}
              
              <div className="flex flex-col space-y-6 group">
                 <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100">
                    <Clock size={24} />
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Business Timing</h4>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">Monday - Saturday <br />10:00 AM - 07:00 PM</p>
                 </div>
              </div>
           </div>

           {/* Socials & Networking */}
           <div className="lg:col-span-4 pt-20">
              <div className="bg-secondary p-12 lg:p-16 rounded-3xl text-white space-y-12 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                 <div className="space-y-6">
                    <span className="text-primary text-[10px] uppercase font-bold tracking-[0.5em] block">Digital Footprint</span>
                    <h4 className="text-3xl font-bold uppercase tracking-widest">Network With Us</h4>
                 </div>
                 <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <Link 
                        key={social} 
                        href="#" 
                        className="px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-primary hover:border-primary transition-all flex items-center group/social"
                      >
                         {social} 
                         <Share2 size={12} className="ml-3 opacity-30 group-hover/social:opacity-100 group-hover/social:scale-125 transition-all" />
                      </Link>
                    ))}
                 </div>
                 <div className="pt-10 border-t border-white/5 space-y-6">
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">Instant Support</p>
                    <a 
                      href="https://wa.me/919324010214" 
                      target="_blank" 
                      className="flex items-center space-x-6 hover:translate-x-4 transition-transform duration-500 text-primary"
                    >
                       <MessageCircle size={32} />
                       <div className="flex flex-col">
                          <span className="text-2xl font-bold uppercase tracking-widest leading-none">WhatsApp Now</span>
                          <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold mt-2">Speak directly to a lead designer</span>
                       </div>
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Map Section Integration */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden h-[600px] group">
         <div className="absolute inset-0 grayscale contrast-125 opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3409477024505!2d72.83151817520684!3d19.12558568208889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d92e591781%3A0xe54e58b387799d54!2sCrystal%20Plaza%2!5e0!3m2!1sen!2sin!4v1711978262791!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
         
         <div className="container mx-auto px-6 h-full flex items-center justify-center lg:justify-start pointer-events-none relative z-10">
            <div className="bg-white/80 p-12 lg:p-16 backdrop-blur-3xl border border-white max-w-sm pointer-events-auto rounded-3xl shadow-3xl hover:scale-105 transition-transform duration-500">
               <div className="space-y-6">
                  <div className="w-12 h-1 bg-primary" />
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-secondary">Visit Our Atelier</h4>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium leading-loose">Experience our material library and conceptual models in person. Book a studio visit today.</p>
                  <button className="flex items-center space-x-3 text-secondary group/btn">
                     <span className="text-xs uppercase font-black italic tracking-widest">Open Google Maps</span> 
                     <Globe size={18} className="text-primary group-hover/btn:rotate-180 transition-transform duration-1000" />
                  </button>
               </div>
            </div>
         </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
