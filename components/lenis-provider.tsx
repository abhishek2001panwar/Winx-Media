"use client"

import { useEffect, createContext, useContext, useRef, type ReactNode } from "react"
import Lenis from "lenis"

type LenisContextType = {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export const useLenis = () => useContext(LenisContext)

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined" || typeof document === "undefined") {
      return
    }

    // Disable smooth scroll on mobile/touch devices to prevent conflicts
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      return
    }

    let lenis: Lenis | null = null

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wrapper: window,
        content: document.documentElement,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        lenis?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    } catch (error) {
      console.error("Failed to initialize Lenis:", error)
    }

    return () => {
      if (lenis) {
        lenis.destroy()
      }
      lenisRef.current = null
    }
  }, [])

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  )
}