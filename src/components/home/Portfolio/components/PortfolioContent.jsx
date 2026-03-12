import { portfolioCategoriesSection } from "../../../../data/portfolioProjects";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioContent = ({
  activeCategory,
  setActiveCategory,
  filteredProjects,
  gridRef,
}) => {
  return (
    <div className="container mx-auto px-6 relative z-10">

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        
        <div className="max-w-xl">

          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-mainGold"></span>
            <span className="text-mainGold font-mono text-sm md:text-base tracking-[0.3em]">
              Kaller Architecture Project
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            Desin With <br />
            <span className="border-b border-mainGold/50 text-mainColor/70 italic">
              Distinction
            </span>
          </h2>

        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-white/10 pb-2">
          {portfolioCategoriesSection.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative text-[10px] tracking-[0.2em] font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "text-mainGold"
                  : "text-white/40 hover:text-white"
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

      <PortfolioGrid projects={filteredProjects} gridRef={gridRef} />
    </div>
  );
};

export default PortfolioContent;