export default function Background() {
  return (
    <section className="bg-[#fdfcf9] py-20 px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="h-[350px] shadow-lg rounded-sm overflow-hidden">
            <img src="/images/image_0d8181.jpg" className="w-full h-full object-cover" alt="Professional Lounge" />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl italic text-[#4a5444] font-serif">Clinical Background</h2>
              <div className="flex-1 border-t border-[#d8d2c7]"></div>
            </div>
            <p className="text-[#5a6b57] text-sm font-serif italic mb-6">
              With a PsyD in Clinical Psychology, Dr. Reynolds integrates evidence-based methods like CBT and EMDR with a paced, safety-first approach[cite: 83, 98, 100].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}