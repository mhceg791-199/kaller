import { useEffect } from "react";
import { gsap } from "gsap";

export default function usePortfolioFilterAnimation(gridRef, dependency) {
  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.children;

    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.9, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, [dependency]);
}