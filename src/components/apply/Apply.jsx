
import ApplicationForm from "./ApplicationForm/ApplicationForm";
import JoinUsHero from "./JoinUsHero/JoinUsHero";
import WhyJoinUs from "./WhyJoinUs/WhyJoinUs";

export default function JoinUsPage() {
  return (
    <div className="e">
      <JoinUsHero />
      <WhyJoinUs />

      {/* Application Form Section */}
      <ApplicationForm/>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Questions About Working With Us?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Feel free to reach out to our HR team for any inquiries about
            careers at Kaller Architecture
          </p>
          <a
            href="mailto:careers@kallerarchitects.com"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact HR Team
          </a>
        </div>
      </section>
    </div>
  );
}

////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Upload, Send, ArrowRight } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// export default function JoinUsSection() {
//   const containerRef = useRef(null);
//   const formRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. أنيميشن العنوان والخلفية (Hero Reveal)
//       gsap.from(".join-title", {
//         y: 100,
//         opacity: 0,
//         duration: 1.5,
//         ease: "expo.out",
//         scrollTrigger: {
//           trigger: ".join-title",
//           start: "top 90%",
//         }
//       });

//       // 2. ظهور حقول النموذج بتتابع (Form Fields Stagger)
//       gsap.from(".form-field", {
//         x: -50,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: "top 70%",
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="bg-[#080808] text-white overflow-hidden font-sans">

//       {/* ====== PART 1: JOIN US (Visual Hero) ====== */}
//       <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
//         {/* صورة المبنى بتأثير القناع الهندي */}
//         <div className="absolute inset-0 z-0 opacity-40">
//           <img
//             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
//             className="w-full h-full object-cover grayscale brightness-50"
//             alt="Architecture Background"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
//         </div>

//         <div className="relative z-10 text-center max-w-4xl">
//           <h2 className="join-title text-[15vw] md:text-[12vw] font-black uppercase leading-none tracking-tighter mb-8 opacity-20 select-none">
//             JOIN US
//           </h2>

//           <div className="space-y-6 max-w-2xl mx-auto">
//              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
//               Our firm is always receiving new, unique and growing client projects throughout Florida. We don’t just need architects; we need <span className="text-amber-500 font-medium italic">visionaries</span>.
//              </p>
//              <div className="h-[2px] w-20 bg-amber-500 mx-auto" />
//              <p className="text-sm font-mono text-gray-500 uppercase tracking-[0.3em]">
//                // Designing the future together
//              </p>
//           </div>
//         </div>
//       </section>

//       {/* ====== PART 2: SHOW US WHO YOU ARE (The Form) ====== */}
//       <section ref={formRef} className="py-32 px-6 bg-[#0a0a0a] relative">
//         {/* خلفية الشبكة الهندسية */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
//              style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">

//           {/* الجانب الأيسر: نصوص توضيحية */}
//           <div className="space-y-12">
//             <div>
//               <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
//                 Show us <br />
//                 <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>who you are</span>
//               </h3>
//               <p className="text-gray-400 text-lg font-light leading-relaxed">
//                 If you're interested in joining our firm, this is your canvas.
//                 Tell us your story, your ambitions, and show us your craft.
//               </p>
//             </div>

//             <div className="space-y-8">
//               <div className="flex items-start gap-4 group">
//                 <div className="w-10 h-10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">01</div>
//                 <p className="text-sm text-gray-500 pt-2 uppercase tracking-widest">Submit your vision & portfolio</p>
//               </div>
//               <div className="flex items-start gap-4 group">
//                 <div className="w-10 h-10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">02</div>
//                 <p className="text-sm text-gray-500 pt-2 uppercase tracking-widest">Our partners review your craft</p>
//               </div>
//             </div>
//           </div>

