import React from 'react';
import { motion } from 'framer-motion';

const analytics = [
  {
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: 300,
    suffix: '%',
    label: 'Average ROI Increase',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    value: 99,
    suffix: '%',
    label: 'Successful Campaigns',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

// Animated Counter Component
const AnimatedCounter = ({ value, suffix }: { value: number; suffix?: string }) => {
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.floor(easeOutQuart * (value - start) + start));
      
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    }

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

function Analytic() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Flowing gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#181f7c]/20 to-[#a34fdc]/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-[#a34fdc]/15 to-[#181f7c]/15 rounded-full blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3"
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light  bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent p-2"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Agency Results 
          </motion.h2>
        </motion.div>

        {/* Single Unified Glassmorphism Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Main glassmorphism container */}
          <div className="relative rounded-3xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl border border-gray-200 dark:border-gray-700/50  overflow-hidden">
            
            {/* Inner glow layer */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
            
            {/* Frosted glass noise texture */}
            <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}
            />

            {/* Glass reflection effect */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl pointer-events-none" />

            {/* Grid of 3 sections inside one box */}
            <div className="grid grid-cols-1 md:grid-cols-3 relative">
              {analytics.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.15,
                  }}
                  whileHover={{ y: -5 }}
                  className="relative text-center p-6 md:p-8 group"
                >
                  {/* Divider lines between sections (hidden on mobile, visible on desktop) */}
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-8 bottom-8 -right-px w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                  )}

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

                  {/* Floating Icon with animated glow */}
                  <motion.div
                    className="relative inline-block mb-4 md:mb-6"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.3
                    }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] rounded-full blur-xl opacity-30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="relative bg-gradient-to-r from-[#181f7c] to-[#a34fdc] text-white p-3 md:p-4 rounded-full shadow-lg">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Counter with stroke and gradient fill on hover */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.15 + 0.3, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="mb-3 md:mb-4 relative"
                  >
                    {/* Stroke version (always visible) */}
                    <div 
                      className="text-5xl sm:text-6xl md:text-7xl font-black leading-none"
                      style={{
                        WebkitTextStroke: '2px',
                        WebkitTextStrokeColor: '#a34fdc',
                        color: 'transparent',
                      }}
                    >
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                    </div>
                    
                    {/* Gradient fill version (visible on hover) */}
                    <div 
                      className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl font-black leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(to right, #181f7c, #a34fdc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                    </div>
                  </motion.div>

                  {/* Label */}
                  <motion.p 
                    className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium px-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.5 }}
                  >
                    {item.label}
                  </motion.p>

                  {/* Bottom gradient line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a34fdc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom light reflection */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Animated shimmer effect on the whole box */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(110deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Analytic;