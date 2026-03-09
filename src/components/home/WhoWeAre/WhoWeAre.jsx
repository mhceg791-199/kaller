// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Play, Maximize2, Compass } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const IntentionalArchitecture = () => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   const specs = [
//     "Multi-Family & Residential",
//     "Retail & Commercial Centers",
//     "Hospitality & Entertainment",
//     "Civic & Community Projects",
//     "Adaptive Reuse & Renovations"
//   ];

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. أنيميشن كشف الفيديو (Shape Reveal)
//       gsap.from(".video-mask", {
//         clipPath: "inset(100% 0% 0% 0%)",
//         duration: 1.5,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".video-mask",
//           start: "top 80%",
//         }
//       });

//       // 2. حركة العناوين (Parallax Slide)
//       gsap.from(".side-title", {
//         rotate: -90,
//         y: 100,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 60%",
//           scrub: 1
//         }
//       });

//       // 3. أنيميشن قائمة الخدمات
//       gsap.from(".spec-line", {
//         opacity: 0,
//         x: -50,
//         stagger: 0.2,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ".spec-container",
//           start: "top 70%",
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="relative min-h-screen bg-[#0c0c0c] text-white py-24 overflow-hidden">

//       {/* Decorative Blueprint Lines */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-[10%] left-0 w-full h-[1px] bg-white" />
//         <div className="absolute top-0 left-[15%] w-[1px] h-full bg-white" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-10">

//           {/* الجانب الأيسر: الفيديو (The Visual Intention) */}
//           <div className="lg:col-span-7 relative">
//             <div className="video-mask relative aspect-video overflow-hidden rounded-sm border border-white/10 group">
//               {/* Overlay لزيادة الطابع الهندسي */}
//               <div className="absolute inset-0 z-10 border-[20px] border-black/20 pointer-events-none" />
//               <div className="absolute top-4 right-4 z-20 flex gap-2">
//                 <span className="px-2 py-1 bg-white/10 backdrop-blur-md text-[8px] font-mono tracking-widest uppercase">Live_Feed_01</span>
//                 <Maximize2 size={14} className="text-white/50" />
//               </div>

//               {/* الفيديو المرجعي (يمكنك وضع لينك فيديو حقيقي لمشاريعك) */}
//               <video
//                 ref={videoRef}
//                 autoPlay
//                 muted
//                 loop
//                 className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
//               >
//                 <source src="/kaller3.webm" type="video/mp4" />
//               </video>

//               {/* نص فوق الفيديو */}
//               <div className="absolute bottom-6 left-6 z-20">
//                 <h4 className="text-3xl font-black italic uppercase leading-none opacity-80">
//                   Built to <br /> <span className="text-[#C5A363]">Perform.</span>
//                 </h4>
//               </div>
//             </div>

//             <div className="mt-12 space-y-6 max-w-lg">
//               <div className="flex items-center gap-4 text-[#C5A363]">
//                 <Compass className="animate-spin-slow" />
//                 <span className="font-mono text-xs tracking-[0.4em] uppercase font-bold">Concept to Execution</span>
//               </div>
//               <p className="text-xl font-light leading-relaxed text-gray-400">
//                 We approach each assignment with clarity and discipline. <span className="text-white font-medium">No excess. No unnecessary complexity.</span> Just thoughtful design grounded in execution.
//               </p>
//             </div>
//           </div>

//           {/* الجانب الأيمن: المحتوى النصي */}
//           <div className="lg:col-span-5 flex flex-col justify-between pt-10 lg:pt-0">
//             <div className="spec-container space-y-10">
//               <div className="space-y-4">
//                 <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
//                   Who <br /> We Are.
//                 </h2>
//                 <div className="h-1 w-20 bg-[#C5A363]" />
//               </div>

//               <nav className="flex flex-col gap-6">
//                 {specs.map((item, i) => (
//                   <div key={i} className="spec-line group flex items-baseline gap-4 cursor-pointer">
//                     <span className="font-mono text-[10px] text-gray-600 group-hover:text-[#C5A363] transition-colors">
//                       0{i + 1}
//                     </span>
//                     <h3 className="text-xl lg:text-3xl font-light text-gray-400 group-hover:text-white group-hover:pl-4 transition-all duration-500">
//                       {item}
//                     </h3>
//                   </div>
//                 ))}
//               </nav>
//             </div>

//             <div className="mt-20 lg:mt-0 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative">
//                <p className="text-sm italic text-gray-400 mb-2">"Great architecture is not accidental."</p>
//                <h3 className="text-4xl font-black uppercase tracking-tighter italic">It is <span className="text-[#C5A363]">Deliberate.</span></h3>
//                <div className="absolute -bottom-2 -right-2 text-white/5 font-mono text-8xl font-black select-none uppercase">Intent</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Side HUD Title (Rotating) */}
//       <div className="side-title absolute right-0 top-1/4 origin-right hidden xl:block">
//         <span className="text-[12vw] font-black text-white opacity-[0.02] leading-none uppercase">Intention</span>
//       </div>

