"use client";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#f8f5f1] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-[#e8e2d9]"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#4a9b8e]/30 animate-pulse"></div>
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-[#e8e2d9] to-transparent"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#1e3a5f] mb-4 md:mb-6">
            <span className="serif-italic">In Their</span>{" "}
            <span className="handwritten text-[#4a9b8e]">Own Words</span>
          </h2>
          
          <p className="text-sm md:text-lg text-[#718096] max-w-2xl mx-auto font-serif italic">
            "Healing happens in relationship. These are stories of transformation from clients who've walked the path."
          </p>
        </div>

        {/* Testimonial Cards Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative Background Elements - Hide on mobile */}
          <div className="hidden md:block absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#4a9b8e]/10 to-transparent animate-gentle-float"></div>
          <div className="hidden md:block absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#9a8cbc]/10 to-transparent animate-gentle-float" style={{ animationDelay: '2s' }}></div>

          {/* Main Testimonial Card */}
          <div className="relative z-10">
            <div className={`transition-all duration-500 ease-out ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              <div className="bg-white rounded-xl md:rounded-2xl shadow-soft overflow-hidden border border-[#e8e2d9]">
                <div className="p-4 md:p-6 lg:p-8 xl:p-12">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#f8f5f1] flex items-center justify-center">
                      <span className="text-xl md:text-2xl text-[#4a9b8e]">"</span>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <div className="text-center mb-6 md:mb-8">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif italic text-[#2d3748] leading-relaxed max-w-3xl mx-auto">
                      {testimonials[activeIndex].quote}
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex flex-col items-center">
                    {/* Avatar with gradient border */}
                    <div className="relative mb-3 md:mb-4">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#4a9b8e] to-[#9a8cbc] rounded-full blur opacity-30"></div>
                      <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#4a9b8e] to-[#3a7d5f] flex items-center justify-center text-white font-serif text-base md:text-lg lg:text-xl">
                        {testimonials[activeIndex].avatar}
                      </div>
                    </div>

                    <div className="text-center">
                      <h4 className="font-medium text-base md:text-lg lg:text-xl text-[#1e3a5f] mb-1">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-xs md:text-sm text-[#718096]">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Footer */}
                <div className="bg-[#f8f5f1] px-4 md:px-6 lg:px-8 py-4 md:py-6 border-t border-[#e8e2d9]">
                  <div className="flex items-center justify-between">
                    {/* Navigation Dots */}
                    <div className="flex items-center gap-1 md:gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex 
                              ? 'w-4 md:w-6 lg:w-8 bg-gradient-to-r from-[#4a9b8e] to-[#9a8cbc]' 
                              : 'bg-[#e8e2d9] hover:bg-[#4a9b8e]/50'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-1 md:gap-2">
                      <button
                        onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border border-[#e8e2d9] flex items-center justify-center text-[#4a9b8e] hover:bg-[#4a9b8e]/5 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border border-[#e8e2d9] flex items-center justify-center text-[#4a9b8e] hover:bg-[#4a9b8e]/5 transition-colors"
                        aria-label="Next testimonial"
                      >
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Testimonial Previews - Stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            {testimonials
              .filter((_, index) => index !== activeIndex)
              .map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(testimonials.findIndex(t => t.author === testimonial.author))}
                  className="group bg-white/70 hover:bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-[#e8e2d9] hover:border-[#4a9b8e]/30 transition-all duration-300 text-left"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#4a9b8e]/10 to-[#9a8cbc]/10 flex items-center justify-center text-[#4a9b8e] font-medium text-xs md:text-sm">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-[#2d3748] italic line-clamp-2 mb-2 group-hover:text-[#1e3a5f] transition-colors">
                        "{testimonial.quote}"
                      </p>
                      <div className="text-xs text-[#718096] group-hover:text-[#4a9b8e] transition-colors">
                        {testimonial.author} • {testimonial.role}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-[#718096]">
            <span className="w-6 md:w-8 h-px bg-[#e8e2d9]"></span>
            <span className="font-serif italic">Real Stories, Real Healing</span>
            <span className="w-6 md:w-8 h-px bg-[#e8e2d9]"></span>
          </div>
        </div>
      </div>
    </section>
  );
}