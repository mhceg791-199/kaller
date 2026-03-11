import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SellingSteps() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // أنيميشن العنوان - ظهور الحروف بتأثير فخم
      gsap.from(".title-letter", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".title-letter",
          start: "top 85%",
        },
      });

      // أنيميشن الخطوات والخطوط الواصلة
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".steps-container",
          start: "top 75%",
        },
      });

      tl.from(".step-card", {
        y: 40,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        ".connecting-line",
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
    { id: "01", title: "Upload", desc: "Property Info" },
    { id: "02", title: "Review", desc: "& Post Project" },
    { id: "03", title: "Success", desc: "Sell the Project" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-6 bg-darkColor overflow-hidden relative"
    >
      {/* شبكة هندسية بلمسة ذهبية خافتة جداً */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase flex justify-center overflow-hidden text-white">
            {"SELLING".split("").map((char, i) => (
              <span key={i} className="title-letter inline-block">
                {char}
              </span>
            ))}
          </h2>
          <div className="w-32 h-[1px] bg-mainGold mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
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

      {/* زخرفة جانبية */}
      <div className="absolute right-10 bottom-10 hidden lg:block">
        <div className="w-px h-20 bg-gradient-to-b from-mainGold/0 via-mainGold to-mainGold/0 opacity-20"></div>
      </div>
    </section>
  );
}
