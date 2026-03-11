import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PropertyExchange() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect - optimized for mobile performance
      gsap.to(bgRef.current, {
        y: window.innerWidth < 768 ? "5%" : "15%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Sequential reveal
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 py-20 md:py-0"
    >
      {/* Background with optimized height */}
      <div
        ref={bgRef}
        className="absolute top-[-10%] left-0 w-full h-[120%] z-0"
        style={{
          backgroundImage: "url(/home/hero/hero-3.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black backdrop-blur-[1px]" />
      </div>

      {/* Blueprint Grid - Reduced opacity on mobile for better text readability */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] md:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
          backgroundSize: window?.innerWidth < 768 ? "30px 30px" : "50px 50px",
        }}
      />

      <div
        ref={contentRef}
        className="container mx-auto px-6 relative z-10 mt-3 md:mt-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16 lg:items-center">
            {/* المحتوى النصي */}
            <div className="lg:col-span-7">
              <h1 className="reveal-item text-xl md:text-3xl font-black text-white tracking-tighter my-4 md:my-10 leading-[0.9]">
                PROPERTY {" "}
                <span className="stroke-text opacity-50 block md:inline">
                  EXCHANGE
                </span>
              </h1>

              <div className="reveal-item space-y-6 md:space-y-8 text-zinc-300 font-light leading-relaxed text-base md:text-lg border-l-2 border-mainGold/20 pl-6 md:pl-10 max-w-2xl">
                <p className="text-mainColor">
                  Our firm has been working closely with property owners for
                  more than 30 years as their architect and partner of choice.
                  We have built strong relationships with our clients which has
                  led to an extensive network in the real estate market of South
                  Florida.
                </p>
                <p className="text-mainColor">
                  After years of being asked for available real estate projects
                  from hundreds of clients, we have decided to launch our own
                  property exchange where interested parties can both{" "}
                  <span className="text-white italic">buy and sell</span> real
                  estate in one place.
                </p>
                <p className="text-mainColor">
                  The service is free to list properties with the listed Agents
                  below. If interested in purchasing a project, the listed Real
                  Estate Agents shown below will create an introduction and
                  facilitate the transaction which would thus require a real
                  estate sales commission.
                </p>

                <div className="bg-white/5 p-4 md:p-6 border border-white/10 backdrop-blur-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p className="text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest text-mainColor">
                      <span className="text-mainGold block mb-1">
                        Single Agent
                      </span>
                      3% Commission
                    </p>
                    <p className="text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest border-t sm:border-t-0 text-mainColor sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-4">
                      <span className="text-mainGold block mb-1">
                        Transaction Agent
                      </span>
                      5% Commission
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* بطاقة الوكلاء */}
            <div className="lg:col-span-5 reveal-item">
              <div className="relative p-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-sm">
                <div className="bg-zinc-900/90 backdrop-blur-2xl p-6 md:p-10 shadow-2xl">
                  <h3 className="text-white tracking-[0.3em] text-[9px] md:text-[10px] font-bold mb-8 uppercase text-center border-b border-white/5 pb-6">
                    Authorized Facilitators
                  </h3>

                  <div className="space-y-8 md:space-y-10">
                    {/* Agent 1 */}
                    <div className="group cursor-pointer">
                      <p className="text-zinc-500 text-[9px] font-mono mb-1 group-hover:text-mainGold transition-colors">
                        LICENSE: 3238392
                      </p>
                      <h4 className="text-white font-bold text-lg md:text-xl mb-3 group-hover:translate-x-2 transition-transform uppercase tracking-tighter">
                        Hope Kaller
                      </h4>
                      <div className="h-14 md:h-16 w-full bg-white/95 p-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
                        <img
                          src="/exchange/max.png"
                          alt="RE/MAX"
                          className="h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Agent 2 */}
                    <div className="group cursor-pointer">
                      <p className="text-zinc-500 text-[9px] font-mono mb-1 group-hover:text-mainGold transition-colors">
                        LICENSE: 3238392
                      </p>
                      <h4 className="text-white font-bold text-lg md:text-xl mb-3 group-hover:translate-x-2 transition-transform uppercase tracking-tighter">
                        Brandon Kaller, P.A.
                      </h4>
                      <div className="h-14 md:h-16 w-full bg-white/95 p-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
                        <img
                          src="/exchange/arn.jpg"
                          alt="ARN"
                          className="h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-10 py-4 md:py-5 bg-mainGold text-black hover:bg-white text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500">
                    Enter Exchange
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
