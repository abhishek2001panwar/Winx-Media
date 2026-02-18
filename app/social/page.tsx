'use client';
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import { motion, useScroll, useTransform } from "framer-motion";

const posts = [
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/2-768x1296.png",
    text: "Instagram Look for It's Forever",
    icon: "instagram",
    link: "https://www.instagram.com/itsforever.in?igsh=c3YyaWlwNzQ3NWZi"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/4-768x1296.png",
    text: "Instagram Look for VR Ceramic Pro Bangalore",
    icon: "instagram",
    link: "https://www.instagram.com/ceramicprobangalore_official?igsh=MWR1ZXpsdTl0NzFvbA=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-07T212736.894-768x1296.webp",
    text: "Instagram Look for Classy Captures",
    icon: "instagram",
    link: "https://www.instagram.com/classycaptures_official?igsh=NDRibmZ5dWFjemg4"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/5-768x1296.png",
    text: "Instagram Look for SSSS Catering",
    icon: "instagram",
    link: "https://www.instagram.com/sssscatering/"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-07T212650.061-768x1296.webp",
    text: "Instagram Look for Kahani by Charm Events",
    icon: "instagram",
    link: "https://www.instagram.com/kahaniby_charm_events?igsh=ZXZiamJ0NDBseWZr"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-08T150334.513-768x1296.png",
    text: "Instagram Look for Ambari Weddings",
    icon: "instagram",
    link: "https://www.instagram.com/ambari_weddings?igsh=MWtjczhjd3M0bXhmYw=="
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-07T212700.204-768x1296.webp",
    text: "Instagram Look for HSR Tiles",
    icon: "instagram",
    link: "https://www.instagram.com/hsrtiles_blr?igsh=NHZjNXZvOGlxMWpl"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/7-768x1296.png",
    text: "Instagram Look for Sneha Banquet Hall",
    icon: "instagram",
    link: "https://www.instagram.com/snehabanquethall/"
  },
  {
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/09/1-768x1296.png",
    text: "Instagram Look for House of Bliss",
    icon: "instagram",
    link: "https://www.instagram.com/houseofbliss.in/"
  },
];

function SocialCard({ post, idx }: { post: typeof posts[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleCardClick = () => {
    window.open(post.link, '_blank');
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      style={{ 
        y,
        marginTop: idx % 2 === 1 ? "80px" : "0"
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group bg-white"
        style={{
          height: "690px",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
        whileHover={{ scale: 1.05 }}
        onMouseMove={e => {
          handleMouseMove(e);
          setIsHovering(true);
        }}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl p-[3px]"
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
          <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative">
            {/* Image */}
            <img
              src={post.image}
              alt={post.text}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />

            {/* Instagram Icon Badge */}
            <motion.div
              className="absolute top-6 left-6 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-pink-600">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.div>

            {/* Visit Profile Button - appears on hover */}
            <motion.div
              className="absolute top-6 right-6 z-20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: isHovering ? 1 : 0,
                y: isHovering ? 0 : -10
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                Visit Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>

            {/* Number Badge */}
            <motion.div
              className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white font-bold text-lg z-20"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {idx + 1}
            </motion.div>

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8 group-hover:from-black/90 transition-all duration-300">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: isHovering ? -10 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-2">
                  {post.text}
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovering ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-sm text-white/80"
                >
                  Click to explore more content →
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Interactive light effect following mouse */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
          style={{
            background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />

        {/* Glossy shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
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
    </motion.div>
  );
}

function SocialPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="bg-white min-h-screen font-serif relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
      >
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
        <motion.div
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-gray-600 rounded-full blur-[100px]"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </motion.div>

      <Navbar />
      
      <main ref={containerRef} className="max-w-4xl mx-auto px-4 pt-32 pb-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mt-5 ">
          <motion.p
            className="text-gray-600 text-sm font-bold tracking-[0.3em] uppercase "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Social Media
          </motion.p>

          <div className="max-w-5xl mx-auto relative">
            {/* Background text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-center text-black font-serif">
              Content That
              <br />
              Connects
            </h1>

            {/* Animated gradient text reveal */}
            <motion.h1
              className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-center bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent font-serif"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Content That
              <br />
              Connects
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
            Explore our creative social media campaigns. Click on any card to visit the Instagram profile.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 ">
          {posts.map((post, idx) => (
            <SocialCard key={idx} post={post} idx={idx} />
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
  );
}

export default SocialPage;