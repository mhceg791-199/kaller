import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useOurStoryAnimation(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {

      gsap.to(".parallax-bg", {
        y: window.innerWidth < 768 ? -50 : -200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          scrub: 1.5,
        },
      });

      gsap.utils.toArray(".story-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: window.innerWidth < 1024 ? 0 : i % 2 === 0 ? -100 : 100,
          y: window.innerWidth < 1024 ? 50 : 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.to(".active-line", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);
}