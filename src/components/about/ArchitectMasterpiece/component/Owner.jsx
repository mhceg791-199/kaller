import ownerImage from "../../../../assets/about/Kaller.avif";

export default function Owner() {
  return (
    <section className="content-block min-h-screen bg-[#141414] border-t border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
      <div className="grid lg:grid-cols-12 min-h-screen items-stretch">
        <div className="lg:col-span-5 h-[50vh] lg:h-full overflow-hidden">
          <img
            src={ownerImage}
            alt="Joseph B. Kaller"
            className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-[2s]"
          />
        </div>
        <div className="lg:col-span-7 p-6 md:p-12 lg:px-20 lg:py-2 flex flex-col justify-center space-y-6 md:space-y-8">
          <div>
            <span className="text-mainGold tracking-[0.4em] text-[10px] font-bold uppercase block mb-2">
              Owner & President
            </span>
            <h3 className="text-3xl md:text-6xl font-bold text-white tracking-tighter">
              JOSEPH B. KALLER
            </h3>
            <p className="text-zinc-500 font-mono text-xs md:text-sm mt-2">
              AIA, LEED, AP BD+C
            </p>
          </div>
          <div className="space-y-5 text-mainColor font-light leading-relaxed text-sm md:text-lg max-w-xl">
            <p>
              Joe founded Kaller Architecture in 1984 with a strong passion for
              architecture in South Florida. He graduated{" "}
              <span className="text-white italic">Summa Cum Laude</span> from
              the University of Miami with a degree in Architecture.
            </p>
            <p className="pl-4 md:pl-6 border-l-2 border-mainGold/30 italic">
              Joe is a licensed Architect and an active member of the American
              Institute of Architects and holds a LEED certification.
            </p>
            <p>
              After 40+ years, Joe focuses on maintaining close communication
              with clients and providing expert advice and ultimately creating a
              long-lasting and successful real estate project.
            </p>
            <p>
              He has been an integral part of thousands of real estate projects
              that have influenced growth in Broward County, Miami-Dade County,
              Palm Beach County and Monroe County.
            </p>
            <div className="pt-4 md:pt-1">
              <a
                href="mailto:joseph@kallerarchitects.com"
                className="group flex items-center gap-4 md:gap-6"
              >
                <span className="text-white text-[10px] md:text-sm tracking-widest border-b border-white/20 pb-2 group-hover:border-mainGold transition-all truncate">
                  joseph@kallerarchitects.com
                </span>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-mainGold group-hover:border-mainGold transition-all">
                  <span className="text-white">→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
