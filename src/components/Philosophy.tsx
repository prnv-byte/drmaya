"use client";
import { useState } from "react";

export default function Philosophy() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      title: "Safety First",
      description: "Creating a container of absolute safety is the foundation of all healing work.",
      icon: "🛡️",
      color: "from-[#9C8B7D] to-[#8A7A6D]",
    },
    {
      title: "Embodied Wisdom",
      description: "Your body holds wisdom that words cannot express. We learn to listen to it.",
      icon: "🌿",
      color: "from-[#A3B5A5] to-[#8BAF84]",
    },
    {
      title: "Curious Compassion",
      description: "Approaching every experience with gentle curiosity, not judgment.",
      icon: "🔍",
      color: "from-[#D1E0D7] to-[#B8D3C5]",
    },
    {
      title: "Your Own Pace",
      description: "Healing cannot be rushed. We move at the pace that feels right for you.",
      icon: "🐌",
      color: "from-[#E8DFD4] to-[#D4C9BB]",
    },
  ];

  return (
    <section className="py-24 px-6 texture-paper">
      <div className="max-w-6xl mx-auto">
        {/* Handwritten Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="handwritten text-2xl text-[#5C5348] mb-2">my approach</div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#9C8B7D] to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-[#3A3630] mb-6">
            Therapy as a{" "}
            <span className="serif-italic text-[#9C8B7D]">Gentle Dialogue</span>
          </h2>
          
          <p className="text-lg text-[#5C5348] max-w-2xl mx-auto leading-relaxed">
            "I don't believe in fixing people. I believe in sitting with them 
            in their truth until they remember their own strength."
          </p>
        </div>

        {/* Interactive Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            {principles.map((principle, index) => (
              <button
                key={index}
                onClick={() => setActivePrinciple(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-500 ${
                  activePrinciple === index
                    ? 'bg-white shadow-xl transform -translate-y-2 border-l-4 border-[#9C8B7D]'
                    : 'bg-white/50 hover:bg-white/80 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${principle.color} flex items-center justify-center text-xl flex-shrink-0`}>
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-[#3A3630] mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-[#5C5348]/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visual Principle Display */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1EB] to-[#E8DFD4] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-6 animate-gentle-float">
                  {principles[activePrinciple].icon}
                </div>
                <h3 className="text-3xl serif-italic text-[#5C5348] mb-4">
                  {principles[activePrinciple].title}
                </h3>
                <p className="text-[#5C5348]/70 max-w-md mx-auto">
                  {principles[activePrinciple].description}
                </p>
              </div>
            </div>
            
            {/* Organic Decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#9C8B7D]/10 to-transparent"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#A3B5A5]/10 to-transparent"></div>
          </div>
        </div>

        {/* Personal Note */}
        <div className="max-w-3xl mx-auto texture-paper p-8 rounded-xl shadow-sm border border-[#E8DFD4]">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9C8B7D] to-[#A3B5A5] flex items-center justify-center text-white text-2xl">
              M
            </div>
            <div>
              <div className="handwritten text-[#9C8B7D] text-lg mb-2">A personal note</div>
              <p className="text-[#5C5348] leading-relaxed italic">
                "After 15 years of practice, I've learned that the most profound healing 
                happens not in dramatic breakthroughs, but in the quiet moments of being 
                truly seen and heard. My office is a space where you can put down the 
                armor you've been carrying and just... breathe."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-px bg-[#9C8B7D]/30"></div>
                <span className="text-sm text-[#5C5348]/60">— Dr. Maya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}