"use client";
import { useState } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F5F1EB]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo with Character */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl organic-shape shadow-xl">
              <img
                src="/images/image_1d061b.jpg"
                className={`w-full h-[600px] object-cover transition-all duration-1000 ${
                  isHovered ? 'scale-110 grayscale-0' : 'grayscale-[0.1]'
                }`}
                alt="Dr. Maya Reynolds in her office"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <div className="text-white">
                  <div className="handwritten text-lg mb-2">PsyD, Clinical Psychologist</div>
                  <div className="text-sm opacity-80">Licensed in California since 2009</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#A3B5A5]/20 to-transparent animate-gentle-float"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#9C8B7D]/20 to-transparent animate-gentle-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Polaroid-style Note */}
            <div className="absolute -right-8 top-1/3 transform rotate-6">
              <div className="texture-paper p-4 rounded-lg shadow-lg hand-drawn-border w-48">
                <p className="handwritten text-[#5C5348] text-sm">"Tea drinker & dog mom"</p>
                <div className="w-8 h-0.5 bg-[#9C8B7D]/30 my-2"></div>
                <p className="text-xs text-[#5C5348]/60">Always learning</p>
              </div>
            </div>
          </div>

          {/* Bio with Character */}
          <div>
            {/* Section Header with Personality */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-[#9C8B7D] to-transparent"></div>
                <span className="handwritten text-xl text-[#9C8B7D]">hello there</span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#9C8B7D]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-[#3A3630] mb-4">
                I'm{" "}
                <span className="serif-italic text-[#9C8B7D]">Maya</span>
              </h2>
            </div>

            {/* Bio with Personal Touch */}
            <div className="space-y-6">
              <p className="text-lg text-[#5C5348] leading-relaxed">
                I'm a clinical psychologist who believes that therapy should feel like 
                a <span className="serif-italic text-[#9C8B7D]">conversation between old friends</span>, 
                not a clinical interrogation.
              </p>
              
              <div className="texture-paper p-6 rounded-lg border border-[#E8DFD4]">
                <p className="text-[#5C5348] leading-relaxed italic">
                  "My approach is grounded in the belief that you already have 
                  everything you need within you. My role is to help you 
                  remember what you've forgotten."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "EMDR Certified", icon: "🎯" },
                  { label: "Trauma-Informed", icon: "💫" },
                  { label: "15+ Years Experience", icon: "📚" },
                  { label: "California Licensed", icon: "🌉" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#9C8B7D]/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm text-[#5C5348]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal CTA */}
            <button className="group mt-12 px-8 py-4 border border-[#9C8B7D] rounded-full text-[#5C5348] hover:bg-[#9C8B7D] hover:text-white transition-all duration-500 flex items-center gap-3">
              <span className="group-hover:rotate-12 transition-transform">📖</span>
              <span className="text-sm uppercase tracking-widest">Read My Full Story</span>
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}