//           {/* الجانب الأيمن: نموذج التقديم */}
//           <form className="grid grid-cols-1 gap-8">
//             <div className="form-field group">
//               <label className="block text-[10px] font-mono text-amber-500 uppercase mb-2 tracking-widest italic font-bold">// Full Name</label>
//               <input
//                 type="text"
//                 className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-colors text-xl font-light"
//                 placeholder="Ex: Dyaa Al-Qzaz"
//               />
//             </div>

//             <div className="form-field group">
//               <label className="block text-[10px] font-mono text-amber-500 uppercase mb-2 tracking-widest italic font-bold">// Email Address</label>
//               <input
//                 type="email"
//                 className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-colors text-xl font-light"
//                 placeholder="name@vision.com"
//               />
//             </div>

//             <div className="form-field group">
//               <label className="block text-[10px] font-mono text-amber-500 uppercase mb-2 tracking-widest italic font-bold">// Position of Interest</label>
//               <select className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-colors text-xl font-light appearance-none">
//                 <option className="bg-[#0a0a0a]">Architect</option>
//                 <option className="bg-[#0a0a0a]">Draftsman</option>
//                 <option className="bg-[#0a0a0a]">Manager</option>
//                 <option className="bg-[#0a0a0a]">Motion Designer</option>
//               </select>
//             </div>

//             {/* منطقة رفع الملفات الاحترافية */}
//             <div className="form-field mt-4">
//               <label className="relative flex flex-col items-center justify-center border-2 border-dashed border-white/5 py-12 px-6 rounded-xl hover:bg-white/[0.02] hover:border-amber-500/30 transition-all cursor-pointer group">
//                 <Upload className="w-10 h-10 text-gray-600 mb-4 group-hover:text-amber-500 transition-colors" />
//                 <span className="text-sm text-gray-400 uppercase tracking-widest mb-1">Upload CV & Portfolio</span>
//                 <span className="text-[10px] text-gray-600 uppercase italic">PDF, JPG, ZIP (Max 25MB)</span>
//                 <input type="file" className="hidden" />
//               </label>
//             </div>

//             {/* زر الإرسال المبتكر */}
//             <button className="form-field mt-10 w-full group overflow-hidden relative border border-amber-500 py-6 text-amber-500 font-bold uppercase tracking-[0.5em] hover:text-black transition-colors duration-500">
//                <span className="relative z-10 flex items-center justify-center gap-3">
//                  SEND APPLICATION <Send size={18} />
//                </span>
//                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             </button>
//           </form>

//         </div>
//       </section>

//       {/* Footer Meta Data */}
//       <footer className="py-10 border-t border-white/5 px-6 opacity-20 flex justify-between font-mono text-[9px] uppercase tracking-widest italic">
//          <span>Kaller Architecture // Careers Hub</span>
//          <span>Established 1984 // South Florida</span>
//       </footer>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function JoinUsSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // أنيميشن النصوص الأساسية
//       gsap.from(".join-text", {
//         y: 50,
//         opacity: 0,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".join-text",
//           start: "top 80%",
//         }
//       });

//       // أنيميشن بوابة التقديم
//       gsap.from(".upload-box", {
//         scale: 0.9,
//         opacity: 0,
//         duration: 1.2,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: ".upload-box",
//           start: "top 85%",
//         }
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

//       {/* 1. Background Layer with Architectural Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
//           className="w-full h-full object-cover opacity-20 grayscale"
//           alt="Architecture"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
//       </div>

//       {/* 2. Content Container */}
//       <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
//         <div className="max-w-4xl mx-auto">

//           {/* Section Title */}
//           <div className="mb-16">
//             <div className="join-text flex items-center gap-3 mb-4">
//               <div className="w-12 h-[1px] bg-mainGold"></div>
//               <span className="text-mainGold font-mono text-xs tracking-[0.5em] uppercase">Careers</span>
//             </div>
//             <h2 className="join-text text-7xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-none">
//               JOIN <br /> <span className="text-transparent border-white/20" style={{ WebkitTextStroke: '1px white' }}>OUR FIRM</span>
//             </h2>
//             <div className="join-text space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
//               <p>
//                 Our firm is always receiving new, unique and growing client projects throughout Florida so we always need talented individuals to join our team.
//               </p>
//               <p className="border-l-2 border-mainGold pl-6 italic">
//                 We're looking for hard-working, goal-oriented and creative architects, draftsmen and managers.
//               </p>
//             </div>
//           </div>

