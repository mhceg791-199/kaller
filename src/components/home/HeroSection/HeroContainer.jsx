import { useState, useEffect, useRef } from "react";
import { slides } from "../../../data/slides";
import useHeroAnimation from "./hook/useHeroAnimation";
import { HERO_AUTOPLAY } from "./components/hero.config";
import HeroVisual from "./components/HeroVisual";
import HeroContent from "./components/HeroContent";
import HeroControls from "./components/HeroControls";


const HeroSection = () => {

  const [current, setCurrent] = useState(0);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const progressRef = useRef(null);

  useHeroAnimation(containerRef, imageRef, progressRef, current);

  useEffect(() => {

    const auto = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, HERO_AUTOPLAY);

    return () => clearInterval(auto);

  }, []);

  const nextSlide = () =>
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-darkColor overflow-hidden"
    >
      <HeroVisual
        imageRef={imageRef}
        slide={slides[current]}
      />

      <HeroContent
        slide={slides[current]}
      />

      <HeroControls
        current={current}
        slides={slides}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        progressRef={progressRef}
      />
    </section>
  );
};

export default HeroSection;