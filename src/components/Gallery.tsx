export default function Gallery() {
  const images = [
    { 
      src: "/images/e30bf4fc2285d1d47f345faf1abac2a3.jpg", 
      alt: "The Therapeutic Space", 
      className: "col-span-2 row-span-2" 
    },
    { 
      src: "/images/798f0598670fd9fd01143fc73027eaac.jpg", 
      alt: "Untangling the Mind", 
      className: "col-span-1 row-span-1" 
    },
    { 
      src: "/images/c4bc5359a93038cd070658dbaae4c775.jpg", 
      alt: "Overlap of Identity", 
      className: "col-span-1 row-span-2" 
    },
    { 
      src: "/images/b5c2ff44329115c7bb0e6d70efe3a02f.jpg", 
      alt: "Navigating Balance", 
      className: "col-span-1 row-span-2" 
    },
    { 
      src: "/images/1ade185588ed4668f585bb59f76c26b0.jpg", 
      alt: "Finding Clarity", 
      className: "col-span-2 row-span-1" 
    },
    { 
      src: "/images/b57996951de37507823eedb76a5198a3.jpg", 
      alt: "Embodied Wisdom", 
      className: "col-span-1 row-span-1" 
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-[#f8f5f1]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-1 md:gap-2 mb-3 md:mb-4">
            <div className="w-6 md:w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-[#9a8cbc] to-transparent"></div>
            <span className="handwritten text-base md:text-lg lg:text-xl text-[#9a8cbc] mb-1 md:mb-2">visualizing the journey</span>
            <div className="w-6 md:w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-[#9a8cbc] to-transparent"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl italic text-[#1e3a5f] font-serif mb-3 md:mb-4">The Interior Landscape</h2>
          <p className="text-[#2d3748] font-serif italic text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            "Therapy is a process of untangling, witnessing, and eventually integrating the many parts of yourself into a cohesive whole."
          </p>
        </div>

        {/* Masonry-style Grid - Simplified on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`overflow-hidden rounded-lg shadow-soft group relative bg-white p-0.5 md:p-1 border border-[#e8e2d9] ${
                img.className.includes('col-span-2') ? 'col-span-1 sm:col-span-2' : ''
              } ${img.className.includes('row-span-2') ? 'row-span-1 sm:row-span-2' : ''}`}
            >
              <div className="w-full h-full overflow-hidden rounded-md">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              
              {/* Artistic Overlay - Show on hover only */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 md:p-4 lg:p-6">
                <span className="text-white text-xs uppercase tracking-[0.2em] font-medium handwritten">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Note */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <div className="w-12 md:w-16 lg:w-24 h-px bg-gradient-to-r from-transparent via-[#9a8cbc]/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}