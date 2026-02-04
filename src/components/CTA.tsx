"use client";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5F0] via-white to-[#EDE8DF]"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B7D6B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Decorative Elements */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#A8C8A0]/20 to-[#D4B483]/20 animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="glass-card rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#A8C8A0] to-[#8B7D6B] flex items-center justify-center mx-auto mb-8 animate-float">
            <span className="text-3xl text-white">✉️</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#3A4A3F] mb-6">
            Ready to Begin?
          </h2>

          {/* Description */}
          <p className="text-lg text-[#8B7D6B] mb-10 max-w-2xl mx-auto leading-relaxed">
            Taking the first step is often the hardest part. Schedule a complimentary 20-minute consultation to see if we're a good fit.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              "No commitment required",
              "20-min complimentary call",
              "Flexible scheduling"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 rounded-full bg-[#D4B483]"></div>
                <span className="text-sm text-[#8B7D6B]">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="group relative px-12 py-5 bg-gradient-to-r from-[#8B7D6B] to-[#A8C8A0] text-white text-sm uppercase tracking-widest rounded-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 mx-auto">
            <span className="relative z-10 flex items-center gap-3">
              Schedule Your Consultation
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#A8C8A0] to-[#8B7D6B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          {/* Trust Signals */}
          <div className="mt-12 pt-8 border-t border-[#D4B483]/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#8B7D6B]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span>Licensed in California</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span>In-person & Telehealth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#D4B483]/10 to-transparent animate-float [animation-delay:1s]"></div>
        <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-br from-[#A8C8A0]/10 to-transparent animate-float [animation-delay:2s]"></div>
      </div>
    </section>
  );
}