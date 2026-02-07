export default function Support() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-12 bg-[#f9f7f2]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Column: Focused Text Content */}
          <div className="border-l border-[#d8d2c7] pl-4 md:pl-8 lg:pl-12 py-4 md:py-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl italic text-[#3d4738] font-serif mb-4 md:mb-6 leading-tight">
              Your Comfort is Priority
            </h2>
            <p className="text-sm md:text-base text-[#5a6b57] font-serif italic mb-6 md:mb-10 leading-relaxed">
              "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive."
            </p>
            
            <p className="text-sm md:text-base text-[#5a6b57] font-serif italic mb-6 md:mb-10 leading-relaxed">
              "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California."
            </p>
            
            {/* Minimalist Feature List */}
            <div className="grid grid-cols-1 gap-4">
              {["In-Person Santa Monica", "Secure Telehealth", "Private & Grounding", "California Licensed"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 md:w-8 h-[1px] bg-[#d8d2c7]"></span>
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#6b7a64] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Single Hero Image of the Office */}
          <div className="relative group">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-sm shadow-2xl transition-all duration-700 group-hover:shadow-none">
              <img 
                src="/images/office1.jpeg" 
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05]" 
                alt="Dr. Maya Reynolds Santa Monica Therapy Office" 
              />
            </div>
            {/* Decorative Offset Frame - Hide on mobile */}
            <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border border-[#d8d2c7] -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}