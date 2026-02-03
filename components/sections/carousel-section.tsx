"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaWordpress } from "react-icons/fa";
import { useState, useRef } from "react";

const tagIcons = {
  Instagram: FaInstagram,
  WordPress: FaWordpress,
};

const caseStudies = [
  {
    title: "It's forever",
    subtitle: "Digging Deep into Digital Excellence",
    description:
      "We created a digital foundation as solid as the work they do.",
    image: "./forever.png",
    slug: "/work/forever",
    challenge:
      "Indian weddings generate thousands of photos, but guests and couples struggle to find the ones they actually like. Managing uploads from multiple devices and avoiding unflattering candid shots was chaotic.",
    solution:
      "It's Forever solved this with AI facial recognition that automatically finds and matches photos of each guest. Photographers can control what guests can download, and couples decide which photos are visible, creating a curated, privacy-focused experience.",
    results: [
      "Transformed the brand into the ultimate wedding photo management tool.",
      "Instagram became a hub for organized and shareable wedding memories.",
      "Guests and couples could finally find perfect photos without compromising privacy.",
    ],

  },
  {
    title: "KLCI",
    subtitle: "Digging Deep into Digital Excellence",
    description:
      "Mining companies have incredible stories to tell about building the future—they just need the right platform to share them. KLCI had the expertise and vision; we gave them the digital presence to match their industry leadership. We created a digital foundation as solid as the work they do. Their new website doesn't just showcase services—it tells the compelling story of a company that's literally building tomorrow from the ground up. Now they don't just extract materials; they build trust, confidence, and lasting partnerships.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/7.png",
    tags: ["WordPress"],
    slug: "/work/klci",
  },
  {
    title: "Ambari Weddings",
    subtitle: "Orchestrating Dreams from Vision to Reality",
    description:
      "When Ambari Weddings came to us, they were like incredibly talented artists ready to showcase their work on the biggest stage. They had the skills, the vision, the passion—they just needed the right platform to share it all. We built their complete brand ecosystem from the ground up. From brand identity to social media presence to performance marketing, we created a comprehensive platform that showcases their incredible talent for creating unforgettable celebrations. Now they're not just planning weddings; they're creating experiences that make people book them for future events before their current ones are even finished.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/07/Untitled-design-33.png",
    tags: ["Instagram", "WordPress"],
    slug: "/work/ambari-weddings",
  },
  {
    title: "House of Bliss",
    subtitle: "From Unknown to Unmissable",
    description:
      "Every photographer thinks they're the next big thing, but House of Bliss actually became it. We took their incredible talent and gave it the digital stage it deserved. Their story isn't just about taking pretty pictures—it's about capturing the moments that matter most. We helped them tell that story in a way that makes couples forget about every other photographer in Bengaluru. Now they're not just booking clients; they're creating a waiting list of people who refuse to trust their special day to anyone else.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/1.png",
    tags: ["Instagram", "WordPress"],
    slug: "/work/house-of-bliss",
  },
  {
    title: "Sneha Banquet Hall",
    subtitle: "Where Dreams Get Their Spotlight",
    description:
      "Event venues are everywhere, but Sneha Banquet Hall became the place where memories are made. We transformed their marketing from 'we have a nice space' to 'we're where your story gets its perfect setting.' Through content that captures not just the beauty of their venue but the emotion of every celebration, Sneha went from being compared to competitors to being in a category of their own. Now families don't just book them—they specifically ask for 'the Sneha experience.'",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/3.png",
    tags: ["Instagram"],
    slug: "/work/sneha-banquet",
  },
  {
    title: "SSSS Catering",
    subtitle: "Flavoring Success, One Event at a Time",
    description:
      "Food is the heart of every celebration, and SSSS Catering Service has always understood that every dish contributes to someone's special story. We helped them share this beautiful philosophy with the world. We positioned them not just as caterers, but as celebration enhancers. Every dish they serve becomes part of someone's cherished memory, someone's perfect day, someone's family gathering that everyone talks about for years. Through content that captures the artistry, passion, and genuine care behind every event, SSSS became known for creating culinary experiences that make celebrations truly memorable.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/2.png",
    tags: ["Instagram"],
    slug: "/work/ssss-catering",
  },
  {
    title: "Collaborative Senior Care",
    subtitle: "Rewriting Healthcare's Story",
    description:
      "Healthcare marketing is usually about as exciting as watching paint dry, but we changed that narrative completely. We made Collaborative Senior Care feel less like a medical service and more like family. Their transformation wasn't just about getting more clients—it was about changing how people think about senior care. We helped them tell stories that make families feel hopeful instead of worried, confident instead of anxious. Now they're not just a healthcare provider; they're the place where golden years actually feel golden.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/6.png",
    tags: ["WordPress"],
    slug: "/work/collaborative-senior-care",
  },
  {
    title: "Kahani by Charm Events",
    subtitle: "Luxury Wedding Curators",
    description:
      "Kahani by Charm Events always understood that a wedding is not just an occasion—it's an emotion woven into memories, culture, and artistry. Winx Marketing Media positioned them not merely as planners, but as luxury storytellers crafting unforgettable celebrations. Their expertise goes far beyond décor and coordination; it's about curating experiences that feel personal, intimate, and timeless. Through strategic digital storytelling, we showcased their evolution from a wedding service provider to an architect of bespoke celebrations. Now, they don't just attract clients—they attract families who trust them with their most cherished moments.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/12/1000404200.jpg",
    tags: ["Instagram"],
    slug: "/work/kahani",
  },
  {
    title: "Ceramic Pro – VR Lifestyle",
    subtitle: "Where Perfection Meets Prestige",
    description:
      "Car detailing, when done right, is automotive artistry. VR Lifestyle India understood this from day one—they weren't just maintaining vehicles, they were creating automotive excellence. We positioned them as the luxury lifestyle curators they truly are. Their ceramic protection services represent more than maintenance; they're about preserving automotive perfection for people who appreciate the finer details. Through strategic digital positioning, we showcased their transformation from service provider to luxury experience creator. Now they don't just have clients; they have enthusiasts who won't trust their vehicles to anyone else.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/4.png",
    tags: ["Instagram"],
    slug: "/work/ceramic-pro",
  },
  {
    title: "Classy Captures",
    subtitle: "The Art of Timeless Wedding Photography",
    description:
      "Classy Captures always knew that wedding photography is more than documenting moments—it's preserving emotions that deserve to live forever. Winx Marketing Media positioned them as artists of timeless storytelling, not just photographers. Every frame they create reflects elegance, emotion, and the quiet beauty found in real connections. Their work goes beyond visuals; it becomes a legacy for families to treasure. Through intentional digital positioning and refined visual storytelling, we showcased their transformation from talented photographers to curators of unforgettable wedding memories. Today, they don't just book clients—they attract couples who value authenticity, artistry, and depth.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-09T155103.244.png",
    tags: ["Instagram", "WordPress"],
    slug: "/work/classy-captures",
  },
  {
    title: "Glass Gallery",
    subtitle: "South India's Premium Glass Brand",
    description:
      "Glass Gallery is known for redefining modern spaces through premium glass manufacturing and bespoke design solutions. Winx Marketing Media positioned Glass Gallery not just as a glass manufacturer, but as a visionary design partner shaping the future of modern architecture and interior luxury. Their expertise goes far beyond producing glass—they craft masterpieces that elevate spaces with elegance, precision, and timeless sophistication. Through a strategically designed, high-end website, we showcased their evolution from a product supplier to a premium design authority trusted by architects, builders, and luxury homeowners.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-10T120812.686.png",
    tags: ["WordPress"],
    slug: "/work/glass-gallery",
  },
  {
    title: "HSR Tiles & Sanitary World",
    subtitle: "Transforming Spaces, One Tile at a Time",
    description:
      "HSR Tiles and Sanitary World always understood that tiles are more than building materials—they are the foundation of spaces where people live, grow, and create memories. Winx Marketing Media positioned them not just as suppliers, but as curators of modern living and architectural elegance. Their products go beyond functionality; they represent craftsmanship, durability, and style designed to elevate every corner of a home. Through strategic digital storytelling, we showcased their evolution from a showroom to a trusted design partner for homeowners, architects, and interior creators. Today, they don't just attract buyers—they attract visionaries who believe every space deserves character and creativity.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/12/IMG-20251105-WA0010.jpg",
    tags: ["Instagram"],
    slug: "/work/hsr-tiles",
  },
];

