"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [leafCount] = useState(8);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F5F1EB] to-[#E8DFD4]">
      {/* Animated Leaves */}
      {Array.from({ length: leafCount }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 pointer-events-none z-0"
          style={{
            left: `${(i + 1) * (100 / (leafCount + 1))}%`,
            animation: `leaf-fall ${15 + i * 2}s linear infinite`,
            animationDelay: `${i * 1.5}s`,
            opacity: 0.6 - i * 0.05,
          }}
        >
          <div className="leaf-shape w-8 h-12 bg-gradient-to-br from-[#A3B5A5]/40 to-[#9C8B7D]/30 transform -rotate-45"></div>
        </div>
      ))}

      {/* Watercolor Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full mix-blend-multiply opacity-30 animate-gentle-float"
          style={{ 
            background: 'radial-gradient(circle, #A3B5A5 0%, transparent 70%)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full mix-blend-multiply opacity-20 animate-gentle-float"
          style={{ 
            background: 'radial-gradient(circle, #9C8B7D 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Handwritten Welcome Note */}
        <div className="absolute top-8 left-6 md:left-12 transform -rotate-6 animate-gentle-float">
          <div className="texture-paper p-6 rounded-lg shadow-lg hand-drawn-border max-w-xs">
            <p className="handwritten text-[#5C5348] text-lg">Welcome, friend</p>
            <div className="w-12 h-0.5 bg-[#9C8B7D]/30 my-2 mx-auto"></div>
            <p className="serif-italic text-sm text-[#5C5348]/70">Take a deep breath</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          {/* Organic Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#9C8B7D]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#9C8B7D]/20 animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-[#9C8B7D]/30 to-transparent"></div>
          </div>

          {/* Main Heading with Character */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            <span className="block serif-italic text-[#5C5348] animate-paper-unfold [animation-delay:200ms]">
              Find your
            </span>
            <span className="block relative mt-4">
              <span className="texture-clay bg-clip-text text-transparent font-medium animate-ink-spread [animation-delay:600ms]">
                ground
              </span>
              <svg 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 md:w-64" 
                viewBox="0 0 200 12"
                style={{ transform: `translateX(-50%) translateY(${Math.min(scrollY * 0.1, 20)}px)` }}
              >
                <path 
                  d="M0,6 Q50,0 100,6 T200,6" 
                  fill="none" 
                  stroke="url(#organic-gradient)" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="organic-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9C8B7D" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#A3B5A5" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#9C8B7D" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle with Personality */}
          <div className="max-w-2xl mx-auto mt-16 animate-paper-unfold [animation-delay:1000ms]">
            <p className="text-xl md:text-2xl serif-italic text-[#5C5348] mb-8 leading-relaxed">
              "Therapy isn't about fixing what's broken. It's about 
              <span className="handwritten text-[#9C8B7D] mx-2">rediscovering</span> 
              what was never lost."
            </p>
            <div className="inline-flex items-center gap-3 text-[#5C5348]/60">
              <div className="w-8 h-px bg-[#9C8B7D]/30"></div>
              <span className="text-sm uppercase tracking-widest">Dr. Maya Reynolds</span>
              <div className="w-8 h-px bg-[#9C8B7D]/30"></div>
            </div>
          </div>
        </div>

        {/* Organic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-paper-unfold [animation-delay:1400ms] mt-16">
          {/* Primary Button - Clay Texture */}
          <button className="group relative px-10 py-4 rounded-full overflow-hidden transition-all duration-700 hover:scale-105">
            <div className="absolute inset-0 texture-clay rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9C8B7D]/0 via-white/10 to-[#9C8B7D]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative flex items-center gap-3 text-white text-sm uppercase tracking-widest">
              <span className="group-hover:rotate-12 transition-transform">🌱</span>
              Begin Your Journey
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          {/* Secondary Button - Natural Outline */}
          <button className="group px-8 py-3 border border-[#9C8B7D]/30 rounded-full text-[#5C5348] hover:bg-[#9C8B7D]/5 transition-all duration-500 flex items-center gap-2">
            <span className="text-sm">Watch My Philosophy</span>
            <div className="w-8 h-8 rounded-full border border-[#9C8B7D]/30 flex items-center justify-center group-hover:bg-[#9C8B7D]/10 transition-colors">
              <span className="text-[#9C8B7D]">▶</span>
            </div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <div className="text-xs text-[#5C5348]/40 uppercase tracking-widest mb-2">Breathe</div>
            <div className="w-6 h-10 border border-[#9C8B7D]/20 rounded-full flex justify-center">
              <div 
                className="w-1 h-3 bg-gradient-to-b from-[#9C8B7D] to-[#A3B5A5] rounded-full mt-2 animate-bounce"
                style={{ animationDuration: '2s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}