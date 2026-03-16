// import { useRef } from "react";
// import useWhoWeAreAnimation from "./hooks/useWhoWeAreAnimation";
// import WhoWeAreVisual from "./components/WhoWeAreVisual";
// import WhoWeAreContent from "./components/WhoWeAreContent";

// const WhoWeAreContainer = () => {

//   const containerRef = useRef(null);

//   useWhoWeAreAnimation(containerRef);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen bg-[#262525] text-white py-10 lg:py-14 overflow-hidden"
//     >
//       <WhoWeAreVisual />

//       <WhoWeAreContent />

//       {/* HUD TEXT */}
//       <div className="side-title absolute -right-20 top-1/2 -rotate-90 origin-center hidden xl:block">
//         <span className="text-[15vw] font-black text-white opacity-[0.02] leading-none uppercase select-none">
//           MOSAICHOLDING
//         </span>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAreContainer;

/////////////////////////////////////////////////////////////////////////////////////////

// import React, { useLayoutEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Maximize2, ArrowRight } from "lucide-react";

// // تسجيل الـ Plugin
// gsap.registerPlugin(ScrollTrigger);

// // داتا وهمية (استبدلها بالـ specs الفعلية عندك)
// const specs = ["Commercial", "Industrial", "Retail", "Educational", "Residential"];

// const WhoWeAreModern = () => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const titleRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {

//       // 1. انيميشن الخطوط الشبكية (The Blueprint Grid)
//       gsap.from(".grid-line", {
//         scaleX: 0,
//         scaleY: 0,
//         duration: 2,
//         stagger: 0.2,
//         ease: "power4.inOut",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//         }
//       });

//       // 2. كشف الفيديو بأسلوب سينمائي (Cinematic Mask)
//       gsap.from(".main-video-box", {
//         clipPath: "inset(0% 50% 0% 50%)",
//         duration: 1.8,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".main-video-box",
//           start: "top 70%",
//         }
//       });

//       // 3. تحريك العناوين مع السكرول (Parallax Text)
//       gsap.to(".floating-text", {
//         y: -100,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         }
//       });

