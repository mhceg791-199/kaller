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
      // أنيميشن الخلفية (Parallax) - تم تقليل القيمة لضمان عدم ظهور حواف بيضاء أثناء الحركة
      gsap.to(bgRef.current, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // يبدأ الأنيميشن بمجرد وصول قمة السكشن لقمة الشاشة
          end: "bottom top",
          scrub: true,
        },
      });

      // ظهور المحتوى بتتابع
      gsap.from(".reveal-item", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    /* 1. تم إضافة h-screen و w-full وضمان عدم وجود margin علوي */
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-zinc-950 m-0 p-0"
    >
      {/* 2. الخلفية: تم إضافة h-[120%] لضمان تغطية أي فراغ ناتج عن البارالاكس */}
      <div
        ref={bgRef}
        className="absolute top-[-10%] left-0 w-full h-[120%] z-0 shadow-inner"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay متدرج يعطي عمق هندسي */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 backdrop-blur-[1px]" />
      </div>

      {/* 3. شبكة هندسية (Blueprint Grid) تغطي الشاشة بالكامل */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div ref={contentRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* المحتوى النصي */}
            <div className="lg:col-span-7">
              <h1 className="reveal-item text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                PROPERTY <br />
                <span className="text-transparent stroke-text opacity-50">
                  EXCHANGE
                </span>
              </h1>

              <div className="reveal-item space-y-8 text-mainColor text-zinc-300 font-light leading-relaxed text-lg border-l-2 border-mainGold/20 pl-10 max-w-2xl">
                <p className="first-letter:text-4xl  first-letter:font-bold first-letter:text-mainGold">
                  Our firm has been working closely with property owners for
                  more than{" "}
                  <span className="text-white font-medium underline decoration-mainGold/30 underline-offset-4">
                    30 years
                  </span>{" "}
                  as their architect and partner of choice. We have built strong
                  relationships with our clients which has led to an extensive
                  network in the real estate market of South Florida.
                </p>
                <p>
                  We have launched our own property exchange where interested
                  parties can both{" "}
                  <span className="text-white italic">buy and sell</span> real
                  estate in one place.
                </p>
                <div className="bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                  <p className="text-[11px] text-zinc-400 uppercase tracking-widest leading-loose">
                    * Single Agent - 3% Commission <br />* Transaction Agent -
                    5% Commission
                  </p>
                </div>
              </div>
            </div>

            {/* بطاقة الوكلاء (Glassmorphism) */}
            <div className="lg:col-span-5 reveal-item">
              <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent">
                <div className="bg-zinc-900/90 backdrop-blur-2xl p-8 md:p-12 shadow-2xl">
                  <h3 className="text-white tracking-[0.3em] text-[10px] font-bold mb-10 uppercase text-center border-b border-white/5 pb-6">
                    Authorized Facilitators
                  </h3>

                  <div className="space-y-12">
                    {/* Agent 1 */}
                    <div className="group cursor-pointer">
                      <p className="text-zinc-500 text-[10px] font-mono mb-1 group-hover:text-mainGold transition-colors tracking-tighter">
                        LICENSE: 3238392
                      </p>
                      <h4 className="text-white font-bold text-xl mb-4 group-hover:translate-x-2 transition-transform uppercase tracking-tighter">
                        Hope Kaller
                      </h4>
                      <div className="h-16 w-full bg-white p-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
                        <img
                          src="https://static.wixstatic.com/media/9d6bec_ef11f606a9af44c2bc67405d10a43a98~mv2.png"
                          alt="RE/MAX"
                          className="h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Agent 2 */}
                    <div className="group cursor-pointer">
                      <p className="text-zinc-500 text-[10px] font-mono mb-1 group-hover:text-mainGold transition-colors tracking-tighter">
                        LICENSE: 3238392
                      </p>
                      <h4 className="text-white font-bold text-xl mb-4 group-hover:translate-x-2 transition-transform uppercase tracking-tighter">
                        Brandon Kaller, P.A.
                      </h4>
                      <div className="h-16 w-full bg-white p-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
                        <img
                          src="https://static.wixstatic.com/media/9d6bec_304cc727f1ad4a2aa56cd05bfa1e2612~mv2.jpg"
                          alt="ARN"
                          className="h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-12 py-5 bg-mainGold text-black hover:bg-lightColor hover:text-white text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500">
                    Enter Exchange
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blueprint Corner (إضافة لمسة هندسية في الركن) */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
        <div className="text-white/20 font-mono text-[10px] rotate-90 origin-right tracking-[0.5em] uppercase">
          Coord: 25.7617° N, 80.1918° W
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </section>
  );
}
