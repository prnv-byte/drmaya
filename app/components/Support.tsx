export default function Support() {
  return (
    <section className="py-24 px-12 bg-[#f9f7f2]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Focused Text Content */}
          <div className="border-l border-[#d8d2c7] pl-12 py-8">
            <h2 className="text-4xl italic text-[#3d4738] font-serif mb-6 leading-tight">
              Your Comfort is Priority
            </h2>
            <p className="text-[#5a6b57] text-base font-serif italic mb-10 leading-relaxed max-w-md">
              "My office is a quiet, private space designed to feel calm and grounding, 
              with natural light and a comfortable, uncluttered environment. Clients 
              often share that the space itself helps them feel more at ease."
            </p>
            
            {/* Minimalist Feature List */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#d8d2c7]"></span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a64] font-medium">
                  In-Person Santa Monica
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#d8d2c7]"></span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a64] font-medium">
                  Secure Telehealth
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#d8d2c7]"></span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a64] font-medium">
                  Private & Grounding
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Single Hero Image of the Office */}
          <div className="relative group">
            <div className="h-[600px] w-full overflow-hidden rounded-sm shadow-2xl transition-all duration-700 group-hover:shadow-none">
              <img 
                src="/images/image_1d0549.jpg" 
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05]" 
                alt="Dr. Maya Reynolds Santa Monica Therapy Office" 
              />
            </div>
            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#d8d2c7] -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}