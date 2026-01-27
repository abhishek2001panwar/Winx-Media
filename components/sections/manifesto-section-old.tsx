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

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32"
    >
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center text-foreground/10">
          Stop building websites.
          <br />
          Start telling stories.
        </h2>

        {/* Gradient mask reveal text */}
        <motion.h2
          className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center text-foreground"
          style={{ clipPath }}
        >
          Stop building websites.
          <br />
          Start telling stories.
        </motion.h2>
        <h1 className="mt-10">
          We’re a small team with big brains and even bigger dreams. What
          started as a few late-night ideas turned into a powerhouse of content
          creators, designers, marketers, and strategists, who genuinely care.
          We’re not here to just run ads. We’re here to build brands that mean
          something.
        </h1>
      </div>
    </section>
  );
}
