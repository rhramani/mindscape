'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Home, Sparkles, Wallet } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProjectDiscoveryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('mindscape_visited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelection = (category) => {
    sessionStorage.setItem('mindscape_visited', 'true');
    setIsOpen(false);
    router.push(`/projects?category=${category}`);
  };

  const closeModal = () => {
    sessionStorage.setItem('mindscape_visited', 'true');
    setIsOpen(false);
  };

  const options = [
    { label: 'Residential', icon: <Home size={32} />, value: 'Residential', desc: 'Modern homes for modern families.' },
    { label: 'Commercial', icon: <Building2 size={32} />, value: 'Commercial', desc: 'Innovative offices and retail spaces.' },
    { label: 'Luxury', icon: <Sparkles size={32} />, value: 'Luxury', desc: 'Elite aesthetics for premium lifestyle.' },
    { label: 'Budget-Friendly', icon: <Wallet size={32} />, value: 'Budget', desc: 'Smart design without the compromise.' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0, y: -20 }}
            className="bg-white/5 border border-white/10 backdrop-blur-2xl w-full max-w-4xl p-10 lg:p-20 relative overflow-hidden group shadow-[0_0_100px_rgba(141,181,28,0.2)]"
          >
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] -z-10 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[120px] -z-10 rounded-full" />
            
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>

            <div className="text-center mb-16">
              <h2 className="text-white text-3xl md:text-5xl mb-6">Welcome to <span className="text-primary italic">MindScape</span></h2>
              <p className="text-white/60 tracking-widest uppercase text-sm font-bold">What type of interior design are you looking for?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {options.map((opt, i) => (
                <motion.div
                  key={opt.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(141, 181, 28, 0.1)' }}
                  onClick={() => handleSelection(opt.value)}
                  className="bg-white/5 border border-white/10 p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 group/item"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    {opt.icon}
                  </div>
                  <h3 className="text-white text-lg font-heading font-bold mb-3 uppercase tracking-widest">{opt.label}</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">{opt.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={closeModal}
                className="text-white/30 hover:text-white text-xs uppercase tracking-[0.4em] font-bold transition-colors"
              >
                Skip Exploring
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDiscoveryModal;
