// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ArchitecturalStory = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. تحريك كتل النصوص بأسلوب الطبقات (Parallax Layers)
//       const layers = gsap.utils.toArray(".story-layer");
//       layers.forEach((layer, i) => {
//         gsap.from(layer, {
//           y: 150,
//           opacity: 0,
//           rotateX: -15,
//           duration: 1.5,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: layer,
//             start: "top 90%",
//             toggleActions: "play none none reverse"
//           }
//         });
//       });

//       // 2. رسم خط هندسي "موصل" بين الفقرات
//       gsap.from(".connector-line", {
//         scaleY: 0,
//         transformOrigin: "top center",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: 1
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative bg-white text-black py-32 overflow-hidden selection:bg-purple-100">

//       {/* عناصر المسطرة الهندسية الثابتة */}
//       <div className="absolute left-0 top-0 h-full w-12 border-r border-gray-100 flex flex-col justify-between py-10 opacity-40">
//         {[...Array(10)].map((_, i) => (
//           <span key={i} className="text-[8px] font-mono text-gray-400 -rotate-90">0{i + 1}m</span>
//         ))}
//       </div>

//       <div className="container mx-auto px-6 md:px-24 relative">

//         {/* الخط الموصل العمودي */}
//         <div className="connector-line absolute left-6 md:left-20 top-0 w-[1px] h-full bg-purple-600 z-0" />

//         <div className="max-w-4xl ml-auto relative z-10 space-y-32">

//           {/* الكتلة 1: الاعتقاد والبداية */}
//           <div className="story-layer group relative pl-12 md:pl-20">
//             <span className="absolute -left-3 top-2 w-6 h-6 bg-white border-2 border-purple-600 rounded-full z-20" />
//             <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
//               IT BEGAN WITH <br /> A BELIEF.
//             </h2>
//             <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed border-b border-gray-100 pb-10">
//               Architecture is never just about structure — it is about <span className="text-black font-medium italic underline decoration-purple-500">responsibility</span>.
//               Every line drawn shapes how people live, work, and gather.
//             </p>
//           </div>

//           {/* الكتلة 2: تاريخ 1984 والقوة المحلية */}
//           <div className="story-layer relative pl-12 md:pl-20">
//             <div className="flex items-center gap-6 mb-8">
//                 <span className="text-6xl md:text-9xl font-black text-gray-100">1984</span>
//                 <div className="h-[2px] flex-grow bg-gray-100" />
//             </div>
//             <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl">
//               Founded in South Florida during a time of rapid growth, the firm was built on the conviction that
//               <span className="bg-black text-white px-2 py-1 mx-1">strong design</span>
//               must balance creativity with discipline and ambition with buildability.
//             </p>
//           </div>

//           {/* الكتلة 3: Mosaic والشبكة العالمية */}
//           <div className="story-layer group relative pl-12 md:pl-20">
//             <div className="absolute -left-10 top-0 text-[10vw] font-black text-purple-600/5 select-none -z-10 group-hover:text-purple-600/10 transition-colors">
//               MOSAIC
//             </div>
//             <h3 className="text-3xl md:text-5xl font-bold mb-6 italic">
//               Connected to something greater.
//             </h3>
//             <p className="text-lg text-gray-500 max-w-xl">
//               Today, as a proud subsidiary of Mosaic Holding Corporation, Kaller connects deep local expertise with
//               international strength — designing what’s next.
//             </p>
//           </div>

//           {/* الخاتمة: Rooted in Florida */}
//           <div className="story-layer pt-10">
//              <div className="flex flex-wrap gap-4 items-center">
//                 <div className="px-6 py-2 bg-purple-50 border border-purple-100 text-purple-700 font-mono text-xs tracking-widest uppercase">
//                   Rooted in South Florida
//                 </div>
//                 <div className="w-12 h-[1px] bg-gray-300" />
//                 <div className="text-sm font-bold uppercase tracking-tighter italic">
//                   Designing what’s next.
//                 </div>
//              </div>
//           </div>

//         </div>
//       </div>

//       {/* لمسة جرافيك في الزاوية */}
//       <div className="absolute bottom-10 right-10 opacity-20">
//          <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center animate-spin-slow">
//             <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase italic">Kaller Story</span>
//          </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 12s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ArchitecturalStory;

