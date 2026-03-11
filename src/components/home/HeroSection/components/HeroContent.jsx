import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroContent = ({ slide }) => {

  const nav = useNavigate();

  return (
    <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center">

      <div className="max-w-4xl space-y-6">

        <h1 className="text-white leading-[1.1]">

          <span className="animate-text block text-4xl md:text-7xl font-light">
            {slide.title}
          </span>

          <span className="animate-text block text-5xl md:text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-mainGold/50">
            {slide.highlight}
          </span>

        </h1>

        <p className="animate-text text-gray-300 text-lg max-w-xl border-l-2 border-mainGold/30 pl-6">
          {slide.desc}
        </p>

        <div className="animate-text pt-8">

          <button
            onClick={() => nav("/portfolio")}
            className="group flex items-center gap-4 bg-mainGold text-mainColor px-8 py-4 font-bold uppercase text-xs"
          >
            Explore Portfolio

            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform"
            />

          </button>

        </div>

      </div>

    </div>
  );
};

export default HeroContent;