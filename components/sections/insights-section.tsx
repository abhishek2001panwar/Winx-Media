"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Do I really need a website if I have social media?",
    answer: "Social media is rented space the rules can change anytime. Your website is your own home, where your brand stays consistent and you control the customer journey.",
  },
  {
    question: "How long does it take to see results?",
    answer: "You’ll feel the shift within the first month better engagement and clarity. Measurable growth and inbound leads usually follow within 60–90 days with consistent execution.",
  },
  {
    question: "Is social media enough to grow a brand?",
    answer: "Social media is just one touchpoint. Real growth comes from aligning content, ads, website, and SEO into one cohesive digital ecosystem.",
  },
  {
    question: "What makes WinX different?",
    answer: "We don’t just execute tasks we think like brand partners. Every decision is rooted in strategy, creativity, and long-term brand value.",
  },
]

export function InsightsSection() {
  const [flipped, setFlipped] = useState<number | null>(null)

  // Card positions (relative to center)
  const positions = [
    { x: -260, y: -80, rotate: -8 },
    { x: 260, y: -80, rotate: 8 },
    { x: -230, y: 160, rotate: -4 },
    { x: 240, y: 160, rotate: 6 },
  ]

  return (
    <section className="relative bg-[#f8f8f8] min-h-[600px] flex flex-col items-center justify-center py-24 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">FAQ</h2>
      <div className="relative w-full flex items-center justify-center" style={{ minHeight: 420 }}>
        {/* Floating FAQ cards */}
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${positions[i].x}px, ${positions[i].y}px) rotate(${positions[i].rotate}deg)`,
              perspective: 1200,
              zIndex: 10,
            }}
            onMouseEnter={() => setFlipped(i)}
            onMouseLeave={() => setFlipped(null)}
          >
            <motion.div
              className="w-96 h-48 [transform-style:preserve-3d] cursor-pointer"
              animate={{ rotateY: flipped === i ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front (Question) */}
              <div className="absolute w-full h-full  bg-white text-black rounded-2xl flex items-center justify-center text-center text-lg font-semibold shadow-2xl [backface-visibility:hidden] px-6 py-4">
                {faq.question}
              </div>
              {/* Back (Answer) */}
              <div className="absolute w-full h-full  bg-black text-white rounded-2xl flex items-center justify-center text-center text-base font-medium shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] px-6 py-4">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Person image in center */}
        <div className=" flex flex-col items-center">
          <img
            src="https://i.pinimg.com/736x/4c/4f/c4/4c4fc498f2ba5b394e99b0433468fcbf.jpg"
            alt="Person thinking"
            className="w-52 h-52 rounded-full object-cover"
          />
         
        </div>
      </div>
      {/* Optional: Explore button */}
      {/* <button className="absolute bottom-8 right-8 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full flex items-center gap-2 shadow-lg transition">
        Explore
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button> */}
    </section>
  )
}
