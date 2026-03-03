"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { caseStudiesData } from "@/lib/caseStudiesData";

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

  const [explorePos, setExplorePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

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
    setExplorePos({ x: 50, y: 50 });
  };

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
       
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-2xl aspect-square">
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
          <motion.div
            className="w-full h-full relative z-10 rounded-2xl overflow-hidden"
            animate={{
              scale: isThisHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 360px, 420px"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Interactive light effect following mouse */}
          {isThisHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl z-30"
              style={{
                background: `radial-gradient(circle at ${explorePos.x}% ${explorePos.y}%, rgba(255,255,255,0.25) 0%, transparent 50%)`,
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
                background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
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

          {/* Explore button follows mouse */}
          {isThisHovered && (
            <motion.div
              className="absolute z-50 w-20 h-20 flex items-center justify-center rounded-full bg-white text-black  shadow-2xl pointer-events-none border-2 border-white/20"
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
              <span className="text-sm  relative z-10">View</span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default function Carousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    // Move progress indicator with carousel scroll
    const [progress, setProgress] = useState(0);

    // Sync progress bar indicator with carousel scroll
    const handleCarouselScroll = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      setProgress(maxScroll > 0 ? carousel.scrollLeft / maxScroll : 0);
    };

    useEffect(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      carousel.addEventListener('scroll', handleCarouselScroll);
      handleCarouselScroll();
      return () => carousel.removeEventListener('scroll', handleCarouselScroll);
    }, []);

    // Drag handler for progress bar to scroll carousel
    const handleProgressBarDrag = (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      const bar = progressBarRef.current;
      const carousel = carouselRef.current;
      if (!bar || !carousel) return;

      const getX = (ev: any) => (ev.touches ? ev.touches[0].clientX : ev.clientX);
      let startX = getX(e);
      let startScroll = carousel.scrollLeft;

      const onMove = (ev: any) => {
        const dx = getX(ev) - startX;
        carousel.scrollLeft = startScroll + dx * 2; // Adjust multiplier for sensitivity
      };
      const onUp = () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('mouseup', onUp);
        window.removeEventListener('touchend', onUp);
      };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('touchmove', onMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchend', onUp);
    };
  
  const floatingShapes = [
    { top: "24%", left: "71%" },
    { top: "62%", left: "99%" },
    { top: "25%", left: "64%" },
    { top: "94%", left: "52%" },
    { top: "40%", left: "97%" },
  ];

  return (
    <section className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10 overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <motion.p
                className="text-white/80 text-sm tracking-[0.3em] uppercase mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Featured Work
              </motion.p>
              
              <motion.h3
                className="text-5xl md:text-6xl lg:text-7xl text-white "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Clients
              </motion.h3>
              
              {/* Animated Underline */}
              <motion.div
                className="w-32 h-1 bg-white rounded-full mt-4"
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
              className="px-8 py-3 md:px-10 md:py-4 rounded-full bg-white/10 backdrop-blur-md text-white border-2 border-white/30  text-base md:text-md shadow-2xl overflow-hidden group relative"
              onClick={() => window.location.href = "/client"}
            >
              <h3 className="relative z-10 flex items-center gap-3">
                View All Projects
                <motion.h3
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.h3>
              </h3>
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
        <div className="max-w-8xl mx-auto px-6">
          <div
            className="flex gap-3 md:gap-3 overflow-x-auto mt-8 mb-12 carousel-scroll-hide pb-4"
            style={{ WebkitOverflowScrolling: 'touch', cursor: 'grab' }}
            ref={carouselRef}
          >
            {caseStudiesData.map((item, i) => (
              <ProjectCard 
                key={i} 
                item={item} 
                index={i}
                isAnyHovered={hoveredIndex !== null}
                isThisHovered={hoveredIndex === i}
                onHoverChange={(hovered) => setHoveredIndex(hovered ? i : null)}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-7xl mx-auto px-6 mb-12 select-none">
          <div
            className="w-full cursor-ew-resize"
            ref={progressBarRef}
            onMouseDown={handleProgressBarDrag}
            onTouchStart={handleProgressBarDrag}
          >
            <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm relative">
              <div
                className="h-full bg-gradient-to-r from-white via-white/80 to-white rounded-full shadow-lg absolute left-0 top-0"
                style={{
                  width: '40%',
                  transform: `translateX(${progress * 60}%)`,
                  transition: 'transform 0.2s',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
