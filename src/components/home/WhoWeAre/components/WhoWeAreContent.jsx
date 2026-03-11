import { Maximize2 } from "lucide-react";
import { specs } from "../../../../data/specs";

const WhoWeAreContent = () => {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-12 gap-4">
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h2 className="text-mainGold tracking-[0.4em] text-base">
              WHO WE ARE
            </h2>

            <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              Architecture <br />
              With{" "}
              <span className="text-transparent stroke-white-who italic">
                Intention.
              </span>
            </h3>

            <p className="text-xl font-light text-gray-400 max-w-2xl">
              At Kaller Architecture, every project begins with rigorous
              understanding — of site, regulation, operational needs, financial
              realities, and client ambition.
            </p>
          </div>

          {/* VIDEO */}
          <div className="video-mask relative aspect-video overflow-hidden rounded-sm border border-white/5 shadow-2xl group">
            <div className="absolute inset-0 z-10 border-[15px] border-black/20 pointer-events-none" />

            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <span className="px-3 py-1 bg-black/60 text-[8px] font-mono tracking-widest uppercase border border-white/10">
                Project
              </span>

              <Maximize2 size={12} className="text-white/40" />
            </div>

            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] grayscale-[0.5] group-hover:grayscale-0"
            >
              <source src="/kaller3.webm" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* RIGHT SIDE */}
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
                  <span className="font-mono text-[10px] text-gray-600 group-hover:text-mainGold">
                    0{i + 1}
                  </span>

                  <h3 className="text-xl lg:text-2xl font-light text-gray-400 group-hover:text-white group-hover:pl-4 transition-all duration-500">
                    {item}
                  </h3>
                </div>
              ))}
            </nav>
          </div>

          <p className="text-lg text-gray-500 mt-10 italic border-l-2 border-mainGold pl-6 max-w-lg">
            We approach each assignment with clarity and discipline. No excess.
            No unnecessary complexity. Just thoughtful design grounded in
            execution.
          </p>

          <div className="mt-12 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative">
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
  );
};

export default WhoWeAreContent;
