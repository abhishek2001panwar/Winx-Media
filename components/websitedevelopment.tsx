'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  MonitorSmartphone,
  Zap,
  LayoutTemplate,
  Database,
} from 'lucide-react'

export default function WebsiteDevelopmentOrbit() {
  const radius = 65
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const websiteItems = [
    {
      icon: Code2,
      color: '#3B82F6',
      angle: 0,
    },
    {
      icon: MonitorSmartphone,
      color: '#8B5CF6',
      angle: 72,
    },
    {
      icon: Database,
      color: '#06B6D4',
      angle: 144,
    },
    {
      icon: Globe,
      color: '#10B981',
      angle: 216,
    },
    {
      icon: Zap,
      color: '#F59E0B',
      angle: 288,
    },
  ]

  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        height: '170px',
        marginTop: '-10px',
        marginBottom: '-20px',
      }}
    >
      <style>{`
        @keyframes rotateOrbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59,130,246,0.25);
          }
          50% {
            box-shadow: 0 0 35px rgba(139,92,246,0.45);
          }
        }

        @keyframes screenMove {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>

      {/* Orbit */}
      <div
        style={{
          position: 'relative',
          width: '190px',
          height: '190px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'rotateOrbit 14s linear infinite',
        }}
      >
        
        {/* Ring */}
        <div className="absolute w-[135px] h-[135px] rounded-full border border-white/10" />

        {/* Main Website Window */}
        <div
          className="absolute overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl"
          style={{
            width: '88px',
            height: '78px',
            animation: 'glowPulse 4s ease-in-out infinite',
          }}
        >
          
          {/* Browser Top */}
          <div className="flex items-center gap-1 px-2 py-1 bg-white/5 border-b border-white/10">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>

          {/* Website UI */}
          <div
            className="p-2 flex flex-col gap-1"
            style={{
              animation: 'screenMove 3s ease-in-out infinite',
            }}
          >
            <div className="h-2 w-10 rounded bg-blue-500/70" />
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-8 rounded bg-white/10" />

            <div className="grid grid-cols-2 gap-1 mt-1">
              <div className="h-5 rounded bg-purple-500/30" />
              <div className="h-5 rounded bg-cyan-500/30" />
            </div>

            <div className="h-2 w-6 rounded bg-green-500/50 mt-1" />
          </div>
        </div>

        {/* Floating Tech Icons */}
        {mounted &&
          websiteItems.map((item, index) => {
            const angle = (item.angle * Math.PI) / 180
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px - 18px)`,
                  top: `calc(50% + ${y}px - 18px)`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 shadow-xl"
                  style={{
                    backgroundColor: item.color,
                    animation: `float ${2 + index}s ease-in-out infinite`,
                  }}
                >
                  <item.icon className="w-4 h-4 text-white" />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}