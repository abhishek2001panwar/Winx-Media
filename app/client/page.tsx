'use client';
import React from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

const pinColors = [
  "bg-[#ff7f50]", // coral
  "bg-[#6c63ff]", // purple
  "bg-[#00bfff]", // blue
  "bg-[#ffb366]", // orange
  "bg-[#a3e635]", // green
  "bg-[#f472b6]", // pink
];

const pastelBg = [
  "bg-[#fff7f0]",
  "bg-[#f0f4ff]",
  "bg-[#f7f0ff]",
  "bg-[#f0fff7]",
  "bg-[#fff0f4]",
  "bg-[#f0fff7]",
];

const caseStudies = [

{
    title: "It's forever",
    subtitle: "Digging Deep into Digital Excellence",
    description:
      "We created a digital foundation as solid as the work they do.",
    image: '/forever.png',
    tags: ["instagram", "wordpress"],
    slug: "forever",
  },
   {
    title: "Ceramic Pro – VR Lifestyle",
    subtitle: "Where Perfection Meets Prestige",
    description:
      "Automotive detailing positioned as a luxury lifestyle experience.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/07/4.png",
    tags: ["Instagram"],
    slug: "/work/ceramic-pro",
  },
   {
    title: "Ambari Weddings",
    subtitle: "Orchestrating Dreams from Vision to Reality",
    description: "A complete wedding brand ecosystem built from the ground up.",
    image:
      "https://media.winxmarketingmedia.in/wp-content/uploads/2025/07/Untitled-design-33.png",
    tags: ["Instagram", "WordPress"],
    slug: "/work/ambari-weddings",
  },
  {
    title: "WeMe",
    subtitle: "Documenting Special Stories one frame at a time",
    description:
      "We are WeMe Stories, and we live to document love honest, heartfelt, and unapologetic..",
    image: "/weme.png",
    tags: ["Instagram", "WordPress"],
    slug: "weme",
  
  },
  {
    title: "Classy Captures",
    subtitle: "The Art of Timeless Wedding Photography",
    description: "From photographers to curators of legacy moments.",
    image:
      "https://media.winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-09T155103.244.png",
    tags: ["Instagram", "WordPress"],
    slug: "/work/classy-captures",
  },
    {
    title: "Kahani by Charm Events",
    subtitle: "Luxury Wedding Curators",
    description:
      "From planners to luxury storytellers of unforgettable celebrations.",
    image:
      "https://media.winxmarketingmedia.in/wp-content/uploads/2025/12/1000404200.jpg",
    tags: ["Instagram"],
    slug: "/work/kahani",
  },
 {
    title: "House of Bliss",
    subtitle: "From Unknown to Unmissable",
    description: "Photography transformed into a high-demand visual brand.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/07/1.png",
    tags: ["Instagram", "WordPress"],
    slug: "/work/house-of-bliss",
  },

  {
    title: "KLCI",
    subtitle: "Digging Deep into Digital Excellence",
    description:
      "We created a digital foundation as solid as the work they do.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/07/7.png",
    tags: ["WordPress"],
    slug: "/work/klci",
  },
 
  
  {
    title: "Sneha Banquet Hall",
    subtitle: "Where Dreams Get Their Spotlight",
    description: "From venue to unforgettable celebration experience.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/07/3.png",
    tags: ["Instagram"],
    slug: "/work/sneha-banquet",
  },
  {
    title: "SSSS Catering",
    subtitle: "Flavoring Success, One Event at a Time",
    description: "Positioned as celebration enhancers, not just caterers.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/07/2.png",
    tags: ["Instagram"],
    slug: "/work/ssss-catering",
  },
  
  {
    title: "Collaborative Senior Care",
    subtitle: "Rewriting Healthcare's Story",
    description: "Healthcare marketing reimagined with empathy and trust.",
    image: "https://media.winxmarketingmedia.in/wp-content/uploads/2025/07/6.png",
    tags: ["WordPress"],
    slug: "/work/collaborative-senior-care",
  },

  
  {
    title: "Glass Gallery",
    subtitle: "South India's Premium Glass Brand",
    description: "From manufacturer to premium design authority.",
    image:
      "https://media.winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-10T120812.686.png",
    tags: ["WordPress"],
    slug: "/work/glass-gallery",
  },
  {
    title: "HSR Tiles & Sanitary World",
    subtitle: "Transforming Spaces, One Tile at a Time",
    description: "Curators of modern architectural elegance and durability.",
    image:
      "https://media.winxmarketingmedia.in/wp-content/uploads/2025/12/IMG-20251105-WA0010.jpg",
    tags: ["Instagram"],
    slug: "/work/hsr-tiles",
  },
];

export default function ClientPage() {
  return (
    <div className="min-h-screen font-serif">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-52">
        <h1
          className="text-5xl md:text-7xl font-bold mb-12 tracking-tight drop-shadow-lg text-center bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent"
        >
          Our Clients, Our Pride
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light mb-16 text-center">
          At WinX Media, we believe every brand has a unique story. Our clients trust us to turn their vision into reality, blending creativity, technology, and strategy for results that truly matter. Here’s a glimpse of our journey together.
        </p>
        <div className="relative flex flex-col items-center">
          <div className="w-full flex flex-col gap-16">
            {caseStudies.map((client, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={client.title}
                  className={`
                    relative mx-auto w-full max-w-xl
                    ${isLeft ? "md:-ml-24 md:mr-auto" : "md:-mr-24 md:ml-auto"}
                    ${isLeft ? "rotate-[-3deg]" : "rotate-[3deg]"}
                    transition-transform
                  `}
                  style={{ zIndex: 10 - idx }}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -100 : 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  whileHover={{
                    x: isLeft ? -40 : 40, // Move left or right on hover
                    rotate: isLeft ? -6 : 6, // Slight extra rotation for effect
                    transition: { type: "spring", stiffness: 200, damping: 18 },
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 60,
                  }}
                >
                  {/* Pin */}
                  <div className="absolute left-1/2 -top-6 -translate-x-1/2 z-20">
                    <div className={`w-7 h-7 rounded-full shadow-lg border-2 border-white ${pinColors[idx % pinColors.length]}`}></div>
                  </div>
                  {/* Sticky Note Card */}
                  <a
                    href={client.slug}
                    className={`
                      block rounded-2xl shadow-xl border border-white/40
                      ${pastelBg[idx % pastelBg.length]}
                      px-8 py-6 pt-10
                      hover:scale-105 hover:shadow-2xl transition-all duration-300
                      flex flex-col items-center
                    `}
                  >
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden mb-4 flex items-center justify-center p-4">
                      <img
                        src={client.image}
                        alt={client.title}
                        className="object-contain max-w-xs w-full h-auto"
                      />
                    </div>
                    {/* Content */}
                    <div className="w-full">
                      <div className="text-xs font-bold text-gray-400 mb-1">
                        0{idx + 1}
                      </div>
                      <h2 className="text-xl font-bold mb-1 text-black">{client.title}</h2>
                      <div className="text-base text-gray-600 font-semibold mb-1">{client.subtitle}</div>
                      <div className="text-gray-700 mb-2">{client.description}</div>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {client.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-3 py-1 rounded-full bg-black/10 text-black text-xs font-semibold tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="w-full h-full bg-transparent grid-bg" />
        </div>
      </main>
    </div>
  );
}

