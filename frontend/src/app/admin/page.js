'use client';

import React from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  MessageSquare, 
  Eye, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  Dot,
  CalendarCheck
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Projects', value: '542', trend: '+12%', isUp: true, icon: <Briefcase size={22} className="text-blue-500" /> },
    { label: 'Active Leads', value: '45', trend: '+5%', isUp: true, icon: <Users size={22} className="text-emerald-500" /> },
    { label: 'Site Visits', value: '1,240', trend: '-2%', isUp: false, icon: <Eye size={22} className="text-amber-500" /> },
    { label: 'Testimonials', value: '124', trend: '+15%', isUp: true, icon: <MessageSquare size={22} className="text-primary" /> },
  ];

  const chartData = [
    { name: 'Jan', clicks: 400, leads: 24 },
    { name: 'Feb', clicks: 300, leads: 13 },
    { name: 'Mar', clicks: 200, leads: 98 },
    { name: 'Apr', clicks: 278, leads: 39 },
    { name: 'May', clicks: 189, leads: 48 },
    { name: 'Jun', clicks: 239, leads: 38 },
    { name: 'Jul', clicks: 349, leads: 43 },
  ];

  const recentLeads = [
    { name: 'Sameer Malhotra', type: 'Residential', budget: '50L+', date: '2 mins ago', status: 'In Review' },
    { name: 'Tech Solutions Inc', type: 'Commercial', budget: '1Cr+', date: '45 mins ago', status: 'Pending' },
    { name: 'Rohan Deshmukh', type: 'Landscape', budget: '15-30L', date: '2 hours ago', status: 'Contacted' },
    { name: 'Villa Emerald', type: 'Luxury', budget: '5Cr+', date: 'Yesterday', status: 'In Review' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Page Title */}
        <div className="flex items-center justify-between">
           <div className="space-y-2">
             <h2 className="text-3xl font-bold uppercase tracking-widest text-secondary">Dashboard Overview</h2>
             <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-bold">Monitor performance and active visions.</p>
           </div>
           <button className="flex items-center space-x-3 px-6 py-3 bg-white border border-zinc-200 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors shadow-sm">
             <CalendarCheck size={18} className="text-primary" />
             <span>Last 30 Days</span>
           </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {stats.map((stat, i) => (
             <motion.div
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
             >
                <div className="flex justify-between items-start mb-6">
                   <div className="p-4 bg-zinc-50 rounded-2xl group-hover:bg-primary/5 transition-colors">
                      {stat.icon}
                   </div>
                   <div className={`flex items-center space-x-1 text-xs font-bold uppercase ${stat.isUp ? 'text-emerald-500' : 'text-red-500'}`}>
                      {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      <span>{stat.trend}</span>
                   </div>
                </div>
                <div className="space-y-1">
                   <p className="text-3xl font-black text-secondary">{stat.value}</p>
                   <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Charts & Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {/* Analytics Chart */}
           <div className="lg:col-span-2 bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm relative group">
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h4 className="text-xl font-bold uppercase tracking-widest text-secondary">Concept Traffic</h4>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-2">Leads vs Clicks performance</p>
                 </div>
                 <div className="flex items-center space-x-6 text-[10px] uppercase font-bold tracking-widest">
                    <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-primary rounded-full" />
                       <span className="text-muted-foreground">Leads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-secondary rounded-full" />
                       <span className="text-muted-foreground">Clicks</span>
                    </div>
                 </div>
              </div>
              
              <div className="h-[400px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={chartData}>
                     <defs>
                        <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8db51c" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8db51c" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1a1a1a" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#1a1a1a" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                     <XAxis 
                       dataKey="name" 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{fontSize: 10, fontWeight: 'bold'}}
                       padding={{ left: 20, right: 20 }}
                     />
                     <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                     <Tooltip 
                       contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                       itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
                     />
                     <Area type="monotone" dataKey="leads" stroke="#8db51c" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                     <Area type="monotone" dataKey="clicks" stroke="#1a1a1a" strokeWidth={3} fillOpacity={1} fill="url(#colorClicks)" />
                   </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>

           {/* Recent Leads */}
           <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm relative group overflow-hidden">
              <div className="flex items-center justify-between mb-12">
                 <h4 className="text-xl font-bold uppercase tracking-widest text-secondary">Incoming Visions</h4>
                 <Link href="/admin/leads" className="text-primary hover:underline text-[10px] uppercase font-bold tracking-widest">
                   View All
                 </Link>
              </div>

              <div className="space-y-8">
                {recentLeads.map((lead, i) => (
                  <div key={i} className="flex items-center justify-between group/row p-4 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                    <div className="flex items-center space-x-6">
                       <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-secondary group-hover/row:bg-primary group-hover/row:text-white transition-all duration-500">
                          <Users size={20} />
                       </div>
                       <div className="space-y-2">
                          <p className="text-sm font-bold uppercase tracking-widest text-secondary group-hover/row:text-primary transition-colors">{lead.name}</p>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center">
                             <Clock size={10} className="mr-2" /> {lead.date} • {lead.type}
                          </p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 italic">{lead.budget}</p>
                       <span className={`text-[8px] uppercase tracking-[0.3em] font-black italic px-3 py-1 rounded-full border ${
                          lead.status === 'In Review' ? 'border-primary/30 text-primary' : 'border-zinc-200 text-zinc-400'
                       }`}>
                          {lead.status}
                       </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-zinc-50 rounded-2xl border border-zinc-100 group-hover:bg-primary/5 transition-all">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-black italic tracking-widest text-secondary">Vision Conversion</span>
                    <TrendingUp size={16} className="text-primary" />
                 </div>
                 <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden mb-2">
                    <div className="h-full w-[65%] bg-primary rounded-full shadow-[0_0_10px_rgba(141,181,28,0.5)]" />
                 </div>
                 <p className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground">Target achieved: 65% of monthly goal</p>
              </div>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
