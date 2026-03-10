import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Crafting from "./component/Crafting";
import Firm from "./component/Firm";
import Owner from "./component/Owner";

gsap.registerPlugin(ScrollTrigger);

export default function ArchitectMasterpiece() {
  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. أنيميشن العناوين (تأثير المسح الضوئي)
      gsap.from(".reveal-h1", {
        y: 100,
        skewY: 7,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      // 2. تأثير التثبيت (Pinning) - يتم تفعيله فقط في الشاشات الكبيرة (Desktop)
      const contentBlocks = gsap.utils.toArray(".content-block");

      // نستخدم mm.add لعمل شروط بناءً على حجم الشاشة
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        contentBlocks.forEach((block, index) => {
          ScrollTrigger.create({
            trigger: block,
            start: "top 10%",
            pin: true,
            pinSpacing: index === contentBlocks.length - 1,
            anticipatePin: 1,
          });
        });
      });

      // 3. تحريك الخطوط الهندسية التفاعلية
      gsap.to(".measuring-line", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="bg-lightColor text-mainColor min-h-screen font-light selection:bg-mainGold/30 overflow-x-hidden"
    >
      <div className="fixed left-4 md:left-10 top-0 h-full w-[1px] bg-white/5 z-0"></div>
      <div className="measuring-line fixed left-4 md:left-10 top-0 w-[2px] bg-mainGold z-10 shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>

      <div className="relative z-20">
        <Crafting />
        <Firm />
        <Owner />
      </div>
    </div>
  );
}
