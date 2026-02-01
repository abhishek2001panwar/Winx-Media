"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const lines = [
  ["Stop", "building", "websites."],
  ["Start", "telling", "stories."],
]

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  // Animate each word in with a slight delay based on scroll progress
  const wordProgress = (index: number) =>
    useTransform(scrollYProgress, [0.2 + index * 0.05, 0.4 + index * 0.05], [40, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32"
    >
      {/* Sparkle/particle overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {[...Array(14)].map((_, i) => {
          // Generate random positions ONCE per render, not on every render
          // Otherwise React StrictMode or re-renders will cause the sparkles to jump
          // Use a fixed array of positions
          const sparklePositions = [
            { top: "15%", left: "20%" },
            { top: "25%", left: "60%" },
            { top: "35%", left: "40%" },
            { top: "45%", left: "80%" },
            { top: "55%", left: "30%" },
            { top: "65%", left: "70%" },
            { top: "75%", left: "50%" },
            { top: "85%", left: "10%" },
            { top: "20%", left: "80%" },
            { top: "60%", left: "15%" },
            { top: "80%", left: "60%" },
            { top: "40%", left: "25%" },
            { top: "70%", left: "85%" },
            { top: "50%", left: "55%" },
          ];
          const pos = sparklePositions[i % sparklePositions.length];
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 shadow-lg"
              style={{
                top: pos.top,
                left: pos.left,
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [0, Math.random() * -40 - 20, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
      <div className="max-w-5xl mx-auto relative z-20">
        {/* Initial black text */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center text-black">
          {lines.map((words, i) => (
            <span key={i} className="block">
              {words.map((word, j) => (
                <span key={j} className="inline-block mx-2">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </h2>

        {/* Gradient mask reveal text with animated word assemble */}
        <motion.h2
          className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent bg-clip-text text-transparent"
          style={{ clipPath }}
        >
          {lines.map((words, i) => (
            <span key={i} className="block">
              {words.map((word, j) => {
                // Animate each word with a slight delay and y movement
                const y = useTransform(scrollYProgress, [0.2 + (i * 3 + j) * 0.04, 0.4 + (i * 3 + j) * 0.04], [40, 0])
                const opacity = useTransform(scrollYProgress, [0.2 + (i * 3 + j) * 0.04, 0.4 + (i * 3 + j) * 0.04], [0, 1])
                return (
                  <motion.span
                    key={j}
                    className="inline-block mx-2"
                    style={{ y, opacity, display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                )
              })}
            </span>
          ))}
        </motion.h2>
      </div>
    </section>
  )
}