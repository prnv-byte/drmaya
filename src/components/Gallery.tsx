export default function Gallery() {
  const images = [
    { src: "/images/image_0d8147.jpg", alt: "Sunlit therapy room", className: "col-span-2 row-span-2" },
    { src: "/images/image_1d05a7.jpg", alt: "Cozy seating area", className: "col-span-1 row-span-1" },
    { src: "/images/image_0d8220.jpg", alt: "Modern consultation space", className: "col-span-1 row-span-2" },
    { src: "/images/image_1d0549.jpg", alt: "Grounding interior decor", className: "col-span-1 row-span-2" },
    { src: "/images/image_0d8186.jpg", alt: "Spacious waiting lounge", className: "col-span-2 row-span-1" },
    { src: "/images/image_1d05a7.jpg", alt: "Cozy seating area", className: "col-span-1 row-span-1" }
  ];

  return (
    <section className="py-24 px-12 bg-[#fdfcf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl italic text-[#3d4738] font-serif mb-4">The Space</h2>
          <p className="text-[#7a8576] font-serif italic max-w-2xl mx-auto leading-relaxed">
            "My office is a quiet, private space designed to feel calm and grounding, 
            with natural light and a comfortable, uncluttered environment."
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`${img.className} overflow-hidden rounded-sm shadow-sm group relative`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#4a5444]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-[10px] uppercase tracking-widest font-medium">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}