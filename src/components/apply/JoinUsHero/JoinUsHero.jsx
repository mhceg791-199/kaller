import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JoinUsHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".join-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".join-title",
          start: "top 90%",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden bg-darkColor"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/home/hero/hero-1.avif"
          className="w-full h-full object-cover grayscale brightness-50 scale-105"
          alt="Architecture Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darkColor via-transparent to-[#080808]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <h2 className="join-title text-[10vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter mb-8 opacity-20 select-none text-white">
          JOIN US
        </h2>

        <div className="space-y-6 mx-auto">
          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed px-4">
            Our firm is always receiving new, unique and growing client projects
            throughout Florida so we always need talented individuals to join
            our team. As a result, we're always looking for a variety of
            hard-working, goal-oriented and creative architects, draftsmen and
            managers.
          </p>

          <div className="h-[2px] w-20 bg-mainGold mx-auto" />

          <p className="text-sm md:text-xl text-gray-500">
            If you're interested in joining our firm then scroll down and submit your resume and portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinUsHero;
