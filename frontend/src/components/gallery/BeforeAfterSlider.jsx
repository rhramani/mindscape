'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMove = (e) => {
    if (!isResizing) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.pageX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden select-none group shadow-2xl rounded-2xl"
      onMouseMove={handleMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After Design Transformation"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before Design Transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full text-white text-[10px] uppercase font-bold tracking-widest border border-white/10">
           Before
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-8 right-8 bg-primary/80 backdrop-blur-md px-6 py-2 rounded-full text-white text-[10px] uppercase font-bold tracking-widest border border-primary/20">
         After
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 group-hover:bg-primary transition-colors"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-2xl rounded-full flex items-center justify-center border-4 border-primary/30 group-hover:scale-125 transition-transform">
           <div className="flex space-x-1">
             <div className="w-1 h-3 bg-primary rounded-full" />
             <div className="w-1 h-3 bg-primary rounded-full" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
