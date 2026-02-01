'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/06/1-2-300x234.png",
    text: `“Weddings are emotional, and so is our work. WinX brought that same emotion into our digital presence. The way they shaped our visual storytelling — it felt like a love letter to our brand. Classy, clean, and truly us.”`,
    author: "HOUSE OF BLISS",
    rating: 5,
    role: undefined,
  },
  {
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/06/1000335511-225x300.jpg",
    text: `“We’ve worked with other agencies, but WinX has been the most involved. They don’t just deliver content — they collaborate, ideate, and push us to grow. Our online presence and brand visibility have improved significantly since working with them.”`,
    author: "Anaga",
    rating: 5,
    role: "Manager\nSNEHA BANQUET HALL",
  },
  // ...add more testimonials here...
]

export default function BlogSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* Carousel/Slider */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="relative flex flex-col md:flex-row items-center gap-10 bg-white/90 rounded-3xl shadow-2xl p-10 overflow-visible"
              initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, scale: 0.98, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Decorative floating shapes */}
              <motion.div
                className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-tr from-purple-300 via-purple-100 to-lime-200 rounded-full blur-2xl opacity-40 z-0"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-lime-200 via-purple-100 to-purple-300 rounded-full blur-2xl opacity-30 z-0"
                animate={{ scale: [1.1, 0.9, 1.1], rotate: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Image with advanced effect */}
              <motion.div
                className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-10"
                initial={{ scale: 0.9, rotate: -8 }}
                whileHover={{ scale: 1.04, rotate: 0, boxShadow: "0 8px 40px 0 rgba(80,80,200,0.18)" }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
              >
                <motion.img
                  src={testimonials[active].image}
                  alt={testimonials[active].author}
                  className="w-44 h-60 object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(120deg, transparent 60%, rgba(255,255,255,0.25) 80%, transparent 100%)',
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-6 z-10">
                <motion.p
                  className="text-lg md:text-xl font-serif text-gray-800 leading-relaxed"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {testimonials[active].text}
                </motion.p>
                <motion.div
                  className="flex gap-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 drop-shadow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
                      transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200, repeat: Infinity, repeatType: "reverse", duration: 2 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </motion.svg>
                  ))}
                </motion.div>
                <motion.h5
                  className="text-base font-bold tracking-widest text-gray-700 mt-2 uppercase whitespace-pre-line"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {testimonials[active].author}
                  {testimonials[active].role && (
                    <>
                      <br />
                      <span className="font-normal normal-case text-gray-500">{testimonials[active].role}</span>
                    </>
                  )}
                </motion.h5>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Controls */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${active === i ? 'bg-gradient-to-tr from-purple-400 via-lime-300 to-yellow-200 scale-125 shadow-lg' : 'bg-gray-300'}`}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                style={{ outline: 'none', border: 'none' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}