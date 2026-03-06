// import ownerImage from "../../../assets/about/Kaller.avif";

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-[#1f1f1f] text-white">
//       <main className="pt-28">

//         {/* ====== ABOUT HEADER ====== */}
//         <section className="pb-20">
//           <div className="container mx-auto px-6">
//             <h1 className="text-5xl md:text-6xl font-light tracking-[0.2em] mb-10">
//               ABOUT US
//             </h1>

//             <div className="max-w-3xl text-gray-300 leading-8 text-lg">
//               <p>
//                 Our team collectively holds 200+ years of architectural, design
//                 and urban planning experience. The firm is comprised of an
//                 experienced and talented designers with skills varying from
//                 residential to commercial projects.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ====== Divider Line ====== */}
//         <div className="container mx-auto px-6">
//           <div className="border-t border-gray-600 my-16"></div>
//         </div>

//         {/* ====== OWNER SECTION ====== */}
//         <section className="pb-24">
//           <div className="container mx-auto px-6">
//             <div className="grid md:grid-cols-2 gap-16 items-start">

//               {/* Image */}
//               <div>
//                 <img
//                   src={ownerImage}
//                   alt="Owner"
//                   className="w-full max-w-md object-cover"
//                 />
//               </div>

//               {/* Text Content */}
//               <div>
//                 <p className="text-gray-400 tracking-[0.3em] text-sm mb-4">
//                   OWNER & PRESIDENT
//                 </p>

//                 <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-6">
//                   JOSEPH B. KALLER,
//                   <span className="text-gray-400 text-xl ml-2">
//                     AIA, LEED, AP BD+C
//                   </span>
//                 </h2>

//                 <div className="text-gray-300 leading-8 space-y-6">
//                   <p>
//                     Joe founded Joseph B. Kaller & Associates in 1984 with a
//                     strong passion for architecture in South Florida. He
//                     graduated with a degree in Architecture and holds a LEED
//                     certification.
//                   </p>

//                   <p>
//                     After 40+ years in the architectural industry, Joe has
//                     structured the company to focus on maintaining close
//                     communication with clients and delivering successful real
//                     estate projects.
//                   </p>
//                 </div>

//                 <p className="mt-8 text-gray-400 tracking-wider">
//                   joseph@kallerarchitects.com
//                 </p>
//               </div>

//             </div>
//           </div>
//         </section>

//       </main>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ownerImage from "../../../assets/about/Kaller.avif";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutPage() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. أنيميشن العنوان الرئيسي (ظهور حرف بحرف)
//       gsap.from(".main-title span", {
//         y: 100,
//         opacity: 0,
//         stagger: 0.05,
//         duration: 1,
//         ease: "power4.out"
//       });

//       // 2. رسم الخطوط التقنية عند التمرير
//       gsap.from(".tech-line", {
//         width: 0,
//         duration: 1.5,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".tech-line",
//           start: "top 90%"
//         }
//       });

//       // 3. تأثير ظهور صورة المالك (Parallax + ClipPath)
//       gsap.from(".owner-img-container", {
//         clipPath: "inset(0% 100% 0% 0%)",
//         duration: 1.8,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".owner-img-container",
//           start: "top 70%"
//         }
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden selection:bg-blue-600">

//       {/* شبكة هندسية خافتة جداً في الخلفية */}
//       <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
//            style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '80px 80px' }}>
//       </div>

//       <main className="relative z-10 pt-40 px-6 max-w-7xl mx-auto">

//         {/* ====== HEADER SECTION ====== */}
//         <section className="mb-40">
//           <div className="flex items-center gap-4 mb-8">
//             <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">Section 01 // Overview</span>
//             <div className="tech-line h-[1px] bg-blue-500/50 w-32"></div>
//           </div>

//           <h1 className="main-title text-[12vw] md:text-[8vw] font-black leading-none uppercase tracking-tighter mb-12">
//             <span className="inline-block">Built</span> <br />
//             <span className="inline-block text-transparent border-white/20" style={{ WebkitTextStroke: '1px white' }}>To Last.</span>
//           </h1>

//           <div className="grid lg:grid-cols-2 gap-12 items-end">
//             <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-xl border-l border-blue-600 pl-8">
//               Our team collectively holds <span className="text-white font-bold">200+ years</span> of architectural mastery.
//               We don't just design buildings; we architect legacies.
//             </p>
//             <div className="hidden lg:block text-right">
//                 <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.5em] rotate-90 origin-right">
//                     Kaller_Architects_Archive_V2
//                 </p>
//             </div>
//           </div>
//         </section>

//         {/* ====== OWNER SECTION ====== */}
//         <section className="pb-40 relative">
//           {/* نص ضخم في الخلفية (Background Text) */}
//           <div className="absolute -top-20 -right-20 text-[25vw] font-black text-white/[0.02] select-none pointer-events-none uppercase">
//             Legacy
//           </div>

//           <div className="grid lg:grid-cols-2 gap-24 items-start">

//             {/* Image Wrapper with technical frame */}
//             <div className="relative">
//               <div className="owner-img-container relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl">
//                 <img
//                   src={ownerImage}
//                   alt="Joseph B. Kaller"
//                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
//                 />
//               </div>
//               {/* خطوط قياس هندسية حول الصورة */}
//               <div className="absolute -top-6 -left-6 text-blue-500 font-mono text-[9px] uppercase tracking-widest">
//                 Lat: 26.0112° N <br /> Lon: 80.1495° W
//               </div>
//               <div className="absolute -bottom-4 right-0 tech-line h-[1px] bg-blue-500 w-1/2"></div>
//             </div>

//             {/* Text Content */}
//             <div className="space-y-12">
//               <div className="space-y-4">
//                 <p className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase">Principal & Founder</p>
//                 <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9]">
//                   Joseph B. <br /> Kaller
//                 </h2>
//                 <p className="text-xl text-gray-500 font-light italic">AIA, LEED, AP BD+C</p>
//               </div>

//               <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-light">
//                 <p className="first-letter:text-6xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
//                   Joe founded Joseph B. Kaller & Associates in 1984 with a passion for transforming the South Florida skyline.
//                   His graduation in Architecture and LEED certification set the foundation for a firm that prioritizes sustainability and precision.
//                 </p>

//                 <p className="border-l border-white/10 pl-8">
//                   After <span className="text-white font-bold">40+ years</span> of leadership, Joe remains committed to close client communication,
//                   ensuring every vision is translated into a successful, structural reality.
//                 </p>
//               </div>

//               <div className="pt-8 flex flex-col gap-4">
//                 <div className="tech-line h-[1px] bg-white/10 w-full"></div>
//                 <p className="font-mono text-sm text-gray-500 hover:text-blue-500 transition-colors cursor-pointer tracking-widest">
//                   joseph@kallerarchitects.com
//                 </p>
//               </div>
//             </div>

//           </div>
//         </section>

//       </main>

//       {/* زينة جانبية (Scroll Indicator) */}
//       <div className="fixed left-6 bottom-10 z-50 mix-blend-difference hidden md:block">
//           <div className="flex flex-col items-center gap-4">
//               <p className="font-mono text-[9px] vertical-text uppercase tracking-widest">Explore Heritage</p>
//               <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
//                   <div className="absolute top-0 left-0 w-full h-full bg-blue-500 animate-scroll-line"></div>
//               </div>
//           </div>
//       </div>

//       <style jsx>{`
//         .vertical-text { writing-mode: vertical-rl; }
//         @keyframes scroll-line {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100%); }
//         }
//         .animate-scroll-line { animation: scroll-line 2s infinite; }
//       `}</style>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ownerImage from "../../../assets/about/Kaller.avif";

// gsap.registerPlugin(ScrollTrigger);

// export default function AdvancedAbout() {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. تحريك العنوان الضخم في الخلفية ببطء (Parallax)
//       gsap.to(".bg-reveal", {
//         xPercent: -20,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: 1,
//         },
//       });

//       // 2. أنيميشن كشف الصورة (Diagonal Reveal)
//       gsap.from(".main-image", {
//         clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
//         duration: 1.5,
//         ease: "power4.inOut",
//         scrollTrigger: {
//           trigger: ".main-image",
//           start: "top 70%",
//         },
//       });

//       // 3. ظهور النصوص بتأثير "الآلة الكاتبة" المعمارية
//       gsap.from(".fade-up", {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: ".fade-up",
//           start: "top 85%",
//         },
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="bg-[#0e0e0e] text-white min-h-screen overflow-hidden font-light">

//       {/* 1. الخلفية التفاعلية: نص عملاق يتحرك مع السكرول */}
//       <div className="bg-reveal fixed top-20 left-0 text-[25vw] font-black text-white/[0.03] whitespace-nowrap pointer-events-none uppercase">
//         Kaller Architecture Est. 1984
//       </div>

//       <main className="relative z-10">

//         {/* ====== Hero Section ====== */}
//         <section className="h-screen flex items-center px-6 lg:px-20">
//           <div className="grid lg:grid-cols-12 gap-10 w-full">
//             <div className="lg:col-span-8">
//               <h1 className="text-7xl md:text-[10vw] font-bold leading-[0.9] tracking-tighter">
//                 CRAFTING <br />
//                 <span className="text-transparent stroke-text italic font-light">LEGACIES.</span>
//               </h1>
//             </div>
//             <div className="lg:col-span-4 flex items-end">
//               <p className="fade-up text-zinc-500 text-lg border-l border-orange-500/50 pl-6">
//                 Beyond blueprints, we build experiences that resonate with the pulse of South Florida.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ====== The Founder (Blueprint Style) ====== */}
//         <section className="py-40 px-6 lg:px-20 bg-[#111]">
//           <div className="grid lg:grid-cols-12 gap-20">

//             {/* Left: Image with Architectural Frame */}
//             <div className="lg:col-span-5 relative">
//               <div className="main-image relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
//                 <img src={ownerImage} alt="Joseph B. Kaller" className="w-full h-full object-cover" />
//               </div>
//               {/* عناصر هندسية (Decor) */}
//               <div className="absolute -top-10 -left-10 w-full h-full border border-zinc-800 -z-10"></div>
//               <div className="absolute -bottom-5 -right-5 text-orange-500 font-mono text-xs rotate-90 tracking-[0.5em]">
//                 COORD: 26.0112° N, 80.1495° W
//               </div>
//             </div>

//             {/* Right: Content */}
//             <div className="lg:col-span-7 flex flex-col justify-center">
//               <span className="fade-up text-orange-500 uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
//                 The Principal
//               </span>
//               <h2 className="fade-up text-4xl md:text-6xl font-bold mb-10 tracking-tight uppercase leading-none">
//                 Joseph B. Kaller, <br />
//                 <span className="text-2xl font-light text-zinc-500 lowercase italic">AIA, LEED AP</span>
//               </h2>

//               <div className="fade-up space-y-8 text-zinc-400 max-w-xl leading-relaxed text-lg font-extralight">
//                 <p>
//                   Joseph’s journey began with a single vision: to merge the <span className="text-white font-medium">technical precision</span> of engineering with the <span className="text-white font-medium">artistry</span> of South Florida's unique landscape.
//                 </p>
//                 <p>
//                   With 40 years of mastery, he doesn't just manage a firm—he mentors a culture of consistent communication and inventive appearance.
//                 </p>
//               </div>

//               {/* Email with Hover Animation */}
//               <div className="fade-up mt-12">
//                 <a href="mailto:info@kaller.com" className="group relative text-sm tracking-widest uppercase inline-block overflow-hidden">
//                   <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Contact Joseph</span>
//                   <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-orange-500">joseph@kaller.com</span>
//                   <div className="w-full h-[1px] bg-zinc-800 mt-2"></div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//       </main>

//       {/* Global CSS for stroke text effect */}
//       <style jsx>{`
//         .stroke-text {
//           -webkit-text-stroke: 1px rgba(255,255,255,0.3);
//         }
//       `}</style>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ownerImage from "../../../assets/about/Kaller.avif";

// gsap.registerPlugin(ScrollTrigger);

// export default function AestheticAboutPage() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. أنيميشن كشف الصور (Image Overlay Reveal)
//       gsap.to(".img-reveal", {
//         height: 0,
//         duration: 1.4,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".img-container",
//           start: "top 80%",
//         }
//       });

//       // 2. ظهور النصوص بترتيب متسلسل وناعم (Soft Stagger)
//       gsap.from(".soft-reveal", {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".soft-reveal",
//           start: "top 85%",
//         }
//       });

//       // 3. تحريك الخطوط الهندسية الرفيعة
//       gsap.from(".thin-line", {
//         width: 0,
//         duration: 1.5,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".thin-line",
//           start: "top 90%",
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="min-h-screen bg-[#0f0f0f] text-[#f0f0f0] font-light">

//       {/* سكشن الهيدر - تصميم مجلة (Magazine Style) */}
//       <section className="pt-40 pb-20 px-6 md:px-20">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
//           <div className="max-w-2xl">
//             <h1 className="text-7xl md:text-[10rem] font-extralight tracking-tighter leading-none mb-10 overflow-hidden">
//               <span className="inline-block soft-reveal">ABOUT</span>
//               <br />
//               <span className="inline-block soft-reveal italic text-amber-500/80 ml-[0.1em]">US</span>
//             </h1>
//           </div>
//           <div className="max-w-xs mb-4">
//             <p className="soft-reveal text-[10px] font-mono tracking-[0.4em] uppercase text-gray-500 leading-relaxed">
//               Establishing excellence in South Florida since 1984.
//             </p>
//           </div>
//         </div>
//         <div className="thin-line h-[1px] bg-white/10 w-full mt-10" />
//       </section>

//       {/* سكشن المحتوى التعريفي - شبكة متوازنة */}
//       <section className="py-20 px-6 md:px-20">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
//           <div className="lg:col-span-1">
//              <span className="text-amber-500 font-mono text-xs uppercase tracking-widest">01 / Our Legacy</span>
//           </div>
//           <div className="lg:col-span-2 space-y-10">
//             <p className="soft-reveal text-2xl md:text-4xl leading-snug font-light text-gray-300">
//               Our team collectively holds <span className="text-white border-b border-amber-500/30">200+ years</span> of architectural, design and urban planning experience.
//             </p>
//             <p className="soft-reveal text-gray-500 text-lg leading-relaxed max-w-xl">
//               The firm is comprised of experienced and talented designers with skills varying from residential to commercial projects.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* سكشن الـ Owner - تصميم تفاعلي (Interactive Profile) */}
//       <section className="py-32 px-6 md:px-20 bg-[#141414]">
//         <div className="grid lg:grid-cols-12 gap-16 items-center">

//           {/* الصورة بتصميم فني */}
//           <div className="lg:col-span-5 img-container relative group">
//             <div className="img-reveal absolute inset-0 bg-amber-500 z-10" />
//             <div className="overflow-hidden aspect-[4/5] relative">
//               <img
//                 src={ownerImage}
//                 className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
//                 alt="Joseph B. Kaller"
//               />
//               <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
//                 <p className="text-[10px] font-mono tracking-widest uppercase">Perspective_01</p>
//               </div>
//             </div>
//           </div>

//           {/* محتوى الـ Owner النصي الكامل */}
//           <div className="lg:col-span-7 space-y-12">
//             <div className="soft-reveal">
//               <p className="text-amber-500 font-mono text-xs tracking-[0.4em] mb-4 uppercase italic font-bold">The Leadership</p>
//               <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-none uppercase">
//                 Joseph B. Kaller, <br />
//                 <span className="text-xl md:text-2xl font-light text-gray-500 block mt-4">AIA, LEED, AP BD+C</span>
//               </h2>
//             </div>

//             <div className="thin-line h-[1px] bg-white/5 w-full" />

//             <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
//               <p className="soft-reveal">
//                 Joe founded <span className="text-white font-medium">Joseph B. Kaller & Associates</span> in 1984 with a strong passion for architecture in South Florida. He graduated with a degree in Architecture and holds a LEED certification.
//               </p>

//               <p className="soft-reveal border-l border-amber-500/40 pl-8 italic text-gray-300">
//                 "After 40+ years in the architectural industry, Joe has structured the company to focus on maintaining close communication with clients and delivering successful real estate projects."
//               </p>

//               <div className="soft-reveal pt-10">
//                 <a href="mailto:joseph@kallerarchitects.com"
//                    className="group relative inline-block text-white overflow-hidden">
//                    <span className="relative z-10 text-sm tracking-[0.5em] uppercase">joseph@kallerarchitects.com</span>
//                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-500 transition-transform duration-500 transform origin-left group-hover:scale-x-100 scale-x-0" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* تذييل الصفحة (Minimal Footer) */}
//       <footer className="py-20 text-center">
//         <div className="thin-line h-[1px] bg-white/5 w-32 mx-auto mb-10" />
//         <p className="text-[9px] font-mono tracking-[1em] text-gray-600 uppercase">Design / Distinction / Legacy</p>
//       </footer>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ownerImage from "../../../assets/about/Kaller.avif";
import kaller from "/kaller2.mp4";

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

      // 2. تأثير التثبيت (Pinning) للفقرات
      const contentBlocks = gsap.utils.toArray(".content-block");

      contentBlocks.forEach((block, index) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top 10%",
          pin: true,
          pinSpacing: index === contentBlocks.length - 1, // true فقط للأخير
          anticipatePin: 1, // يساعد على تقليل أي تأخير أو jump
          // يمكن إضافة end لو لزم الأمر:
          // end: () => `+=${block.offsetHeight - window.innerHeight + 50}`,
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

      // إعادة حساب الـ ScrollTrigger بعد كل شيء يتحمل
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="bg-lightColor text-mainColor min-h-screen font-light selection:bg-mainGold/30"
    >
      {/* عناصر هندسية ثابتة (Blueprint Accents) */}
      <div className="fixed left-10 top-0 h-full w-[1px] bg-white/5 z-0"></div>
      <div className="measuring-line fixed left-10 top-0 w-[2px] bg-mainGold z-10 shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>

      <main className="relative z-20">
        {/* --- SECTION 1: HERO --- */}
        <section className="h-screen flex items-center px-6 lg:px-24">
          <div className="max-w-5xl">
            <h1 className="reveal-h1 text-[12vw] lg:text-[10vw] font-bold tracking-tighter leading-none text-white">
              CRAFTING <br /> <span className="text-zinc-800">EXPERIENCE.</span>
            </h1>
            <div className="mt-12 flex gap-10 items-start">
              <span className="text-mainGold font-mono text-sm rotate-90 mt-4 tracking-[0.3em]">
                EST.1984
              </span>
              <p className="text-xl md:text-2xl text-zinc-400 font-extralight leading-relaxed max-w-2xl">
                Our team collectively holds{" "}
                <span className="text-white font-normal">200+ years</span> of
                architectural, design and urban planning experience.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE FIRM (Pinned) --- */}
        <section className="content-block min-h-screen bg-[#0F0F0F] border-t border-white/5 px-6 lg:px-24 pt-20">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-8 text-lg md:text-xl text-zinc-300 leading-loose">
                <p>
                  The firm is comprised of an experienced and talented designers
                  with skills varying from residential to commercial projects.
                </p>
                <p className="pl-6 border-l-2 border-mainGold/30 italic">
                  Our residential portfolio includes but is not limited to
                  multi-family developments, low-rises, mid-rises and custom
                  homes.
                </p>
                <p>
                  Also our commercial portfolio includes but is not limited to
                  development and design of office spaces, mixed use buildings,
                  corporate interiors industrial spaces.
                </p>
              </div>
            </div>
            <div className="hidden lg:block relative grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 border border-white/10 -m-4"></div>
              {/* الفيديو */}
              <div className="h-[500px] w-full bg-zinc-900 overflow-hidden">
                <video
                  src={kaller}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-all duration-1000"
                  alt="Kaller Architecture Showcase"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: THE OWNER (Pinned) --- */}
        <section className="content-block min-h-screen bg-[#141414] border-t border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
          <div className="grid lg:grid-cols-12 h-screen items-center">
            <div className="lg:col-span-5 h-full overflow-hidden">
              <img
                src={ownerImage}
                alt="Joseph B. Kaller"
                className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            <div className="lg:col-span-7 p-10 mb-9 lg:p-12 space-y-8">
              <div>
                <span className="text-mainGold tracking-[0.4em] text-[10px] font-bold uppercase">
                  Owner & President
                </span>
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                  JOSEPH B. KALLER
                </h3>
                <p className="text-zinc-500 font-mono text-sm mt-2">
                  AIA, LEED, AP BD+C
                </p>
              </div>
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-base md:text-lg max-w-xl">
                <p>
                  Joe founded Joseph B. Kaller & Associates, P.A. DBA Kaller
                  Architecture in 1984 with a strong passion for architecture in
                  South Florida. He graduated{" "}
                  <span className="text-white italic">Summa Cum Laude</span>{" "}
                  from the University of Miami with a degree in Architecture.
                </p>
                <p className="pl-6 border-l-2 border-mainGold/30 italic">
                  Joe is a licensed Architect and is an active member of the
                  American Institute of Architects and holds a LEED
                  certification.
                </p>
                <p>
                  After 40+ years in the architectural industry, Joe has
                  structured the company to focus on maintaining close
                  communication with clients, providing expert advice and
                  ultimately creating a long-lasting and successful real estate
                  project.
                </p>
                <div className="pt-8">
                  <a
                    href="mailto:joseph@kallerarchitects.com"
                    className="group flex items-center gap-6"
                  >
                    <span className="text-white text-sm tracking-widest border-b border-white/20 pb-2 group-hover:border-mainGold transition-all">
                      joseph@kallerarchitects.com
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-mainGold group-hover:border-mainGold transition-all">
                      →
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
