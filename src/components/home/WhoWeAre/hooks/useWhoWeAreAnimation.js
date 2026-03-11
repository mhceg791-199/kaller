import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHO_ANIMATION, WHO_SCROLL } from "../components/whoWeAre.config";

gsap.registerPlugin(ScrollTrigger);

export default function useWhoWeAreAnimation(containerRef) {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".video-mask", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: WHO_ANIMATION.videoRevealDuration,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".video-mask",
          start: WHO_SCROLL.videoStart,
        },
      });

      gsap.from(".side-title", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.from(".spec-line", {
        opacity: 0,
        x: -30,
        stagger: WHO_ANIMATION.listStagger,
        duration: WHO_ANIMATION.listDuration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".spec-container",
          start: WHO_SCROLL.specStart,
        },
      });

    }, containerRef);

    return () => ctx.revert();

  }, []);
}