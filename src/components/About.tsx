"use client";
import { useState } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-[#f8f5f1]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Photo with Character - Mobile first */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 overflow-hidden rounded-2xl organic-shape shadow-soft">
              <img
                src="/images/drmayareynoldre.png"
                className={`w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-1000 ${
                  isHovered ? 'scale-110 grayscale-0' : 'grayscale-[0.1]'
                }`}
                alt="Dr. Maya Reynolds in her office"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
            
            {/* Decorative Elements - Hide on mobile */}
            <div className="hidden md:block absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#4a9b8e]/20 to-transparent animate-gentle-float"></div>
            <div className="hidden md:block absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-[#9a8cbc]/20 to-transparent animate-gentle-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Polaroid-style Note - Hide on mobile */}
            <div className="hidden md:block absolute -right-4 top-1/3 transform rotate-6">
              <div className="bg-white p-4 rounded-lg shadow-gentle border border-[#e8e2d9] w-44">
                <p className="handwritten text-[#4a9b8e] text-sm">"Tea drinker & dog mom"</p>
                <div className="w-8 h-0.5 bg-[#4a9b8e]/30 my-2"></div>
                <p className="text-xs text-[#718096]">Always learning</p>
              </div>
            </div>
          </div>

          {/* Bio with Character */}
          <div className="order-1 md:order-2">
            {/* Section Header with Personality */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-6 md:w-8 h-px bg-gradient-to-r from-[#4a9b8e] to-transparent"></div>
                <span className="handwritten text-base md:text-lg text-[#4a9b8e]">hello there</span>
                <div className="w-6 md:w-8 h-px bg-gradient-to-r from-transparent to-[#4a9b8e]"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1e3a5f] mb-3 md:mb-4">
                I'm{" "}
                <span className="serif-italic text-gradient-teal">Dr. Maya Reynolds</span>
              </h2>
              <p className="text-xs md:text-sm text-[#718096] uppercase tracking-widest font-serif">
                Licensed Clinical Psychologist • PsyD
              </p>
            </div>

            {/* Bio with Personal Touch */}
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-base text-[#2d3748] leading-relaxed">
                I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              
              <p className="text-sm md:text-base text-[#2d3748] leading-relaxed">
                Many of the people I work with are <span className="font-medium text-[#1e3a5f]">high-achieving, thoughtful, and self-aware</span>—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              
              <div className="bg-[#f8f5f1] p-4 md:p-5 rounded-lg border-l-4 border-[#4a9b8e]">
                <p className="text-xs md:text-sm text-[#2d3748] leading-relaxed italic">
                  "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong."
                </p>
              </div>

              <p className="text-sm md:text-base text-[#2d3748] leading-relaxed">
                Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
              </p>

              {/* Qualifications Grid */}
              <div className="grid grid-cols-2 gap-2 md:gap-3 mt-4 md:mt-6">
                {[
                  { label: "EMDR Certified", icon: "🎯", color: "bg-[#4a9b8e]/10" },
                  { label: "Trauma Specialist", icon: "💫", color: "bg-[#9a8cbc]/10" },
                  { label: "15+ Years Exp.", icon: "📚", color: "bg-[#d4a5a5]/10" },
                  { label: "CA Licensed", icon: "🌉", color: "bg-[#3a7d5f]/10" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 md:p-3 rounded-lg">
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${item.color} flex items-center justify-center`}>
                      <span className="text-xs md:text-sm">{item.icon}</span>
                    </div>
                    <span className="text-xs text-[#2d3748] font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Key Focus Areas */}
              {/* <div className="mt-4 md:mt-6">
                <h4 className="text-xs md:text-sm font-medium text-[#1e3a5f] mb-2 uppercase tracking-wider">Areas I Focus On</h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {["Anxiety", "Trauma", "Burnout", "Relationships", "Perfectionism", "Transitions"].map((item, i) => (
                    <span key={i} className="px-2 py-1 md:px-3 md:py-1 bg-white border border-[#e8e2d9] rounded-full text-xs text-[#2d3748]">
                      {item}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Personal CTA */}
            {/* <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="btn-teal group px-5 py-2.5 md:px-6 md:py-3 rounded-full text-white transition-all duration-500 flex items-center gap-2 justify-center text-sm">
                <span className="font-medium">Schedule Consultation</span>
                <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="group px-5 py-2.5 md:px-6 md:py-3 border border-[#1e3a5f]/30 rounded-full text-[#1e3a5f] hover:bg-[#1e3a5f]/5 transition-all duration-500 flex items-center gap-2 justify-center text-sm">
                <span>Learn About My Approach</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}