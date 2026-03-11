import { useRef } from "react";
import useIntroAnimation from "./hooks/useIntroAnimation";
import IntroVisual from "./components/IntroVisual";
import IntroContent from "./components/IntroContent";

const ArchitecturalIntroContainer = () => {

  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useIntroAnimation(sectionRef, lineRef);

  return (
    <section
      ref={sectionRef}
      className="relative bg-darkColor text-white py-10 md:py-12 px-6 overflow-hidden"
    >
      <IntroVisual />

      <IntroContent lineRef={lineRef} />
    </section>
  );
};

export default ArchitecturalIntroContainer;