"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../navbar"

const images = [
  "https://cdn.prod.website-files.com/658031e408a50a76013e5183/680fa5ebdd3d9d78849fe02c_sarah-dorweiler-Rv2kTIuya_I-unsplash%203%20(1).png",
  "https://cdn.prod.website-files.com/658031e408a50a76013e5183/6870a1589d63bd36e1d161ce_slider-2-p-2000.png",
  "https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCells, setHoveredCells] = useState<Set<string>>(new Set())
  const [isMobile, setIsMobile] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Text movement - split apart on scroll (reduced on mobile)
  const leftTextX = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? -50 : -200])
  const rightTextX = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 50 : 200])
  
  // Images reveal and spread (reduced rotation on mobile)
  const rotate1 = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? -6 : -12])
  const rotate2 = useTransform(scrollYProgress, [0, 0.5], [0, 0])
  const rotate3 = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 6 : 12])
  const x1 = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? -80 : -150])
  const x3 = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 80 : 150])
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || isMobile) return // Disable on mobile for performance
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      setMousePosition({ x, y })
      
      const cellSize = 100
      const gridX = Math.floor(x / cellSize)
      const gridY = Math.floor(y / cellSize)
      
      const newHovered = new Set<string>()
      newHovered.add(`${gridX}-${gridY}`)
      newHovered.add(`${gridX + 1}-${gridY}`)
      newHovered.add(`${gridX}-${gridY + 1}`)
      newHovered.add(`${gridX + 1}-${gridY + 1}`)
      
      setHoveredCells(newHovered)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-[150vh] flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6 py-16 sm:py-24"
      >
        {/* Interactive Grid Background - Desktop only */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {Array.from(hoveredCells).map((cell) => {
                const [x, y] = cell.split('-').map(Number)
                return (
                  <rect
                    key={cell}
                    x={x * 100}
                    y={y * 100}
                    width="100"
                    height="100"
                    fill="rgba(0,0,0,0.015)"
                    className="transition-opacity duration-500 ease-out"
                  />
                )
              })}
            </svg>
          </div>
        )}

        {/* Subtle gradient orb - Desktop only */}
        {!isMobile && (
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              left: mousePosition.x - 300,
              top: mousePosition.y - 300,
              background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          />
        )}

        {/* Content Container */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center pb-16 sm:pb-32">
          
          {/* Left Text - "YOUR BRAND" */}
          <motion.div
            className="absolute left-4 sm:left-8 md:left-16 lg:left-24 top-[28%] sm:top-1/3 -translate-y-1/2 z-30 group"
            style={{ x: leftTextX }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tighter cursor-pointer relative bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
              YOUR
              <br />
              BRAND
              {/* Video overlay - Desktop only */}
              {!isMobile && (
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none z-10"
                  style={{ pointerEvents: "none" }}
                >
                  <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-full"
                      src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"
                    />
                  </div>
                </div>
              )}
            </h1>
          </motion.div>

          {/* Right Text - "OBSESSED" */}
          <motion.div
            className="absolute right-4 sm:right-8 md:right-16 lg:right-24 top-[28%] sm:top-1/3 -translate-y-1/2 z-30 group"
            style={{ x: rightTextX }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tighter text-right cursor-pointer relative bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
              <span className="italic font-serif">OBSESSED!</span>
              {/* Video overlay - Desktop only */}
              {!isMobile && (
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none z-10"
                  style={{ pointerEvents: "none" }}
                >
                  <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-full"
                      src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"
                    />
                  </div>
                </div>
              )}
            </h1>
          </motion.div>

          {/* Stacked images - Responsive sizes */}
          <motion.div 
            className="relative flex items-center justify-center z-10 mt-12 sm:mt-0"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            {/* Left Image */}
            <motion.div
              className="absolute w-[140px] sm:w-[180px] md:w-[240px] lg:w-[320px] aspect-[3/4] rounded-lg overflow-hidden shadow-xl"
              style={{ 
                rotate: rotate1, 
                x: x1,
                zIndex: 1,
              }}
              whileHover={!isMobile ? { scale: 1.03, zIndex: 10, transition: { duration: 0.2 } } : {}}
            >
              <img
                src={images[0]}
                alt="Creative team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </motion.div>

            {/* Center Image - Main focus */}
            <motion.div
              className="relative w-[140px] sm:w-[180px] md:w-[240px] lg:w-[320px] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl"
              style={{ 
                rotate: rotate2,
                zIndex: 2,
              }}
              whileHover={!isMobile ? { scale: 1.05, zIndex: 10, transition: { duration: 0.2 } } : {}}
            >
              <img
                src={images[1]}
                alt="Design studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="absolute w-[140px] sm:w-[180px] md:w-[240px] lg:w-[320px] aspect-[3/4] rounded-lg overflow-hidden shadow-xl"
              style={{ 
                rotate: rotate3, 
                x: x3,
                zIndex: 1,
              }}
              whileHover={!isMobile ? { scale: 1.03, zIndex: 10, transition: { duration: 0.2 } } : {}}
            >
              <img
                src={images[2]}
                alt="Brand strategy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <button
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-300 bg-white/90 shadow-lg hover:bg-white/100 transition-all duration-200 focus:outline-none p-3 sm:p-4"
                onClick={() => {
                  const nextSection = document.querySelector('section')?.nextElementSibling as HTMLElement
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                aria-label="Scroll to next section"
                type="button"
              >
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-500 sm:w-[38px] sm:h-[38px]" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}