//           {/* 3. The "SHOW US WHO YOU ARE" Portal */}
//           <div className="mt-32 relative">
//             <div className="absolute -top-20 right-0 hidden md:block opacity-5">
//                <span className="text-[12rem] font-black uppercase select-none">PORTFOLIO</span>
//             </div>

//             <div className="text-center mb-12">
//               <h3 className="join-text text-3xl md:text-4xl font-bold uppercase tracking-tight">
//                 SHOW US <span className="text-mainGold">WHO YOU ARE</span>
//               </h3>
//               <p className="join-text text-gray-500 font-mono text-[10px] mt-2 uppercase tracking-[0.3em]">Drop your resume & portfolio below</p>
//             </div>

//             {/* Interactive Upload Box */}
//             <div className="upload-box group relative max-w-2xl mx-auto">
//               {/* Decorative Corners */}
//               <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-mainGold group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
//               <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-mainGold group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>

//               <label className="relative block w-full bg-[#111] border border-white/10 p-16 text-center cursor-pointer transition-all duration-500 hover:bg-[#151515] hover:border-mainGold/30">
//                 <input type="file" className="hidden" multiple />

//                 <div className="space-y-4">
//                   <div className="w-16 h-16 bg-mainGold/5 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
//                     <svg className="w-8 h-8 text-mainGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v16m8-8H4" />
//                     </svg>
//                   </div>
//                   <div className="text-white font-bold uppercase tracking-widest text-sm">Upload CV / Portfolio</div>
//                   <p className="text-gray-500 text-[10px] font-mono uppercase tracking-tighter">PDF, JPG or PNG up to 20MB</p>
//                 </div>
//               </label>

//               {/* Submit Button */}
//               <button className="mt-8 w-full bg-mainGold text-black font-bold py-5 uppercase tracking-[0.3em] text-xs hover:bg-white transition-colors duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
//                 Send Application
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Decorative Sidebar (Technical Data) */}
//       <div className="absolute left-10 bottom-10 hidden xl:block">
//         <div className="font-mono text-[8px] text-white/20 space-y-1 uppercase tracking-widest">
//           <div>Ref: Hiring_2026</div>
//           <div>Location: Florida_HQ</div>
//           <div>Status: Open_Positions</div>
//         </div>
//       </div>
//     </section>
//   );
// }

