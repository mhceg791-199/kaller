const OurStoryVisual = () => {
  return (
    <>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/kaller3.webm" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="parallax-bg absolute top-20 md:top-40 left-5 md:left-10 text-[25vw] md:text-[20vw] font-black text-white/[0.03] select-none uppercase leading-none">
        Legacy
      </div>
    </>
  );
};

export default OurStoryVisual;