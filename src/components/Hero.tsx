"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5F0] via-white to-[#EDE8DF]"></div>
        <div 
          ref={heroRef}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(168, 200, 160, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 125, 107, 0.1) 0%, transparent 50%)
            `
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Animated badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4B483]/30 animate-fade-slide-up">
          <div className="w-2 h-2 rounded-full bg-[#A8C8A0] animate-pulse"></div>
          <span className="text-xs uppercase tracking-widest text-[#8B7D6B] font-medium">
            Now Accepting New Clients
          </span>
        </div>

        {/* Main heading with reveal animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-[#3A4A3F] mb-6 leading-tight">
          <span className="block animate-text-reveal [animation-delay:200ms]">
            Healing through
          </span>
          <span className="block animate-text-reveal [animation-delay:600ms] relative">
            <span className="relative">
              connection
              <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 200 10">
                <path 
                  d="M0,5 Q50,0 100,5 T200,5" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="2"
                  className="animate-dash"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4B483" />
                    <stop offset="100%" stopColor="#A8C8A0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#8B7D6B] font-serif italic mb-12 max-w-2xl mx-auto animate-fade-slide-up [animation-delay:1000ms] leading-relaxed">
          Evidence-based therapy for anxiety, trauma, and personal growth in Santa Monica
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-slide-up [animation-delay:1200ms]">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#8B7D6B] to-[#A8C8A0] text-white text-sm uppercase tracking-widest rounded-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <span className="relative z-10">Schedule a Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#A8C8A0] to-[#8B7D6B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button className="group px-8 py-4 border border-[#D4B483] text-[#8B7D6B] text-sm uppercase tracking-widest rounded-full hover:bg-[#D4B483]/10 transition-all duration-300 flex items-center gap-2">
            <span>Watch Introduction</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "1000+", label: "Clients Helped" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "EMDR", label: "Certified" },
          ].map((stat, i) => (
            <div key={i} className="text-center animate-fade-slide-up" style={{ animationDelay: `${1400 + i * 200}ms` }}>
              <div className="text-3xl font-serif italic text-[#3A4A3F] mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-[#8B7D6B]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4B483] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D4B483] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}