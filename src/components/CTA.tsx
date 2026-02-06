"use client";
import { useState } from "react";

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-[#f8f5f1] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a9b8e' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#4a9b8e]/5 to-transparent animate-gentle-float opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#9a8cbc]/5 to-transparent animate-gentle-float opacity-30" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-soft border border-[#e8e2d9] p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#e8e2d9]"></div>
              <div className="w-3 h-3 rounded-full bg-[#4a9b8e]/30 animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-r from-[#e8e2d9] to-transparent"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-[#1e3a5f] mb-6">
              <span className="serif-italic">Take the</span>{" "}
              <span className="handwritten text-[#4a9b8e]">First Step</span>
            </h2>
            
            <p className="text-lg text-[#718096] max-w-2xl mx-auto font-serif italic leading-relaxed">
              "Healing begins with a single conversation. Let's explore how therapy can help you find the peace and clarity you deserve."
            </p>
          </div>

          {/* Features Grid - Subtle */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Complimentary Consultation",
                description: "A 20-minute, no-obligation conversation to discuss your needs",
                icon: "🗣️",
                color: "from-[#4a9b8e]/10 to-[#4a9b8e]/5"
              },
              {
                title: "Personalized Approach",
                description: "Tailored to your unique journey, at your own pace",
                icon: "✨",
                color: "from-[#9a8cbc]/10 to-[#9a8cbc]/5"
              },
              {
                title: "Safe & Confidential",
                description: "HIPAA compliant space where you can speak freely",
                icon: "🔒",
                color: "from-[#d4a5a5]/10 to-[#d4a5a5]/5"
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="bg-[#f8f5f1] p-6 rounded-xl border border-[#e8e2d9] hover:bg-white hover:border-[#4a9b8e]/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl mb-4 mx-auto transition-transform duration-300 group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-[#1e3a5f] text-center mb-2 group-hover:text-[#4a9b8e] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#718096] text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Main CTA Section */}
          <div className="text-center">
            {/* Primary CTA Button */}
            <button 
              className="group relative px-12 py-5 bg-gradient-to-r from-[#4a9b8e] to-[#3a7d5f] text-white text-sm uppercase tracking-widest rounded-full hover:shadow-gentle transition-all duration-500 hover:scale-105 font-medium"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative flex items-center justify-center gap-3">
                Schedule Your Consultation
                <svg className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Secondary Option */}
            <div className="mt-6">
              <p className="text-sm text-[#718096] mb-2">Or send us an email at:</p>
              <a 
                href="mailto:contact@drmayareynolds.com" 
                className="text-[#4a9b8e] font-medium hover:text-[#1e3a5f] transition-colors inline-flex items-center gap-2"
              >
                contact@drmayareynolds.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Trust Signals - Subtle */}
          <div className="mt-16 pt-8 border-t border-[#e8e2d9]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Licensed Psychologist", icon: "🎓", color: "text-[#4a9b8e]" },
                { label: "15+ Years Experience", icon: "📅", color: "text-[#9a8cbc]" },
                { label: "EMDR Certified", icon: "🌟", color: "text-[#d4a5a5]" },
                { label: "Trauma Specialist", icon: "💫", color: "text-[#3a7d5f]" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full bg-[#f8f5f1] flex items-center justify-center text-lg ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs text-[#718096] leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-[#718096]">
            <div className="w-8 h-px bg-[#e8e2d9]"></div>
            <span className="font-serif italic">Your journey to healing starts here</span>
            <div className="w-8 h-px bg-[#e8e2d9]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}