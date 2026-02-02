import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "winxmarketingmedia - Digital Marketing Agency",
  description:
    "WinX Media is a full-service digital marketing agency that crafts compelling brand stories and drives measurable growth through innovative strategies and creative solutions.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/fav.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/fav.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/fav.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`   `}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
