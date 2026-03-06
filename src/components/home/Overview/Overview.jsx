// export default function AboutSection() {
//   return (
//     <section id="about" className="py-20 md:py-32 bg-white">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
//           {/* Image */}
//           <div className="order-2 md:order-1">
//             <img
//               src="https://static.wixstatic.com/media/9d6bec_4846f940240c425d841c73cb10d85d09~mv2_d_2706_1698_s_2.jpg/v1/fill/w_709,h_532,al_c,q_85,enc_avif,quality_auto/9d6bec_4846f940240c425d841c73cb10d85d09~mv2_d_2706_1698_s_2.jpg"
//               alt="Modern Architecture"
//               className="w-full h-auto"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="order-1 md:order-2">
//             <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">
//               ABOUT US
//             </h2>
//             <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
//               <p>
//                 Kaller Architecture makes every effort to research and cater to our clients' needs by providing the most qualified personnel in the field.
//                 Our team is able to provide personalized services through open and consistent lines of communication. Although our design objectives are
//                 specialized per client, our architects and designers will apply their unique creativity with a refreshing and inventive appearance to each
//                 project. In turn, Kaller Architecture's ability to cater and develop our client's vision has given us the wonderful privilege to form
//                 long-term partnerships throughout South Florida. Fortunately, our firm has designed real estate development projects in Miami, Hollywood,
//                 Fort Lauderdale and cities across South Florida.
//               </p>
//               <p>
//                 Ultimately, Kaller Architecture's most important philosophy is integrity and a quality architectural design with a detail that is best
//                 described as sensitivity to client's needs and vision.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // أنيميشن الخط الهندسي العلوي
      gsap.from(lineRef.current, {
        width: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // أنيميشن النصوص (Staggered Fade In)
      gsap.from(".about-text", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
        },
      });

      // أنيميشن الصور (الكتل الهندسية)
      gsap.from(".about-image", {
        x: 100,
        opacity: 0,
        scale: 1.1,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#fcfcfc] py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* خلفية بمربعات هندسية (Blueprint Grid) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* الجزء النصي */}
        <div ref={textRef} className="relative z-10">
          <div ref={lineRef} className="h-[2px] bg-lightColor mb-8 w-24" />

          <h2 className="about-text text-5xl md:text-7xl font-black text-mainColor mb-8 leading-tight uppercase">
            Catering to <br />
            <span className="text-lightColor italic font-serif">
              Your Vision.
            </span>
          </h2>

          <div className="about-text space-y-6 text-gray-700 text-lg leading-relaxed font-light max-w-xl border-l-2 border-gray-100 pl-8">
            <p>
              <strong className="text-mainGold font-bold">
                Kaller Architecture
              </strong>{" "}
              makes every effort to research and cater to our clients' needs by
              providing the most qualified personnel in the field.
            </p>
            <p>
              Our team is able to provide personalized services through open and
              consistent lines of communication. Although our design objectives
              are specialized per client, our architects and designers will
              apply their unique creativity with a refreshing and inventive
              appearance to each project. In turn, Kaller Architecture's ability
              to cater and develop our client's vision has given us the
              wonderful privilege to form long-term partnerships throughout
              South Florida. Fortunately, our firm has designed real estate
              development projects in Miami, Hollywood, Fort Lauderdale and
              cities across{" "}
              <span className="text-mainGold font-medium">South Florida</span>
              .
            </p>
            <p>
              Ultimately, Kaller Architecture's most important philosophy is
              integrity and a quality architectural design with a detail that is
              best described as sensitivity to client's needs and vision.
            </p>
          </div>

          <div className="about-text mt-12 flex items-center gap-6">
            <div className="text-center">
              <span className="block text-4xl font-bold text-mainColor">
                20+
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Years Experience
              </span>
            </div>
            <div className="w-[1px] h-12 bg-gray-200" />
            <div className="text-center">
              <span className="block text-4xl font-bold text-mainColor">
                ML
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Miami & Beyond
              </span>
            </div>
          </div>
        </div>

        {/* الجزء البصري (Geometric Composition) */}
        <div ref={imageRef} className="relative h-[500px] md:h-[600px]">
          {/* الكتلة الكبيرة */}
          <div className="about-image absolute right-0 top-0 w-4/5 h-4/5 bg-gray-200 overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000"
              alt="Architecture"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* الكتلة المتداخلة الصغير (The Detail) */}
          <div className="about-image absolute left-0 bottom-0 w-3/5 h-1/2 bg-lightColor p-1 shadow-2xl z-20">
            <div className="w-full h-full bg-white overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
                alt="Detail"
                className="w-full h-full object-cover"
              />
              {/* Overlay هندسي */}
              <div className="absolute inset-0 bg-mainColor/20 mix-blend-multiply" />
            </div>
          </div>

          {/* عناصر ديكورية هندسية */}
          <div className="about-image absolute -right-4 -bottom-4 w-24 h-24 border-r-2 border-b-2 border-lightColor" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
