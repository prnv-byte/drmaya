"use client";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Dr. Maya helped me find peace after years of anxiety. Her approach is both gentle and effective.",
      author: "Sarah M.",
      role: "Marketing Director",
      avatar: "SM"
    },
    {
      quote: "The trauma work we did literally changed my life. I finally feel free from my past.",
      author: "James T.",
      role: "Software Engineer",
      avatar: "JT"
    },
    {
      quote: "Professional, compassionate, and truly understands burnout. My sessions are the highlight of my week.",
      author: "Priya K.",
      role: "Physician",
      avatar: "PK"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4B483] to-transparent"></div>
            <span className="text-xs uppercase tracking-widest text-[#8B7D6B] font-medium">Client Stories</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4B483] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#3A4A3F] mb-6">
            Words from Clients
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#A8C8A0] to-[#8B7D6B] flex items-center justify-center text-white text-2xl font-serif">
                    {testimonials[activeIndex].avatar}
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <div className="text-6xl text-[#D4B483] font-serif italic mb-4">"</div>
                  <p className="text-xl text-[#4A5444] italic mb-6 leading-relaxed">
                    {testimonials[activeIndex].quote}
                  </p>
                  <div>
                    <div className="font-medium text-[#3A4A3F]">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-sm text-[#8B7D6B]">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-[#8B7D6B] to-[#A8C8A0] scale-125' 
                    : 'bg-[#D4B483]/30 hover:bg-[#D4B483]/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}