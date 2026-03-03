"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const showcaseImages = [
  "/modern-architecture-building-exterior-minimal.jpg",
  "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
  "/interior-design-minimalist-living-room-natural-lig.jpg",
]

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top label */}
        <motion.p
          className=" text-sm uppercase tracking-widest mb-2 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          PORTFOLIO
        </motion.p>

        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
           <h2 className="text-4xl md:text-5xl font-light mb-2">
  Proven Results 
</h2>
          </div>
         
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group flex flex-col justify-end">
            <Image 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Content Strategy" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
<div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
 200% avg. revenue growth
</div>            <div className="relative z-10 p-2">
              <h3 className="text-2xl font-light text-white mb-1">Marketing Infrastructure for B2C & B2B Brands</h3>
              <p className="text-white/80 text-sm mb-3">Traffic  Conversion Scale</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">Performance marketing (Meta & Google)</span>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">Conversion-focused ROI websites</span>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">* SEO optimisation
</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group flex flex-col justify-end">
            <Image 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Creative Campaigns" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
<div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
 12M+ organic reach generated
</div>            <div className="relative z-10 p-2">
              <h3 className="text-2xl font-light text-white mb-1">Authority-Driven Social Media</h3>
              <p className="text-white/80 text-sm mb-3">Visibility that compounds</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">Strategic content production</span>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">Story-led brand positioning</span>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">Founder & personal branding</span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group flex flex-col justify-end">
            <Image 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Performance Marketing" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6c4fdc]/30 via-[#6c4fdc]/20 to-transparent" />
<div className="absolute top-4 left-4 bg-[#6c4fdc] text-white text-xs px-3 py-1 rounded-full font-medium">
  4.8★ average client rating

</div>            <div className="relative z-10 p-2">
              <h3 className="text-2xl font-light text-white mb-1">Campaigns, Launches & Brand Experiences</h3>
              <p className="text-white/80 text-sm mb-3">Momentum that moves markets
</p>
              <div className="flex gap-1 flex-wrap">
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">Integrated campaign strategy</span>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">* Event & launch production
</span>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">* Brand films & ad creatives
</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-left">
          <div>
            <div className="text-2xl font-semibold">300+</div>
            <div className="text-muted-foreground text-sm">Average ROI Increase</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">97%</div>
            <div className="text-muted-foreground text-sm">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">99%</div>
            <div className="text-muted-foreground text-sm">Successful Campaigns</div>
          </div>
          <div>
            <div className="text-2xl font-semibold"></div>
            <div className="text-muted-foreground text-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
