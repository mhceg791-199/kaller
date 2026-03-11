import { Link } from "react-router-dom";

const PortfolioGrid = ({ projects, gridRef }) => {
  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      {projects.map((project, index) => (
        <Link
          to={`/portfolio/${project.category[0]}`}
          key={project.id}
          className="group relative aspect-square border-[0.5px] border-white/5 overflow-hidden cursor-pointer"
        >
          <span className="absolute top-4 left-4 z-20 font-mono text-[10px] text-white/30 group-hover:text-mainGold transition-colors">
            0{index + 1} / _P.ID_{project.id}
          </span>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
          />

          <div className="absolute inset-0 bg-mainGold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
            
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-mainGold/30 -translate-x-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-700"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-mainGold/30 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-mainGold font-mono text-[10px] mb-2 uppercase tracking-widest">
                {project.category.join(" + ")}
              </p>

              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                {project.title}
              </h3>

              <div className="w-0 group-hover:w-full h-[1px] bg-mainGold transition-all duration-700"></div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/0 group-hover:border-mainGold transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/0 group-hover:border-mainGold transition-all duration-500"></div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;