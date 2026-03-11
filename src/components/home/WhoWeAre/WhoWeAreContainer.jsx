import { useRef } from "react";
import useWhoWeAreAnimation from "./hooks/useWhoWeAreAnimation";
import WhoWeAreVisual from "./components/WhoWeAreVisual";
import WhoWeAreContent from "./components/WhoWeAreContent";



const WhoWeAreContainer = () => {

  const containerRef = useRef(null);

  useWhoWeAreAnimation(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#262525] text-white py-10 lg:py-14 overflow-hidden"
    >
      <WhoWeAreVisual />

      <WhoWeAreContent />

      {/* HUD TEXT */}
      <div className="side-title absolute -right-20 top-1/2 -rotate-90 origin-center hidden xl:block">
        <span className="text-[15vw] font-black text-white opacity-[0.02] leading-none uppercase select-none">
          MOSAICHOLDING
        </span>
      </div>
    </section>
  );
};

export default WhoWeAreContainer;