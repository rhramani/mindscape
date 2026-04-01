'use client';

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/projects/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Grid, List, ChevronDown, MoveRight, Layers, Home, Building2, Sparkles, Wallet } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import api from '@/lib/api';

const ProjectsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'All',
    budget: 'All',
    style: 'All',
    search: '',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Residential', 'Commercial', 'Luxury', 'Budget'];
  const budgets = ['All', 'Premium', 'Eco', 'Boutique', 'Mega'];
  const styles = ['All', 'Modern', 'Minimalist', 'Industrial', 'Traditional', 'Contemporary'];

  useEffect(() => {
    fetchProjects();
  }, [filters]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      // In a real app, we'd send filters to API
      // const res = await api.get('/project', { params: filters });
      // For now, simulating data
      const mockProjects = [
        { id: 1, title: 'The Crystal Haven', category: 'Residential', style: 'Modern', budget: 'Premium', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80', location: 'Andheri, Mumbai' },
        { id: 2, title: 'NexGen Office', category: 'Commercial', style: 'Industrial', budget: 'Mega', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', location: 'Worli, Mumbai' },
        { id: 3, title: 'Skye Residence', category: 'Residential', style: 'Minimalist', budget: 'Premium', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80', location: 'Bandra, Mumbai' },
        { id: 4, title: 'Emerald Lounge', category: 'Luxury', style: 'Modern', budget: 'Premium', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', location: 'Pune, Maharashtra' },
        { id: 5, title: 'Urban Loft', category: 'Commercial', style: 'Industrial', budget: 'Boutique', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80', location: 'Navi Mumbai' },
        { id: 6, title: 'Classic Manor', category: 'Residential', style: 'Traditional', budget: 'Mega', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', location: 'Kolhapur, Maharashtra' },
      ];

      const filtered = mockProjects.filter(p => {
        const catMatch = filters.category === 'All' || p.category === filters.category;
        const budgetMatch = filters.budget === 'All' || p.budget === filters.budget;
        const styleMatch = filters.style === 'All' || p.style === filters.style;
        const searchMatch = filters.search === '' || p.title.toLowerCase().includes(filters.search.toLowerCase());
        return catMatch && budgetMatch && styleMatch && searchMatch;
      });

      setProjects(filtered);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category') {
      const params = new URLSearchParams(searchParams);
      if (value === 'All') params.delete('category');
      else params.set('category', value);
      router.push(`/projects?${params.toString()}`);
    }
  };

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="relative pt-40 pb-32 bg-secondary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Our Projects Banner"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center relative z-20">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-3 mb-6"
           >
              <span className="h-[2px] w-12 bg-primary"></span>
              <span className="text-white uppercase tracking-[0.4em] text-xs font-bold leading-none">Portfolio of Visions</span>
           </motion.div>
           <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl md:text-7xl lg:text-[8rem] font-bold uppercase tracking-widest leading-none mb-10"
           >
              Our Masterpieces
           </motion.h1>
           <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 max-w-2xl text-sm md:text-lg uppercase italic tracking-[0.2em] font-medium leading-loose"
           >
              Exploring the harmony between architectural brilliance and human personality. Every project is a unique story told in stone and light.
           </motion.p>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="bg-white border-y border-zinc-100 py-6 sticky top-20 lg:top-[7.5rem] z-40 shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between flex-wrap gap-6">
           {/* Search & Categories Tabs */}
           <div className="flex items-center space-x-8 flex-wrap">
              <div className="relative group">
                 <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                 <input
                   type="text"
                   placeholder="Search Projects..."
                   className="pl-12 pr-6 py-3 bg-zinc-100 border-none rounded-full text-sm font-semibold tracking-wider text-secondary focus:ring-2 focus:ring-primary focus:bg-white transition-all w-full md:w-64"
                   value={filters.search}
                   onChange={(e) => updateFilter('search', e.target.value)}
                 />
              </div>

              <div className="hidden lg:flex items-center space-x-6 border-l border-zinc-200 pl-8 h-8">
                 {categories.map((cat) => (
                   <button
                     key={cat}
                     onClick={() => updateFilter('category', cat)}
                     className={`text-[11px] uppercase tracking-widest font-bold transition-all px-4 py-2 rounded-full border border-transparent ${
                       filters.category === cat ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:bg-zinc-50'
                     }`}
                   >
                     {cat}
                   </button>
                 ))}
              </div>
           </div>

           {/* Layout & More Filters */}
           <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  isFilterOpen ? 'bg-secondary text-white' : 'bg-zinc-100 text-secondary hover:bg-zinc-200 shadow-inner'
                }`}
              >
                <Filter size={14} className="mr-3" /> Advanced Filter
                <ChevronDown size={14} className={`ml-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
           </div>
        </div>

        {/* Detailed Filters Expandable */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-zinc-100"
            >
              <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                 <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                       <Layers size={18} className="text-primary" />
                       <h4 className="text-sm font-bold uppercase tracking-widest">Choose Project Category</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       {categories.map((cat) => (
                          <div
                            key={cat}
                            onClick={() => updateFilter('category', cat)}
                            className={`p-4 border cursor-pointer flex flex-col justify-center items-center text-center transition-all group ${
                               filters.category === cat ? 'border-primary bg-primary/5 shadow-inner' : 'border-zinc-100 bg-white hover:border-zinc-300'
                            }`}
                          >
                             <span className={`text-[10px] uppercase font-bold tracking-widest ${filters.category === cat ? 'text-primary' : 'text-muted-foreground'}`}>{cat}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                       <Wallet size={18} className="text-primary" />
                       <h4 className="text-sm font-bold uppercase tracking-widest">Select Budget Range</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       {budgets.map((bud) => (
                          <div
                            key={bud}
                            onClick={() => updateFilter('budget', bud)}
                            className={`p-4 border cursor-pointer flex flex-col justify-center items-center text-center transition-all group ${
                               filters.budget === bud ? 'border-primary bg-primary/5 shadow-inner' : 'border-zinc-100 bg-white hover:border-zinc-300'
                            }`}
                          >
                             <span className={`text-[10px] uppercase font-bold tracking-widest ${filters.budget === bud ? 'text-primary' : 'text-muted-foreground'}`}>{bud}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                       <Sparkles size={18} className="text-primary" />
                       <h4 className="text-sm font-bold uppercase tracking-widest">Select Architectural Style</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       {styles.map((styl) => (
                          <div
                            key={styl}
                            onClick={() => updateFilter('style', styl)}
                            className={`p-4 border cursor-pointer flex flex-col justify-center items-center text-center transition-all group ${
                               filters.style === styl ? 'border-primary bg-primary/5 shadow-inner' : 'border-zinc-100 bg-white hover:border-zinc-300'
                            }`}
                          >
                             <span className={`text-[10px] uppercase font-bold tracking-widest ${filters.style === styl ? 'text-primary' : 'text-muted-foreground'}`}>{styl}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden min-h-screen">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-6 md:space-y-0 text-center md:text-left">
              <div>
                <h2 className="text-secondary text-sm uppercase tracking-[0.5em] font-bold">Showing {projects.length} Masterpieces</h2>
                <div className="h-1 w-20 bg-primary mt-2 mx-auto md:ml-0" />
              </div>
              <div className="flex items-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Active Filter : <span className="text-primary ml-2 border-b border-primary">{filters.category} / {filters.budget}</span>
              </div>
           </div>

           {loading ? (
             <div className="flex flex-col items-center justify-center py-40 space-y-8">
                <div className="relative w-24 h-24">
                   <div className="absolute inset-0 border-4 border-zinc-200 border-t-primary rounded-full animate-spin" />
                   <div className="absolute inset-4 border-2 border-primary/20 border-b-primary rounded-full animate-[spin_1.5s_linear_infinite_reverse]" />
                </div>
                <p className="text-muted-foreground uppercase tracking-[0.5em] text-xs font-bold animate-pulse">Loading Collections...</p>
             </div>
           ) : projects.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
               {projects.map((project, index) => (
                 <ProjectCard key={project.id} project={project} index={index} />
               ))}
             </div>
           ) : (
             <div className="py-60 flex flex-col items-center justify-center text-center space-y-8 bg-white shadow-2xl rounded-3xl border border-zinc-100">
                <div className="p-8 rounded-full bg-zinc-50 text-muted-foreground border-4 border-white shadow-inner">
                   <Filter size={64} className="opacity-20" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl text-secondary uppercase font-bold italic tracking-widest">Masterpiece not found.</h3>
                  <p className="text-muted-foreground tracking-widest uppercase text-xs font-medium">Try adjusting your filters to discover other amazing visions.</p>
                </div>
                <button
                  onClick={() => setFilters({ category: 'All', budget: 'All', style: 'All', search: '' })}
                  className="px-10 py-5 bg-secondary text-white font-heading font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all shadow-xl flex items-center group"
                >
                  Reset All Filters <X size={16} className="ml-3" />
                </button>
             </div>
           )}

           {/* Pagination Placeholder */}
           {!loading && projects.length > 0 && (
             <div className="mt-40 flex items-center justify-center space-x-6">
                <button className="px-12 py-6 bg-white border border-zinc-200 text-zinc-400 hover:text-primary hover:border-primary transition-all font-bold uppercase tracking-widest text-[10px] rounded-full shadow-lg group">
                   Previous
                </button>
                <div className="flex items-center space-x-3 font-heading font-black italic text-xl">
                   <span className="text-primary border-b-2 border-primary">01</span>
                   <span className="text-zinc-200">02</span>
                   <span className="text-zinc-200">03</span>
                </div>
                <button className="px-12 py-6 bg-secondary text-white font-bold uppercase tracking-widest text-[10px] rounded-full shadow-2xl hover:bg-primary transition-all group flex items-center">
                   Next Page <MoveRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
           )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectsPage;