//////////////////////////////////////////////////////

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { User, FileText, Upload, BrainCircuit, Check } from "lucide-react";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const JoinUsRedesign = () => {
//   const sectionRef = useRef(null);
//   const blueprintRef = useRef(null);
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     // 1. GSAP: انيميشن ظهور النصوص (Fade & Stagger)
//     let ctxGSAP = gsap.context(() => {
//       gsap.from(".fade-item", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.2,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%", // يبدأ عند اقتراب السكشن من منتصف الشاشة
//         },
//       });

//       // 2. GSAP: انيميشن "رسم المخطط" المعماري (Blueprint Drawing Effect)
//       // هذا يتطلب ملف SVG مجهز مسبقاً، لكن سنحاكيه بتغيير الشفافية (Opacity)
//       gsap.from(blueprintRef.current, {
//         opacity: 0.1,
//         strokeDasharray: "1000",
//         strokeDashoffset: "1000",
//         duration: 3,
//         ease: "none",
//         scrollTrigger: {
//           trigger: blueprintRef.current,
//           start: "top 70%",
//           end: "bottom 30%",
//           scrub: true, // يربط تقدم الرواسم بالسكرول
//         },
//       });
//     }, sectionRef);

//     // Clean up
//     return () => ctxGSAP.revert();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     // يمكنك إضافة منطق إرسال البيانات الفعلي هنا
//     setTimeout(() => setSubmitted(false), 4000);
//   }

//   return (
//     <div ref={sectionRef} className="bg-[#111111] text-white overflow-hidden">

//       {/* ------------------- SECTION 1: JOIN US HERO ------------------- */}
//       <section className="relative min-h-[90vh] flex items-center py-20 px-6 md:px-12 lg:px-20 border-b border-white/5">

//         {/* خلفية معمارية شبكية هندسية خفيفة جداً (Architectural Grid Overlay) */}
//         <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none"
//              style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

//         <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center relative z-10">

//           {/* الجانب الأيسر: المحتوى النصي */}
//           <div className="space-y-12 max-w-2xl">
//             <div className="fade-item flex items-center gap-4 text-purple-600 font-mono tracking-widest uppercase text-xs">
//                 <BrainCircuit size={20}/>
//                 <span>Kaller Architecture / Building Teams</span>
//             </div>
//             <h2 className="fade-item text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
//               JOIN <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>OUR TEAM.</span>
//             </h2>
//             <p className="fade-item text-xl md:text-2xl text-gray-300 font-light leading-relaxed border-l-2 border-white/10 pl-6">
//               Our firm is always receiving new, unique and growing client projects throughout Florida. To continue building exceptional experiences, we need talented, hardworking, and goal-oriented individuals.
//             </p>
//             <div className="fade-item space-y-3 font-mono text-gray-400 text-sm">
//                 <p>// SEEKING: Creative Architects, Drafting experts, Management professionals.</p>
//                 <p>// LOCATION: Expanding opportunities in Florida.</p>
//             </div>
//           </div>

//           {/* الجانب الأيمن: المخطط المعماري المتحرك (Blueprint Simulation) */}
//           <div className="relative group p-10 flex justify-center items-center">
//              {/* حاوية للمحاكاة (أو SVG Blueprint حقيقي) */}
//              <div ref={blueprintRef} className="absolute inset-0 border-[3px] border-white/10 rounded-sm opacity-60">
//                 <div className="absolute top-0 right-0 p-4 font-mono text-white/20 text-[10px] tracking-widest rotate-90 origin-top-right">SCALE: 1:100 // BLPRNT_PROJ_FL24</div>
//              </div>

//              {/* صورة توضيحية خفيفة (Ghost Image) من التصميم القديم كجزء من المخطط */}
//              <img src="/bluprint_structure.png" alt="blueprint ghost structural view"
//                   className="w-full h-auto opacity-[0.08] mix-blend-overlay scale-110"
//              />

//              {/* عنوان مائل يظهر فقط في هذا الجانب */}
//              <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 font-black uppercase tracking-tighter text-[10vw]">STRUCTURE</span>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* ------------------- SECTION 2: SHOW US WHO YOU ARE ------------------- */}
//       <section className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
//         <div className="container mx-auto max-w-7xl relative z-10">

//           {/* Header */}
//           <div className="mb-24 space-y-4">
//             <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase italic">
//               SHOW US <br /> WHO <span className="text-purple-600">YOU ARE.</span>
//             </h3>
//             <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
//               If you’re interested in joining our firm then please share your resume and showcase your best work. Our process is Deliberate.
//             </p>
//           </div>

//           {/* نموذج التقديم العصري */}
//           <div className="max-w-5xl mx-auto p-12 bg-white/5 border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden group">
//             {/* طبقة حماية للموزاييك */}
//              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

//             {submitted ? (
//                 <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 space-y-6">
//                     <Check className="text-purple-500 w-24 h-24" />
//                     <h4 className="text-4xl font-bold">Thank You for Connecting!</h4>
//                     <p className="text-gray-400">Our hiring team has received your details. We look forward to exploring your portfolio.</p>
//                 </div>
//             ) : (
//                 <form onSubmit={handleSubmit} className="relative z-10 grid md:grid-cols-12 gap-10">

//                     {/* الجانب الأيسر للنموذج: البيانات */}
//                     <div className="md:col-span-6 space-y-8">
//                         <div className="space-y-3">
//                             <label className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">Your Identity</label>
//                             <input type="text" placeholder="FULL NAME" required
//                                    className="w-full bg-black/30 p-5 rounded-sm border border-white/10 focus:border-purple-600 focus:bg-black/50 transition-colors font-mono tracking-wider"/>
//                         </div>
//                         <div className="space-y-3">
//                             <label className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">Professional Title</label>
//                             <input type="text" placeholder="JOB POSITION (e.g., ARCHITECT, DRAFTSMAN)" required
//                                    className="w-full bg-black/30 p-5 rounded-sm border border-white/10 focus:border-purple-600 focus:bg-black/50 transition-colors font-mono tracking-wider"/>
//                         </div>
//                         <div className="space-y-3">
//                             <label className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">Email Address</label>
//                             <input type="email" placeholder="example@architect.com" required
//                                    className="w-full bg-black/30 p-5 rounded-sm border border-white/10 focus:border-purple-600 focus:bg-black/50 transition-colors font-mono tracking-wider"/>
//                         </div>
//                     </div>

//                     {/* الجانب الأيمن للنموذج: رفع الملفات (Drag & Drop Mockup) */}
//                     <div className="md:col-span-6 space-y-10">
//                         <div className="space-y-3">
//                             <label className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">Curriculum Vitae (PDF)</label>
//                             <div className="group/drop flex items-center justify-center gap-4 w-full h-24 bg-black/30 p-5 rounded-lg border-2 border-dashed border-white/10 hover:border-purple-600 hover:bg-black/50 transition-colors cursor-pointer text-gray-600 hover:text-white">
//                                 <FileText size={20}/>
//                                 <p className="text-sm font-light">Drag resume or click to upload</p>
//                                 <Upload size={16}/>
//                             </div>
//                         </div>
//                         <div className="space-y-3">
//                             <label className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">Portfolio (PDF or Web Link)</label>
//                             <div className="group/drop flex items-center justify-center gap-4 w-full h-24 bg-black/30 p-5 rounded-lg border-2 border-dashed border-white/10 hover:border-purple-600 hover:bg-black/50 transition-colors cursor-pointer text-gray-600 hover:text-white">
//                                 <Upload size={20}/>
//                                 <p className="text-sm font-light">Share your work: drag or link</p>
//                                 <BrainCircuit size={16}/>
//                             </div>
//                         </div>

//                         <div className="pt-6 flex justify-end">
//                             <button type="submit" className="flex gap-3 items-center px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-colors duration-500 rounded-sm shadow-xl">
//                                 <span>DELIBERATE SUBMISSION</span>
//                                 <User size={16} fill="black" />
//                             </button>
//                         </div>
//                     </div>

//                 </form>
//             )}

//             {/* تفصيل جرافيكي في الزاوية */}
//             <div className="absolute top-1/2 right-10 -translate-y-1/2 vertical-text hidden lg:block opacity-[0.03]">
//                 <span className="text-[20vw] font-black text-white italic -rotate-90 block tracking-widest">KALLER</span>
//             </div>
//           </div>
//         </div>

//         {/* تذييل فني للسكشن يكمل المفهوم */}
//         <div className="absolute bottom-6 right-6 font-mono text-[9px] text-gray-600 rotate-90 origin-right">
//             STRUCTURE // CONNECTIVITY // INTENTION
//         </div>
//       </section>

//       {/* تأثير التفعيل ويندوز (Activate Windows) الذي طلبته، بلمسة جرافيكية مدمجة */}
//       <div className="fixed bottom-3 right-6 z-[1000] opacity-30 select-none pointer-events-none group-hover:opacity-10 transition-opacity">
//         <p className="text-xs text-gray-400 font-mono tracking-wide">Connect Windows</p>
//         <p className="text-[10px] text-gray-600 font-mono">Move mouse over connections to learn more</p>
//       </div>

//     </div>
//   );
// };

// export default JoinUsRedesign;
