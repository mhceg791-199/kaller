// export default function HeroSection() {
//   return (
//     <section 
//       id="home"
//       className="relative h-screen flex items-center justify-start bg-cover bg-center"
//       style={{
//         backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop)',
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />
      
//       {/* Content */}
//       <div className="relative container ms-20 px-6 md:px-12 max-w-2xl">
//         <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-wide">
//           WE DESIGN YOUR FUTURE
//         </h1>
//         <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
//           Established in 1984, Kaller Architecture was created as an architectural, space planning and corporate interior firm. 
//           Located in the heart of South Florida, our team of architects and designers specialize in both residential and commercial projects.
//         </p>
//         <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm font-light tracking-widest uppercase">
//           VIEW PROJECTS
//         </button>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, ArrowLeft, Ruler } from "lucide-react";

const slides = [
  {
    title: "Designing What’s Next.",
    highlight: "Since 1984.",
    desc: "Architecture that shapes skylines, strengthens communities, and endures.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Four Decades of",
    highlight: "Architectural Authority.",
    desc: "Residential, commercial, civic, and mixed-use developments across South Florida.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
  },
  {
    title: "Built on Vision.",
    highlight: "Driven by Precision.",
    desc: "Where creativity meets code — and design meets performance.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "A Proud Subsidiary of",
    highlight: "Mosaic Holding Corporation.",
    desc: "Part of a global platform redefining architecture, engineering, and development.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000",
  }
];

const ArchitecturalHeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const progressRef = useRef(null);

  // أنيميشن الانتقال
  useEffect(() => {
    const ctx = gsap.context(() => {
      // أنيميشن الصورة (Geometric Mask)
      gsap.fromTo(imageRef.current, 
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", scale: 1.2 },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", scale: 1, duration: 1.5, ease: "expo.inOut" }
      );

      // أنيميشن النصوص
      gsap.fromTo(".animate-text", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // إعادة ضبط شريط التقدم (المسطرة)
      gsap.fromTo(progressRef.current, 
        { width: "0%" },
        { width: "100%", duration: 6, ease: "none" }
      );
    }, containerRef);

    // الانتقال التلقائي
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      ctx.revert();
      clearInterval(autoSlide);
    };
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div ref={containerRef} className="relative h-screen w-full bg-lightColor overflow-hidden font-sans">
      
      {/* Background Grid Lines (Architectural Blueprint Feel) */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      {/* Main Image Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={imageRef}
          className="w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-linear"
          style={{ backgroundImage: `url(${slides[current].image})`, transform: 'scale(1.1)' }}
        >
          {/* Overlay Darkner */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          {/* Title */}
          <h1 className="text-white leading-[1.1]">
            <span className="animate-text block text-4xl md:text-7xl font-light tracking-tight">
              {slides[current].title}
            </span>
            <span className="animate-text block text-5xl md:text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-mainGold/50">
              {slides[current].highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="animate-text text-gray-300 text-lg md:text-xl max-w-xl font-light leading-relaxed border-l-2 border-mainGold/30 pl-6">
            {slides[current].desc}
          </p>

          {/* CTA Button */}
          <div className="animate-text pt-8">
            <button className="group flex items-center gap-4 bg-mainGold text-mainColor px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-lightColor transition-all duration-500">
              Explore Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Controls (Architectural Style) */}
      <div className="absolute bottom-12 right-12 z-30 flex items-end gap-12">
        
        {/* Slide Counter */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-mainGold font-mono text-sm tracking-widest">0{current + 1}</span>
          <div className="h-20 w-[1px] bg-white/20 relative">
            <div 
              className="absolute top-0 left-0 w-full bg-mainGold transition-all duration-500"
              style={{ height: `${((current + 1) / slides.length) * 100}%` }}
            />
          </div>
          <span className="text-white/20 font-mono text-sm tracking-widest">04</span>
        </div>

        {/* Arrows */}
        <div className="flex flex-col gap-2">
          <button onClick={prevSlide} className="p-4 border border-white/10 text-white hover:bg-mainGold hover:text-mainColor transition-all">
            <ArrowLeft size={20} />
          </button>
          <button onClick={nextSlide} className="p-4 border border-white/10 text-white hover:bg-mainGold hover:text-mainColor transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Progress Ruler (The Delicious Part) */}
      <div className="absolute bottom-0 left-0 w-full h-16 z-30 px-12 flex flex-col justify-center">
        <div className="relative w-full h-[2px] bg-white/10">
          {/* Progress Bar */}
          <div ref={progressRef} className="absolute top-0 left-0 h-full bg-mainGold" />
          
          {/* Ruler Marks */}
          <div className="absolute top-0 left-0 w-full flex justify-between px-1">
             {[...Array(20)].map((_, i) => (
               <div key={i} className={`h-2 w-[1px] ${i % 5 === 0 ? 'bg-white/40 h-4' : 'bg-white/10'}`} />
             ))}
          </div>
        </div>
        <div className="flex justify-between mt-4 text-[10px] font-mono text-white/30 tracking-widest">
           <span>EST. 1984</span>
           <span>ARCHITECTURAL_PRECISION_UNIT</span>
           <span>MOSAIC_SUBSIDIARY</span>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalHeroSlider;