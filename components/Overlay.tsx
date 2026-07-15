'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text animations
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4], [0, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.3, 0.4], [50, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.7], [0, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.55, 0.6, 0.7], [50, 0, -50]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen pointer-events-none z-10 flex items-center justify-center"
    >
      {/* Center text (0%) */}
      <motion.div
        style={{
          opacity: text1Opacity,
          y: text1Y
        }}
        className="absolute text-center px-8"
      >
        <h1 className="text-4xl md:text-6xl font-outfit font-black tracking-tighter text-gradient">
          My Name. Creative Developer.
        </h1>
      </motion.div>

      {/* Left text (30%) */}
      <motion.div
        style={{
          opacity: text2Opacity,
          y: text2Y
        }}
        className="absolute text-left px-8 left-0"
      >
        <h2 className="text-3xl md:text-5xl font-outfit font-black tracking-tighter text-white">
          I build digital experiences.
        </h2>
      </motion.div>

      {/* Right text (60%) */}
      <motion.div
        style={{
          opacity: text3Opacity,
          y: text3Y
        }}
        className="absolute text-right px-8 right-0"
      >
        <h2 className="text-3xl md:text-5xl font-outfit font-black tracking-tighter text-white">
          Bridging design and engineering.
        </h2>
      </motion.div>
    </div>
  );
}