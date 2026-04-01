'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'About Us', path: '/about' },
    // { name: 'Services', path: '/services' },
    // { name: 'Projects', path: '/projects' },
    // { name: 'Gallery', path: '/gallery' },
    // { name: 'Blogs', path: '/blogs' },
    // { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-white/95 backdrop-blur-3xl shadow-xl py-3' : 'bg-transparent py-0'
      }`}
    >
      {/* Top Contact Bar - Integrated */}
      {!scrolled && (
        <div className="hidden lg:block bg-secondary border-b border-white/5 py-3 relative z-[60]">
          <div className="container mx-auto px-6 flex justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>+91 93240 10214</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>info@mindscapedesign.co.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                {['FB', 'IG', 'LI'].map(social => (
                  <span key={social} className="hover:text-primary transition-colors cursor-pointer">{social}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-700 ${scrolled ? 'py-0' : 'py-8'}`}>
        {/* Logo on the Left */}
        <Link href="/" className="relative z-10 flex items-center group">
           <div className={`relative transition-all duration-1000 ${scrolled ? 'w-24 h-12' : 'w-48 h-24'}`}>
                <Image
                  src="/logo.webp"
                  alt="MindScape Design"
                  fill
                  className="object-contain"
                  priority
                />
           </div>
        </Link>

        {/* Navbar on the Right (Desktop) */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:text-primary whitespace-nowrap group relative ${
                scrolled ? (pathname === link.path ? 'text-primary' : 'text-secondary') : (pathname === link.path ? 'text-primary' : 'text-white')
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-primary transition-all duration-500 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          
          <Link href="/contact">
             <button className={`px-8 py-3 text-[9px] font-black tracking-widest uppercase transition-all duration-500 rounded-full border ${scrolled ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white text-white hover:bg-white hover:text-secondary'}`}>
                Inquire Now
             </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-all duration-500 hover:rotate-180 p-2 rounded-full border ${scrolled ? 'text-secondary border-secondary/10' : 'text-white border-white/10'}`}
          onClick={() => setIsOpen(true)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer (Enhanced) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 35, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-secondary z-[70] p-12 flex flex-col shadow-3xl"
            >
               <div className="flex justify-between items-center mb-24">
                  <div className="w-32 h-16 relative">
                     <Image src="/logo.webp" alt="MindScape" fill className="object-contain filter brightness-0 invert" />
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all">
                    <X size={24} />
                  </button>
               </div>
               
               <div className="flex-grow space-y-12">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.path} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                       <Link href={link.path} onClick={() => setIsOpen(false)} className={`text-4xl font-bold uppercase tracking-tighter hover:tracking-widest transition-all duration-500 flex items-center group ${pathname === link.path ? 'text-primary' : 'text-white'}`}>
                          <span className="text-[10px] mr-6 opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                          {link.name}
                       </Link>
                    </motion.div>
                  ))}
               </div>

               <div className="pt-20 border-t border-white/5 space-y-8">
                  <div className="space-y-2">
                     <p className="text-[9px] text-white/30 uppercase tracking-[0.5em] font-black italic">Project Inquiry</p>
                     <p className="text-xl font-bold text-white tracking-widest leading-none">+91 93240 10214</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    {['FB', 'IG', 'LI'].map(social => (
                      <span key={social} className="text-[10px] font-black italic text-white/20 hover:text-primary transition-colors cursor-pointer">{social}</span>
                    ))}
                  </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
