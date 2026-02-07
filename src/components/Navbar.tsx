"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 md:py-4 backdrop-blur-sm bg-liner-330/95 shadow-soft" 
          : "py-4 md:py-6 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-teal-forest flex items-center justify-center">
                <span className="text-white font-serif italic text-base md:text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <h3 className="font-serif italic text-[#1e3a5f] text-lg md:text-xl">Dr. Maya Reynolds</h3>
                <p className="text-xs text-[#4a9b8e] tracking-widest uppercase">Clinical Psychology</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#2d3748] hover:text-[#4a9b8e] transition-colors font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4a9b8e] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="btn-teal px-5 py-2 md:px-6 md:py-2.5 text-white text-xs uppercase tracking-widest rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                Book Session
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden pt-20">
          <div className="flex flex-col items-center space-y-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg text-[#2d3748] hover:text-[#4a9b8e] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="btn-teal px-8 py-3 text-white text-sm uppercase tracking-widest rounded-full hover:shadow-xl transition-all duration-300 mt-4">
              Book Session
            </button>
          </div>
        </div>
      )}
    </>
  );
}