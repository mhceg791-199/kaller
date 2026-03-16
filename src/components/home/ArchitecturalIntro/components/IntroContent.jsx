import { Link } from "react-router-dom";

const IntroContent = ({ lineRef }) => {
  return (
    <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-12 gap-28 items-start">
      {/* LEFT SIDE */}
      <div className="lg:col-span-5 sticky top-24">
        <h2 className="reveal-text text-mainGold font-bolder tracking-[0.4em] text-sm mb-6">
          INTRODUCTION (Combined & Elevated)
        </h2>

        <h3 className="reveal-text text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter italic">
          Rooted in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            South Florida.
          </span>
        </h3>

        <div className="reveal-text mt-8 h-[1px] w-24 bg-mainGold" />

        <h4 className="reveal-text text-xl md:text-2xl font-light text-gray-400 mt-6 tracking-wide">
          Connected to a Global Platform.
        </h4>
      </div>

      {/* CENTER LINE */}
      <div className="hidden lg:block lg:col-span-1 h-full min-h-[400px] relative">
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/10" />

        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 w-[1px] bg-mainGold"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-6 space-y-12 md:px-4">
        <p className="reveal-text text-lg md:text-xl text-gray-300 font-light leading-relaxed border-r-2 border-mainGold/20 pr-8">
          Founded in 1984,{" "}
          <strong className="text-white">Kaller Architecture</strong>{" "}
          has shaped the evolving landscape of South Florida through disciplined
          design, technical precision, and enduring partnerships.
        </p>

        <p className="reveal-text text-gray-400 leading-relaxed font-light">
          For over four decades, our firm has delivered residential towers,
          retail centers, hospitality destinations, civic buildings, and
          mixed-use developments that balance creativity with constructability
        </p>

        <div className="reveal-text bg-white/5 p-8 border border-white/10 backdrop-blur-sm relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-mainGold" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-mainGold" />

          <p className="text-sm md:text-base text-gray-300 leading-relaxed italic">
            Today, as a proud subsidiary of
            <Link
              className="text-mainGold font-bold ml-1"
              to="https://mosaicholding.com/"
              target="_blank"
            >
              Mosaic Holding Corporation
            </Link>
            , Kaller combines deep local expertise with the strength of an international network.
          </p>
        </div>

        <div className="reveal-text pt-4">
          <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white">
            We do not simply design buildings.
          </h4>

          <p className="text-mainGold text-xl md:text-2xl font-mono italic">
            We design structures that perform, endure, and add long-term value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
