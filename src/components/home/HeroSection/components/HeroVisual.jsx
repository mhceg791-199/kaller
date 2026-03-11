const HeroVisual = ({ imageRef, slide }) => {

  return (
    <div className="absolute inset-0 z-0">

      <div
        ref={imageRef}
        className="w-full h-full bg-cover bg-center transition-transform duration-[6000ms]"
        style={{
          backgroundImage: `url(${slide.image})`,
          transform: "scale(1.1)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

    </div>
  );
};

export default HeroVisual;