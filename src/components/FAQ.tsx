"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Where is your office located?", 
      a: "My office is located at 123th Street 45 W, Santa Monica, CA 90401. It is a quiet, private space designed to feel calm and grounding." 
    },
    { 
      q: "Do you offer telehealth sessions?", 
      a: "Yes, I offer secure, HIPAA-compliant telehealth sessions for clients located anywhere in California." 
    },
    { 
      q: "What treatment methods do you use?", 
      a: "I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques." 
    },
    { 
      q: "Who do you typically work with?", 
      a: "I frequently support high-achieving adults, entrepreneurs, and creatives who are navigating anxiety, trauma, or professional burnout." 
    },
    { 
      q: "What can I expect in the first session?", 
      a: "Our first meeting is a space to slow down and reconnect. We will discuss your goals and determine if my practical yet depth-oriented approach is a good fit for you." 
    },
    { 
      q: "Do you specialize in trauma work?", 
      a: "Yes, trauma work is a core part of my practice. I work with single-incident trauma as well as complex patterns stemming from childhood or relationships." 
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6 lg:px-12 bg-[#f9f7f2] overflow-hidden">
      
      {/* Decorative Background Image - Hide on mobile for performance */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none hidden md:flex">
        <img 
          src="/images/image_1d05e4.png" 
          className="w-full h-full object-cover opacity-[0.07] scale-110 grayscale" 
          alt="Decorative Background" 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Centered Heading */}
        <div className="flex items-center text-[#c9c4bb] mb-8 md:mb-16">
          <div className="flex-1 border-t border-[#d8d2c7]"></div>
          <h2 className="px-4 md:px-8 text-2xl md:text-3xl lg:text-4xl italic text-[#3d4738] font-serif text-center">
            Commonly Asked
          </h2>
          <div className="flex-1 border-t border-[#d8d2c7]"></div>
        </div>

        {/* Dropdown Accordion */}
        <div className="space-y-1 md:space-y-2">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-b border-[#d8d2c7]/50 last:border-0"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full py-4 md:py-6 flex justify-between items-center text-left group transition-all"
              >
                <span className="font-serif italic text-base md:text-lg lg:text-xl text-[#4a5444] group-hover:text-[#3d4738] pr-4 md:pr-8">
                  {faq.q}
                </span>
                <span className={`text-xl md:text-2xl text-[#c9c4bb] transform transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openIndex === i ? 'max-h-[400px] opacity-100 pb-4 md:pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#5a6b57] leading-relaxed font-serif text-sm md:text-base bg-white/30 p-3 md:p-4 rounded-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}