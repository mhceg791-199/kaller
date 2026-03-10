import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { portfolioProjects } from '../../../data/portfolioProjects';

const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'residential', label: 'RESIDENTIAL' },
  { id: 'commercial', label: 'COMMERCIAL' },
  { id: 'interiors', label: 'INTERIORS' },
  { id: 'hospitality', label: 'HOSPITALITY' },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const gridRef = useRef(null);

  const filteredProjects = activeCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category.includes(activeCategory));

  // أنيميشن الفلترة باستخدام GSAP
  useEffect(() => {
    const items = gridRef.current.children;
    
    gsap.fromTo(items, 
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [activeCategory]);

  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* خلفية هندسية (Grid Overlay) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* رأس القسم بتصميم هندسي */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-mainGold"></span>
              <span className="text-mainGold font-mono text-sm tracking-[0.3em]">Kaller Architecture Project</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Desin With <br /> <span className="border-b border-mainGold/50 text-mainColor/70 italic">Distinction</span>
            </h2>
          </div>
          
          {/* الفلتر بتصميم مسطرة هندسية */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-white/10 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative text-[10px] tracking-[0.2em] font-bold transition-all duration-300 ${
                  activeCategory === cat.id ? 'text-mainGold' : 'text-white/40 hover:text-white'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <span className="absolute -bottom-[10px] left-0 w-full h-[2px] bg-mainGold shadow-[0_0_10px_#C5A363]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة المشاريع */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredProjects.map((project, index) => (
            <Link
              to={`/portfolio/${project.category[0]}`} 
              key={project.id}
              className="group relative aspect-square border-[0.5px] border-white/5 overflow-hidden cursor-pointer"
            >
              {/* رقم المشروع الهندسي */}
              <span className="absolute top-4 left-4 z-20 font-mono text-[10px] text-white/30 group-hover:text-mainGold transition-colors">
                0{index + 1} / _P.ID_{project.id}
              </span>

              {/* الصورة */}
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />

              {/* تأثير الكشف عند Hover */}
              <div className="absolute inset-0 bg-mainGold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                {/* خطوط تقاطع هندسية تظهر عند Hover */}
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-mainGold/30 -translate-x-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-700"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-mainGold/30 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-mainGold font-mono text-[10px] mb-2 uppercase tracking-widest">
                    {project.category.join(' + ')}
                  </p>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <div className="w-0 group-hover:w-full h-[1px] bg-mainGold transition-all duration-700"></div>
                </div>
              </div>

              {/* زوايا الديكور (Blueprint Corners) */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/0 group-hover:border-mainGold transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/0 group-hover:border-mainGold transition-all duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}