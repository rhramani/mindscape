'use client';

import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the trailing ring
  const springConfig = { damping: 25, stiffness: 250 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isLink = target.closest('a, button, [role="button"], .cursor-pointer');
      setIsHovering(!!isLink);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] hidden lg:block ${isHidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
      {/* Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          borderColor: isHovering ? '#8db51c' : '#8db51c',
          backgroundColor: isHovering ? 'rgba(141, 181, 28, 0.1)' : 'transparent',
          rotate: isHovering ? 90 : 0,
        }}
        className="fixed border rounded-full transition-colors duration-300 "
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? '#fff' : '#8db51c',
        }}
        className="fixed w-2 h-2 rounded-full z-10"
      />
      
      {/* Subtle Shadow Glow */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHovering ? 0.3 : 0,
          scale: isHovering ? 2 : 1,
        }}
        className="fixed w-12 h-12 bg-primary rounded-full blur-2xl -z-10"
      />
    </div>
  );
};

export default CustomCursor;
