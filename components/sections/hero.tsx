'use client'
import React, { useRef } from 'react'
import Navbar from '../navbar'
import { motion, useScroll, useTransform } from 'framer-motion'

function Hero() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9])

  return (
    <>
      <div className="min-h-screen bg-white text-black relative">
          <Navbar />
          
          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 md:px-12 lg:px-24 pb-32">
              <div className="max-w-7xl mx-auto text-center">
                  {/* Main Headline */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-10 tracking-tight">
                      Beautiful Experiences <br />—Built to Perform
                  </h1>

                  {/* Subheadline */}
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                      It's 2 AM, and someone's still scrolling through your content because they literally can't stop. That's not luck, that's what happens when you work with us.
                  </p>

                  {/* Learn More Button */}
                  <div className="inline-block">
                      <a 
                          href="#work" 
                          className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all duration-300"
                      >
                          Learn More 
                          <span className="text-2xl">→</span>
                      </a>
                  </div>
              </div>
          </div>
      </div>

 <div
      ref={bannerRef}
      className="relative flex items-center justify-center overflow-hidden -mt-40 mb-32"
    >
      <motion.div
        className="relative w-[90%] max-w-6xl aspect-[16/9]"
        style={{ scale }}
      >
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
          <div className="absolute inset-[3px] rounded-3xl bg-black" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-white">
          <div className="text-center space-y-10 max-w-4xl">
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Designed for Attention.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Engineered for Impact.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We blend strategy, creativity, and storytelling to build brands
              that look exceptional — and perform where it matters most.
            </p>

            {/* Pills */}
            <div className="flex gap-5 justify-center flex-wrap">
              <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20">
                Brand Strategy
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20">
                Creative Direction
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20">
                Digital Marketing
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                Let’s Build Your Brand
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-500/30 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-pink-500/30 rounded-full animate-pulse delay-100" />
          <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-blue-500/30 rounded-full animate-pulse delay-200" />
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default Hero
