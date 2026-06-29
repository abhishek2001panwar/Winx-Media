'use client'
import Navbar from '@/components/navbar'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const videos = [
  "https://hsrtiles.in/wp-content/uploads/2026/06/Ai-video.mp4",
  "https://hsrtiles.in/wp-content/uploads/2026/06/Hook.mp4",
  "https://hsrtiles.in/wp-content/uploads/2026/06/logo-1.mp4",
  "https://hsrtiles.in/wp-content/uploads/2026/06/team.mp4",
  "https://hsrtiles.in/wp-content/uploads/2026/06/WFA.mp4",
  "https://hsrtiles.in/wp-content/uploads/2026/06/win-final.mp4",
  "https://hsrtiles.in/wp-content/uploads/2026/06/winx.mp4",
  "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/Wait%E2%80%A6-WHAT-just-happened-at-this-wedding-You-wont-believe-what-went-down-during-the-ceremony.mp4",
  "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/I-couldnt-stop-crying-because-of-what-he-did%E2%80%A6-It-was-the-most-beautiful-surprise.-%F0%9F%98%AE-Take-these.mp4",
  "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/Create-a-QR-code-for-your-wedding-with-the-app-@itsforever.in-and-collect-all-the-photos-your-gu.mp4",
  "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/%F0%9F%9B%91-Stop-scrolling-and-Save-this-reel-for-your-wedding%E2%80%94you-wont-regret-it.-%F0%9F%93%B8%E2%9C%A8wedding-photo-p.mp4",
  "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/Her-guests-didnt-expect-this-%E2%80%94-but-theyre-still-talking-about-it%E2%80%A6-%F0%9F%98%B1wedding-photo-photograp.mp4",
  "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/She-thought-it-was-just-a-QR-code%E2%80%A6-until-she-scanned-it-and-saw-everything-%F0%9F%A4%AF%F0%9F%93%B8wedding-photo-.mp4",
  "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/My-wedding-not-yours-%F0%9F%99%83Its-about-our-love-our-story-and-the-memories-we-want-to-create-not-e.mp4",
]

function VideoCard({ src, idx }: { src: string; idx: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isHover, setIsHover] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleToggle = () => {
    const vid = videoRef.current
    if (!vid) return
    if (vid.paused) {
      vid.play()
      setIsPlaying(true)
    } else {
      vid.pause()
      setIsPlaying(false)
    }
  }

  const handleMuteToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const vid = videoRef.current
    if (!vid) return

    vid.muted = !vid.muted
    setIsMuted(vid.muted)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePosition({ x, y })
  }

  const handlePause = () => setIsPlaying(false)
  const handlePlay = () => setIsPlaying(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="relative group rounded-3xl overflow-hidden shadow-xl bg-white transition-all duration-300"
      style={{ aspectRatio: '9/16', minHeight: 420 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false)
        setMousePosition({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-3xl p-[3px] z-0"
        style={{
          background: 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%)',
          backgroundSize: '300% 300%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <div className="w-full h-full bg-white rounded-3xl overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            controls={false}
            muted={isMuted}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            poster=""
            preload="metadata"
            onPause={handlePause}
            onPlay={handlePlay}
            onEnded={handlePause}
            tabIndex={0}
            style={{ outline: "none" }}
          />
        </div>
      </motion.div>

      {/* Interactive light effect following mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-10"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Video index badge with rotation on hover */}
      <motion.div
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white font-bold text-lg z-20"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {idx + 1}
      </motion.div>

      {/* Video controls */}
      {isHover && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          <motion.button
            className="absolute left-4 top-4 pointer-events-auto
                     w-12 h-12 rounded-full bg-black/70 backdrop-blur-md
                     flex items-center justify-center shadow-xl
                     hover:bg-black transition-all"
            onClick={handleMuteToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M11 5L6 9H3v6h3l5 4V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M15 9l6 6m0-6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M11 5L6 9H3v6h3l5 4V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M15.5 8.5a4.5 4.5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M18.5 5.5a8 8 0 0 1 0 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </motion.button>

          <motion.button
            className="absolute left-1/2 top-1/2 pointer-events-auto
                     w-20 h-20 rounded-full bg-white/90 backdrop-blur-md
                     flex items-center justify-center shadow-2xl
                     hover:bg-white transition-all"
            style={{
              transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))`,
              transition: 'transform 0.2s ease-out'
            }}
            onClick={handleToggle}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            {isPlaying ? (
              // Pause icon
              <svg width="38" height="38" fill="none" viewBox="0 0 24 24" className="relative z-10">
                <circle cx="12" cy="12" r="11" stroke="#000" strokeWidth="2" />
                <rect x="8" y="8" width="2.8" height="8" rx="1" fill="#000" />
                <rect x="13.2" y="8" width="2.8" height="8" rx="1" fill="#000" />
              </svg>
            ) : (
              // Play icon
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="relative z-10">
                <circle cx="12" cy="12" r="11" stroke="#000" strokeWidth="2" />
                <polygon points="10,8 16,12 10,16" fill="#000" />
              </svg>
            )}
          </motion.button>
        </div>
      )}

      {/* Glossy shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-3xl z-10"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.div>
  )
}

function VideoPage() {
  return (
    <div className="bg-white min-h-screen font-serif relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-black rounded-full blur-[100px]"
          animate={{ 
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-gray-800 rounded-full blur-[120px]"
          animate={{ 
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-32 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-5 pt-5">
          <motion.p
            className="text-gray-600 text-sm font-bold tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Video Showcase
          </motion.p>

          <div className="max-w-5xl mx-auto relative">
            {/* Background text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-center text-black font-serif">
              Stories That
              <br />
              Move Hearts
            </h1>

            {/* Animated gradient text reveal */}
            <motion.h1
              className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-center bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent font-serif"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Stories That
              <br />
              Move Hearts
            </motion.h1>
          </div>

          {/* Animated underline */}
          <motion.div
            className="w-24 h-1 bg-black mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Every frame tells a story. Every video captures a moment that lasts forever.
          </motion.p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.map((video, idx) => (
            <VideoCard key={idx} src={video} idx={idx} />
          ))}
        </div>

        {/* Floating particles */}
        {([
          { top: "15%", left: "10%" },
          { top: "35%", left: "85%" },
          { top: "55%", left: "8%" },
          { top: "70%", left: "90%" },
          { top: "25%", left: "92%" },
          { top: "80%", left: "12%" },
        ]).map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black/10 rounded-full pointer-events-none"
            style={{
              top: pos.top,
              left: pos.left,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </main>
    </div>
  )
}

export default VideoPage