//       // 4. ظهور قائمة التخصصات بتتابع (Staggered Reveal)
//       gsap.from(".spec-item", {
//         y: 50,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".specs-wrapper",
//           start: "top 80%",
//         }
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen bg-[#111] text-white py-24 px-6 lg:px-12 overflow-hidden flex items-center"
//     >
//       {/* --- الطبقة البصرية (Background Visuals) --- */}
//       <div className="absolute inset-0 pointer-events-none opacity-20">
//         <div className="grid-line absolute top-[15%] left-0 w-full h-[1px] bg-white/20 origin-left" />
//         <div className="grid-line absolute bottom-[15%] left-0 w-full h-[1px] bg-white/20 origin-right" />
//         <div className="grid-line absolute left-[15%] top-0 w-[1px] h-full bg-white/20 origin-top" />
//         <div className="grid-line absolute right-[35%] top-0 w-[1px] h-full bg-mainGold/30 origin-bottom" />
//       </div>

//       {/* --- العنوان الخلفي الضخم (Background HUD) --- */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] select-none z-0">
//         <h1 className="floating-text text-[25vw] font-black leading-none uppercase">
//           MOSAIC
//         </h1>
//       </div>

//       <div className="container mx-auto relative z-10">
//         <div className="grid lg:grid-cols-12 gap-12 items-center">

//           {/* --- الجانب الأيسر: المحتوى النصي والفيديو (The Core) --- */}
//           <div className="lg:col-span-7 space-y-12">
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-[1px] bg-mainGold" />
//                 <span className="text-mainGold tracking-[0.5em] text-xs font-mono uppercase">01 // Who We Are</span>
//               </div>
//               <h2 className="text-5xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
//                 Architecture <br />
//                 <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>With Intention.</span>
//               </h2>
//             </div>

//             {/* صندوق الفيديو الاحترافي */}
//             <div className="main-video-box relative aspect-video w-full overflow-hidden bg-neutral-900 group">
//                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 {/* HUD Overlay inside video */}
//                 <div className="absolute top-6 left-6 z-20 border-l border-t border-white/30 w-12 h-12 transition-all group-hover:w-full group-hover:h-full group-hover:border-mainGold/50" />

//                 <video
//                   autoPlay muted loop playsInline
//                   className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
//                 >
//                   <source src="/kaller3.webm" type="video/mp4" />
//                 </video>

//                 <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
//                    <p className="text-[10px] font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">LIVE PREVIEW // CASE_03</p>
//                    <Maximize2 className="text-mainGold w-5 h-5" />
//                 </div>
//             </div>

//             <p className="text-lg font-light text-gray-400 max-w-xl leading-relaxed italic border-l-2 border-mainGold/50 pl-6">
//                "At Kaller Architecture, every project begins with rigorous understanding — of site, regulation, and client ambition."
//             </p>
//           </div>

//           {/* --- الجانب الأيمن: القائمة التفاعلية (The Specs) --- */}
//           <div className="lg:col-span-5 flex flex-col justify-center">
//             <div className="specs-wrapper space-y-16">
//               <div className="space-y-4">
//                 <h4 className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase italic">
//                   // Decades of Expertise
//                 </h4>
//                 <div className="h-[2px] w-full bg-white/5 relative">
//                   <div className="absolute top-0 left-0 h-full w-24 bg-mainGold" />
//                 </div>
//               </div>

//               <nav className="flex flex-col">
//                 {specs.map((item, i) => (
//                   <div
//                     key={i}
//                     className="spec-item group flex items-center justify-between py-6 border-b border-white/5 hover:border-mainGold transition-all duration-500 cursor-pointer"
//                   >
//                     <div className="flex items-baseline gap-6">
//                       <span className="font-mono text-[10px] text-mainGold/40 group-hover:text-mainGold transition-colors">
//                         0{i + 1}
//                       </span>
//                       <h3 className="text-2xl lg:text-3xl font-light text-gray-500 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 uppercase tracking-tighter">
//                         {item}
//                       </h3>
//                     </div>
//                     <ArrowRight className="opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 text-mainGold transition-all duration-500" />
//                   </div>
//                 ))}
//               </nav>

//               {/* Quote Box المحدث */}
//               <div className="relative p-10 bg-white/[0.01] border border-white/5 backdrop-blur-md overflow-hidden group">
//                  <div className="absolute top-0 right-0 w-16 h-16 bg-mainGold/5 -mr-8 -mt-8 rotate-45 group-hover:bg-mainGold/20 transition-all" />

//                  <p className="text-sm text-gray-400 mb-6 font-light">
//                    Great architecture is not accidental. It is the result of discipline and clear vision.
//                  </p>

//                  <h3 className="text-4xl font-black uppercase tracking-tighter">
//                    It is <span className="text-mainGold italic">Deliberate.</span>
//                  </h3>

//                  <div className="mt-8 flex items-center gap-2">
//                     <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.4em]">Project Integrity System</span>
//                     <div className="flex-1 h-[1px] bg-white/5" />
//                  </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAreModern;

/////////////////////////////////////////////////////////////////////////////////////////

// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Maximize2, ArrowUpRight } from "lucide-react";

// // تم دمج البيانات هنا لسهولة النسخ
// const specs = [
//   "Commercial Architecture",
//   "Residential Development",
//   "Institutional Planning",
//   "Interior Architecture",
//   "Urban Design",
// ];

// gsap.registerPlugin(ScrollTrigger);

// export default function RedesignedWhoWeAre() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. انيميشن كشف الفيديو (Diagonal Reveal)
//       gsap.from(".video-container", {
//         clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
//         duration: 2,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".video-container",
//           start: "top 80%",
//         },
//       });

//       // 2. Parallax للنصوص الخلفية
//       gsap.to(".bg-giant-text", {
//         xPercent: -20,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1,
//         },
//       });

//       // 3. ظهور قائمة الخبرات بتأثير التدفق
//       gsap.from(".spec-item", {
//         opacity: 0,
//         y: 30,
//         stagger: 0.1,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".spec-list",
//           start: "top 75%",
//         },
//       });

//       // 4. خط الـ HUD (الخط الذهبي المتحرك)
//       gsap.from(".hud-line", {
//         scaleY: 0,
//         duration: 1.5,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".hud-line",
//           start: "top 70%",
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen bg-[#0f0f0f] text-white py-20 lg:py-32 overflow-hidden flex flex-col justify-center"
//     >
//       {/* --- BACKGROUND ELEMENTS --- */}
//       <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
//         <div className="absolute top-0 left-[5%] w-[1px] h-full bg-mainGold/30" />
//         <div className="absolute top-[15%] left-0 w-full h-[1px] bg-white/10" />
//         <h1 className="bg-giant-text absolute top-1/2 left-0 text-[30vw] font-black leading-none text-white opacity-[0.03] select-none whitespace-nowrap">
//           ARCHITECTURE INTENTION
//         </h1>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-12 items-start">

//           {/* --- LEFT SIDE: THE STATEMENT --- */}
//           <div className="lg:col-span-5 space-y-12">
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <span className="text-mainGold font-mono text-xs tracking-[0.5em] uppercase">
//                   Studio Profile
//                 </span>
//                 <div className="flex-1 h-[1px] bg-mainGold/20" />
//               </div>

//               <h2 className="text-xl lg:text-2xl font-black uppercase tracking-tighter leading-[0.9]">
//                 Who We {" "}
//                 <span className="text-transparent italic shadow-text" style={{ WebkitTextStroke: "1px #D4AF37" }}>
//                   Are.
//                 </span>
//               </h2>

//               <p className="text-xl font-light text-gray-400 max-w-md leading-relaxed border-l border-white/10 pl-6">
//                 At Kaller Architecture, every project begins with rigorous
//                 understanding — of site, regulation, and client ambition.
//               </p>
//             </div>

//             {/* QUOTE BOX */}
//             <div className="relative p-10 bg-[#161616] border border-white/5 rounded-tr-[50px]">
//               <div className="absolute top-0 right-0 p-4">
//                 <ArrowUpRight size={20} className="text-mainGold" />
//               </div>
//               <p className="text-sm italic text-gray-500 mb-4 tracking-wide">
//                 "Great architecture is not accidental."
//               </p>
//               <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">
//                 It is <span className="text-mainGold">Deliberate.</span>
//               </h3>
//             </div>

//             <div className="space-y-6">

//               <p className="text-xl font-light text-gray-400 max-w-md leading-relaxed border-l border-white/10 pl-6">
//                 At Kaller Architecture, every project begins with rigorous
//                 understanding — of site, regulation, and client ambition.
//               </p>
//             </div>
//           </div>

//           {/* --- RIGHT SIDE: THE VISUAL & EXPERTISE --- */}
//           <div className="lg:col-span-7 space-y-16">

//             {/* VIDEO PORTAL */}
//             <div className="video-container relative group">
//               <div className="absolute -top-6 -left-6 z-20 hidden md:block">
//                  <div className="hud-line w-[1px] h-32 bg-mainGold" />
//               </div>

//               <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
//                 {/* HUD Elements over video */}
//                 <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
//                   <span className="px-3 py-1 bg-mainGold text-[8px] font-mono tracking-widest uppercase text-black font-bold">
//                     Live_Feed // 04
//                   </span>
//                 </div>

//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[4s] grayscale-[0.3] group-hover:grayscale-0"
//                 >
//                   <source src="/kaller3.webm" type="video/mp4" />
//                 </video>

//                 {/* Video Mask Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>
//             </div>

//             {/* SPECS LIST - REIMAGINED */}
//             <div className="spec-list grid md:grid-cols-2 gap-x-12 gap-y-8">
//               <div className="col-span-full mb-4">
//                 <h4 className="text-[10px] font-mono tracking-[0.5em] text-mainGold uppercase">
//                   Areas of Specialization
//                 </h4>
//               </div>

//               {specs.map((item, i) => (
//                 <div
//                   key={i}
//                   className="spec-item group flex flex-col gap-2 border-b border-white/5 pb-4 hover:border-mainGold/50 transition-colors"
//                 >
//                   <div className="flex justify-between items-center">
//                     <span className="font-mono text-[10px] text-gray-600">
//                       MOD_0{i + 1}
//                     </span>
//                     <Maximize2 size={10} className="text-white/20 group-hover:text-mainGold transition-colors" />
//                   </div>
//                   <h3 className="text-xl font-light text-gray-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
//                     {item}
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* --- SIDEBAR INDICATOR --- */}
//       <div className="absolute left-6 bottom-10 hidden xl:flex flex-col items-center gap-6">
//         <span className="font-mono text-[10px] text-mainGold uppercase vertical-text tracking-[0.5em] opacity-40">
//           Scroll to explore
//         </span>
//         <div className="w-[1px] h-20 bg-gradient-to-b from-mainGold to-transparent" />
//       </div>

//       <style jsx>{`
//         .vertical-text {
//           writing-mode: vertical-rl;
//           transform: rotate(180deg);
//         }
//         .shadow-text {
//           text-shadow: 0 0 20px rgba(212, 175, 55, 0.1);
//         }
//       `}</style>
//     </section>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Maximize2, ArrowUpRight } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const specs = [
//   "Multi-Family & Residential Development",
//   "Retail & Commercial Centers",
//   "Hospitality & Entertainment Venues",
//   "Civic & Community Projects",
//   "Adaptive Reuse & Renovations",
// ];

// const WhoWeAreArchitect = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. تحريك الخط الهندسي "المخطط"
//       gsap.from(".blueprint-line", {
//         width: 0,
//         duration: 2,
//         ease: "power4.inOut",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70%",
//         },
//       });

//       // 2. انيميشن تكبير الفيديو مع السكرول (Zoom into Reality)
//       gsap.to(".video-box", {
//         scale: 1.2,
//         scrollTrigger: {
//           trigger: ".video-box",
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       // 3. ظهور النصوص بتأثير الـ "Typing" أو المسح
//       gsap.from(".reveal-text", {
//         y: 50,
//         opacity: 0,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".reveal-text",
//           start: "top 85%",
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen bg-[#1a1a1a] text-white py-24 overflow-hidden"
//     >
//       {/* --- الخلفية الهندسية (The Grid) --- */}
//       <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* العناوين العلوية المتداخلة */}
//         <div className="relative mb-14">
//           <div className="flex items-center gap-4 mb-4">
//             <span className="h-[1px] w-12 bg-mainGold"></span>
//             <span className="text-mainGold font-mono text-sm md:text-base tracking-[0.3em]">
//               WHO WE ARE
//             </span>
//           </div>
//           <h3 className="reveal-text text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter italic">
//             ARCHITECTURE <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
//               WITH INTENTION.
//             </span>
//           </h3>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-20 items-start">
//           {/* الجانب الأيسر: الفيديو كـ "كتلة معمارية" */}
//           <div className="w-full lg:w-3/6 relative group mt-6">
//             <div className="video-box relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
//               <video
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
//               >
//                 <source src="/kaller3.webm" type="video/mp4" />
//               </video>

//               <div className="absolute top-0 left-0 w-full h-full border-[1px] border-white/20 pointer-events-none" />
//               <div className="absolute top-4 right-4 text-white/50">
//                 <Maximize2 size={16} />
//               </div>
//             </div>

//             {/* النص الجديد تحت الفيديو */}
//             <p className="reveal-text mt-14 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
//               We approach each assignment with clarity and discipline. No
//               excess. No unnecessary complexity. Just thoughtful design grounded
//               in execution.
//             </p>

//             {/* النص الذهبي الموجود */}
//             <div className="absolute -bottom-10 -right-10 bg-[#C5A363] p-8 max-w-sm hidden md:block transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
//               <p className="text-black font-bold leading-tight">
//                 "Great architecture is not accidental. It is deliberate."
//               </p>
//             </div>
//           </div>

//           {/* الجانب الأيمن: الخبرات بتنسيق معاصر */}
//           <div className="w-full lg:w-2/5 space-y-12">
//             <p className="reveal-text text-xl font-light text-gray-400 border-l-2 border-mainGold pl-6 leading-relaxed">
//               At Kaller Architecture, every project begins with rigorous
//               understanding — of site, regulation, operational needs, financial
//               realities, and client ambition.
//             </p>

//             <div className="space-y-4">
//               <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-6">
//                 decades of experience in:
//               </p>
//               <div className="grid grid-cols-1 gap-[1px] bg-white/10 border border-white/10">
//                 {specs.map((spec, i) => (
//                   <div
//                     key={i}
//                     className="reveal-text bg-[#1a1a1a] p-4 flex justify-between items-center group cursor-pointer hover:bg-mainGold/10 transition-colors"
//                   >
//                     <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">
//                       {spec}
//                     </span>
//                     <ArrowUpRight
//                       size={14}
//                       className="text-mainGold opacity-0 group-hover:opacity-100 transition-all"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="pt-10">
//               <div className="blueprint-line h-[1px] bg-mainGold w-full mb-4" />
//               <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
//                 Designing for: Complexity // Clarity // Execution
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* نص MOSAIC الضخم في القاع بطريقة فنية */}
//       <div className="absolute bottom-10 left-10 opacity-5 select-none">
//         <h4 className="text-[15vw] font-black leading-none m-0 p-0">MOSAIC</h4>
//       </div>

//     </section>
//   );
// };

// export default WhoWeAreArchitect;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  "Multi-Family & Residential Development",
  "Retail & Commercial Centers",
  "Hospitality & Entertainment Venues",
  "Civic & Community Projects",
  "Adaptive Reuse & Renovations",
];

