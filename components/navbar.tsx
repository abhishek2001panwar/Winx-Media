"use client";

import { useState, useEffect } from "react";
import { useLenis } from "@/components/lenis-provider";
import { usePathname, useRouter } from "next/navigation";
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Briefcase,
  Info,
  Wrench,
  Image as ImageIcon,
  MessageCircle,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lenis } = useLenis();

  // Lock background scroll
  useEffect(() => {
    if (!lenis) return;
    isMenuOpen ? lenis.stop() : lenis.start();
  }, [isMenuOpen, lenis]);

  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, {
          offset: -100,
          duration: 1.4,
          easing: (t) => 1 - Math.pow(1 - t, 4),
        });
      } else {
        const y = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 850);
  };

  const handleMenuClick = (type: "scroll" | "route", value: string) => {
    setIsMenuOpen(false);

    if (type === "route") {
      router.push(value);
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${value}`);
      return;
    }

    setTimeout(() => {
      const target = document.getElementById(value);
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, {
          offset: -100,
          duration: 1.4,
          easing: (t) => 1 - Math.pow(1 - t, 4),
        });
      } else {
        const y = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 1050);
  };

  const menuItems = [
    { label: "Our work", type: "route", value: "/work", icon: Briefcase },
    { label: "About us", type: "route", value: "/about", icon: Info },
    { label: "Services", type: "scroll", value: "features", icon: Wrench },
    { label: "Gallery", type: "route", value: "/gallery", icon: ImageIcon },
    { label: "Contact", type: "scroll", value: "contact", icon: MessageCircle },
    { label: "Team", type: "route", value: "/team", icon: Sparkles }
  ];

  return (
    <>
      {/* TOP NAV */}
      <nav
        className="fixed top-0 w-full z-[60] px-4 sm:px-5 md:px-6 py-3 sm:py-8 md:py-5 lg:py-6 border-b border-black/10 transition-all duration-500 backdrop-blur-3xl"
        style={{
          backdropFilter: "blur(24px)",
          background: isMenuOpen 
            ? "rgba(255,255,255,0.95)" 
            : "rgba(255,255,255,0.85)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="relative z-10">
            <div className="font-serif text-2xl md:text-4xl leading-tight text-black">
              <Image 
                src="/logo.png"
                alt="Winx Media Logo"
                width={100}
                height={40}
                className="w-[100px] h-auto sm:w-[120px] md:w-[140px] lg:w-[150px] object-contain"
              />
            </div>
          </button>

          {/* Center Text - Hidden on mobile and tablet */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <p className="font-serif uppercase tracking-[0.35em] text-base lg:text-lg font-medium text-black">
              Digital Creative Agency
            </p>
          </div>

          {/* Menu Button / X Button */}
          {!isMenuOpen ? (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 md:p-3 relative z-10 group"
              aria-label="Open menu"
            >
              <div className="space-y-1.5 md:space-y-2">
                <span className="block w-7 sm:w-8 md:w-10 h-[2px] bg-black transition-all duration-300 group-hover:w-6 group-hover:sm:w-7 group-hover:md:w-9" />
                <span className="block w-7 sm:w-8 md:w-10 h-[2px] bg-black transition-all duration-300" />
              </div>
            </button>
          ) : (
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 md:p-3 relative z-10 group"
              aria-label="Close menu"
            >
              <div className="relative w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 flex items-center justify-center">
                <span className="absolute w-6 sm:w-7 md:w-8 h-0.5 bg-black rotate-45 transition-all duration-300 group-hover:rotate-90" />
                <span className="absolute w-6 sm:w-7 md:w-8 h-0.5 bg-black -rotate-45 transition-all duration-300 group-hover:-rotate-90" />
              </div>
            </button>
          )}
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-700 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Background with light gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 transition-opacity duration-700 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Animated grain texture overlay */}
        <div 
          className={`absolute inset-0 opacity-[0.03] mix-blend-overlay transition-opacity duration-700 ${
            isMenuOpen ? "opacity-[0.03]" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div
          className={`absolute inset-0 z-56 font-serif transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100 delay-200" : "opacity-0"
          }`}
        >
          <div className="h-full flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-20 sm:py-24 md:py-28 lg:py-32">
            
            {/* MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1.2fr_auto_0.8fr] gap-8 lg:gap-16 xl:gap-24">
              
              {/* LEFT SIDE - MENU LINKS */}
              <div className="flex flex-col justify-center space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleMenuClick(item.type as "scroll" | "route", item.value)}
                      className="group relative flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-black py-2 sm:py-3 transition-all duration-500 ease-out hover:translate-x-4 sm:hover:translate-x-6"
                      style={{
                        animationDelay: `${index * 80}ms`,
                      }}
                    >
                      {/* Hover line indicator */}
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-px bg-black/50 transition-all duration-500 group-hover:w-6 sm:group-hover:w-8 md:group-hover:w-10" />
                      
                      {/* Icon */}
                      <Icon 
                        size={20}
                        className="sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 text-black/80" 
                        strokeWidth={1.5} 
                      />
                      
                      {/* Text with number */}
                      <div className="flex items-baseline gap-3 sm:gap-4">
                        <span className="text-xs sm:text-sm text-black/40 font-light tabular-nums">
                          0{index + 1}
                        </span>
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight transition-all duration-500 group-hover:tracking-wide">
                          {item.label}
                        </span>
                      </div>

                      {/* Arrow indicator */}
                      <ArrowUpRight 
                        size={20}
                        className="sm:w-6 sm:h-6 md:w-7 md:h-7 ml-auto opacity-0 -translate-y-2 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-black/60" 
                        strokeWidth={1.5}
                      />
                    </button>
                  );
                })}
              </div>

              {/* MIDDLE DECORATIVE ELEMENT - Hidden on mobile/tablet */}
              <div className="hidden xl:flex flex-col items-center justify-center px-8">
                <div className="relative">
                  {/* Vertical gradient line */}
                  <div className="w-px h-[50vh] bg-gradient-to-b from-transparent via-black/20 to-transparent" />
                  
                  {/* Animated orbiting elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      {/* Rotating outer ring */}
                      <div className="absolute w-full h-full rounded-full border border-black/10 animate-spin-slow" />
                      {/* Counter-rotating middle ring */}
                      <div className="absolute w-14 h-14 rounded-full border border-black/20 animate-spin-reverse" />
                      {/* Center icon */}
                      <div className="absolute w-8 h-8 rounded-full bg-black/5 backdrop-blur-sm flex items-center justify-center">
                        <Sparkles size={14} className="text-black/60 animate-pulse" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - CONTACT INFO */}
              <div className="flex flex-col justify-center gap-8 md:gap-10 lg:gap-12 text-black/80">
                
                {/* SOCIAL */}
                <div className="space-y-3 md:space-y-4">
                  <p className="uppercase tracking-[0.3em] text-black/40 text-[10px] sm:text-xs font-medium mb-4">
                    Connect
                  </p>
                  <a 
                    href="https://www.instagram.com/winxmedia.in" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-2 border-b border-black/10 transition-all duration-300 hover:border-black/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 group-hover:scale-110">
                        <Instagram size={16} strokeWidth={2} className="sm:w-[18px] sm:h-[18px] transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-light">Instagram</span>
                    </div>
                    <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" strokeWidth={1.5} />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/company/winxmedia-in/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-2 border-b border-black/10 transition-all duration-300 hover:border-black/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                        <Linkedin size={16} strokeWidth={2} className="sm:w-[18px] sm:h-[18px] transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-light">LinkedIn</span>
                    </div>
                    <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" strokeWidth={1.5} />
                  </a>
                </div>

                {/* CONTACT */}
                <div className="space-y-3 md:space-y-4">
                  <p className="uppercase tracking-[0.3em] text-black/40 text-[10px] sm:text-xs font-medium mb-4">
                    Get in touch
                  </p>
                  <a 
                    href="mailto:info@winxmedia.com" 
                    className="group flex items-center gap-3 py-2 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:scale-110">
                      <Mail size={16} strokeWidth={2} className="sm:w-[18px] sm:h-[18px] transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-light">info@winxmedia.com</span>
                  </a>
                  
                  <a 
                    href="tel:+918197519556" 
                    className="group flex items-center gap-3 py-2 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:scale-110">
                      <Phone size={16} strokeWidth={2} className="sm:w-[18px] sm:h-[18px] transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <span className="text-sm sm:text-base font-light">+91 8197519556</span>
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM FOOTER */}
            <div className="border-t border-black/10 pt-6 sm:pt-8 mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 text-black/40">
              <div className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={2} />
                <span className="text-xs sm:text-sm font-light">Based in India</span>
              </div>
              <p className="text-xs sm:text-sm font-light">
                © {new Date().getFullYear()} Winx Media. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </>
  );
}