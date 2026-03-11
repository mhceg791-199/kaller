import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INTRO_ANIMATION, INTRO_SCROLL } from "../components/intro.config";

gsap.registerPlugin(ScrollTrigger);

export default function useIntroAnimation(sectionRef, lineRef) {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          duration: INTRO_ANIMATION.lineDuration,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: INTRO_SCROLL.startLine,
            end: INTRO_SCROLL.endLine,
            scrub: true,
          },
        }
      );

      gsap.from(".reveal-text", {
        y: 30,
        opacity: 0,
        duration: INTRO_ANIMATION.textDuration,
        stagger: INTRO_ANIMATION.stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: INTRO_SCROLL.startText,
        },
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);
}