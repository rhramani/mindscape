'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  ChevronRight, 
  BookOpen, 
  Tag, 
  Quote, 
  MessageSquare, 
  Search, 
  TrendingUp,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const BlogDetail = () => {
  const { slug } = useParams();

  // Mock data for blog (In a real app, fetch from API)
  const blog = {
    slug,
    title: 'The Future of Minimalist Architecture in 2024',
    excerpt: 'Exploring how minimalist design is evolving to incorporate warmth and natural textures while maintaining its clean aesthetic.',
    author: 'Mr. Hiten K.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Evolutionary Design',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    tags: ['Architecture', 'Minimalism', 'Trends', 'Luxury'],
    content: `
      <p>Architecture is undergoing a profound transformation. As we move further into 2024, the rigid boundaries of traditional minimalism are softening. We are witnessing the rise of what we call "Organic Minimalism" – an approach that retains the clean lines and clutter-free philosophy while introducing raw, tactile textures and biophilic elements.</p>
      
      <h3>The End of Cold Minimalism</h3>
      <p>For years, minimalism was associated with cold, clinical spaces. Modern luxury demands more. Clients today are looking for emotional resonance within their homes. They want the serenity of an open plan but the warmth of a heritage villa. This hybridity is the hallmark of the current design era.</p>
      
      <p>One of the primary drivers of this change is the increased focus on psychological well-being. A home is no longer just a structure; it is a mental refuge. Natural light is no longer a luxury but a fundamental structural requirement designed to synchronize with our circadian rhythms.</p>
      
      <h3>A Material Revolution</h3>
      <p>In our studio at MindScape, we are experimenting with sustainable stone, recycled timber, and artisanal glass that reacts to ambient lighting. These materials provide a sensory experience that flat, painted walls simply cannot offer.</p>
    `
  };

  return (
    <MainLayout>
      {/* Dynamic Header Section */}
      <section className="relative pt-40 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-30 -z-10 blur-[150px] scale-150 rotate-12" />
        <div className="container mx-auto px-6">
           <Link href="/blogs" className="inline-flex items-center text-white/40 hover:text-primary transition-colors text-xs font-bold uppercase tracking-[0.3em] mb-12 group">
              <ArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" size={16} /> Back to journal
           </Link>
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl space-y-8">
              <div className="flex items-center space-x-5">
                 <span className="h-[2px] w-12 bg-primary"></span>
                 <span className="text-primary uppercase tracking-[0.4em] text-xs font-black italic">{blog.category}</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl lg:text-9xl font-bold uppercase tracking-widest leading-none">
                 {blog.title}
              </h1>
              <div className="flex flex-wrap gap-10 pt-8 border-t border-white/5">
                <div className="flex items-center space-x-6 group cursor-pointer">
                   <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black italic text-sm group-hover:bg-primary group-hover:text-white transition-all shadow-xl">H</div>
                   <div className="flex flex-col">
                      <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest leading-none mb-1">Written by Principal</span>
                      <span className="text-white text-xs uppercase tracking-widest font-black italic leading-none">{blog.author}</span>
                   </div>
                </div>
                <div className="flex items-center space-x-12">
                   <div className="flex items-center space-x-3 text-white/40">
                      <Calendar size={18} className="text-primary" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{blog.date}</span>
                   </div>
                   <div className="flex items-center space-x-3 text-white/40">
                      <Clock size={18} className="text-primary" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{blog.readTime}</span>
                   </div>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Main Blog Content Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
              {/* Blog Body Area */}
              <div className="lg:col-span-8 space-y-16">
                 <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-3xl group mb-20 border border-zinc-100 p-2 lg:p-4 bg-zinc-50">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-inner">
                       <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                    </div>
                 </div>

                 {/* Rich Text Implementation (Simplified) */}
                 <div className="prose prose-xl prose-zinc max-w-none space-y-10">
                    <div className="p-12 lg:p-16 bg-zinc-50 border-l-8 border-primary rounded-r-3xl text-2xl lg:text-3xl text-secondary font-bold italic leading-relaxed shadow-3xl mb-16 relative group">
                       <Quote className="absolute top-8 right-8 text-primary/10 group-hover:text-primary transition-colors duration-500 scale-[3]" size={48} />
                       "{blog.excerpt}"
                    </div>
                    
                    <div className="blog-content space-y-8 text-secondary text-lg leading-loose uppercase tracking-widest font-medium opacity-80" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                 </div>

                 <div className="pt-16 border-t border-zinc-100 flex items-center justify-between flex-wrap gap-8">
                    <div className="flex flex-wrap gap-3">
                       {blog.tags.map(tag => (
                         <span key={tag} className="px-6 py-3 bg-zinc-50 border border-zinc-100 rounded-full text-[9px] uppercase font-bold tracking-widest text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-pointer">
                            #{tag}
                         </span>
                       ))}
                    </div>
                    <div className="flex items-center space-x-6">
                       <button className="flex items-center space-x-3 text-xs uppercase font-bold tracking-widest text-secondary hover:text-primary transition-colors group">
                          <Share2 size={18} className="text-primary group-hover:scale-125 transition-transform" />
                          <span>Share Article</span>
                       </button>
                    </div>
                 </div>
              </div>

              {/* Sidebar Area */}
              <div className="lg:col-span-4 space-y-12 h-fit sticky top-40">
                 <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 group shadow-sm">
                    <h4 className="text-lg font-bold uppercase tracking-widest text-secondary mb-8 leading-none">Journal Search</h4>
                    <div className="relative group/search">
                       <input type="text" placeholder="Explore Concepts..." className="w-full bg-white border-2 border-zinc-200 px-12 py-5 text-sm tracking-widest text-secondary focus:outline-none focus:border-primary transition-all rounded-2xl shadow-inner uppercase font-bold" />
                       <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within/search:text-primary" />
                    </div>
                 </div>

                 <div className="p-10 bg-secondary rounded-3xl text-white shadow-3xl space-y-10 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="space-y-4">
                       <h4 className="text-xl font-bold uppercase tracking-widest">Trending Insights</h4>
                       <div className="h-1 w-12 bg-primary" />
                    </div>
                    
                    <div className="space-y-8">
                       {[1, 2, 3].map(i => (
                          <div key={i} className="flex flex-col space-y-2 group/item cursor-pointer">
                             <div className="flex items-center space-x-3 text-primary text-[10px] uppercase font-bold tracking-[0.4em]">
                                <TrendingUp size={12} />
                                <span>Article #0{i}</span>
                             </div>
                             <p className="text-sm font-bold uppercase tracking-widest text-white leading-relaxed group-hover/item:text-primary transition-colors duration-500">
                                Spatial Psychology in Modern Working Hubs.
                             </p>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="p-12 bg-white rounded-3xl border border-zinc-100 shadow-2xl relative overflow-hidden group">
                    <div className="space-y-8 relative z-10 text-center">
                       <Mail size={48} className="text-primary mx-auto animate-bounce" />
                       <div className="space-y-4">
                          <h4 className="text-2xl font-bold uppercase tracking-widest text-secondary italic">Stay Evolutionary.</h4>
                          <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium italic leading-relaxed">Join 5,000+ architects and designers receiving our weekly conceptual journal.</p>
                       </div>
                       <div className="space-y-4">
                          <input type="email" placeholder="Your studio email" className="w-full px-8 py-5 bg-zinc-50 border border-zinc-100 text-xs font-bold tracking-widest text-secondary focus:ring-4 focus:ring-primary/20 transition-all rounded-xl text-center uppercase" />
                          <button className="w-full py-5 bg-primary text-white text-[10px] uppercase font-black tracking-widest shadow-2xl hover:scale-105 transition-transform">Subscribe Now</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Suggested Reading Section */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex items-center justify-between mb-16">
              <div className="space-y-4 text-center mx-auto lg:mx-0 lg:text-left">
                 <h2 className="text-4xl text-secondary uppercase tracking-widest leading-none">Suggested <span className="italic text-primary font-bold">Concepts.</span></h2>
                 <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">Deepen your knowledge in architectural narratives.</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 border-2 border-dashed border-zinc-200 rounded-3xl opacity-30">
              <div className="space-y-4 flex flex-col items-center col-span-2">
                 <BookOpen size={48} className="text-zinc-400" />
                 <p className="text-zinc-400 uppercase font-black tracking-widest text-xs">Articles loading...</p>
              </div>
           </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogDetail;
