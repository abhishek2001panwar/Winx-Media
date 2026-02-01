'use client';

import React, { useState, useRef } from 'react';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';

const videos = [
  "https://winxmarketingmedia.in/wp-content/uploads/2025/09/Wait%E2%80%A6-WHAT-just-happened-at-this-wedding-You-wont-believe-what-went-down-during-the-ceremony.mp4",
  "https://winxmarketingmedia.in/wp-content/uploads/2025/09/I-couldnt-stop-crying-because-of-what-he-did%E2%80%A6-It-was-the-most-beautiful-surprise.-%F0%9F%98%AE-Take-these.mp4",
  "https://winxmarketingmedia.in/wp-content/uploads/2025/09/Create-a-QR-code-for-your-wedding-with-the-app-@itsforever.in-and-collect-all-the-photos-your-gu.mp4",
  "https://winxmarketingmedia.in/wp-content/uploads/2025/09/%F0%9F%9B%91-Stop-scrolling-and-Save-this-reel-for-your-wedding%E2%80%94you-wont-regret-it.-%F0%9F%93%B8%E2%9C%A8wedding-photo-p.mp4",
  "https://winxmarketingmedia.in/wp-content/uploads/2025/09/Her-guests-didnt-expect-this-%E2%80%94-but-theyre-still-talking-about-it%E2%80%A6-%F0%9F%98%B1wedding-photo-photograp.mp4",
  "https://winxmarketingmedia.in/wp-content/uploads/2025/09/She-thought-it-was-just-a-QR-code%E2%80%A6-until-she-scanned-it-and-saw-everything-%F0%9F%A4%AF%F0%9F%93%B8wedding-photo-.mp4",
  "https://winxmarketingmedia.in/wp-content/uploads/2025/09/My-wedding-not-yours-%F0%9F%99%83Its-about-our-love-our-story-and-the-memories-we-want-to-create-not-e.mp4",
];

const instagramReels = [
  { 
    url: "https://www.instagram.com/reel/C8MyL9Vycq0/?igsh=NTFhdnh1M3kzc2dh",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    label: "Wedding Magic"
  },
  { 
    url: "https://www.instagram.com/reel/DUF4IQdkmA9/?igsh=cnBqNWpkNjhybnp3",
    thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
    label: "Love Stories"
  },
  { 
    url: "https://www.instagram.com/reel/DRkTdtkkneK/?igsh=MWwzNm1mbWQxbmw2bQ==",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    label: "Perfect Moments"
  },
  { 
    url: "https://www.instagram.com/reel/DQ1rK-8EgPM/?igsh=MXNqM2hsaDhtbzEwZA==",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    label: "Celebration"
  },
  { 
    url: "https://www.instagram.com/reel/DS2y8Z2iBmZ/?igsh=N2hsYWcxb2RmenZv",
    thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    label: "Dream Wedding"
  },
  { 
    url: "https://www.instagram.com/reel/DRwvQ6mEohC/?igsh=MTg3djBqMmoxempxNw==",
    thumbnail: "https://images.unsplash.com/photo-1529634806980-85c3dd6d3815?w=600&q=80",
    label: "Forever Memories"
  },
  { 
    url: "https://www.instagram.com/reel/DSfD8J7Emxk/?igsh=MWxzd3h0N2g2ZGFlcA==",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    label: "Special Day"
  },
  { 
    url: "https://www.instagram.com/reel/DTxdZKhDLt9/?igsh=NWJweXUwZnVsYTcy",
    thumbnail: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80",
    label: "Pure Joy"
  },
];

