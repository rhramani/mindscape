'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-white shadow-xl hover:-translate-y-4 transition-all duration-700 h-[600px] flex flex-col"
    >
      <div className="relative flex-grow overflow-hidden">
        <Image
          src={project.image || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80'}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out shadow-inner"
        />
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
        
        {/* Hover Icon Link */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-110 z-20">
           <Link
             href={`/projects/${project.id || project._id}`}
             className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-3xl hover:bg-black transition-colors"
           >
             <ArrowUpRight size={32} />
           </Link>
        </div>

        {/* Categories Badge Area */}
        <div className="absolute top-8 left-8 flex flex-wrap gap-3">
          <span className="bg-white px-5 py-2 text-primary font-bold uppercase tracking-widest text-[10px] shadow-lg rounded-full">
            {project.category}
          </span>
          {project.style && (
            <span className="bg-primary px-5 py-2 text-white font-bold uppercase tracking-widest text-[10px] shadow-lg rounded-full">
              {project.style}
            </span>
          )}
        </div>
      </div>

      <div className="p-10 bg-white group-hover:bg-zinc-50 transition-colors duration-500 flex flex-col space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors leading-none truncate pr-4">
              {project.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-xs uppercase tracking-widest font-semibold group-hover:text-secondary transition-colors">
              <MapPin size={14} className="mr-2 text-primary" />
              {project.location || 'Mumbai, Maharashtra'}
            </div>
          </div>
          {project.budget && (
           <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Budget Range</p>
              <p className="text-lg font-bold text-secondary italic tracking-widest">{project.budget}</p>
           </div>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed opacity-100 lg:opacity-60 group-hover:opacity-100 transition-opacity duration-500">
           {project.description || "Transforming residential spaces into modern masterpieces. Every design detail is carefully curated to reflect contemporary luxury and functional elegance."}
        </p>

        <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
           <Link href={`/projects/${project.id || project._id}`} className="text-xs uppercase tracking-[0.3em] font-bold text-secondary group-hover:text-primary transition-colors flex items-center group/link leading-none p-1">
              Read More <div className="ml-3 h-[2px] w-8 bg-zinc-200 group-hover/link:w-16 group-hover/link:bg-primary transition-all duration-500"></div>
           </Link>
           <span className="text-zinc-200 text-3xl font-heading font-black italic">0{index + 1}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