const WhoWeAreArchitect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // blueprint line animation
      gsap.from(".blueprint-line", {
        width: 0,
        duration: 2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // video scroll zoom
      gsap.to(".video-box", {
        scale: 1.2,
        scrollTrigger: {
          trigger: ".video-box",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // reveal text
      gsap.from(".reveal-text", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#1a1a1a] text-white py-24 overflow-hidden"
    >
      {/* background grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* title */}
        <div className="relative mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-mainGold"></span>
            <span className="text-mainGold font-mono text-sm md:text-base tracking-[0.3em]">
              WHO WE ARE
            </span>
          </div>

          <h3 className="reveal-text text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter italic">
            ARCHITECTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              WITH INTENTION.
            </span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-3/6 relative group mt-6">
            {/* NEW VIDEO STYLE */}
            <div className="video-box main-video-box relative aspect-video w-full overflow-hidden bg-neutral-900 group">
              {/* gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* HUD corner */}
              <div className="absolute top-6 left-6 z-20 border-l border-t border-white/30 w-12 h-12 transition-all group-hover:w-full group-hover:h-full group-hover:border-mainGold/50" />

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              >
                <source src="/kaller3.webm" type="video/mp4" />
              </video>
            </div>

            {/* text under video */}
            <p className="reveal-text mt-12 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
              We approach each assignment with clarity and discipline. No
              excess. No unnecessary complexity. Just thoughtful design grounded
              in execution.
            </p>

            {/* golden quote */}
            <div className="absolute bottom-28 -right-10 bg-[#C5A363] p-8 max-w-sm hidden md:block transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <p className="text-black font-bold leading-tight">
                "Great architecture is not accidental. It is deliberate."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-2/5 space-y-12">
            <p className="reveal-text text-xl font-light text-gray-400 border-l-2 border-mainGold pl-6 leading-relaxed">
              At Kaller Architecture, every project begins with rigorous
              understanding — of site, regulation, operational needs, financial
              realities, and client ambition.
            </p>

            <div className="space-y-4">
              <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-6">
                decades of experience in:
              </p>

              <div className="grid grid-cols-1 gap-[1px] bg-white/10 border border-white/10">
                {specs.map((spec, i) => (
                  <div
                    key={i}
                    className="reveal-text bg-[#1a1a1a] p-4 flex justify-between items-center group cursor-pointer hover:bg-mainGold/10 transition-colors"
                  >
                    <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">
                      {spec}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="text-mainGold opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* big background text */}
      <div className="absolute bottom-10 left-10 opacity-5 select-none">
        <h4 className="text-[15vw] font-black leading-none m-0 p-0">MOSAIC</h4>
      </div>
    </section>
  );
};

export default WhoWeAreArchitect;
