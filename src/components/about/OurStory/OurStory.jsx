import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // أنيميشن الخلفية - تقليل الحركة في الموبايل لضمان الأداء
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
          // في الموبايل نلغي الإزاحة الجانبية الكبيرة لتجنب الـ Overflow
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

  return (
    <section
      ref={containerRef}
      className="relative bg-darkColor text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/kaller3.webm" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Parallax Text - Responsive sizing */}
      <div className="parallax-bg absolute top-20 md:top-40 left-5 md:left-10 text-[25vw] md:text-[20vw] font-black text-white/[0.03] select-none uppercase leading-none">
        Legacy
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 space-y-4">
          <div className="flex items-center gap-4 md:gap-6 pt-10 md:pt-20">
            <h2 className="text-mainGold font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm">
              Our Story
            </h2>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[10rem] font-black uppercase leading-[0.9] tracking-tighter">
            Since <br />{" "}
            <span className="text-transparent stroke-white-story italic">
              1984.
            </span>
          </h2>
        </div>

        {/* Timeline Content */}
        <div className="relative space-y-16 md:space-y-24 max-w-5xl mx-auto">
          {/* Vertical Line - Hidden on Mobile, Shown on LG */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-white/5 hidden lg:block">
            <div className="active-line absolute top-0 left-0 w-full bg-mainGold origin-top" />
          </div>

          {/* Block 1 */}
          <div className="story-card relative flex flex-col lg:flex-row items-center gap-6 md:gap-10">
            <div className="w-full lg:w-1/2 lg:text-right">
              <p className="text-gray-300 md:text-gray-400 text-base md:text-lg leading-relaxed">
                It began with a belief: architecture is never just about
                structure — it is about responsibility. Every line drawn shapes
                how people live, work, and gather. Every building contributes to
                the story of a city.
              </p>
            </div>
            <div className="hidden lg:flex w-20 justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-mainGold bg-black z-20" />
            </div>
            <div className="lg:w-1/2" />
          </div>

          {/* Block 2 */}
          <div className="story-card relative flex flex-col lg:flex-row items-center gap-6 md:gap-10">
            <div className="hidden lg:block lg:w-1/2" />
            <div className="hidden lg:flex w-20 justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-mainGold bg-black z-20" />
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <p className="text-gray-300 md:text-gray-400 text-base md:text-lg leading-relaxed">
                That belief became Kaller Architecture in 1984. Founded in South
                Florida during a time of rapid growth, the firm was built on the
                conviction that strong design must balance creativity with
                discipline, vision with regulation, and ambition with
                buildability.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="story-card relative flex flex-col lg:flex-row items-center gap-6 md:gap-10">
            <div className="w-full lg:w-1/2 lg:text-right">
              <p className="text-gray-400 md:text-gray-500 text-base md:text-lg leading-relaxed italic">
                Over four decades, that philosophy has shaped residential,
                commercial, hospitality, and mixed-use developments across the
                region. Today, as a proud subsidiary of Mosaic Holding
                Corporation, Kaller Architecture is part of a broader global
                platform.
              </p>
            </div>
            <div className="hidden lg:flex w-20 justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center rotate-45 bg-black">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-mainGold" />
              </div>
            </div>
            <div className="lg:w-1/2" />
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center space-y-12 md:space-y-20 mt-20 md:mt-32">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <p className="text-lg md:text-2xl font-light text-white/90 tracking-wide">
              Rooted in South Florida.
            </p>
            <p className="text-lg md:text-2xl font-light text-white/90 tracking-wide">
              Connected to something greater.
            </p>
          </div>

          <div className="space-y-1 md:space-y-2">
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              Designing
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter text-mainGold italic leading-none">
              What’s Next.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