/////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ConstructiveStory = () => {
//   const mainRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // انيميشن سقوط الكتل النصية
//       const blocks = gsap.utils.toArray(".construct-block");
//       blocks.forEach((block) => {
//         gsap.from(block, {
//           y: -150,
//           opacity: 0,
//           scale: 1.1,
//           filter: "blur(10px)",
//           duration: 1.2,
//           ease: "bounce.out",
//           scrollTrigger: {
//             trigger: block,
//             start: "top 80%",
//           }
//         });
//       });

//       // انيميشن الخطوط الهندسية المتفاعلة
//       gsap.to(".guide-line", {
//         width: "100%",
//         stagger: 0.5,
//         duration: 2,
//         ease: "power4.inOut",
//         scrollTrigger: {
//           trigger: mainRef.current,
//           start: "top center",
//           scrub: true
//         }
//       });
//     }, mainRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={mainRef} className="relative min-h-screen bg-[#fafafa] text-black py-40 overflow-hidden">

//       {/* خطوط إرشادية هندسية خلفية (Dynamic Guides) */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="guide-line absolute top-[20%] left-0 w-0 h-[1px] bg-purple-100" />
//         <div className="guide-line absolute top-[50%] left-0 w-0 h-[1px] bg-purple-100" />
//         <div className="guide-line absolute top-[80%] left-0 w-0 h-[1px] bg-purple-100" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">

//         {/* المرحلة 1: الفلسفة */}
//         <div className="construct-block mb-40 max-w-5xl">
//           <div className="flex items-baseline gap-4 mb-6">
//             <span className="font-mono text-purple-600 font-bold">01.</span>
//             <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
//               OUR <span className="italic font-light">STORY.</span>
//             </h2>
//           </div>
//           <p className="text-2xl md:text-4xl font-light text-gray-400 leading-tight">
//             It began with a belief: architecture is <span className="text-black font-semibold uppercase">never just about structure</span> — it is about responsibility.
//           </p>
//         </div>

//         {/* المرحلة 2: التاريخ (1984) - تصميم شبكي */}
//         <div className="construct-block mb-40 flex justify-end">
//           <div className="relative p-12 bg-white border border-gray-100 shadow-2xl max-w-2xl">
//             <div className="absolute -top-10 -left-10 text-8xl font-black text-purple-600/10 uppercase">1984</div>
//             <p className="text-xl leading-relaxed text-gray-700">
//               Founded in South Florida, the firm was built on the conviction that strong design must balance
//               <span className="text-purple-600 font-bold"> creativity</span> with
//               <span className="text-black font-bold"> discipline</span>.
//             </p>
//             <div className="mt-8 flex gap-2">
//                <div className="w-full h-[2px] bg-gray-100 overflow-hidden">
//                   <div className="w-1/2 h-full bg-purple-600 animate-pulse" />
//                </div>
//             </div>
//           </div>
//         </div>

//         {/* المرحلة 3: العصر الجديد (Mosaic) */}
//         <div className="construct-block grid lg:grid-cols-2 gap-20 items-center">
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold uppercase tracking-widest border-l-8 border-purple-600 pl-6">
//               Connected to <br /> something greater.
//             </h3>
//             <p className="text-gray-500 text-lg leading-relaxed">
//               Today, as a subsidiary of <span className="text-black font-bold">Mosaic Holding Corporation</span>, Kaller connects local expertise with international strength.
//             </p>
//           </div>
//           <div className="relative h-64 bg-gray-900 overflow-hidden rounded-sm group">
//              {/* تأثير بصري يوحي بالشبكة العالمية */}
//              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
//              <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-white font-mono tracking-[1em] text-xs opacity-50 group-hover:tracking-[1.5em] transition-all duration-700">GLOBAL_PLATFORM</span>
//              </div>
//           </div>
//         </div>

//         {/* الخاتمة الرمزية */}
//         <div className="construct-block mt-60 text-center">
//             <h4 className="text-4xl md:text-6xl font-black uppercase mb-12">
//                Designing <span className="text-purple-600">what’s next.</span>
//             </h4>
//             <div className="inline-flex gap-8 font-mono text-[10px] tracking-[0.5em] text-gray-400">
//                <span>25.7617° N</span>
//                <div className="w-1.5 h-1.5 bg-purple-600 rotate-45" />
//                <span>80.1918° W</span>
//             </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ConstructiveStory;

