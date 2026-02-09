'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../../components/navbar'
import Image from 'next/image'
import Link from 'next/link'

function AboutPage() {
  const [currentStory, setCurrentStory] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const storyPoints = [
    {
      title: "The Real Story Behind WinX Media",
      content: "It started with a simple observation: most businesses are absolutely incredible at what they do, but many haven't discovered their unique voice in the digital world yet.",
      highlight: "That's the gap we love to bridge.",
      detail: "We've all seen it. You know a local business that creates amazing products or delivers exceptional service, but their online presence doesn't quite capture that magic. Meanwhile, you see other brands that have mastered the art of storytelling, they've figured out how to connect with their audience in ways that feel authentic and engaging.",
      extraDetail: "WinX Media isn't just another digital marketing agency—we're the storytellers who help your business become the protagonist of its own success story. We're the ones who uncover what makes your brand special, then make sure the world gets to experience that magic too. Because every great business has a story worth telling. Sometimes it just needs the right storyteller to bring it to life."
    },
    {
      title: "The WinX Founders",
      subtitle: "Khajukathara & Sangeeta",
      content: "Two women. One vision. All heart.",
      highlight: "Great marketing isn't just about reach. It's about realness",
      detail: "We didn't plan for this. We weren't waiting around for a 'perfect' moment or some fancy investor pitch. It started with helping brands we loved, telling stories we believed in, and learning everything the hard way, through late nights, tight budgets, and a lot (and we mean a lot) of trial and error.",
      extraDetail: "We met, we clicked, and somewhere between brainstorms and breakdowns, we realized something simple:"
    },
    {
      title: "We Started Small",
      content: "• A few reels that went viral.\n• A few brands that trusted us early.\n• A few wins that told us we were onto something.",
      highlight: "And then the word spread.",
      detail: "Our content didn't just get views, it got DMs, bookings, and real buzz. The results spoke for themselves. Our work made brands feel alive, and people kept coming back for more."
    },
    {
      title: "Our Heart Hasn't Changed",
      content: "Now, we're a growing team of creators, thinkers, and doers, building brands that don't just look good, but feel alive.",
      highlight: "We still go all in.",
      detail: "But the heart of WinX Media hasn't changed: We still obsess over your brand like it's our own. And we still treat every single project like it matters, because it does."
    },
    {
      title: "Come Fly With Us",
      content: "Because when you work with WinX, you don't just get content, you get people who care, who show up, and who are all in.",
      highlight: "Start the Journey",
      detail: "Our Story"
    }
  ]

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newStory = Math.floor(latest * storyPoints.length)
      setCurrentStory(Math.min(newStory, storyPoints.length - 1))
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif overflow-x-hidden">
      <Navbar />
      
      <div ref={containerRef} className="relative">
        {/* Story Progress Indicator */}
        <motion.div 
          className="fixed top-32 right-8 z-50 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {storyPoints.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                index <= currentStory ? 'bg-gradient-to-b from-[#181f7c] to-[#a34fdc]' : 'bg-gray-300'
              }`}
              animate={{ 
                scale: index === currentStory ? 1.2 : 1,
                opacity: index <= currentStory ? 1 : 0.4
              }}
            />
          ))}
        </motion.div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed w-2 h-2 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] rounded-full opacity-20 z-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Hero Story Introduction */}
        <section className="min-h-screen flex items-center justify-center relative">
          <motion.div 
            className="text-center space-y-12 px-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-gray-900"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                background: 'linear-gradient(-45deg, #181f7c, #a34fdc, #181f7c, #a34fdc)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-600 max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Our Story
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#181f7c] to-[#a34fdc]"></div>
              <span className="text-lg text-gray-500">Scroll to explore</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#a34fdc] to-[#181f7c]"></div>
            </motion.div>
          </motion.div>
          
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(24, 31, 124, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 70%, rgba(163, 79, 220, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(24, 31, 124, 0.05) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </section>

        {/* Story Chapters */}
        {storyPoints.map((story, index) => (
          <section 
            key={index} 
            className="min-h-screen flex items-center justify-center px-6 relative"
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Story Number & Title */}
                <div className="space-y-8">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-8xl md:text-9xl font-bold opacity-10 text-gray-300 absolute -top-8 -left-4">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10 mb-4">
                      {story.title}
                    </h2>
                    {story.subtitle && (
                      <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent mb-2">
                        {story.subtitle}
                      </h3>
                    )}
                  </motion.div>
                  
                  <motion.p 
                    className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {story.content}
                  </motion.p>

                  {story.detail && (
                    <motion.p 
                      className="text-base md:text-lg leading-relaxed text-gray-600"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      {story.detail}
                    </motion.p>
                  )}

                  {story.extraDetail && (
                    <motion.p 
                      className="text-base md:text-lg leading-relaxed text-gray-600 mt-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      {story.extraDetail}
                    </motion.p>
                  )}
                </div>

                {/* Interactive Story Element */}
                <div className="relative">
                  <motion.div
                    className="relative p-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200 group cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 25px 50px rgba(24, 31, 124, 0.1)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'conic-gradient(from 0deg, #181f7c, #a34fdc, #181f7c)',
                        padding: '2px',
                      }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full bg-white rounded-3xl"></div>
                    </motion.div>
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] rounded-full flex items-center justify-center"
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <span className="text-2xl font-bold text-white">
                          {index + 1}
                        </span>
                      </motion.div>
                      
                      <motion.p 
                        className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        "{story.highlight}"
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Floating elements */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] rounded-full"
                      style={{
                        top: `${20 + i * 25}%`,
                        right: `${-10 + i * 5}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Special content for founders section */}
              {index === 1 && (
                <motion.div
                  className="mt-16 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] rounded-2xl text-white">
                    <p className="text-xl md:text-2xl font-medium mb-4">
                      "{story.extraDetail}"
                    </p>
                    <p className="text-2xl md:text-3xl font-bold">
                      {story.highlight}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Special image placeholder for final section */}
              {index === 4 && (
                <motion.div
                  className="mt-16 flex justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="relative w-full max-w-md h-80  rounded-3xl flex items-center justify-center overflow-hidden group">
                    
                     <img
                        className='overflow-hidden rounded-2xl'
                     
                     src="https://media.winxmarketingmedia.in/wp-content/uploads/2025/06/pexels-photo-445109-445109-1536x964.jpg" alt="" />
                    
                    
                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <p className="text-lg font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
                        Come fly with us.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="min-h-screen flex items-center justify-center relative px-6">
          <motion.div 
            className="text-center space-y-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to fly with us?
            </motion.h2>
            
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700">
                Let's write your brand's story together
              </p>
              
              <motion.button
                className="group relative px-12 py-6 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] rounded-full text-xl font-bold text-white overflow-hidden shadow-xl"
                whileHover={{ scale: 1.1, boxShadow: '0 25px 50px rgba(24, 31, 124, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
               <Link href="/#contact" className="relative z-10">
                <span className="relative z-10 flex items-center gap-4">
                  Start the Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Footer */}
        {/* <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent mb-4">
                  Follow us on:
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>Facebook</p>
                  <p>Youtube</p>
                  <p>Instagram</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent mb-4">
                  Quick Links:
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>Home</p>
                  <p>About</p>
                  <p>Our Services</p>
                  <p>Our Work</p>
                  <p>Blogs</p>
                  <p>Contact us</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent mb-4">
                  Contact Info:
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>+91 8197519556</p>
                  <p>winxmedia23@gmail.com</p>
                  <p className="mt-4">
                    <strong>Address:</strong><br />
                    WeWork Galaxy, Residency Road,<br />
                    Shanthala Nagar, Ashok Nagar,<br />
                    Bengaluru, Karnataka 560025
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section> */}
      </div>
    </div>
  )
}

export default AboutPage

  