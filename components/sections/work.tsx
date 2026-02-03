'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Story segments broken into narrative beats
const storyBeats = [
  {
    type: 'problem',
    text: "You know how Indian weddings generate approximately 47,000 photos, but somehow you can never find the ones where you actually look good?",
    highlight: "47,000 photos",
    icon: "📸"
  },
  {
    type: 'problem',
    text: "And don't even get us started on trying to hunt down pictures of yourself from your cousin's phone while avoiding those unflattering candid shots your uncle took.",
    highlight: "hunt down pictures",
    icon: "🔍"
  },
  {
    type: 'solution',
    text: "Its Forever solved this chaos with features that feel like magic.",
    highlight: "Its Forever",
    icon: "✨"
  },
  {
    type: 'feature',
    text: "Their highly accurate AI facial recognition automatically finds and matches photos of you across all uploads no more playing digital detective to track down that perfect shot.",
    highlight: "AI facial recognition",
    icon: "🎯"
  },
  {
    type: 'feature',
    text: "Meanwhile, photographers can upload their entire collection but choose exactly what guests can download, and couples get the ultimate power move: deciding which photos guests can even see.",
    highlight: "ultimate power move",
    icon: "👑"
  },
  {
    type: 'feature',
    text: "It's like having a personal photo curator who knows your face better than your mirror, plus the privacy controls that let you curate your own wedding story.",
    highlight: "personal photo curator",
    icon: "🖼️"
  },
  {
    type: 'result',
    text: "We didn't just build their social media presence—we made their brand the solution to every couple's biggest wedding photography nightmares: finding the good photos while hiding the questionable ones.",
    highlight: "wedding photography nightmares",
    icon: "💡"
  },
  {
    type: 'result',
    text: "Their Instagram became the place where love stories get organized, shared, and celebrated on YOUR terms.",
    highlight: "on YOUR terms",
    icon: "❤️"
  },
  {
    type: 'impact',
    text: "Now they're not just a QR code app; they're the reason families actually get to keep their precious memories AND their dignity intact.",
    highlight: "precious memories AND dignity",
    icon: "🏆"
  }
];

const StoryBeat: React.FC<{ beat: typeof storyBeats[0]; index: number }> = ({ beat, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const getTypeStyles = () => {
    switch (beat.type) {
      case 'problem':
        return 'border-l-4 border-gray-400 bg-gray-50';
      case 'solution':
        return 'border-l-4 border-black bg-black/5';
      case 'feature':
        return 'border-l-4 border-gray-600 bg-gray-100/50';
      case 'result':
        return 'border-l-4 border-gray-700 bg-gray-200/30';
      case 'impact':
        return 'border-l-4 border-black bg-black/10';
      default:
        return 'border-l-4 border-gray-300';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl ${getTypeStyles()} mb-4 sm:mb-6 md:mb-8`}
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="absolute -left-4 sm:-left-5 md:-left-6 top-4 sm:top-6 md:top-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-base sm:text-xl md:text-2xl shadow-lg border-2 border-gray-200"
      >
        {beat.icon}
      </motion.div>

      {/* Story text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-serif"
      >
        {beat.text.split(beat.highlight).map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < beat.text.split(beat.highlight).length - 1 && (
              <motion.span
                initial={{ backgroundSize: '0% 100%' }}
                animate={isInView ? { backgroundSize: '100% 100%' } : { backgroundSize: '0% 100%' }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                className="font-bold bg-gradient-to-r from-black/10 to-black/10 bg-no-repeat"
                style={{ backgroundPosition: '0 100%' }}
              >
                {beat.highlight}
              </motion.span>
            )}
          </React.Fragment>
        ))}
      </motion.p>

      {/* Type badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
        className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-white/80 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-600 border border-gray-200"
      >
        {beat.type}
      </motion.div>
    </motion.div>
  );
};

const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={containerRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden bg-white">
      {/* Animated Background Elements */}
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
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <motion.p
            className="text-gray-600 text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Work
          </motion.p>

          <div className="max-w-5xl mx-auto relative mb-6 sm:mb-8">
            {/* Background text */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight text-center text-black font-serif">
              Less talking
              <br />
              More showing
            </h2>

            {/* Animated gradient text reveal */}
            <motion.h2
              className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight text-center bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent font-serif"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Less talking
              <br />
              More showing
            </motion.h2>
          </div>

          {/* Animated underline */}
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-black mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>

        {/* Client showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-black/5 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-black/5 rounded-tl-full" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4 sm:mb-6"
              >
                <img className='rounded-2xl sm:rounded-3xl w-full' src="./image.png" alt="" />
              </motion.div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 md:pt-10 border-t border-gray-200">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-black">47K+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-wide mt-1">Photos/Wedding</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-black">100%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-wide mt-1">AI Accuracy</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-black">∞</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-wide mt-1">Memories Saved</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 font-serif">The Journey</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">From chaos to clarity, one feature at a time.</p>
          </motion.div>

          {/* Story beats */}
          <div className="relative pl-6 sm:pl-8">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-gray-300 via-gray-500 to-black origin-top"
            />

            {storyBeats.map((beat, index) => (
              <StoryBeat key={index} beat={beat} index={index} />
            ))}
          </div>
        </div>

        {/* Final Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20"
        >
          <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 border-l-4 border-gray-700 bg-gray-200/30 text-black border rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, white 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, white 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, white 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 font-serif">The Result?</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light mb-6 sm:mb-8">
                A brand that doesn't just solve problems it transforms the entire wedding photography experience. From scattered chaos to organized magic.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="/work"
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white text-black rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Full Case Study
                  <motion.svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
          </div>
        </motion.div>

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
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black/10 rounded-full pointer-events-none hidden sm:block"
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
      </div>
    </section>
  );
};

export default Work;