"use client";
import { useState } from "react";

export default function Philosophy() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      title: "Safety First",
      description: "Creating a container of absolute safety is the foundation of all healing work.",
      icon: "🛡️",
      color: "from-[#1e3a5f] to-[#2d4a76]",
    },
    {
      title: "Embodied Wisdom",
      description: "Your body holds wisdom that words cannot express. We learn to listen to it.",
      icon: "🌿",
      color: "from-[#4a9b8e] to-[#3a7d5f]",
    },
    {
      title: "Curious Compassion",
      description: "Approaching every experience with gentle curiosity, not judgment.",
      icon: "🔍",
      color: "from-[#d4a5a5] to-[#c49595]",
    },
    {
      title: "Your Own Pace",
      description: "Healing cannot be rushed. We move at the pace that feels right for you.",
      icon: "🐌",
      color: "from-[#9a8cbc] to-[#8a7cac]",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#f8f5f1] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Handwritten Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block mb-3 md:mb-4">
            <div className="handwritten text-lg md:text-xl lg:text-2xl text-[#4a9b8e] mb-1 md:mb-2">my approach</div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4a9b8e] to-transparent"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#1e3a5f] mb-4 md:mb-6">
            Therapy as a{" "}
            <span className="serif-italic text-gradient-teal">Gentle Dialogue</span>
          </h2>
          
          <p className="text-sm md:text-lg text-[#2d3748] max-w-2xl mx-auto leading-relaxed">
            "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth."
          </p>
        </div>

        {/* Interactive Principles - Stack on mobile */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {principles.map((principle, index) => (
              <button
                key={index}
                onClick={() => setActivePrinciple(index)}
                className={`w-full text-left p-4 md:p-6 rounded-lg md:rounded-xl transition-all duration-500 ${
                  activePrinciple === index
                    ? 'bg-white shadow-gentle transform -translate-y-1 md:-translate-y-2 border-l-4 border-[#4a9b8e]'
                    : 'bg-white/50 hover:bg-white/80 hover:shadow-soft'
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${principle.color} flex items-center justify-center text-base md:text-lg lg:text-xl flex-shrink-0`}>
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-light text-[#1e3a5f] mb-1 md:mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-[#2d3748]/70 text-sm md:text-base leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visual Principle Display - Hide on small mobile */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg md:rounded-2xl overflow-hidden shadow-soft mt-4 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5f1] to-[#e8e2d9] flex items-center justify-center">
              <div className="text-center p-4 md:p-6 lg:p-8">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 lg:mb-6 animate-gentle-float">
                  {principles[activePrinciple].icon}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl serif-italic text-[#1e3a5f] mb-2 md:mb-3 lg:mb-4">
                  {principles[activePrinciple].title}
                </h3>
                <p className="text-[#2d3748]/70 text-sm md:text-base max-w-md mx-auto">
                  {principles[activePrinciple].description}
                </p>
              </div>
            </div>
            
            {/* Organic Decoration - Hide on mobile */}
            <div className="hidden md:block absolute -top-4 -right-4 md:-top-8 md:-right-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#4a9b8e]/10 to-transparent"></div>
            <div className="hidden md:block absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#9a8cbc]/10 to-transparent"></div>
          </div>
        </div>

        {/* Personal Note */}
        <div className="max-w-3xl mx-auto bg-white p-4 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-soft border border-[#e8e2d9]">
          <div className="flex items-start gap-3 md:gap-4">
            <div>
              <div className="handwritten text-[#4a9b8e] text-base md:text-lg mb-1 md:mb-2">My therapeutic philosophy</div>
              <p className="text-[#2d3748] leading-relaxed italic text-sm md:text-base">
                "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions."
              </p>
              <p className="text-[#2d3748] leading-relaxed italic text-sm md:text-base mt-2 md:mt-4">
                "In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working."
              </p>
              <div className="mt-3 md:mt-4 flex items-center gap-2 md:gap-3">
                <div className="w-8 md:w-12 h-px bg-[#4a9b8e]/30"></div>
                <span className="text-xs md:text-sm text-[#718096]">— Dr. Maya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}