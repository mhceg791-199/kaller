import kaller from "/kaller2.webm";

export default function Firm() {
  return (
    <section className="content-block min-h-screen bg-[#0F0F0F] border-t border-white/5 px-6 md:px-12 lg:px-24 py-16 md:pt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="space-y-8 md:space-y-12 flex flex-col justify-center h-full">
          <div className="space-y-6 md:space-y-8 text-base md:text-xl text-zinc-300 leading-loose">
            <p>
              The firm is comprised of an experienced and talented designers
              with skills varying from residential to commercial projects.
            </p>
            <p>
              Our residential portfolio includes but is not limited to
              multi-family developments, low-rises, mid-rises and custom homes.
            </p>
            <p>
              Also our commercial portfolio includes but is not limited to
              development and design of office spaces, mixed use buildings,
              corporate interiors industrial spaces.
            </p>
          </div>
        </div>

        <div className="relative grayscale opacity-60 hover:opacity-100 transition-opacity duration-700 mt-10 lg:mt-0">
          <div className="absolute inset-0 border border-white/10 -m-2 md:-m-4"></div>
          <div className="aspect-video lg:h-[500px] w-full bg-zinc-900 overflow-hidden shadow-2xl">
            <video
              src={kaller}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
