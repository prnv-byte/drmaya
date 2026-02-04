export default function About() {
  return (
    <section className="py-20 px-12 bg-[#f9f7f2]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group cursor-pointer">
          <div className="h-[550px] w-full overflow-hidden rounded-sm shadow-2xl transition-all duration-500 group-hover:-translate-y-2 z-10 relative">
            <img
              src="/images/image_1d061b.jpg"
              className="w-full h-full object-cover grayscale-[0.1]"
              alt="Dr. Maya Reynolds"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#d8d2c7] transition-all duration-500 group-hover:bottom-0 group-hover:left-0 group-hover:opacity-0 -z-10"></div>
        </div>
        <div className="border-l border-[#d8d2c7] pl-12">
          <h2 className="reveal-text [animation-delay:200ms] text-4xl italic text-[#3d4738] font-serif mb-6">
            Hi, I’m Dr. Maya.
          </h2>
          <p className="reveal-text [animation-delay:400ms] text-base text-[#5a6b57] font-serif italic mb-8 leading-relaxed">
            I offer a grounded approach to therapy for adults navigating anxiety
            and trauma.
          </p>
          <button className="reveal-text [animation-delay:600ms] px-8 py-3 bg-[#5f6f52] text-white text-xs uppercase tracking-widest">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