const ProjectCard = ({
  item,
  index,
  isAnyHovered,
  isThisHovered,
  onHoverChange,
}: {
  item: (typeof caseStudies)[0];
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

  const [explorePos, setExplorePos] = useState<{ x: number; y: number }>({
    x: 50,
    y: 80,
  });

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
        filter: shouldBlur
          ? "blur(4px) brightness(0.6)"
          : "blur(0px) brightness(1)",
        opacity: shouldBlur ? 0.5 : 1,
      }}
      transition={{ duration: 1 }}
    >
      <div className="relative overflow-hidden rounded-2xl mb-6">
        {/* Animated gradient border - only shows on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl p-[2px] z-0"
          style={{
            background:
              "linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%)",
            backgroundSize: "300% 300%",
          }}
          animate={{
            backgroundPosition: isThisHovered
              ? ["0% 50%", "100% 50%", "0% 50%"]
              : ["0% 50%"],
            opacity: isThisHovered ? 1 : 0,
          }}
          transition={{
            backgroundPosition: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 0.3,
            },
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
              background:
                "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "200% 200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
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
                  top: `${15 + ((i * 8) % 70)}%`,
                  left: `${10 + ((i * 9) % 80)}%`,
                  pointerEvents: "none",
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
            <motion.button
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
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm font-semibold relative z-10">
                Explore
              </span>
            </motion.button>
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
          {(index % caseStudies.length) + 1}
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
                    borderColor: isThisHovered
                      ? "#ffffff"
                      : "rgba(255,255,255,0.6)",
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "#ffffff",
                    color: "#6c63ff",
                    borderColor: "#ffffff",
                  }}
                  transition={{
                    y: {
                      duration: 0.6,
                      delay: i * 0.1,
                      repeat: isThisHovered ? Infinity : 0,
                    },
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
            height: isThisHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {item.subtitle}
        </motion.p>

        <Link
          href={item.slug}
          className="inline-flex items-center gap-2 font-semibold border-b-2 border-white/60 pb-1 text-white hover:gap-4 transition-all group/link"
        >
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
        </Link>
      </div>
    </motion.div>
  );
};

export function CarouselSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // duplicate for seamless scroll
  const items = [...caseStudies, ...caseStudies];

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
              "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
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
              ease: "easeInOut",
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
                style={{ transformOrigin: "left" }}
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
              onClick={() => (window.location.href = "/client")}
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
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "40%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
