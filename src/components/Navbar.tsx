"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Approach", href: "#approach" },
    { label: "Specialties", href: "#specialties" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "py-4 bg-white/90 backdrop-blur-md shadow-lg" 
        : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A8C8A0] to-[#8B7D6B] flex items-center justify-center">
              <span className="text-white font-serif italic text-lg">M</span>
            </div>
            <div>
              <h3 className="font-serif italic text-[#3A4A3F] text-xl">Dr. Maya Reynolds</h3>
              <p className="text-xs text-[#8B7D6B] tracking-widest uppercase">Clinical Psychology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#4A5444] hover:text-[#8B7D6B] transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4B483] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#8B7D6B] to-[#A8C8A0] text-white text-xs uppercase tracking-widest rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
              Book Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="w-6 h-6 text-[#4A5444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}