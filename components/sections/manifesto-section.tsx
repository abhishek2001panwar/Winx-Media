"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  
  const lineWidth = useTransform(scrollYProgress, [0.7, 0.9], ["0%", "100%"]);

  // Individual line animations
  const line1Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const line2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const line3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const line4Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-white px-6 py-32"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Stop building websites section */}
        <div className="relative">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center text-black">
            Stop building websites.
            <br />
            Start telling stories.
          </h2>
        </div>

        {/* Manifesto text section - Line by line reveal */}
        <div className="relative space-y-4">
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-[1.3] text-left text-black max-w-6xl"
            style={{ opacity: line1Opacity }}
          >
            We're a small team with big brains and even bigger dreams.
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-[1.3] text-left text-black max-w-6xl"
            style={{ opacity: line2Opacity }}
          >
            What started as a few late-night ideas turned into a powerhouse of content creators, designers, marketers, and strategists, who genuinely care.
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-[1.3] text-left text-black max-w-6xl"
            style={{ opacity: line3Opacity }}
          >
            We're not here to just run ads.
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-[1.3] text-left text-black max-w-6xl"
            style={{ opacity: line4Opacity }}
          >
            We're here to build brands that mean something.
          </motion.p>

          {/* Learn More Button - after paragraphs */}
          <div className="pt-6 flex justify-center">
            <button
              className="group flex items-center border-2 border-black rounded-full px-6 py-6 font-semibold text-black hover:bg-black hover:text-white transition-colors duration-200"
              style={{ minWidth: 0 }}
            >
              Learn More
              <span className="ml-2 flex items-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                  <path d="M6 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 6L12 9L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-2 transition-transform group-hover:translate-x-2">
                  <path d="M6 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 6L12 9L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Animated line */}
          <motion.div 
            className="h-[2px] bg-black mt-8"
            style={{ width: lineWidth }}
          />
        </div>
      </div>
    </section>
  );
}
