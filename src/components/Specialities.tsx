"use client";
import { useState } from "react";

export default function Specialities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const specialties = [
    { 
      title: "Trauma Recovery", 
      description: "Healing from past experiences with evidence-based EMDR and somatic therapies",
      icon: "🕊️",
      color: "from-[#A8C8A0] to-[#8BAF84]",
      image: "/images/image_1d05a7.jpg"
    },
    { 
      title: "Anxiety & Panic", 
      description: "Managing worry, panic attacks, and finding calm through CBT and mindfulness",
      icon: "🌿",
      color: "from-[#8B7D6B] to-[#A8957A]",
      image: "/images/image_1d05c4.jpg"
    },
    { 
      title: "Professional Burnout", 
      description: "Recovering from work-related stress and rebuilding sustainable balance",
      icon: "⚖️",
      color: "from-[#D4B483] to-[#E8C9A0]",
      image: "/images/image_1d05df.jpg"
    },
  ];

  return (
    <section id="specialties" className="py-24 px-6 gradient-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4B483] to-transparent"></div>
            <span className="text-xs uppercase tracking-widest text-[#8B7D6B] font-medium">Specialized Care</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4B483] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#3A4A3F] mb-6">
            Areas of Focus
          </h2>
          <p className="text-lg text-[#8B7D6B] max-w-2xl mx-auto font-serif italic">
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
                transition-all duration-700 hover-lift-3d
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full min-h-[400px] p-8 flex flex-col justify-between">
                  {/* Top Icon */}
                  <div className={`
                    w-16 h-16 rounded-2xl glass-card flex items-center justify-center
                    text-2xl mb-6 transition-all duration-500
                    ${hoveredIndex === index ? 'scale-110 rotate-6' : ''}
                  `}>
                    {spec.icon}
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-serif italic text-white mb-4">
                      {spec.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                      {spec.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <button className={`
                      flex items-center gap-2 text-white text-xs uppercase tracking-widest
                      opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0
                      transition-all duration-500
                    `}>
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Floating Label */}
              <div className={`
                absolute -top-4 left-1/2 transform -translate-x-1/2
                px-4 py-2 rounded-full glass-card border border-white/20
                transition-all duration-500
                ${hoveredIndex === index ? 'scale-110 -translate-y-2' : ''}
              `}>
                <span className="text-xs uppercase tracking-widest text-[#3A4A3F] font-medium">
                  {spec.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-sm text-[#8B7D6B] italic max-w-2xl mx-auto">
            "Each person's journey is unique. I adapt evidence-based methods to fit your specific needs and pace."
          </p>
        </div>
      </div>
    </section>
  );
}