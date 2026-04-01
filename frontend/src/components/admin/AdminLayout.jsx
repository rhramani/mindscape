'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Briefcase, 
  Image as ImageIcon, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Bell, 
  User,
  Search,
  BookOpen,
  PieChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    // Add logic for checking auth
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Projects', icon: <Briefcase size={20} />, path: '/admin/projects' },
    { name: 'Gallery', icon: <ImageIcon size={20} />, path: '/admin/gallery' },
    { name: 'Blogs', icon: <BookOpen size={20} />, path: '/admin/blogs' },
    { name: 'Testimonials', icon: <MessageSquare size={20} />, path: '/admin/testimonials' },
    { name: 'Leads', icon: <Users size={20} />, path: '/admin/leads' },
    { name: 'Careers', icon: <Settings size={20} />, path: '/admin/careers' },
    { name: 'Analytics', icon: <PieChart size={20} />, path: '/admin/analytics' },
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed lg:relative z-50 h-screen bg-secondary text-white shadow-2xl flex flex-col transition-all duration-300"
      >
        <div className="p-6 flex items-center justify-between border-b border-white/5 h-20 overflow-hidden">
           {isSidebarOpen ? (
             <div className="flex flex-col">
               <span className="text-xl font-bold uppercase tracking-widest text-primary">MindScape</span>
               <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Admin Central</span>
             </div>
           ) : (
             <span className="text-xl font-black italic text-primary mx-auto">M</span>
           )}
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-white hover:text-primary">
              <X size={24} />
           </button>
        </div>

        <nav className="flex-grow py-8 px-4 space-y-2 overflow-y-auto">
           {navItems.map((item) => (
             <Link
               key={item.path}
               href={item.path}
               className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
                 pathname === item.path ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white'
               }`}
             >
                <div className={`${pathname === item.path ? 'text-white' : 'text-primary'}`}>{item.icon}</div>
                {isSidebarOpen && <span className="text-xs uppercase font-bold tracking-widest">{item.name}</span>}
                {pathname === item.path && isSidebarOpen && (
                  <motion.div layoutId="nav-pill" className="ml-auto w-1 h-4 bg-white/20 rounded-full" />
                )}
             </Link>
           ))}
        </nav>

        <div className="p-4 border-t border-white/5 mb-4">
           <button 
             onClick={() => router.push('/login')}
             className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors group"
           >
              <LogOut size={20} className="group-hover:scale-110 transition-transform" />
              {isSidebarOpen && <span className="text-xs uppercase font-bold tracking-widest">Sign Out</span>}
           </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-zinc-200 px-8 flex items-center justify-between shadow-sm z-10 sticky top-0">
           <div className="flex items-center space-x-6">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
                <Menu size={20} />
              </button>
              <div className="relative hidden md:block">
                 <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                 <input 
                   placeholder="Search everything..." 
                   className="pl-10 pr-4 py-2 bg-zinc-50 border-none rounded-lg text-sm w-80 focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                 />
              </div>
           </div>

           <div className="flex items-center space-x-6">
              <div className="relative p-2 hover:bg-zinc-100 rounded-lg cursor-pointer group">
                 <Bell size={20} className="text-zinc-500" />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white ring-2 ring-red-500/20" />
              </div>
              <div className="flex items-center space-x-4 pl-6 border-l border-zinc-200 cursor-pointer group">
                 <div className="text-right hidden sm:block">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Hiten K.</p>
                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Principal Architect</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-zinc-100 border-2 border-primary/20 p-1 group-hover:scale-110 transition-transform shadow-lg shadow-primary/10">
                    <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center text-white text-xs font-bold">HK</div>
                 </div>
              </div>
           </div>
        </header>

        {/* Dashboard Content Container */}
        <main className="flex-grow overflow-y-auto p-10 bg-[#f9fafb]">
           <div className="max-w-7xl mx-auto">
              {children}
           </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
