import { useState, useRef } from "react";
import { portfolioProjects } from "../../../data/portfolioProjects";
import PortfolioContent from "./components/PortfolioContent";
import usePortfolioFilterAnimation from "./hooks/usePortfolioFilterAnimation";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const gridRef = useRef(null);

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) =>
          project.category.includes(activeCategory),
        );

  usePortfolioFilterAnimation(gridRef, activeCategory);

  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <PortfolioContent
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredProjects={filteredProjects}
        gridRef={gridRef}
      />
    </section>
  );
}
