"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-white px-6 py-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.2] text-center text-black/80"
          style={{ opacity }}
        >
          We're a small team with big brains and even bigger dreams. What started as a few late-night ideas turned into a powerhouse of content creators, designers, marketers, and strategists, who genuinely care. We're not here to just run ads. We're here to build brands that mean something.
        </motion.p>
      </div>
    </section>
  );
}
