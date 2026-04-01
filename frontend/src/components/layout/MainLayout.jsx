'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { MessageCircle, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen custom-scroll">
      {/* Precision UI Cursor */}
      <CustomCursor />
      <Navbar />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919324010214"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 lg:bottom-8 lg:right-24 z-40 bg-[#25D366] text-white p-3 lg:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
           WhatsApp Us
        </span>
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollTop}
            className="fixed bottom-6 right-6 z-40 bg-primary text-white p-3 lg:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
        
        /* Custom Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }
        
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #111;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #8db51c;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;
