'use client'
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      className="w-full flex justify-center items-center py-24 bg-white font-serif relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient that follows mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, rgba(99, 102, 241, 0.3) 50%, rgba(162, 28, 175, 0.2) 100%)',
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#181f7c] to-[#a34fdc]  rounded-full opacity-40"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 items-stretch relative z-10">
        {/* About WinX Media - Enhanced with 3D effect */}
        <motion.div 
          className="flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gradient-to-r from-[#181f7c] to-[#a34fdc]  h-auto md:h-full min-h-20 md:mr-6 flex-1 p-6 md:p-5 relative overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.3 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'bg-gradient-to-r from-[#181f7c] to-[#a34fdc] ',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Pulsing rings */}
          <motion.div
            className="absolute inset-0"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(74, 222, 128, 0.4)',
                '0 0 0 20px rgba(74, 222, 128, 0)',
                '0 0 0 0 rgba(74, 222, 128, 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <motion.div 
            className="text-white font-extrabold text-lg md:text-4xl px-4 py-2 drop-shadow-lg tracking-wider uppercase relative z-10"
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 30px rgba(255,255,255,0.8)',
                '0 0 20px rgba(255,255,255,0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            About WinX Media
          </motion.div>
          <motion.span 
            className="mt-4 w-8 h-1 bg-white rounded-full opacity-80"
            animate={{
              width: ['32px', '64px', '32px'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Sparkle effect */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${30 + i * 20}%`,
                left: `${20 + i * 30}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>

        {/* First Point Box - Enhanced with tilt */}
        <motion.div 
          className="relative group bg-[#f3f3f3] rounded-2xl p-8 md:p-12 flex flex-col shadow-md min-h-[240px] flex-1 items-start justify-center overflow-visible cursor-pointer"
          whileHover={{ 
            y: -10,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated border */}
          <span className="pointer-events-none absolute -inset-0.5 rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span
              className="block w-full h-full rounded-2xl border-2 border-transparent"
              style={{
                background: "conic-gradient(from 90deg, #4ade80, #6366f1, #a21caf, #4ade80)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                animation: "border-reveal-anticlockwise 1s cubic-bezier(0.4,0,0.2,1) forwards"
              }}
            ></span>
          </span>

          {/* Animated Dot with ripple */}
          <motion.span 
            className="absolute left-6 top-4 w-2 h-2 bg-green-500 rounded-full z-20"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                '0 0 0 0 rgba(74, 222, 128, 0.4)',
                '0 0 0 8px rgba(74, 222, 128, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.1) 0%, transparent 70%)',
            }}
          />

          <motion.p 
            className="text-base md:text-xl text-gray-700 mt-4 z-20 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            You know that friend who always knows exactly what to say to make everyone love them? That's us, but for your business. We take brands that are amazing (but somehow invisible online) and turn them into the main character of their industry's story.
          </motion.p>
        </motion.div>

        {/* Second Point Box - Enhanced with tilt */}
        <motion.div 
          className="relative group bg-[#f3f3f3] rounded-2xl p-8 md:p-12 flex flex-col shadow-md min-h-[240px] flex-1 items-start justify-center overflow-visible cursor-pointer"
          whileHover={{ 
            y: -10,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated border */}
          <span className="pointer-events-none absolute -inset-0.5 rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span
              className="block w-full h-full rounded-2xl border-2 border-transparent"
              style={{
                background: "conic-gradient(from 90deg, #4ade80, #6366f1, #a21caf, #4ade80)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                animation: "border-reveal-anticlockwise 1s cubic-bezier(0.4,0,0.2,1) forwards"
              }}
            ></span>
          </span>

          {/* Animated Dot with ripple */}
          <motion.span 
            className="absolute left-6 top-4 w-2 h-2 bg-violet-500 rounded-full z-20"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                '0 0 0 0 rgba(139, 92, 246, 0.4)',
                '0 0 0 8px rgba(139, 92, 246, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            }}
          />

          <motion.p 
            className="text-base md:text-xl text-gray-700 mt-4 z-20 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't just post content and pray, we create digital experiences that make people screenshot, share, and obsess over your brand like it's their new favorite Netflix series.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default About

/* 
Add this to your global CSS (e.g., globals.css):

@keyframes border-reveal-anticlockwise {
  0% {
    clip-path: polygon(0 0,0 0,0 0,0 0);
  }
  25% {
    clip-path: polygon(0 0,0 100%,0 100%,0 0);
  }
  50% {
    clip-path: polygon(0 0,0 100%,100% 100%,0 0);
  }
  75% {
    clip-path: polygon(0 0,0 100%,100% 100%,100% 0);
  }
  100% {
    clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
  }
}
*/