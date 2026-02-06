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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f5f1] to-[#e8e2d9]">
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
          <div className="leaf-shape w-8 h-12 bg-gradient-to-br from-[#4a9b8e]/30 to-[#9a8cbc]/20 transform -rotate-45"></div>
        </div>
      ))}

      {/* Watercolor Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full mix-blend-multiply opacity-20 animate-gentle-float"
          style={{ 
            background: 'radial-gradient(circle, #4a9b8e 0%, transparent 70%)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full mix-blend-multiply opacity-15 animate-gentle-float"
          style={{ 
            background: 'radial-gradient(circle, #9a8cbc 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Handwritten Welcome Note */}
        <div className="absolute top-8 left-6 md:left-12 transform -rotate-6 animate-gentle-float z-20">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#e8e2d9] max-w-xs">
            <p className="handwritten text-[#4a9b8e] text-lg">Welcome, friend</p>
            <div className="w-12 h-0.5 bg-[#4a9b8e]/30 my-2 mx-auto"></div>
            <p className="serif-italic text-sm text-[#718096]">Take a deep breath</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12 pt-16">
          {/* Organic Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#4a9b8e]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#4a9b8e]/20 animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-[#4a9b8e]/30 to-transparent"></div>
          </div>

          {/* Main Heading with Character - FIXED "ground" text issue */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 relative">
            <span className="block serif-italic text-[#1e3a5f] animate-paper-unfold [animation-delay:200ms] relative z-10">
              Find your
            </span>
            <span className="block relative mt-8">
              <span className="text-gradient-teal font-medium animate-ink-spread [animation-delay:600ms] relative z-10 px-2 py-1 inline-block">
                ground
              </span>
              <svg 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 md:w-64 z-0" 
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
                    <stop offset="0%" stopColor="#4a9b8e" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#9a8cbc" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4a9b8e" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle with Personality */}
          <div className="max-w-2xl mx-auto mt-16 animate-paper-unfold [animation-delay:1000ms]">
            <p className="text-xl md:text-2xl serif-italic text-[#2d3748] mb-8 leading-relaxed">
              "Therapy isn't about fixing what's broken. It's about 
              <span className="handwritten text-[#4a9b8e] mx-2">rediscovering</span> 
              what was never lost."
            </p>
            <div className="inline-flex items-center gap-3 text-[#718096]">
              <div className="w-8 h-px bg-[#4a9b8e]/30"></div>
              <span className="text-sm uppercase tracking-widest">Dr. Maya Reynolds</span>
              <div className="w-8 h-px bg-[#4a9b8e]/30"></div>
            </div>
          </div>
        </div>

        {/* Organic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-paper-unfold [animation-delay:1400ms] mt-16">
          {/* Primary Button - Teal Gradient */}
          <button className="btn-teal group relative px-10 py-4 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a9b8e]/0 via-white/10 to-[#4a9b8e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative flex items-center gap-3 text-black text-sm uppercase tracking-widest">
              <span className="group-hover:rotate-12 transition-transform">🌱</span>
              Begin Your Journey
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          {/* Secondary Button - Navy Outline */}
          <button className="group px-8 py-3 border border-[#1e3a5f]/30 rounded-full text-[#1e3a5f] hover:bg-[#1e3a5f]/5 transition-all duration-500 flex items-center gap-2">
            <span className="text-sm">Watch My Philosophy</span>
            <div className="w-8 h-8 rounded-full border border-[#1e3a5f]/30 flex items-center justify-center group-hover:bg-[#1e3a5f]/10 transition-colors">
              <span className="text-[#1e3a5f]">▶</span>
            </div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <div className="text-xs text-[#718096] uppercase tracking-widest mb-2">Breathe</div>
            <div className="w-6 h-10 border border-[#4a9b8e]/20 rounded-full flex justify-center">
              <div 
                className="w-1 h-3 bg-gradient-to-b from-[#4a9b8e] to-[#9a8cbc] rounded-full mt-2 animate-bounce"
                style={{ animationDuration: '2s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}