import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AWARDS_ANIMATION, AWARDS_SCROLL } from "../components/awards.config";

gsap.registerPlugin(ScrollTrigger);

export default function useAwardsAnimation(sectionRef) {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".award-card", {
        y: 60,
        opacity: 0,
        duration: AWARDS_ANIMATION.cardDuration,
        stagger: AWARDS_ANIMATION.cardStagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: AWARDS_SCROLL.start,
        },
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

}