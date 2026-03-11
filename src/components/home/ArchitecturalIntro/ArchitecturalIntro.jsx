// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const ArchitecturalIntro = () => {
//   const sectionRef = useRef(null);
//   const lineRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // انيميشن الخط الذهبي المركزي
//       gsap.fromTo(
//         lineRef.current,
//         { height: 0 },
//         {
//           height: "100%",
//           duration: 1.5,
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 60%",
//             end: "bottom 20%",
//             scrub: true,
//           },
//         },
//       );

//       // ظهور النصوص بتأثير الـ Reveal
//       gsap.from(".reveal-text", {
//         y: 30,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-darkColor text-white py-10 md:py-12 px-6 overflow-hidden"
//     >
//       {/* Blueprint Grid Overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
//           backgroundSize: "50px 50px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
//         {/* الجزء الأيسر: العنوان الرئيسي */}
//         <div className="lg:col-span-5 sticky top-24">
//           <h2 className="reveal-text block text-mainGold font-bolder tracking-[0.4em] text-sm mb-6">
//             INTRODUCTION (Combined & Elevated)
//           </h2>
//           <h3 className="reveal-text text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter italic">
//             Rooted in <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
//               South Florida.
//             </span>
//           </h3>
//           <div className="reveal-text mt-8 h-[1px] w-24 bg-mainGold" />
//           <h4 className="reveal-text text-xl md:text-2xl font-light text-gray-400 mt-6 tracking-wide">
//             Connected to a Global Platform.
//           </h4>
//         </div>

//         {/* الخط الفاصل المتحرك (هندسي) */}
//         <div className="hidden lg:block lg:col-span-1 h-full min-h-[400px] relative">
//           <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/10" />
//           <div
//             ref={lineRef}
//             className="absolute left-1/2 top-0 w-[1px] bg-mainGold"
//           />
//         </div>

//         {/* الجزء الأيمن: المحتوى التفصيلي */}
//         <div className="lg:col-span-6 space-y-12">
//           <p className="reveal-text text-lg md:text-xl text-gray-300 font-light leading-relaxed border-r-2 border-mainGold/20 pr-8">
//             Founded in 1984,{" "}
//             <strong className="text-white">Kaller Architecture</strong> has
//             shaped the evolving landscape of South Florida through disciplined
//             design, technical precision, and enduring partnerships.
//           </p>

//           <p className="reveal-text text-gray-400 leading-relaxed font-light">
//             For over four decades, our firm has delivered residential towers,
//             retail centers, hospitality destinations, civic buildings, and
//             mixed-use developments that balance creativity with
//             constructability.
//           </p>

//           <div className="reveal-text bg-white/5 p-8 border border-white/10 backdrop-blur-sm relative group overflow-hidden">
//             {/* الديكور الزاوي للهوية الهندسية */}
//             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-mainGold" />
//             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-mainGold" />

//             <p className="text-sm md:text-base text-gray-300 leading-relaxed italic">
//               Today, as a proud subsidiary of{" "}
//               <Link
//                 className="text-mainGold font-bold"
//                 to="https://mosaicholding.com/"
//                 target="_blank"
//               >
//                 Mosaic Holding Corporation
//               </Link>
//               , Kaller combines deep local expertise with the strength of an
//               international network.
//             </p>
//           </div>

//           {/* الخاتمة القوية */}
//           <div className="reveal-text pt-8">
//             <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white">
//               We do not simply design buildings.
//             </h4>
//             <p className="text-mainGold text-xl md:text-2xl font-mono italic">
//               We design structures that perform, endure, and add long-term
//               value.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArchitecturalIntro;