//       <style jsx>{`
//         .animate-spin-slow {
//           animation: spin 8s linear infinite;
//         }
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default IntentionalArchitecture;

////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Maximize2, Compass, ArrowRight } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const IntentionalArchitecture = () => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   const specs = [
//     "Multi-Family & Residential Development",
//     "Retail & Commercial Centers",
//     "Hospitality & Entertainment Venues",
//     "Civic & Community Projects",
//     "Adaptive Reuse & Renovations"
//   ];

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. أنيميشن كشف الفيديو (Shape Reveal)
//       gsap.from(".video-mask", {
//         clipPath: "inset(100% 0% 0% 0%)",
//         duration: 1.5,
//         ease: "expo.inOut",
//         scrollTrigger: {
//           trigger: ".video-mask",
//           start: "top 80%",
//         }
//       });

//       // 2. حركة العنوان الجانبي (Parallax)
//       gsap.from(".side-title", {
//         y: 200,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1.5
//         }
//       });

//       // 3. أنيميشن ظهور القائمة
//       gsap.from(".spec-line", {
//         opacity: 0,
//         x: -30,
//         stagger: 0.1,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".spec-container",
//           start: "top 75%",
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="relative min-h-screen bg-[#0c0c0c] text-white py-24 lg:py-32 overflow-hidden font-sans">

//       {/* --- Decorative Elements (Architectural Grid) --- */}
//       <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
//         <div className="absolute top-0 left-[10%] w-[1px] h-full bg-white" />
//         <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white" />
//         <div className="absolute bottom-[10%] left-0 w-full h-[1px] bg-white" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-16">

//           {/* الجانب الأيسر: الرؤية والفيديو */}
//           <div className="lg:col-span-7 space-y-12">
//             <div className="space-y-6">
//               <div className="flex items-center gap-3 text-[#C5A363]">
//                 <Compass className="animate-spin-slow" size={20} />
//                 <span className="font-mono text-[10px] tracking-[0.5em] uppercase font-bold">The Strategic Foundation</span>
//               </div>
//               <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
//                 Architecture <br /> With <span className="text-transparent stroke-white italic">Intention.</span>
//               </h2>
//               <p className="text-xl font-light leading-relaxed text-gray-400 max-w-2xl">
//                 At Kaller Architecture, every project begins with <span className="text-white font-medium border-b border-[#C5A363]">rigorous understanding</span> — of site, regulation, operational needs, financial realities, and client ambition.
//               </p>
//             </div>

//             {/* Video Viewport */}
//             <div className="video-mask relative aspect-video overflow-hidden rounded-sm border border-white/5 shadow-2xl group">
//               <div className="absolute inset-0 z-10 border-[15px] border-black/20 pointer-events-none" />
//               <div className="absolute top-4 right-4 z-20 flex gap-2">
//                 <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[8px] font-mono tracking-widest uppercase border border-white/10">Project_Feed_02</span>
//                 <Maximize2 size={12} className="text-white/40" />
//               </div>

//               <video
//                 ref={videoRef}
//                 autoPlay muted loop playsInline
//                 className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out grayscale-[0.5] group-hover:grayscale-0"
//               >
//                 <source src="/kaller3.webm" type="video/mp4" />
//               </video>

//               <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
//                  <div className="w-12 h-[1px] bg-[#C5A363]" />
//                  <span className="text-[10px] font-mono tracking-widest uppercase">Execution Phase</span>
//               </div>
//             </div>

//             <p className="text-lg text-gray-500 font-light italic border-l-2 border-[#C5A363] pl-6 max-w-lg">
//               "We approach each assignment with clarity and discipline. No excess. No unnecessary complexity. Just thoughtful design grounded in execution."
//             </p>
//           </div>

//           {/* الجانب الأيمن: التخصصات والختام */}
//           <div className="lg:col-span-5 flex flex-col justify-between pt-10 lg:pt-20">
//             <div className="spec-container space-y-12">
//               <div className="space-y-2">
//                 <h4 className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">Decades of Expertise In:</h4>
//                 <div className="w-12 h-1 bg-[#C5A363]" />
//               </div>

//               <nav className="flex flex-col">
//                 {specs.map((item, i) => (
//                   <div key={i} className="spec-line group flex items-center justify-between py-5 border-b border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors px-2">
//                     <div className="flex items-baseline gap-4">
//                       <span className="font-mono text-[9px] text-[#C5A363]">0{i + 1}</span>
//                       <h3 className="text-lg lg:text-xl font-light text-gray-400 group-hover:text-white transition-all duration-300">
//                         {item}
//                       </h3>
//                     </div>
//                     <ArrowRight size={16} className="text-white/0 group-hover:text-[#C5A363] -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
//                   </div>
//                 ))}
//               </nav>
//             </div>

