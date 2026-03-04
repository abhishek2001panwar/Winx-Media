"use client"

import { useEffect, createContext, useContext, useRef, useState, type ReactNode } from "react"
import Lenis from "lenis"

type LenisContextType = {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export const useLenis = () => useContext(LenisContext)

// Stable context value stored outside component so it never causes re-renders
const ctxValue: LenisContextType = { lenis: null }

export function LenisProvider({ children }: { children: ReactNode }) {
  // Using a ref for the context value means updating lenis instance
  // NEVER triggers a re-render of any consumer
  const ctxRef = useRef<LenisContextType>(ctxValue)

  useEffect(() => {
    if (typeof window === "undefined") return

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    let rafId: number

    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        // Do NOT pass wrapper or content — defaults are fine and
        // don't mutate <html> classes
      })

      ctxRef.current.lenis = lenis

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)

    } catch (error) {
      console.error("Failed to initialize Lenis:", error)
    }

    return () => {
      cancelAnimationFrame(rafId)
      if (ctxRef.current.lenis) {
        ctxRef.current.lenis.destroy()
        ctxRef.current.lenis = null
      }
    }
  }, [])

  // ctxRef.current is a stable object reference — never changes, never re-renders consumers
  return (
    <LenisContext.Provider value={ctxRef.current}>
      {children}
    </LenisContext.Provider>
  )
}