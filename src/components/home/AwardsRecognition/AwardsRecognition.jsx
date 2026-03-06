// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function AwardsSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. أنيميشن العنوان
//       gsap.from(".awards-title", {
//         y: 50,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".awards-title",
//           start: "top 85%",
//         }
//       });

//       // 2. تحريك الشريط الأفقي
//       gsap.to(".awards-track", {
//         xPercent: -50,
//         repeat: -1,
//         duration: 35, // سرعة أهدأ لتناسب الخلفية البيضاء
//         ease: "linear",
//       });

//       // 3. أنيميشن الخطوط
//       gsap.from(".blueprint-line", {
//         width: 0,
//         duration: 2,
//         stagger: 0.5,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-40 bg-white overflow-hidden text-zinc-900 border-t border-zinc-100"
//     >
//       {/* Background Decor: شبكة هندسية رمادية فاتحة جداً */}
//       <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
//            style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-4xl">
//           <div className="flex items-center gap-4 mb-8">
//             <div className="blueprint-line h-[1px] w-20 bg-orange-500"></div>
//             <span className="text-orange-600 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">Recognition</span>
//           </div>

//           <h2 className="awards-title text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none text-zinc-900">
//             AWARDS & <br />
//             <span className="text-transparent stroke-zinc-900 opacity-20 italic">RECOGNITION.</span>
//           </h2>

//           <p className="awards-title text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-24 border-l-2 border-zinc-100 pl-8">
//             As our portfolio continues to grow, so does the recognition of the work we bring to the <span className="text-zinc-900 font-medium italic underline underline-offset-4 decoration-orange-500/20">built environment.</span>
//           </p>
//         </div>
//       </div>

//       {/* Infinity Awards Marquee */}
//       <div className="relative w-full overflow-hidden py-10">
//         <div className="awards-track flex gap-8 whitespace-nowrap">
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={i}
//               className="w-[300px] h-[380px] flex-shrink-0 border border-zinc-100 bg-zinc-50/30 p-8 flex flex-col justify-between relative group hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700 hover:-translate-y-2"
//             >
//               {/* Technical Graphics */}
//               <div className="flex justify-between items-start">
//                 <div className="w-8 h-8 border-t border-l border-zinc-200 group-hover:border-orange-500 transition-colors"></div>
//                 <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">Entry_Log.{(i+1).toString().padStart(2, '0')}</span>
//               </div>

//               <div className="space-y-4">
//                 {/* Skeleton Loading Effect */}
//                 <div className="h-2 w-3/4 bg-zinc-100 rounded-full overflow-hidden relative">
//                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
//                 </div>
//                 <div className="h-2 w-1/2 bg-zinc-100 rounded-full overflow-hidden relative">
//                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
//                 </div>
//                 <h4 className="text-zinc-400 font-mono text-[9px] uppercase mt-10 tracking-tight group-hover:text-zinc-600 transition-colors italic">
//                   Space structured for <br/> future recognition
//                 </h4>
//               </div>

//               <div className="absolute bottom-0 right-0 p-6">
//                 <div className="text-zinc-200 group-hover:text-orange-500 transition-colors duration-500">
//                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer Meta Data */}
//       <div className="container mx-auto px-6 mt-20">
//         <div className="flex flex-wrap gap-10 items-center justify-between text-[10px] font-mono tracking-widest uppercase text-zinc-400">
//            <div className="flex items-center gap-3">
//               <span className="w-1.5 h-1.5 bg-orange-500"></span>
//               Press Features
//            </div>
//            <div className="flex items-center gap-3">
//               <span className="w-1.5 h-1.5 bg-zinc-300"></span>
//               Certifications
//            </div>
//            <div className="flex items-center gap-3">
//               <span className="w-1.5 h-1.5 bg-zinc-300"></span>
//               Design Awards
//            </div>
//            <div className="blueprint-line h-[1px] flex-1 bg-zinc-100"></div>
//            <div className="text-zinc-300">© 2024 Kaller Architecture</div>
//         </div>
//       </div>

//       <style jsx>{`
//         .stroke-zinc-900 {
//           -webkit-text-stroke: 1px #18181b;
//         }
//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }
//       `}</style>
//     </section>
//   );
// }

