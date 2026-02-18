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
  metadataBase: new URL("https://www.winxmarketingmedia.in/"), // IMPORTANT
  title: "winxmarketingmedia - Digital Marketing Agency",
  description:
    "WinX Media is a full-service digital marketing agency that crafts compelling brand stories and drives measurable growth through innovative strategies and creative solutions.",
  generator: "",
 icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
