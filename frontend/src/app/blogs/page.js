'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Share2, Search, Filter, BookOpen, Clock } from 'lucide-react';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Future of Minimalist Architecture in 2024',
      excerpt: 'Exploring how minimalist design is evolving to incorporate warmth and natural textures while maintaining its clean aesthetic.',
      author: 'Hiten K.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Minimalism',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
      slug: 'future-of-minimalist-architecture',
    },
    {
      id: 2,
      title: 'Luxury Office Interiors That Boost Productivity',
      excerpt: 'Case study on how ergonomic luxury and smart layout design can transform your workspace into a powerhouse of creativity.',
      author: 'Aakash S.',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      slug: 'luxury-office-interiors-productivity',
    },
    {
      id: 3,
      title: 'Sustainable Landscaping: Designing with Nature',
      excerpt: 'Why ecological balance is becoming the new standard for modern luxury landscapes and gardens.',
      author: 'Pooja R.',
      date: 'March 05, 2024',
      readTime: '6 min read',
      category: 'Landscape',
      image: 'https://images.unsplash.com/photo-1558231221-191f54857991?auto=format&fit=crop&q=80',
      slug: 'sustainable-landscaping-principles',
    },
    {
      id: 4,
      title: 'Color Palettes for Luxury Residential Projects',
      excerpt: 'Deep dive into the sophisticated color theories we use to craft identities for our premium residential clients.',
      author: 'Hiten K.',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Psychology',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
      slug: 'luxury-color-palettes',
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
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Blogs MindScape"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
           <div className="max-w-4xl space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-5">
                 <span className="h-[2px] w-20 bg-primary"></span>
                 <span className="text-white uppercase tracking-[0.6em] text-xs font-black italic leading-none">The Architectural Journal</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-6xl md:text-8xl lg:text-[10rem] leading-[0.8] font-bold uppercase tracking-widest">
                 MindScape <br />
                 <span className="italic text-primary font-bold outline-text">Insights.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl text-lg uppercase italic tracking-[0.2em] font-medium leading-loose">
                 Deep dives into design philosophy, architectural trends, and spatial narratives from the leading designers at MindScape.
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

      {/* Featured Articles Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           {/* Filters & Search */}
           <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-24 space-y-8 lg:space-y-0 border-b border-zinc-100 pb-12">
              <div className="flex items-center space-x-6">
                 <div className="p-4 bg-zinc-50 rounded-2xl text-primary border border-zinc-100">
                    <BookOpen size={24} />
                 </div>
                 <div>
                    <h2 className="text-xl font-bold uppercase tracking-widest text-secondary mb-2">Curated Articles</h2>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground italic leading-none">Exploring {blogs.length} Perspectives</p>
                 </div>
              </div>

              <div className="flex items-center space-x-6 flex-wrap gap-y-4">
                 <div className="relative group">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input type="text" placeholder="Search Articles..." className="pl-12 pr-6 py-4 bg-zinc-50 border-none rounded-full text-[10px] font-bold tracking-widest uppercase text-secondary w-full md:w-64 focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner" />
                 </div>
                 <div className="flex items-center space-x-2">
                    {['All', 'Trends', 'Luxury', 'Minimalism'].map(cat => (
                      <button key={cat} className="px-6 py-4 text-[9px] uppercase tracking-widest font-black italic text-muted-foreground hover:bg-zinc-100 hover:text-secondary rounded-full transition-all">{cat}</button>
                    ))}
                 </div>
              </div>
           </div>

           {/* Blogs Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-24">
             {blogs.map((blog, i) => (
               <motion.article 
                 key={blog.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1, duration: 0.8 }}
                 viewport={{ once: true }}
                 className="group flex flex-col space-y-10"
               >
                 <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] shadow-inner" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Floating Categories */}
                    <Link href={`/blogs/${blog.slug}`} className="absolute top-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center group/btn hover:bg-primary hover:border-primary transition-all duration-500 overflow-hidden">
                       <span className="text-[10px] uppercase font-bold text-white tracking-widest leading-none">{blog.category}</span>
                       <ArrowRight className="ml-4 w-4 h-4 text-primary group-hover/btn:text-white group-hover/btn:translate-x-2 transition-all duration-500" />
                    </Link>
                 </div>

                 <div className="space-y-6 px-4">
                    <div className="flex items-center space-x-8 text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground italic">
                       <span className="flex items-center hover:text-primary transition-colors cursor-pointer"><Calendar size={12} className="mr-2 text-primary" /> {blog.date}</span>
                       <span className="flex items-center hover:text-primary transition-colors cursor-pointer"><Clock size={12} className="mr-2 text-primary" /> {blog.readTime}</span>
                    </div>

                    <Link href={`/blogs/${blog.slug}`} className="block group/title">
                       <h3 className="text-3xl font-bold uppercase tracking-widest text-secondary group-hover/title:text-primary transition-colors leading-tight">
                          {blog.title}
                       </h3>
                    </Link>

                    <p className="text-muted-foreground text-sm uppercase tracking-widest leading-loose max-w-2xl italic opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                       {blog.excerpt}
                    </p>

                    <div className="pt-8 border-t border-zinc-100 flex items-center justify-between">
                       <div className="flex items-center space-x-4 group/author">
                          <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-black italic text-xs group-hover/author:rotate-12 transition-transform shadow-lg border border-primary/20">
                             {blog.author[0]}
                          </div>
                          <div className="flex flex-col">
                             <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary leading-none mb-1">Author / Lead</span>
                             <span className="text-xs font-black italic tracking-widest text-primary leading-none uppercase">{blog.author}</span>
                          </div>
                       </div>

                       <div className="flex items-center space-x-4">
                          <button className="p-3 rounded-full hover:bg-zinc-50 text-muted-foreground hover:text-primary transition-all group/share">
                             <Share2 size={18} className="group-hover/share:scale-125 transition-transform" />
                          </button>
                          <Link href={`/blogs/${blog.slug}`} className="px-8 py-4 bg-secondary text-white text-[9px] uppercase font-black italic tracking-[0.3em] hover:bg-primary shadow-2xl transition-all">
                             Read Concept
                          </Link>
                       </div>
                    </div>
                 </div>
               </motion.article>
             ))}
           </div>

           {/* Newsletter / CTA */}
           <div className="mt-40 bg-zinc-50 p-12 lg:p-24 rounded-3xl border border-zinc-100 relative overflow-hidden group shadow-3xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-[2s]" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-8">
                    <span className="text-primary text-[10px] uppercase font-black italic tracking-[0.5em] block leading-none">Journal Subscription</span>
                    <h2 className="text-4xl lg:text-6xl text-secondary uppercase tracking-widest font-black italic leading-none">Architectural <br /><span className="text-primary">Thought.</span></h2>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest leading-loose max-w-sm font-medium">Subscribe for weekly insights on luxury design trends and spatial psychology delivered directly to your studio inbox.</p>
                 </div>
                 <div className="relative">
                    <input type="email" placeholder="YOUR@STUDIOMAIL.COM" className="w-full bg-white border-none px-10 py-8 rounded-full text-xs font-bold uppercase tracking-[0.4em] text-secondary focus:ring-4 focus:ring-primary/20 shadow-2xl transition-all" />
                    <button className="absolute right-3 top-3 bottom-3 px-10 bg-primary text-white text-[10px] uppercase font-black italic tracking-widest rounded-full hover:bg-secondary hover:shadow-primary transition-all">
                       Subscribe
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