export default function AwardsRecognitionSection() {
  const awardItems = [
    {
      image:
        "https://images.pexels.com/photos/9472146/pexels-photo-9472146.jpeg",
      label: "Award",
    },
    {
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=500&auto=format&fit=crop",
      label: "Recognition",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop",
      label: "Certification",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=500&auto=format&fit=crop",
      label: "Feature",
    },
  ];

  return (
    <section className="relative h-[80vh] bg-white text-black py-5 px-6 md:px-12 lg:px-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* العنوان العلوي الصغير */}
        <div className="text-center">
          <h2 className="text-sm md:text-xl py-10 px-6 font-light tracking-[0.3em] uppercase text-gray-500">
            AWARDS & RECOGNITION
          </h2>
        </div>

        {/* الـ grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {awardItems.map((item, index) => (
            <div
              key={index}
              className="relative group aspect-square rounded-xl overflow-hidden bg-black/[0.03] backdrop-blur-md border border-black/10 shadow-sm shadow-black/10 hover:shadow-mainGold/30 transition-all duration-500 hover:scale-[1.03]"
            >
              {/* الصورة */}
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-70"
              />

              {/* glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-mainGold/20 opacity-70 group-hover:opacity-50 transition-opacity duration-700" />

              {/* النص */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-16 h-[1px] bg-mainGold mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <p className="text-xl md:text-2xl font-bold tracking-widest uppercase text-gray-900 group-hover:text-mainGold transition-colors">
                  {item.label}
                </p>
                <div className="w-16 h-[1px] bg-mainGold mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              {/* زاوية هندسية */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-black/20 group-hover:border-mainGold transition-colors" />
            </div>
          ))}
        </div>

        {/* النص التوضيحي */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-2xl font-light leading-relaxed text-gray-700 mb-8">
            As our portfolio continues to grow, so does the recognition of the
            work we bring to the built environment.
          </p>
        </div>
      </div>

      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mainGold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mainGold/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Trophy, Award, Medal, Star } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const AwardsSectionWhite = () => {
//   const sectionRef = useRef(null);
//   const gridRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. أنيميشن ظهور النصوص (Reveal Up)
//       gsap.from(".reveal-item", {
//         y: 60,
//         opacity: 0,
//         stagger: 0.2,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".reveal-item",
//           start: "top 90%",
//         }
//       });

//       // 2. أنيميشن الكتل (Blocks Animation)
//       gsap.from(".award-card", {
//         scale: 0.9,
//         opacity: 0,
//         y: 40,
//         stagger: 0.1,
//         duration: 1,
//         ease: "expo.out",
//         scrollTrigger: {
//           trigger: ".award-grid",
//           start: "top 85%",
//         }
//       });

//       // 3. تأثير Parallax خفيف للخلفية المربعة عند حركة الماوس
//       const moveGrid = (e) => {
//         const { clientX, clientY } = e;
//         const xPos = (clientX / window.innerWidth - 0.5) * 20;
//         const yPos = (clientY / window.innerHeight - 0.5) * 20;

//         gsap.to(gridRef.current, {
//           x: xPos,
//           y: yPos,
//           duration: 1.5,
//           ease: "power2.out"
//         });
//       };

//       window.addEventListener("mousemove", moveGrid);
//       return () => window.removeEventListener("mousemove", moveGrid);
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const placeholders = [
//     { icon: <Trophy size={28} />, label: "Design Excellence" },
//     { icon: <Award size={28} />, label: "Sustainability" },
//     { icon: <Medal size={28} />, label: "Civic Honors" },
//     { icon: <Star size={28} />, label: "Press Features" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen bg-[#FFFFFF] text-[#1a1a1a] py-32 px-6 overflow-hidden flex flex-col justify-center"
//     >
//       {/* شبكة هندسية دقيقة (Architectural Grid) */}
//       <div
//         ref={gridRef}
//         className="absolute inset-0 opacity-[0.05] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
//           backgroundSize: '60px 60px'
//         }}
//       />

//       <div className="container mx-auto max-w-6xl relative z-10">

//         {/* الهيدر */}
//         <div className="mb-24 space-y-6">
//           <div className="reveal-item flex items-center gap-4 text-mainGold font-mono text-[10px] tracking-[0.5em] uppercase font-bold">
//             <div className="w-10 h-[2px] bg-mainGold" />
//             Accolades
//           </div>

//           <h2 className="reveal-item text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
//             Awards & <br />
//             <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #1a1a1a' }}>Recognition.</span>
//           </h2>

//           <p className="reveal-item max-w-2xl text-gray-500 text-lg md:text-2xl font-light leading-relaxed">
//             As our portfolio continues to grow, so does the recognition of the work we bring to the built environment.
//           </p>
//         </div>

//         {/* شبكة الجوائز المستقبيلة */}
//         <div className="award-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
//           {placeholders.map((item, index) => (
//             <div
//               key={index}
//               className="award-card group relative aspect-[4/5] bg-gray-50/50 border border-gray-100 flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-purple-200"
//             >
//               {/* زوايا هندسية تظهر عند الحوم (Hover) */}
//               <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-mainGold transition-all duration-300" />
//               <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-mainGold transition-all duration-300" />

//               <div className="text-gray-300 group-hover:text-mainGold group-hover:scale-110 transition-all duration-500 mb-6">
//                 {item.icon}
//               </div>

//               <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-black text-center transition-colors">
//                 {item.label}
//               </span>

//               {/* رقم تسلسلي وهمي يعطي طابع تقني */}
//               <div className="absolute bottom-8 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
//                 <span className="text-[8px] font-mono text-purple-400 uppercase tracking-widest">Reserved_Slot_0{index + 1}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* الفوتر - إشعار المساحة المستقبيلة */}
//         <div className="reveal-item mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-8">
//            <div className="space-y-2">
//              <div className="text-[10px] font-mono text-mainGold font-bold tracking-widest uppercase italic">
//                // Future Growth Strategy
//              </div>
//              <p className="text-sm text-gray-400 max-w-md font-light">
//                Space intentionally structured for upcoming certifications, recognitions, and international press features.
//              </p>
//            </div>

//            <div className="flex gap-4">
//              <div className="w-12 h-12 border border-gray-100 flex items-center justify-center text-gray-300 hover:text-mainGold hover:border-mainGold transition-all cursor-crosshair">
//                 <span className="font-mono text-[10px]">v.02</span>
//              </div>
//            </div>
//         </div>

//       </div>

//       {/* لمسة جرافيك جانبية (Vertical Line) */}
//       <div className="absolute top-0 left-12 h-full w-[1px] bg-gray-50" />
//     </section>
//   );
// };

// export default AwardsSectionWhite;
