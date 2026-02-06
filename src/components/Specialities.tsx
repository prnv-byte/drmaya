"use client";
import { useState } from "react";

export default function Specialities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const specialties = [
    { 
      title: "Trauma Recovery", 
      description: "Healing from past experiences with evidence-based EMDR and somatic therapies",
      icon: "🕊️",
      color: "from-[#4a9b8e] to-[#3a7d5f]",
      image: "/images/image_1d05a7.jpg"
    },
    { 
      title: "Anxiety & Panic", 
      description: "Managing worry, panic attacks, and finding calm through CBT and mindfulness",
      icon: "🌿",
      color: "from-[#9a8cbc] to-[#8a7cac]",
      image: "/images/image_1d05c4.jpg"
    },
    { 
      title: "Professional Burnout", 
      description: "Recovering from work-related stress and rebuilding sustainable balance",
      icon: "⚖️",
      color: "from-[#d4a5a5] to-[#c49595]",
      image: "/images/image_1d05df.jpg"
    },
  ];

  return (
    <section id="specialties" className="py-24 px-6 bg-gradient-to-b from-[#f8f5f1] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#4a9b8e] to-transparent"></div>
            <span className="text-xs uppercase tracking-widest text-[#4a9b8e] font-medium">Specialized Care</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#4a9b8e] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#1e3a5f] mb-6">
            Areas of Focus
          </h2>
          <p className="text-lg text-[#2d3748] max-w-2xl mx-auto font-serif italic">
            Personalized therapy approaches for your unique journey
          </p>
        </div>

        {/* Specialty Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((spec, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`
                relative h-full rounded-2xl overflow-hidden
                transition-all duration-700 hover-lift
                ${hoveredIndex === index ? 'z-10' : ''}
              `}>
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={spec.image} 
                    alt={spec.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full min-h-[400px] p-8 flex flex-col justify-end">
                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-serif italic text-white mb-4 drop-shadow-lg">
                      {spec.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-6 drop-shadow-md">
                      {spec.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <button className={`
                      flex items-center gap-2 text-white text-xs uppercase tracking-widest
                      opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0
                      transition-all duration-500 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full
                      hover:bg-black/50
                    `}>
                      <span>Learn More</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>

                {/* Icon Badge */}
                <div className={`
                  absolute top-6 right-6 w-12 h-12 rounded-xl glass-card
                  flex items-center justify-center text-xl
                  transition-all duration-500
                  ${hoveredIndex === index ? 'scale-110 rotate-6' : ''}
                `}>
                  {spec.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-sm text-[#2d3748] italic max-w-2xl mx-auto">
            "Each person's journey is unique. I adapt evidence-based methods to fit your specific needs and pace."
          </p>
        </div>
      </div>
    </section>
  );
}