//             {/* الختام (Deliberate Stamp) */}
//             <div className="mt-20 lg:mt-0 p-10 border border-[#C5A363]/20 bg-gradient-to-br from-[#C5A363]/5 to-transparent relative group overflow-hidden">
//                <div className="relative z-10">
//                  <p className="text-xs italic text-[#C5A363] mb-3 tracking-widest uppercase">Conclusion</p>
//                  <p className="text-xl text-gray-400 mb-4 font-light leading-snug">Great architecture is <br />not accidental.</p>
//                  <h3 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter italic leading-none">
//                    It is <br /> <span className="text-[#C5A363]">Deliberate.</span>
//                  </h3>
//                </div>
//                {/* Background Watermark */}
//                <div className="absolute -bottom-4 -right-2 text-white/5 font-mono text-9xl font-black select-none uppercase pointer-events-none group-hover:opacity-10 transition-opacity">
//                  KLR
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Side HUD Text */}
//       <div className="side-title absolute -right-20 top-1/2 -rotate-90 origin-center hidden xl:block">
//         <span className="text-[15vw] font-black text-white opacity-[0.02] leading-none uppercase select-none">
//           INTENTION
//         </span>
//       </div>

//       <style jsx>{`
//         .animate-spin-slow {
//           animation: spin 10s linear infinite;
//         }
//         .stroke-white {
//           -webkit-text-stroke: 1px rgba(255,255,255,0.5);
//         }
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default IntentionalArchitecture;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const IntentionalArchitecture = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const specs = [
    "Multi-Family & Residential Development",
    "Retail & Commercial Centers",
    "Hospitality & Entertainment Venues",
    "Civic & Community Projects",
    "Adaptive Reuse & Renovations",
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. أنيميشن كشف الفيديو (Shape Reveal)
      gsap.from(".video-mask", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.5,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".video-mask",
          start: "top 80%",
        },
      });

      // 2. حركة العنوان الجانبي (Parallax)
      gsap.from(".side-title", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 3. أنيميشن ظهور القائمة
      gsap.from(".spec-line", {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".spec-container",
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#262525] text-white py-10 lg:py-14 overflow-hidden font-sans"
    >
      {/* --- Decorative Elements (Architectural Grid) --- */}
      <div className="absolute inset-0 opacity-[0.09] pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-white" />
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white" />
        <div className="absolute bottom-[10%] left-0 w-full h-[1px] bg-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* الجانب الأيسر: الرؤية والفيديو */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="reveal-text block text-mainGold font-bolder tracking-[0.4em] text-sm mb-6">
                WHO WE ARE
              </h2>
              <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
                Architecture <br /> With{" "}
                <span className="text-transparent stroke-white italic">
                  Intention.
                </span>
              </h3>
              <p className="text-xl font-light leading-relaxed text-gray-400 max-w-2xl">
                At Kaller Architecture, every project begins with rigorous
                understanding — of site, regulation, operational needs,
                financial realities, and client ambition.
              </p>
            </div>

            {/* Video Viewport */}
            <div className="video-mask relative aspect-video overflow-hidden rounded-sm border border-white/5 shadow-2xl group">
              <div className="absolute inset-0 z-10 border-[15px] border-black/20 pointer-events-none" />
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[8px] font-mono tracking-widest uppercase border border-white/10">
                  Project
                </span>
                <Maximize2 size={12} className="text-white/40" />
              </div>

              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out grayscale-[0.5] group-hover:grayscale-0"
              >
                <source src="/kaller3.webm" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* الجانب الأيمن: التخصصات والختام */}
          <div className="lg:col-span-5 flex flex-col pt-10 lg:pt-0 mt-12">
            <div className="spec-container space-y-10">
              <div className="space-y-2">
                <h4 className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
                  Decades of Expertise In:
                </h4>
                <div className="w-12 h-1 bg-mainGold" />
              </div>

              <nav className="flex flex-col gap-6">
                {specs.map((item, i) => (
                  <div
                    key={i}
                    className="spec-line group flex items-baseline gap-4 cursor-pointer"
                  >
                    <span className="font-mono text-[10px] text-gray-600 group-hover:text-mainGold transition-colors">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-light text-gray-400 group-hover:text-white group-hover:pl-4 transition-all duration-500">
                      {item}
                    </h3>
                  </div>
                ))}
              </nav>
            </div>

            <p className="text-lg text-gray-500 mt-10 font-light italic border-l-2 border-mainGold pl-6 max-w-lg">
              We approach each assignment with clarity and discipline. No
              excess. No unnecessary complexity. Just thoughtful design grounded
              in execution.
            </p>

            <div className="mt-12 lg:mt-10 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative">
              <p className="text-sm italic text-gray-400 mb-2">
                "Great architecture is not accidental."
              </p>
              <h3 className="text-4xl font-black uppercase tracking-tighter italic">
                It is <span className="text-mainGold">Deliberate.</span>
              </h3>
              <div className="absolute -bottom-2 -right-2 text-white/5 font-mono text-8xl font-black select-none uppercase">
                MOSAIC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side HUD Text */}
      <div className="side-title absolute -right-20 top-1/2 -rotate-90 origin-center hidden xl:block">
        <span className="text-[15vw] font-black text-white opacity-[0.02] leading-none uppercase select-none">
          MOSAICHOLDING
        </span>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        .stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default IntentionalArchitecture;
