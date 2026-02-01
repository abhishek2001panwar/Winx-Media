'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useSpring } from 'framer-motion'

const services = [
  {
    title: 'Social Media Marketing',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    title:'Performance Marketing',
    img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
  },
  {
    title: 'SEO Optimization',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  },
   {
    title: 'Content Creation',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
  },
  {
    title: 'Brand Strategy',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },

  {
    title: 'Branding & Design',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  },
  {
    title:'Marketing Strategy',
    img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da4',}
]

export default function Services() {
  const [active, setActive] = useState<number | null>(null)

  const mouseX = useSpring(0, { stiffness: 150, damping: 25 })
  const mouseY = useSpring(0, { stiffness: 150, damping: 25 })

  const handleMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 30)
    mouseY.set(e.clientY - 120)
  }

  return (
    <section className="relative min-h-screen bg-black text-white px-8 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-20">
          Services
        </p>

        <div className="divide-y divide-zinc-800">
          {services.map((item, i) => (
            <motion.div
              key={i}
              className="group flex items-center justify-between py-10 cursor-pointer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onMouseMove={handleMove}
            >
              {/* Left */}
              <div className="flex items-center gap-6">
                <span className="text-zinc-500 text-sm">
                  0{i + 1}
                </span>

                <motion.h2
                  className="text-4xl md:text-5xl font-medium tracking-tight"
                  initial={false}
                  animate={{
                    x: active === i ? 20 : 0,
                    opacity: active === null || active === i ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {item.title}
                </motion.h2>
              </div>

              {/* Right Arrow */}
              <motion.span
                className="text-xl text-zinc-500"
                animate={{ x: active === i ? 10 : 0, opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cursor Preview */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed top-0 -left-30 z-50 pointer-events-none"
            style={{ x: mouseX, y: mouseY }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-[300px] h-[300px] rounded-xl overflow-hidden">
              <img
                src={services[active].img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
