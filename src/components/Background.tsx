export default function Background() {
  return (
    <section className="bg-[#fdfcf9] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-8 md:mb-12 lg:mb-16">
          <div className="h-[250px] sm:h-[300px] md:h-[350px] shadow-lg rounded-sm overflow-hidden order-2 md:order-1">
            <img src="/images/office2.jpeg" className="w-full h-full object-cover" alt="Professional Lounge" />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 lg:mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl italic text-[#4a5444] font-serif">Clinical Background & Methods</h2>
              <div className="flex-1 border-t border-[#d8d2c7]"></div>
            </div>
            <p className="text-[#5a6b57] text-sm md:text-base font-serif italic mb-4 md:mb-6 leading-relaxed">
              With a PsyD in Clinical Psychology, I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.
            </p>
            <p className="text-[#5a6b57] text-sm md:text-base font-serif italic mb-4 md:mb-6 leading-relaxed">
              My approach is grounded in trauma-informed care, with an emphasis on creating safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
            </p>
            <div className="mt-4 md:mt-6 lg:mt-8 flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm text-[#6b7a64] uppercase tracking-widest">
              <span className="border border-[#d8d2c7] px-2 py-1 md:px-3 md:py-1 rounded-full">CBT</span>
              <span className="border border-[#d8d2c7] px-2 py-1 md:px-3 md:py-1 rounded-full">EMDR</span>
              <span className="border border-[#d8d2c7] px-2 py-1 md:px-3 md:py-1 rounded-full">Mindfulness</span>
              <span className="border border-[#d8d2c7] px-2 py-1 md:px-3 md:py-1 rounded-full">Somatic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}