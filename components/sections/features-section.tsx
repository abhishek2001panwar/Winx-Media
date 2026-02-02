"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter,
  FaYoutube,
  FaPinterestP 
} from "react-icons/fa"
import { 
  TbSeo,
  TbBrandGoogleAnalytics,
  TbBulb,
  TbPalette,
  TbChartBar,
  TbDeviceMobile,
  TbTarget
} from "react-icons/tb"

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', color: '#1877F2', angle: 0 },
  { icon: FaInstagram, label: 'Instagram', color: '#E4405F', angle: 60 },
  { icon: FaLinkedinIn, label: 'LinkedIn', color: '#0A66C2', angle: 120 },
  { icon: FaTwitter, label: 'Twitter', color: '#1DA1F2', angle: 180 },
  { icon: FaYoutube, label: 'YouTube', color: '#FF0000', angle: 240 },
  { icon: FaPinterestP, label: 'Pinterest', color: '#E60023', angle: 300 },
]

// Social Media Animation - Orbiting icons
function SocialOrbitAnimation() {
  const radius = 80

  return (
    <div className="flex items-center justify-center relative" style={{ height: '140px', marginBottom: '-40px', marginTop: '-20px' }}>
      <style>{`
        @keyframes rotate-group {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div
        style={{
          position: 'relative',
          width: '220px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'rotate-group 10s linear infinite',
        }}
      >
        {socialLinks.map((social, index) => {
          const angle = (social.angle * Math.PI) / 180
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          return (
            <div
              key={social.label}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
                style={{ backgroundColor: social.color }}
              >
                <social.icon className="text-sm" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Performance Marketing - Rising bars
function PerformanceAnimation() {
  const [bars, setBars] = useState([60, 80, 95])

  useEffect(() => {
    const interval = setInterval(() => {
      setBars([
        Math.random() * 40 + 50,
        Math.random() * 30 + 65,
        Math.random() * 20 + 75,
      ])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-end justify-center h-full gap-3 px-8">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-12 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg"
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  )
}

// SEO - Search ranking animation
function SEOAnimation() {
  const [position, setPosition] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev === 1 ? 5 : 1))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <motion.div
        className="text-5xl font-black text-green-600"
        animate={{ scale: position === 1 ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.6 }}
      >
        #{position}
      </motion.div>
      <span className="text-sm text-gray-600">Search Ranking</span>
      <motion.div
        className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden"
        layout
      >
        <motion.div
          className="h-full bg-green-500 rounded-full"
          animate={{ width: position === 1 ? '100%' : '20%' }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </div>
  )
}

// Content Creation - Typing animation
function ContentAnimation() {
  const [dots, setDots] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <motion.div
        className="text-4xl"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✍️
      </motion.div>
      <div className="text-2xl font-bold text-gray-700">
        Creating{'.'.repeat(dots + 1)}
      </div>
    </div>
  )
}

// Brand Strategy - Target animation
function BrandStrategyAnimation() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.3 : 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-500"
            style={{
              width: `${i * 40}px`,
              height: `${i * 40}px`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
        <motion.div
          className="w-6 h-6 bg-purple-500 rounded-full relative z-10"
          animate={{ scale }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

// Branding & Design - Color palette animation
function DesignAnimation() {
  const [activeColor, setActiveColor] = useState(0)
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColor((prev) => (prev + 1) % colors.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-2">
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="rounded-lg"
          style={{
            backgroundColor: color,
            width: activeColor === i ? '50px' : '30px',
            height: activeColor === i ? '80px' : '60px',
          }}
          animate={{
            width: activeColor === i ? '50px' : '30px',
            height: activeColor === i ? '80px' : '60px',
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  )
}

// Marketing Strategy - Connected strategy network
function StrategyAnimation() {
  const [activeNode, setActiveNode] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 4)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  const strategyNodes = [
    { label: 'Analyze', x: 90, y: 30, icon: '📊' },
    { label: 'Plan', x: 150, y: 70, icon: '🎯' },
    { label: 'Execute', x: 90, y: 110, icon: '📈' },
    { label: 'Grow', x: 30, y: 70, icon: '💎' }
  ]

  // Create connections between nodes for string effect
  const connections = [
    { from: 0, to: 1 }, // Analytics to Goals
    { from: 1, to: 2 }, // Goals to Growth
    { from: 2, to: 3 }, // Growth to ROI
    { from: 3, to: 0 }, // ROI to Analytics
    { from: 0, to: 2 }, // Analytics to Growth (diagonal)
    { from: 1, to: 3 }, // Goals to ROI (diagonal)
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full relative w-full">
      <div className="relative flex items-center justify-center">
        {/* Strategy Network */}
        <svg width="180" height="140" className="relative">
          <defs>
            <filter id="glow">
              <fegaussianblur stdDeviation="3" result="coloredBlur"/>
              <femerge> 
                <femergenode in="coloredBlur"/>
                <femergenode in="SourceGraphic"/>
              </femerge>
            </filter>
          </defs>
          
          {/* Connection strings */}
          {connections.map((connection, i) => {
            const fromNode = strategyNodes[connection.from]
            const toNode = strategyNodes[connection.to]
            const isActive = activeNode === connection.from || activeNode === connection.to
            
            return (
              <motion.line
                key={i}
                x1={fromNode.x} y1={fromNode.y}
                x2={toNode.x} y2={toNode.y}
                stroke={isActive ? "#6366f1" : "#e5e7eb"}
                strokeWidth={isActive ? "2" : "1"}
                strokeDasharray="3,3"
                animate={{
                  strokeDashoffset: isActive ? [0, -6] : 0,
                  opacity: isActive ? 0.8 : 0.3
                }}
                transition={{ 
                  strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.5 }
                }}
              />
            )
          })}
          
          {/* Strategy nodes */}
          {strategyNodes.map((node, i) => (
            <g key={i}>
              {/* Node circles */}
              <motion.circle
                cx={node.x} cy={node.y}
                r={i === activeNode ? "18" : "14"}
                fill={i === activeNode ? "#6366f1" : "#f3f4f6"}
                stroke={i === activeNode ? "#4f46e5" : "#d1d5db"}
                strokeWidth="2"
                filter={i === activeNode ? "url(#glow)" : "none"}
                animate={{
                  scale: i === activeNode ? [1, 1.2, 1] : 1,
                  fill: i === activeNode ? "#6366f1" : "#f3f4f6"
                }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Node icons */}
              <text
                x={node.x} y={node.y + 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
                fill={i === activeNode ? "white" : "#6b7280"}
              >
                {node.icon}
              </text>
            </g>
          ))}
        </svg>

        {/* Active node label */}
        <motion.div
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {strategyNodes[activeNode]?.label}
          </span>
        </motion.div>
      </div>
    </div>
  )
}

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Engage audiences across all platforms with strategic content',
    icon: TbDeviceMobile,
    animation: SocialOrbitAnimation,
  },
  {
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that deliver measurable ROI',
    icon: TbChartBar,
    animation: PerformanceAnimation,
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher, drive organic traffic, dominate search results',
    icon: TbSeo,
    animation: SEOAnimation,
  },
  {
    title: 'Content Creation',
    description: 'Compelling stories that resonate and convert',
    icon: TbBulb,
    animation: ContentAnimation,
  },
  {
    title: 'Brand Strategy',
    description: 'Build brands that stand out and stay memorable',
    icon: TbTarget,
    animation: BrandStrategyAnimation,
  },
  {
    title: 'Branding & Design',
    description: 'Visual identities that capture attention and build trust',
    icon: TbPalette,
    animation: DesignAnimation,
  },
  {
    title: 'Marketing Strategy',
    description: 'Comprehensive roadmaps for sustainable growth',
    icon: TbBrandGoogleAnalytics,
    animation: StrategyAnimation,
  },
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const Icon = service.icon
  const AnimationComponent = service.animation

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* Card Container */}
      <div className="relative h-full bg-gray-50 rounded-2xl p-8 transition-all duration-500 hover:bg-white hover:shadow-xl min-h-[320px] flex flex-col">
        
        {/* Animation Area */}
        <div className="flex-1 mb-6">
          <AnimationComponent />
        </div>

        {/* Icon */}
        <motion.div className="mb-4">
          <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
            <Icon className="text-2xl" />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-white px-6 py-24 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Our Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}