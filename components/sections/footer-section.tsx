// 'use client'
// import React from 'react';
// import { motion } from 'framer-motion';

// const FooterSection: React.FC = () => {
//   const quickLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Our Services', href: '/services' },
//     { name: 'Our Work', href: '/work' },
//     { name: 'Blogs', href: '/blogs' },
//     { name: 'Contact us', href: '/contact' },
//   ];

//   const socialLinks = [
//     {
//       name: 'Facebook',
//       href: 'https://facebook.com',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//         </svg>
//       ),
//     },
//     {
//       name: 'YouTube',
//       href: 'https://youtube.com',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//         </svg>
//       ),
//     },
//     {
//       name: 'Instagram',
//       href: 'https://instagram.com',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <footer className="relative text-black overflow-hidden">
//       {/* Decorative Top Border */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />

//       <div className="container mx-auto px-6 lg:px-12 py-16">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Brand Section */}
//           <div className="lg:col-span-1">
//             <motion.h3
//               className="text-3xl font-black mb-4"
//               style={{ fontFamily: "'Syne', sans-serif" }}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               WinX<br />Marketing<br />Media
//             </motion.h3>
//             <motion.p
//               className="text-black text-sm leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               Turning great businesses into household names through strategic digital marketing.
//             </motion.p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <motion.h4
//               className="text-sm font-bold uppercase tracking-wider mb-6 text-black"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Quick Links
//             </motion.h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <motion.li
//                   key={link.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
//                 >
//                   <a
//                     href={link.href}
//                     className="text-black transition-colors duration-300 inline-flex items-center group"
//                   >
//                     <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-2" />
//                     {link.name}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <motion.h4
//               className="text-sm font-bold uppercase tracking-wider mb-6 text-black"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               Contact Info
//             </motion.h4>
//             <ul className="space-y-4">
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.35 }}
//               >
//                 <a
//                   href="tel:+918197519556"
//                   className="text-black transition-colors duration-300 flex items-start gap-3 group"
//                 >
//                   <svg className="w-5 h-5 mt-0.5 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   <span>+91 8197519556</span>
//                 </a>
//               </motion.li>

//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 <a
//                   href="mailto:winxmedia23@gmail.com"
//                   className="text-black transition-colors duration-300 flex items-start gap-3 group"
//                 >
//                   <svg className="w-5 h-5 mt-0.5 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <span className="break-all">winxmedia23@gmail.com</span>
//                 </a>
//               </motion.li>

//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.45 }}
//               >
//                 <div className="text-black flex items-start gap-3">
//                   <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   <span className="text-sm leading-relaxed">
//                     WeWork Galaxy, Residency Road,
//                     <br />
//                     Shanthala Nagar, Ashok Nagar,
//                     <br />
//                     Bengaluru, Karnataka 560025
//                   </span>
//                 </div>
//               </motion.li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <motion.h4
//               className="text-sm font-bold uppercase tracking-wider mb-6 text-black"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               Follow Us
//             </motion.h4>
//             <div className="flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300"
//                   aria-label={social.name}
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>

//             {/* Newsletter (Optional) */}
//             <motion.div
//               className="mt-8"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.7 }}
//             >
//               <p className="text-sm text-black mb-3">Stay updated with our latest work</p>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 bg-white/10 border border-black/20 rounded-lg
//                            text-black placeholder-black outline-none
//                            focus:border-primary focus:bg-white/20 transition-all text-sm"
//                 />
//                 <motion.button
//                   className="px-4 py-2 bg-primary text-white font-semibold rounded-lg transition-all text-sm"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   →
//                 </motion.button>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <p className="text-black text-sm">
//             © {new Date().getFullYear()} WinX Marketing Media. All rights reserved.
//           </p>

//           <div className="flex gap-6 text-sm">
//             <a href="/privacy" className="text-black transition-colors">
//               Privacy Policy
//             </a>
//             <a href="/terms" className="text-black transition-colors">
//               Terms of Service
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       {/* Decorative Bottom Element */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10" />
//     </footer>
//   );
// };

// export default FooterSection;

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const footerLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Team", href: "/team" },
]


export function FooterSection() {
  const [email, setEmail] = useState("")

  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
             <Image   
              src="/logo.png"
              alt="Winx Marketing Media"
              width={250}
              height={80}
              className="object-contain text-black"
            />
            </motion.h2>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Email signup */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-sm mb-4">
  Get growth insights, case studies & updates from Winx.
</p>

            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-foreground text-background p-3 rounded-lg hover:bg-foreground/90 transition-colors"
                data-clickable
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-muted-foreground text-sm">
  © {new Date().getFullYear()} Winx Marketing Media. All rights reserved.
</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
