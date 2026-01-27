'use client'
import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <nav className="w-full px-6 py-8 relative z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                       <img  src="https://winxmarketingmedia.in/wp-content/uploads/2025/06/cropped-COLLABORATIVE-SENIOR-CARE-2.png" alt="Logo" className="h-12 w-auto bg-black" />
                    </div>

                    {/* Center Headline */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                        <h2 className="text-sm md:text-base font-medium tracking-widest uppercase">
                            Creative Digital Agency
                        </h2>
                    </div>

                    {/* Hamburger Menu - 2 bars, wider */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex flex-col gap-2 p-2 group relative z-50"
                    >
                        <span className={`w-10 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'group-hover:w-12'}`}></span>
                        <span className={`w-10 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'group-hover:w-12'}`}></span>
                    </button>
                </div>
            </nav>

            {/* Full Screen Menu Overlay - Light Theme */}
            <div className={`fixed inset-0 bg-[#c3c3c3] text-black z-40 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className="h-full flex  justify-between  items-center px-12 md:px-24 lg:px-32">
                    {/* Top Section - Agency label only */}
                    <div className="absolute top-12 left-12 md:left-24 lg:left-32">
                        <h3 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-500">Agency</h3>
                    </div>

                    {/* Menu Items - Center Left */}
                    <div className="space-y-6">
                        <a href="/" className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:text-gray-500 transition-all duration-300 relative group hover:translate-x-4">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-8 transition-all duration-300 -ml-12"></span>
                            Home
                        </a>
                        <a href="/projects" className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:text-gray-500 transition-all duration-300 relative group hover:translate-x-4">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-8 transition-all duration-300 -ml-12"></span>
                            Projects
                        </a>
                        <a href="/about" className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:text-gray-500 transition-all duration-300 relative group hover:translate-x-4">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-8 transition-all duration-300 -ml-12"></span>
                            About Us
                        </a>
                        <a href="/services" className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:text-gray-500 transition-all duration-300 relative group hover:translate-x-4">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-8 transition-all duration-300 -ml-12"></span>
                            Services
                        </a>
                          <a href="/services" className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:text-gray-500 transition-all duration-300 relative group hover:translate-x-4">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-8 transition-all duration-300 -ml-12"></span>
                            Our Work
                        </a>
                        {/* <a href="/contact" className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:text-gray-500 transition-all duration-300 relative group hover:translate-x-4">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-8 transition-all duration-300 -ml-12"></span>
                            Contact
                        </a> */}
                    </div>

                    {/* Bottom Section - Social and Location */}
                    <div className=" bottom-12 left-12 md:left-24 lg:left-32 flex gap-16 md:gap-24">
                        {/* Social */}
                        <div>
                            <h3 className="text-xs font-medium tracking-[0.3em] uppercase mb-4 text-gray-500">Social</h3>
                            <div className="space-y-2">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-gray-500 transition-colors">Instagram</a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-gray-500 transition-colors">Linked In</a>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <h3 className="text-xs font-medium tracking-[0.3em] uppercase mb-4 text-gray-500">Location</h3>
                            <div className="space-y-2 text-sm">
                                <p>USA</p>
                                <p>Europe</p>
                                <p>India</p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-xs font-medium tracking-[0.3em] uppercase mb-4 text-gray-500">Contact</h3>
                            <div className="space-y-2 text-sm">
                                <a href="mailto:info@example.com" className="block hover:text-gray-500 transition-colors">info@example.com</a>
                                <a href="tel:+1234567890" className="block hover:text-gray-500 transition-colors">+1 (234) 567-890</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}