import { awardItems } from "../../../data/awardItems";

export default function AwardsRecognition() {
  return (
    // تم تغيير h-[80vh] إلى min-h-screen أو h-auto لضمان عدم قص المحتوى في الموبايل
    <section className="relative min-h-screen md:h-[80vh] flex items-center bg-white text-black py-12 md:py-20 px-6 md:px-12 lg:px-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-10">
          <h2 className="text-xs sm:text-sm md:text-xl font-light tracking-[0.3em] uppercase text-gray-400">
            AWARDS & RECOGNITION
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-12">
          {awardItems.map((item, index) => (
            <div
              key={index}
              className="relative group aspect-square rounded-xl overflow-hidden bg-black/[0.03] backdrop-blur-md border border-black/10 shadow-sm shadow-black/5 hover:shadow-mainGold/30 transition-all duration-500 hover:scale-[1.03]"
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-30 group-hover:opacity-60"
              />

              {/* glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-mainGold/10 opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-12 md:w-16 h-[1px] bg-mainGold mb-3 md:mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase text-gray-900 group-hover:text-mainGold transition-colors text-center px-2">
                  {item.label}
                </p>
                <div className="w-12 md:w-16 h-[1px] bg-mainGold mt-3 md:mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              <div className="absolute top-4 right-4 w-3 h-3 md:w-4 md:h-4 border-t border-r border-black/20 group-hover:border-mainGold transition-colors" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-500">
            As our portfolio continues to grow, so does the recognition of the
            work we bring to the built environment.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-mainGold/5 md:bg-mainGold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-mainGold/5 md:bg-mainGold/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}