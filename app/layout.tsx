import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: {
    default: "Winx Marketing Media | Digital Creative Company",
    template: "%s | Winx Marketing Media",
  },
  description:
    "Winx Marketing Media is a full-service digital marketing agency crafting compelling brand stories and driving measurable growth through innovative strategies.",
  metadataBase: new URL("https://winxmarketingmedia.in"),
  alternates: {
    canonical: "/",
  },
  generator: "",   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`   `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
