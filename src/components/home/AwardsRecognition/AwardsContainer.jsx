import { useRef } from "react";
import useAwardsAnimation from "./hooks/useAwardsAnimation";
import AwardsVisual from "./components/AwardsVisual";
import AwardsContent from "./components/AwardsContent";


const AwardsContainer = () => {

  const sectionRef = useRef(null);

  useAwardsAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen md:min-h-[80vh] flex items-center bg-white text-black py-12 md:py-20 px-6 md:px-12 lg:px-10 overflow-hidden"
    >

      <AwardsVisual />

      <AwardsContent />

    </section>
  );
};

export default AwardsContainer;