export default function WorkPage() {
  const [active, setActive] = useState(2);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [hoveredReel, setHoveredReel] = useState<number | null>(null);

  const handlePlayPause = (idx: number) => {
    const vid = videoRefs.current[idx];
    if (!vid) return;
    if (vid.paused) {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== idx) v.pause();
      });
      vid.play();
      setPlayingIdx(idx);
    } else {
      vid.pause();
      setPlayingIdx(null);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <Navbar />
      
      {/* First Section - Video Carousel */}
      <div className="flex flex-col items-center justify-end min-h-[90vh] pb-4">
        <h2 className="mb-6 text-4xl md:text-5xl font-serif font-bold text-center drop-shadow-lg bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent pb-3">
          Our Work <br />Making Brands Unmissable
        </h2>
        <div className="relative w-full flex justify-center p-3" style={{ perspective: 1600, height: 400 }}>
          {videos.map((video, idx) => {
            const offset = idx - active;
            const translateX = offset * 240;
            const rotateY = offset * -40;
            const scale = idx === active ? 1 : 0.85;
            const zIndex = 100 - Math.abs(offset);

            return (
              <div
                key={idx}
                className="absolute bottom-0 left-1/2 group"
                style={{
                  width: 260,
                  height: 380,
                  transform: `
                    translateX(-50%)
                    translateX(${translateX}px)
                    scale(${scale})
                    rotateY(${rotateY}deg)
                  `,
                  transition: 'transform 0.7s cubic-bezier(.4,2,.6,1)',
                  zIndex,
                  boxShadow: idx === active
                    ? '0 8px 32px 0 rgba(108,99,255,0.25)'
                    : '0 4px 16px 0 rgba(0,0,0,0.15)',
                  borderRadius: 32,
                  background: '#18181b',
                  overflow: 'hidden',
                  cursor: idx === active ? 'default' : 'pointer',
                }}
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
              >
                <video
                  ref={el => (videoRefs.current[idx] = el)}
                  src={video}
                  className="object-cover w-full h-full"
                  controls={false}
                  onClick={e => e.stopPropagation()}
                  onPlay={() => setPlayingIdx(idx)}
                  onPause={() => setPlayingIdx(null)}
                  style={{ borderRadius: 32 }}
                />
                {/* Play/Pause Button */}
                <button
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-5 transition z-20 opacity-0 group-hover:opacity-100"
                  onClick={e => {
                    e.stopPropagation();
                    handlePlayPause(idx);
                  }}
                  aria-label={playingIdx === idx ? "Pause video" : "Play video"}
                >
                  {playingIdx === idx ? (
                    // Pause icon
                    <svg width="38" height="38" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11" stroke="#6c63ff" strokeWidth="2" />
                      <rect x="8" y="8" width="2.8" height="8" rx="1" fill="#6c63ff" />
                      <rect x="13.2" y="8" width="2.8" height="8" rx="1" fill="#6c63ff" />
                    </svg>
                  ) : (
                    // Play icon
                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11" stroke="#6c63ff" strokeWidth="2" />
                      <polygon points="10,8 16,12 10,16" fill="#6c63ff" />
                    </svg>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Second Section - Instagram Reels Grid */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-800 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-black/5 rounded-full border border-black/10">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-700">Instagram Showcase</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black font-serif mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
                Viral Reels,
                <br />
                Real Results
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Scroll-stopping content that turns views into conversions
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {instagramReels.map((reel, idx) => {
              // Create varied sizes for bento grid effect
              const isLarge = idx === 0 || idx === 4;
              const isTall = idx === 2 || idx === 5;
              
              return (
                <motion.a
                  key={idx}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredReel(idx)}
                  onMouseLeave={() => setHoveredReel(null)}
                  className={`
                    relative group overflow-hidden rounded-2xl bg-black cursor-pointer
                    ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                    ${isTall ? 'row-span-2' : ''}
                  `}
                  style={{
                    aspectRatio: isLarge ? '16/9' : isTall ? '9/16' : '1/1',
                  }}
                >
                  {/* Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${reel.thumbnail})` }}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Instagram icon - top right */}
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Play button overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredReel === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 shadow-2xl">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Reel label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredReel === idx ? 0 : 20, 
                        opacity: hoveredReel === idx ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white font-bold text-lg mb-2">{reel.label}</p>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span>View on Instagram</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-colors duration-300"
                    animate={{
                      boxShadow: hoveredReel === idx 
                        ? '0 0 30px rgba(255,255,255,0.3)' 
                        : '0 0 0px rgba(255,255,255,0)',
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Number badge */}
                  <div className="absolute top-4 left-4 z-20 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/20">
                    {idx + 1}
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <span>Follow for More</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}