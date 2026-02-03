"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaWordpress } from "react-icons/fa";
import { useState, useRef } from "react";
import { caseStudiesData } from "@/lib/caseStudiesData";

const tagIcons = {
  Instagram: FaInstagram,
  WordPress: FaWordpress,
};

const ProjectCard = ({ 
  item, 
  index, 
  isAnyHovered, 
  isThisHovered,
  onHoverChange 
}: { 
  item: typeof caseStudiesData[0]; 
  index: number;
  isAnyHovered: boolean;
  isThisHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const [explorePos, setExplorePos] = useState<{ x: number; y: number }>({ x: 50, y: 80 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setExplorePos({ x, y });
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onHoverChange(false);
    setExplorePos({ x: 50, y: 80 });
  };

  // Calculate blur and dim based on hover state
  const shouldBlur = isAnyHovered && !isThisHovered;

  return (
    <Link href={`/carousel/${item.slug}`} className="block">
        

      <motion.div
        ref={cardRef}
        className="w-[360px] md:w-[420px] flex-shrink-0 group cursor-pointer relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isThisHovered ? rotateX : 0,
          rotateY: isThisHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isThisHovered ? 1.08 : shouldBlur ? 0.95 : 1,
          filter: shouldBlur ? "blur(4px) brightness(0.6)" : "blur(0px) brightness(1)",
          opacity: shouldBlur ? 0.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-2xl mb-6">
          {/* Animated gradient border - only shows on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl p-[2px] z-0"
            style={{
              background: 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%)',
              backgroundSize: '300% 300%',
            }}
            animate={{
              backgroundPosition: isThisHovered ? ['0% 50%', '100% 50%', '0% 50%'] : ['0% 50%'],
              opacity: isThisHovered ? 1 : 0,
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              },
              opacity: {
                duration: 0.3
              }
            }}
          >
            <div className="w-full h-full bg-black rounded-2xl" />
          </motion.div>

          {/* Image */}
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-[280px] object-cover rounded-2xl relative z-10"
            animate={{
              scale: isThisHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl z-20 pointer-events-none" />

          {/* Interactive light effect following mouse */}
          {isThisHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl z-30"
              style={{
                background: `radial-gradient(circle at ${explorePos.x}% ${explorePos.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}

          {/* Glossy shine effect */}
          {isThisHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl z-30"
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
          )}

          {/* Sparkle Effect */}
          {isThisHovered && (
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full z-40"
                  style={{
                    top: `${15 + (i * 8) % 70}%`,
                    left: `${10 + (i * 9) % 80}%`,
                    pointerEvents: "none"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 2, 0],
                    y: [0, -40],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.08,
                    repeat: Infinity,
                  }}
                />
              ))}
              
              {/* Explore button follows mouse with smooth spring */}
              <motion.div
                className="absolute z-50 w-20 h-20 flex items-center justify-center rounded-full bg-white text-black font-semibold shadow-2xl pointer-events-none border-2 border-white/20"
                style={{
                  top: `calc(${explorePos.y}% - 40px)`,
                  left: `calc(${explorePos.x}% - 40px)`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <span className="text-sm font-semibold relative z-10">Explore</span>
              </motion.div>
            </>
          )}

          {/* Number badge with rotation on hover */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black font-bold text-sm z-40 shadow-lg"
            animate={{
              rotate: isThisHovered ? 360 : 0,
              scale: isThisHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {(index % caseStudiesData.length) + 1}
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <motion.h3
              className="text-2xl font-semibold text-white"
              animate={{
                y: isThisHovered ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>

            <div className="flex gap-3">
              {item.tags.map((tag, i) => {
                const Icon = tagIcons[tag as keyof typeof tagIcons];

                return (
                  <motion.span
                    key={tag}
                    className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-white/60 text-white text-lg backdrop-blur-sm"
                    title={tag}
                    animate={{
                      y: isThisHovered ? [0, -5, 0] : 0,
                      borderColor: isThisHovered ? '#ffffff' : 'rgba(255,255,255,0.6)',
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: '#ffffff',
                      color: '#6c63ff',
                      borderColor: '#ffffff',
                    }}
                    transition={{
                      y: { duration: 0.6, delay: i * 0.1, repeat: isThisHovered ? Infinity : 0 },
                      scale: { duration: 0.3 },
                      rotate: { duration: 0.5 },
                    }}
                  >
                    {Icon && <Icon />}
                  </motion.span>
                );
              })}
            </div>
          </div>

          <motion.p
            className="text-white/80 text-sm leading-relaxed"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isThisHovered ? 1 : 0,
              height: isThisHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {item.subtitle}
          </motion.p>

          <div className="inline-flex items-center gap-2 font-semibold border-b-2 border-white/60 pb-1 text-white hover:gap-4 transition-all group/link">
            View Case Study
            <motion.span
              animate={{
                x: isThisHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: isThisHovered ? Infinity : 0,
              }}
            >
              →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Carousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // duplicate for seamless scroll
  const items = [...caseStudiesData, ...caseStudiesData ];

  const floatingShapes = [
    { top: "24%", left: "71%" },
    { top: "62%", left: "99%" },
    { top: "25%", left: "64%" },
    { top: "94%", left: "52%" },
    { top: "40%", left: "97%" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#181f7c] to-[#a34fdc]">
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating Shapes with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              top: pos.top,
              left: pos.left,
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * 30, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Additional floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              top: `${(i * 7) % 90}%`,
              left: `${(i * 11) % 90}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <motion.p
                className="text-white/80 text-sm font-bold tracking-[0.3em] uppercase mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Featured Work
              </motion.p>
              
              <motion.h2
                className="text-5xl font-serif md:text-7xl font-black text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Clients
              </motion.h2>
              
              {/* Animated Underline */}
              <motion.div
                className="w-32 h-1 bg-white rounded-full mt-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#6c63ff",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border-2 border-white/30 font-serif text-lg font-semibold shadow-2xl overflow-hidden group relative"
              onClick={() => window.location.href = "/client"}
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              {/* Glow effect on hover */}
              <motion.span 
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          className="flex gap-8 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((item, i) => (
            <ProjectCard 
              key={i} 
              item={item} 
              index={i}
              isAnyHovered={hoveredIndex !== null}
              isThisHovered={hoveredIndex === i}
              onHoverChange={(hovered) => setHoveredIndex(hovered ? i : null)}
            />
          ))}
        </motion.div>

        {/* Progress Bar with enhanced styling */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-white via-white/80 to-white rounded-full shadow-lg"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ width: '40%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
