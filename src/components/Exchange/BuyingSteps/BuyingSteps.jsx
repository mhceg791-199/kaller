import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BuyingSteps() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // أنيميشن العنوان - ظهور فخم متتابع
      gsap.from(".buying-letter", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".buying-letter",
          start: "top 85%",
        },
      });

      // أنيميشن البطاقات والخطوط الهندسية
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".buying-container",
          start: "top 75%",
        },
      });

      tl.from(".buying-card", {
        y: 40,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        ".buying-line",
        {
          scaleX: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "expo.inOut",
        },
        "-=0.8",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    { id: "01", title: "Search", desc: "Listings Below" },
    { id: "02", title: "Inquire", desc: "Request Info" },
    { id: "03", title: "Acquire", desc: "Buy the Project" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-6 bg-[#1a1a1a] overflow-hidden relative border-t border-white/5"
    >
      {/* شبكة هندسية خلفية - Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-24">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase flex justify-center overflow-hidden text-white">
            {"BUYING".split("").map((char, i) => (
              <span key={i} className="buying-letter inline-block">
                {char}
              </span>
            ))}
          </h2>
          <div className="w-32 h-[1px] bg-mainGold mx-auto mt-6 shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
        </div>

        <div className="steps-container max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="step-card group relative">
                {/* رأس الخطوة (Phase Header) */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-mono text-[10px] font-bold text-mainGold border border-mainGold/30 px-3 py-1 bg-mainGold/5 backdrop-blur-sm">
                    PHASE_{step.id}
                  </span>
                </div>

                {/* كارت المحتوى */}
                <div className="relative bg-[#262626] p-10 border border-white/5 group-hover:border-mainGold/50 transition-all duration-700">
                  {/* تأثير إضاءة خلفي خفيف عند الـ Hover */}
                  <div className="absolute inset-0 bg-mainGold/0 group-hover:bg-mainGold/[0.02] transition-all duration-700"></div>

                  <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight text-white group-hover:text-mainGold transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-light italic text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* الخطوط الواصلة الذهبية (تظهر في الشاشات الكبيرة) */}
          <div className="hidden md:block absolute top-[1.15rem] left-0 w-full -z-0">
            <div className="connecting-line absolute left-[28%] w-[12%] h-[1px] bg-gradient-to-r from-mainGold/0 via-mainGold to-mainGold/0 opacity-40"></div>
            <div className="connecting-line absolute left-[60%] w-[12%] h-[1px] bg-gradient-to-r from-mainGold/0 via-mainGold to-mainGold/0 opacity-40"></div>
          </div>
        </div>
      </div>

      {/* لمسة فنية جانبية (Coordinates) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="text-[10px] font-mono text-white/5 rotate-90 tracking-[1em] uppercase">
          South_Florida_Real_Estate
        </div>
      </div>
    </section>
  );
}