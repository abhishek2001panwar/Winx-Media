import React from 'react';
import { motion } from 'framer-motion';

const analytics = [
  {
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Average rating across all projects',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: 300,
    suffix: '%',
    label: 'Average ROI Increase',
    description: 'Proven results for our clients',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    value: 99,
    suffix: '%',
    label: 'Successful Campaigns',
    description: 'Delivered on time & budget',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    <span className="tabular-nums pr-2">
      {display}
      {suffix && (
        <span style={{ fontSize: '0.7em', marginLeft: '0.05em', verticalAlign: 'bottom', display: 'inline-block' }}>{suffix}</span>
      )}
    </span>
  );
};

function Analytic() {
  return (
    <section className="relative py-32 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(24,31,124,0.08),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(163,79,220,0.08),transparent_50%)]" />
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(108, 79, 220, 0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(24, 31, 124, 0.15) 0%, transparent 50%)`
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#6c4fdc]"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-[#6c4fdc] text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
              Our Impact
            </p>
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#6c4fdc]"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
            Agency{' '}
            <span className="relative italic">
              <span className="bg-gradient-to-r from-[#181f7c] via-[#6c4fdc] to-[#a34fdc] bg-clip-text text-transparent">
                Results
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6c4fdc] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Data-driven strategies that deliver measurable, sustainable growth for your brand
          </p>
        </motion.div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {analytics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.9, 
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(135deg, #181f7c, #6c4fdc, #a34fdc, #181f7c)',
                  backgroundSize: '300% 300%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Card */}
              <div className="relative h-full rounded-3xl bg-background/80 backdrop-blur-2xl border border-white/10 overflow-hidden">
                
                {/* Inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#181f7c]/[0.03] via-transparent to-[#a34fdc]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Top accent line */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6c4fdc] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 + 0.3 }}
                />

                <div className="relative p-8 md:p-10 lg:p-12">
                  
                  {/* Icon container */}
                  <motion.div
                    className="relative mb-8 inline-block"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Pulsing glow */}
                    <motion.div
                      className="absolute -inset-4 rounded-full blur-xl opacity-0 group-hover:opacity-30"
                      style={{
                        background: 'radial-gradient(circle, #6c4fdc, transparent 70%)',
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5
                      }}
                    />
                    
                    {/* Icon background */}
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#181f7c]/10 to-[#a34fdc]/10 border border-[#6c4fdc]/20 flex items-center justify-center group-hover:border-[#6c4fdc]/40 transition-colors duration-500">
                      <div className="text-[#6c4fdc]">
                        {item.icon}
                      </div>
                    </div>
                  </motion.div>

                  {/* Number with premium typography */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.15 + 0.4, 
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="mb-6"
                  >
                    <div className="relative inline-block">
                      <div 
                        className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-none"
                        style={{
                          background: 'linear-gradient(135deg, #181f7c 0%, #6c4fdc 50%, #a34fdc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontVariantNumeric: 'tabular-nums',
                          letterSpacing: '-0.05em',
                        }}
                      >
                        <AnimatedCounter value={item.value} suffix={item.suffix} />
                      </div>
                      
                      {/* Number glow effect */}
                      <div 
                        className="absolute inset-0 text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-none opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700"
                        style={{
                          background: 'linear-gradient(135deg, #181f7c, #6c4fdc, #a34fdc)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontVariantNumeric: 'tabular-nums',
                          letterSpacing: '-0.05em',
                        }}
                      >
                        <AnimatedCounter value={item.value} suffix={item.suffix} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <div className="space-y-2">
                    <motion.h3 
                      className="text-xl md:text-2xl font-light tracking-tight"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.6, duration: 0.8 }}
                    >
                      {item.label}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm md:text-base text-muted-foreground font-light leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.7, duration: 0.8 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#6c4fdc]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(108, 79, 220, 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Outer shadow glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#181f7c]/10 via-[#6c4fdc]/10 to-[#a34fdc]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Analytic;