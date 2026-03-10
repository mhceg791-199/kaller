import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { slides } from "../../../data/slides";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const progressRef = useRef(null);
  const nav = useNavigate();
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
    <div ref={containerRef} className="relative h-screen w-full bg-darkColor overflow-hidden font-sans">
      
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
            <button onClick={() => nav("/portfolio")} className="group flex items-center gap-4 bg-mainGold text-mainColor px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-darkColor transition-all duration-500">
              Explore Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Controls (Architectural Style) */}
      <div className="absolute bottom-12 right-5 md:right-12 z-30 flex items-end gap-3 md:gap-12">
        
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

export default HeroSection;