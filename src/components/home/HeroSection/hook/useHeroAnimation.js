import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { HERO_ANIMATION } from "../components/hero.config";

export default function useHeroAnimation(containerRef, imageRef, progressRef, current) {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        imageRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", scale: 1.2 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: HERO_ANIMATION.imageDuration,
          ease: "expo.inOut"
        }
      );

      gsap.fromTo(
        ".animate-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          delay: HERO_ANIMATION.textDelay,
          ease: "power3.out"
        }
      );

      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: HERO_ANIMATION.progressDuration,
          ease: "none"
        }
      );

    }, containerRef);

    return () => ctx.revert();

  }, [current]);

}