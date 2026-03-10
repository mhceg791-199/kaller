
export default function Crafting() {
  return (
    <section className="h-1/2 md:min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 md:py-0">
      <div className="max-w-5xl">
        <h1 className="reveal-h1 text-[13vw] lg:text-[10vw] font-bold tracking-tighter leading-[0.9] text-white">
          CRAFTING <br /> <span className="text-zinc-800">EXPERIENCE.</span>
        </h1>
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          <span className="text-mainGold font-mono text-xs md:text-sm md:rotate-90 md:mt-4 tracking-[0.3em] whitespace-nowrap">
            EST.1984
          </span>
          <p className="text-lg md:text-2xl text-zinc-400 font-extralight leading-relaxed max-w-2xl">
            Our team collectively holds{" "}
            <span className="text-white font-normal">200+ years</span> of
            architectural, design and urban planning experience.
          </p>
        </div>
      </div>
    </section>
  );
}