/////////////////////////////////////////////////////////////////////////

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function OurStoryLens() {
//   const componentRef = useRef(null);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray(".panel");

//       // تحويل السكرول الرأسي إلى حركة أفقية (Horizontal Scroll)
//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: componentRef.current,
//           pin: true,
//           scrub: 1,
//           end: () => "+=" + sliderRef.current.offsetWidth,
//         }
//       });

//       // أنيميشن كشف الصور داخل كل بانل
//       panels.forEach((panel) => {
//         gsap.from(panel.querySelector(".lens-inner"), {
//           scale: 1.5,
//           opacity: 0,
//           scrollTrigger: {
//             trigger: panel,
//             containerAnimation: gsap.to(panels, { xPercent: -100 * (panels.length - 1) }),
//             start: "left center",
//             toggleActions: "play none none reverse",
//           }
//         });
//       });
//     }, componentRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={componentRef} className="overflow-hidden bg-[#fdfdfd]">
//       <div ref={sliderRef} className="flex flex-nowrap h-screen w-[300vw]">

//         {/* Panel 1: The Belief & 1984 */}
//         <section className="panel w-screen h-screen flex flex-col justify-center px-6 lg:px-24 relative border-r border-zinc-100">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="order-2 lg:order-1">
//               <span className="text-orange-600 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block underline decoration-zinc-200 underline-offset-8 font-bold">// 01. The Foundation</span>
//               <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8 text-zinc-900">
//                 OUR <br /> STORY.
//               </h2>
//               <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-md italic">
//                 "Architecture is never just about structure — it is about responsibility. That belief became Kaller Architecture in 1984."
//               </p>
//             </div>
//             <div className="order-1 lg:order-2 relative h-[60vh] overflow-hidden lens-inner">
//                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover grayscale brightness-75">
//                   <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-construction-site-1934-large.mp4" type="video/mp4" />
//                </video>
//                <div className="absolute inset-0 border-[20px] border-white"></div>
//             </div>
//           </div>
//           <div className="absolute bottom-10 left-24 hidden lg:block font-mono text-[10px] text-zinc-300">EST. SOUTH FLORIDA / 1984</div>
//         </section>

//         {/* Panel 2: Philosophy & Discipline */}
//         <section className="panel w-screen h-screen flex flex-col justify-center px-6 lg:px-24 relative bg-zinc-900 text-white">
//           <div className="grid lg:grid-cols-12 gap-8 items-center">
//             <div className="lg:col-span-7 h-[70vh] relative overflow-hidden lens-inner">
//                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Architecture" />
//                 <div className="absolute inset-0 flex items-center justify-center p-20">
//                    <h3 className="text-4xl lg:text-6xl font-black text-center leading-tight tracking-tighter italic">
//                     "Creativity with discipline, vision with regulation."
//                    </h3>
//                 </div>
//             </div>
//             <div className="lg:col-span-5 lg:pl-12">
//                <span className="text-orange-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block font-bold">// 02. The Philosophy</span>
//                <p className="text-lg text-zinc-400 leading-relaxed font-light">
//                 Over four decades, our philosophy has shaped residential, commercial, and hospitality developments across the region.
//                </p>
//             </div>
//           </div>
//         </section>

//         {/* Panel 3: Global Connect & Future */}
//         <section className="panel w-screen h-screen flex flex-col justify-center px-6 lg:px-24 relative">
//           <div className="max-w-5xl">
//             <span className="text-orange-600 font-mono text-[10px] tracking-[0.4em] uppercase mb-10 block font-bold">// 03. The Evolution</span>
//             <h2 className="text-6xl lg:text-[10vw] font-black tracking-tighter leading-[0.8] mb-12 text-zinc-900 uppercase">
//               Rooted here. <br />
//               <span className="text-transparent stroke-zinc-900 italic">Connected.</span>
//             </h2>
//             <div className="flex flex-col md:flex-row gap-12 items-start">
//                <p className="text-zinc-500 text-xl font-light max-w-lg leading-relaxed">
//                 As a proud subsidiary of Mosaic Holding Corporation, Kaller Architecture connects local expertise with international strength.
//                </p>
//                <div className="relative p-8 border border-zinc-900 group cursor-pointer hover:bg-zinc-900 hover:text-white transition-all duration-500">
//                   <p className="text-xs font-bold uppercase tracking-widest">Designing what’s next</p>
//                   <div className="absolute top-0 right-0 w-2 h-2 bg-orange-600"></div>
//                </div>
//             </div>
//           </div>
//           {/* Decorative Coordinate */}
//           <div className="absolute top-1/2 right-10 -rotate-90 origin-right font-mono text-[10px] text-zinc-300 tracking-[1em]">
//              LOCAL_EXP_INTL_STR
//           </div>
//         </section>

//       </div>

//       <style jsx>{`
//         .stroke-zinc-900 {
//           -webkit-text-stroke: 1px #18181b;
//         }
//       `}</style>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const StoryExplodedView = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. تحريك الكلمات الكبيرة في الخلفية (Parallax Background)
//       gsap.to(".parallax-bg", {
//         y: -200,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top bottom",
//           scrub: 1.5,
//         }
//       });

//       // 2. أنيميشن ظهور الفقرات كأنها "تُبنى"
//       gsap.utils.toArray(".story-card").forEach((card, i) => {
//         gsap.from(card, {
//           opacity: 0,
//           clipPath: "inset(0% 100% 0% 0%)",
//           x: i % 2 === 0 ? -100 : 100,
//           duration: 1.2,
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%",
//             toggleActions: "play none none reverse"
//           }
//         });
//       });

//       // 3. الخط الهندي الراقص (The Measuring Line)
//       gsap.to(".active-line", {
//         height: "100%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="relative bg-[#050505] text-white py-32 overflow-hidden">

//       {/* Background Video (Subtle & Dark) */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <video autoPlay muted loop playsInline className="w-full h-full object-cover">
//           <source src="/kaller3.webm" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Floating Ghost Numbers */}
//       <div className="parallax-bg absolute top-40 left-10 text-[20vw] font-black text-white/[0.03] select-none uppercase">
//         Legacy
//       </div>

//       <div className="container mx-auto px-6 lg:px-20 relative z-10">

//         {/* Title Section */}
//         <div className="mb-40 space-y-4">
//           <div className="flex items-center gap-6">
//             <span className="text-[#C5A363] font-mono text-sm tracking-[0.6em] uppercase">Phase_00 // Our Story</span>
//             <div className="h-[1px] flex-1 bg-white/10" />
//           </div>
//           <h2 className="text-6xl lg:text-[10rem] font-black uppercase leading-none tracking-tighter">
//             Since <br /> <span className="text-transparent stroke-white italic">1984.</span>
//           </h2>
//         </div>

//         {/* Story Flow */}
//         <div className="relative space-y-60 max-w-5xl mx-auto">

//           {/* Vertical Guide Line */}
//           <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-white/5 hidden lg:block">
//             <div className="active-line absolute top-0 left-0 w-full bg-[#C5A363] origin-top" />
//           </div>

//           {/* Block 1 */}
//           <div className="story-card relative flex flex-col lg:flex-row items-center gap-10">
//             <div className="lg:w-1/2 text-right">
//               <h3 className="text-3xl font-medium mb-6">Architecture is never just about structure.</h3>
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 It is about <span className="text-white border-b border-[#C5A363]">responsibility.</span> Every line drawn shapes how people live, work, and gather.
//               </p>
//             </div>
//             <div className="hidden lg:flex w-20 justify-center">
//               <div className="w-4 h-4 rounded-full border border-[#C5A363] bg-black z-20" />
//             </div>
//             <div className="lg:w-1/2" />
//           </div>

//           {/* Block 2 */}
//           <div className="story-card relative flex flex-col lg:flex-row items-center gap-10">
//             <div className="lg:w-1/2" />
//             <div className="hidden lg:flex w-20 justify-center">
//               <div className="w-4 h-4 rounded-full border border-[#C5A363] bg-black z-20" />
//             </div>
//             <div className="lg:w-1/2 text-left">
//               <h3 className="text-3xl font-medium mb-6">Creative Discipline.</h3>
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 Strong design must balance creativity with discipline, vision with regulation, and <span className="text-[#C5A363]">ambition with buildability.</span>
//               </p>
//             </div>
//           </div>

//           {/* Block 3 - Mosaic Global */}
//           <div className="story-card relative flex flex-col lg:flex-row items-center gap-10">
//             <div className="lg:w-1/2 text-right">
//               <h3 className="text-3xl font-medium mb-6 italic">A Broader Platform.</h3>
//               <p className="text-gray-500 text-lg">
//                 Today, as a subsidiary of <span className="text-white font-bold">Mosaic Holding Corporation</span>, our local expertise connects with international strength.
//               </p>
//             </div>
//             <div className="hidden lg:flex w-20 justify-center">
//               <div className="w-10 h-10 border border-white/20 flex items-center justify-center rotate-45 bg-black">
//                 <div className="w-2 h-2 bg-[#C5A363]" />
//               </div>
//             </div>
//             <div className="lg:w-1/2" />
//           </div>

//         </div>

//         {/* Bottom Call to Action */}
//         <div className="mt-60 text-center space-y-10">
//           <div className="space-y-2">
//             <h2 className="text-5xl lg:text-9xl font-black uppercase tracking-tighter">Designing</h2>
//             <h2 className="text-5xl lg:text-9xl font-black uppercase tracking-tighter text-[#C5A363] italic">What's Next.</h2>
//           </div>

//           <div className="flex flex-col items-center gap-4 opacity-40 font-mono text-xs uppercase tracking-[1em]">
//              <span>S. Florida Roots</span>
//              <div className="w-[1px] h-20 bg-white" />
//              <span>Global Reach</span>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .stroke-white {
//           -webkit-text-stroke: 1.5px rgba(255,255,255,0.4);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default StoryExplodedView;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StoryExplodedView = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".parallax-bg", {
        y: -200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          scrub: 1.5,
        },
      });

      gsap.utils.toArray(".story-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          clipPath: "inset(0% 100% 0% 0%)",
          x: i % 2 === 0 ? -100 : 100,
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
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
      className="relative bg-lightColor text-white py-12 overflow-hidden"
    >
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

      <div className="parallax-bg absolute top-40 left-10 text-[20vw] font-black text-white/[0.03] select-none uppercase">
        Legacy
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-6 pt-20">
            <h2 className="reveal-text block text-mainGold font-bolder uppercase tracking-[0.4em] text-sm mb-6">
              Our Story
            </h2>
            {/* <span className="text-mainGold font-mono text-sm tracking-[0.6em] uppercase">Phase_00 // Our Story</span> */}
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>
          <h2 className="text-6xl lg:text-[10rem] font-black uppercase leading-none tracking-tighter">
            Since <br />{" "}
            <span className="text-transparent stroke-white italic">1984.</span>
          </h2>
        </div>

        <div className="relative space-y-14 max-w-5xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-white/5 hidden lg:block">
            <div className="active-line absolute top-0 left-0 w-full bg-mainGold origin-top" />
          </div>

          {/* Block 1 */}
          <div className="story-card relative flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 text-right">
              <p className="text-gray-400 text-lg leading-relaxed">
                It began with a belief: architecture is never just about
                structure — it is about responsibility. Every line drawn shapes
                how people live, work, and gather. Every building contributes to
                the story of a city.
              </p>
            </div>
            <div className="hidden lg:flex w-20 justify-center">
              <div className="w-4 h-4 rounded-full border border-mainGold bg-black z-20" />
            </div>
            <div className="lg:w-1/2" />
          </div>

          {/* Block 2 */}
          <div className="story-card relative flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2" />
            <div className="hidden lg:flex w-20 justify-center">
              <div className="w-4 h-4 rounded-full border border-mainGold bg-black z-20" />
            </div>
            <div className="lg:w-1/2 text-left">
              <p className="text-gray-400 text-lg leading-relaxed">
                That belief became Kaller Architecture in 1984. Founded in South
                Florida during a time of rapid growth, the firm was built on the
                conviction that strong design must balance creativity with
                discipline, vision with regulation, and ambition with
                buildability.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="story-card relative flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 text-right">
              <p className="text-gray-500 text-lg leading-relaxed">
                Over four decades, that philosophy has shaped residential,
                commercial, hospitality, and mixed-use developments across the
                region. Today, as a proud subsidiary of Mosaic Holding
                Corporation, Kaller Architecture is part of a broader global
                platform — where local expertise connects with international
                strength.
              </p>
            </div>
            <div className="hidden lg:flex w-20 justify-center">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center rotate-45 bg-black">
                <div className="w-2 h-2 bg-mainGold" />
              </div>
            </div>
            <div className="lg:w-1/2" />
          </div>
        </div>

        <div className="text-center space-y-10">
          <div className="flex flex-col items-center gap-6 pt-20">
            <p className="text-xl lg:text-2xl font-light text-white/90 tracking-wide">
              Rooted in South Florida.
            </p>
            <p className="text-xl lg:text-2xl font-light text-white/90 tracking-wide">
              Connected to something greater.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-5xl lg:text-9xl font-black uppercase tracking-tighter">
              Designing
            </h2>
            <h2 className="text-5xl lg:text-9xl font-black uppercase tracking-tighter text-mainGold italic">
              What’s Next.
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stroke-white {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};

export default StoryExplodedView;
