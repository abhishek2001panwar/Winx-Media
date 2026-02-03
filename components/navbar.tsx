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
  Facebook
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

    // If NOT on home page → navigate first
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    // Already on home → smooth scroll
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

    // scroll logic
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
        className="fixed top-0 w-full z-[60] px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 lg:py-6 border-b border-black/10 transition-all duration-500 backdrop-blur-3xl"
        style={{
          backdropFilter: "blur(24px)",
          background: isMenuOpen 
            ? "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)" 
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
              className="p-2 md:p-3 relative z-10"
              aria-label="Open menu"
            >
              <div className="space-y-1.5 md:space-y-2">
                <span className="block w-7 sm:w-8 md:w-10 h-[2px] bg-black transition-all duration-300" />
                <span className="block w-7 sm:w-8 md:w-10 h-[2px] bg-black transition-all duration-300" />
              </div>
            </button>
          ) : (
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 md:p-3 relative z-10"
              aria-label="Close menu"
            >
              <div className="relative w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 flex items-center justify-center">
                <span className="absolute w-6 sm:w-7 md:w-8 h-0.5 bg-black rotate-45 transition-all duration-300" />
                <span className="absolute w-6 sm:w-7 md:w-8 h-0.5 bg-black -rotate-45 transition-all duration-300" />
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
        {/* Background with gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 transition-opacity duration-700 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Content */}
        <div
          className={`absolute inset-0 z-56 font-serif transition-opacity duration-500 overflow-y-auto ${
            isMenuOpen ? "opacity-100 delay-200" : "opacity-0"
          }`}
        >
          <div className="min-h-full flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-20 sm:py-24 md:py-28 lg:py-32">
            
            {/* LEFT SIDE - MENU LINKS */}
            <div className="flex flex-col justify-center items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleMenuClick(item.type as "scroll" | "route", item.value)}
                    className="group relative flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light pl-3 sm:pl-4 md:pl-5 lg:pl-6 transition-all duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] hover:translate-x-3 sm:hover:translate-x-4 lg:hover:translate-x-6 hover:opacity-60"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="absolute left-0 top-1/2 w-1 sm:w-1.5 md:w-2 h-0.5 bg-black transition-all duration-[400ms] group-hover:w-4 sm:group-hover:w-5 md:group-hover:w-6 lg:group-hover:w-8 group-hover:-translate-x-2 sm:group-hover:-translate-x-3 lg:group-hover:-translate-x-5 group-hover:opacity-0" />
                    <Icon 
                      size={18}
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 opacity-0 -translate-x-2 sm:-translate-x-3 lg:-translate-x-5 transition-all duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-100 group-hover:translate-x-0" 
                      strokeWidth={1.5} 
                    />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* MIDDLE DECORATIVE ELEMENT - Hidden on mobile and tablet */}
            <div className="hidden xl:flex flex-col items-center justify-center px-8">
              <div className="relative">
                {/* Vertical gradient line */}
                <div className="w-px h-[60vh] bg-gradient-to-b from-transparent via-black/30 to-transparent" />
                
                {/* Top animated circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black animate-pulse" />
                
                {/* Center ornament with rotating ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Rotating outer ring */}
                    <div className="absolute w-full h-full rounded-full border-2 border-black/20 animate-spin-slow" />
                    {/* Static middle ring with sparkle */}
                    <div className="absolute w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                      <Sparkles size={16} className="text-black animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Bottom animated circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black animate-pulse [animation-delay:1s]" />
                
                {/* Floating decorative dots */}
                <div className="absolute top-[20%] -left-4 w-1.5 h-1.5 rounded-full bg-black/40 animate-float" />
                <div className="absolute top-[40%] -right-4 w-1.5 h-1.5 rounded-full bg-black/40 animate-float [animation-delay:0.5s]" />
                <div className="absolute top-[60%] -left-4 w-1.5 h-1.5 rounded-full bg-black/40 animate-float [animation-delay:1s]" />
                <div className="absolute top-[80%] -right-4 w-1.5 h-1.5 rounded-full bg-black/40 animate-float [animation-delay:1.5s]" />
              </div>
            </div>

            {/* RIGHT SIDE - CONTACT INFO */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 text-sm md:text-base mt-4 sm:mt-6 lg:mt-0">
              
              {/* SOCIAL */}
              <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
                <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-600 mb-1 sm:mb-2 text-[10px] sm:text-xs font-medium">
                  Social
                </p>
                <a 
                  href="https://www.instagram.com/winxmedia.in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 md:gap-4 transition-all duration-300 hover:-translate-x-1 sm:hover:-translate-x-2 hover:opacity-60"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 group-hover:scale-110 group-hover:rotate-6">
                    <Instagram size={18} strokeWidth={2} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/winxmedia-in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 md:gap-4 transition-all duration-300 hover:-translate-x-1 sm:hover:-translate-x-2 hover:opacity-60"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-6">
                    <Linkedin size={18} strokeWidth={2} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">LinkedIn</span>
                </a>
              </div>

              {/* LOCATION */}
              <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
                <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-600 mb-1 sm:mb-2 text-[10px] sm:text-xs font-medium">
                  Location
                </p>
                <div className="group flex items-center gap-2 sm:gap-3 md:gap-4 transition-all duration-300 hover:-translate-x-1 sm:hover:-translate-x-2 hover:opacity-60 cursor-pointer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:scale-110">
                    <MapPin size={18} strokeWidth={2} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">India</span>
                </div>
              </div>

              {/* CONTACT */}
              <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 sm:col-span-2 lg:col-span-1">
                <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-600 mb-1 sm:mb-2 text-[10px] sm:text-xs font-medium">
                  Contact
                </p>
                <a 
                  href="mailto:info@winxmedia.com" 
                  className="group flex items-center gap-2 sm:gap-3 md:gap-4 transition-all duration-300 hover:-translate-x-1 sm:hover:-translate-x-2 hover:opacity-60"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:scale-110 group-hover:-rotate-6">
                    <Mail size={18} strokeWidth={2} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg break-all">info@winxmedia.com</span>
                </a>
                <a 
                  href="tel:+918197519556" 
                  className="group flex items-center gap-2 sm:gap-3 md:gap-4 transition-all duration-300 hover:-translate-x-1 sm:hover:-translate-x-2 hover:opacity-60"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:scale-110 group-hover:-rotate-6">
                    <Phone size={18} strokeWidth={2} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">+91 8197519556</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}