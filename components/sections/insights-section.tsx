"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const faqs = [
  // Added WinX Media FAQs
  {
    question: "What does WinX Media do?",
    answer: "WinX Media is a full-service digital marketing agency that helps brands grow through strategy-led content, performance marketing, storytelling, production, and campaigns designed for real ROI, not vanity metrics.",
  },
  {
    question: "Who should work with WinX Media?",
    answer: "We work with brands that want real growth - Event planners, D2C brands, jewellery brands, cafés, hotels, interior designers, architects, photographers, and service-based businesses looking to get visibility, leads, and long-term brand growth through digital marketing.",
  },
  {
    question: "How is WinX Media different from other digital marketing agencies?",
    answer: "Most agencies focus on just posting or running ads. We focus on the bigger picture - building a clear story, strong visibility, and a marketing system combining storytelling, creative production, social media management, performance marketing, and conversion-focused strategy that actually brings enquiries, leads, and sales.",
  },
  {
    question: "Does WinX Media handle everything or do we need multiple vendors?",
    answer: "We handle end-to-end digital marketing including brand storytelling, content strategy, shoots and production, graphic design, video editing, social media management, performance ads, website optimization, and campaign execution.",
  },
  {
    question: "How does WinX Media measure success for clients?",
    answer: "We measure success through clear performance indicators such as reach, engagement quality, website traffic, leads, conversions, and return on investment ensuring every campaign contributes to business growth.",
  },
]

export function InsightsSection() {
  const [flipped, setFlipped] = useState<number | null>(null)
  const [expanded, setExpanded] = useState<number | null>(null)

  // Card positions (relative to center)
  const positions = [
    { x: -260, y: -80, rotate: -8 },
    { x: 260, y: -80, rotate: 8 },
    { x: -230, y: 160, rotate: -4 },
    { x: 240, y: 160, rotate: 9 },
    { x: 0, y: -300, rotate: 0 },
  ]

  return (
    <section className="  flex flex-col items-center justify-center md:py-16 px-4">
      <h2 className="text-4xl md:text-5xl  tracking-tight text-center mb-12">FAQ</h2>
      
      {/* Desktop View - Floating Cards */}
      <div className="hidden lg:block relative w-full flex items-center justify-center" style={{ minHeight: 430 }}>
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
              <div className="absolute w-full h-full bg-white text-black rounded-2xl flex items-center justify-center text-center text-lg  shadow-2xl [backface-visibility:hidden] px-6 py-4">
                {faq.question}
              </div>
              {/* Back (Answer) */}
              <div className="absolute w-full h-full bg-black text-white rounded-2xl flex items-center justify-center text-center text-base font-medium  shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] px-6 py-10">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Person image in center */}
        <div className="flex flex-col items-center">
          <div className="relative w-52 h-52 rounded-full overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/4c/4f/c4/4c4fc498f2ba5b394e99b0433468fcbf.jpg"
              alt="Person thinking"
              fill
              sizes="208px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Mobile View - Accordion Style Column */}
      <div className="lg:hidden w-full max-w-2xl space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={false}
          >
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
            >
              <h1 className="text-base  text-black">{faq.question}</h1>
              <motion.svg
                animate={{ rotate: expanded === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: expanded === i ? "auto" : 0,
                opacity: expanded === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-sm text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
