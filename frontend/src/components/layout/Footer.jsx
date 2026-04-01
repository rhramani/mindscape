'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Facebook, Instagram, Linkedin, Twitter } from '@/components/ui/BrandIcons';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={18} strokeWidth={2} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={18} strokeWidth={2} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={18} strokeWidth={2} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={18} strokeWidth={2} />, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    // { name: 'About Us', href: '/about' },
    // { name: 'Our Vision', href: '/vision' },
    // { name: 'Testimonials', href: '/testimonials' },
    // { name: 'Project List', href: '/projects' },
  ];

  // const services = [
  //   { name: 'Residential Interiors', href: '/projects?category=Residential' },
  //   { name: 'Commercial Spaces', href: '/projects?category=Commercial' },
  //   { name: 'Landscape Design', href: '/projects?category=Landscape' },
  //   { name: 'Architectural Consulting', href: '/services' },
  //   { name: 'Luxury Projects', href: '/projects?category=Luxury' },
  // ];
  const services = [
    { name: 'Residential Interiors', href: '/#' },
    { name: 'Commercial Spaces', href: '/#' },
    { name: 'Landscape Design', href: '/#' },
    { name: 'Architectural Consulting', href: '/#' },
    { name: 'Luxury Projects', href: '/#' },
  ];

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
          {/* Brand Info */}
          <div className="flex flex-col space-y-8">
            <div className="relative w-56 h-28 bg-white p-6 rounded-2xl shadow-2xl flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-full">
                 <Image src="/logo.webp" alt="MindScape Design Official Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              We create spaces that resonate with your identity. Every design is a reflection of your personality and our architectural vision.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-all duration-300 flex items-center justify-center group"
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-8">
            <h4 className="text-lg font-heading font-bold uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="flex flex-col space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 flex items-center"><ArrowUpRight size={14} className="mr-1 text-primary"/></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col space-y-8">
            <h4 className="text-lg font-heading font-bold uppercase tracking-widest text-primary">Our Services</h4>
            <ul className="flex flex-col space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 flex items-center"><ArrowUpRight size={14} className="mr-1 text-primary"/></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <h4 className="text-lg font-heading font-bold uppercase tracking-widest text-primary">Contact Us</h4>
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={16} />
                </div>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white transition-colors">
                  A-117/118, 1st Floor, Crystal Plaza, New Link Road, Opp. Infiniti Mall, Andheri (W), Mumbai - 400053
                </p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={16} />
                </div>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors">+91 93240 10214 / 022 4971 7848</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={16} />
                </div>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors">info@mindscapedesign.co.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-xs uppercase tracking-widest">
          <p>© {currentYear} MINDSCAPE DESIGN. ALL RIGHTS RESERVED.</p>
          {/* <p className="mt-4 md:mt-0">DESIGNED BY <Link href="#" className="text-primary hover:underline">TECH-CRAFT</Link></p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
