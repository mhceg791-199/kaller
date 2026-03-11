import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroControls = ({
  current,
  slides,
  nextSlide,
  prevSlide,
  progressRef
}) => {

  return (
    <>

      <div className="absolute bottom-12 right-8 md:right-12 z-30 flex items-end gap-4 md:gap-12">

        <div className="flex flex-col items-center gap-4">

          <span className="text-mainGold font-mono text-sm">
            0{current + 1}
          </span>

          <div className="h-20 w-[1px] bg-white/20 relative">

            <div
              className="absolute top-0 left-0 w-full bg-mainGold"
              style={{
                height: `${((current + 1) / slides.length) * 100}%`
              }}
            />

          </div>

          <span className="text-white/20 font-mono text-sm">
            0{slides.length}
          </span>

        </div>

        <div className="flex flex-col gap-2">

          <button onClick={prevSlide} className="p-4 border border-white/10 text-mainColor hover:bg-mainGold transition-all">
            <ArrowLeft size={20} />
          </button>

          <button onClick={nextSlide} className="p-4 border border-white/10 text-mainColor hover:bg-mainGold transition-all">
            <ArrowRight size={20} />
          </button>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 px-12 flex flex-col justify-center">

        <div className="relative w-full h-[2px] bg-white/10">

          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-mainGold"
          />

        </div>

      </div>

    </>
  );
};

export default HeroControls;