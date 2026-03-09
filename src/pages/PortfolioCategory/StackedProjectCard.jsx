// Multi-Image Stacked Cards
import { useState, memo } from "react";

export const StackedProjectCard = memo(({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handleCardClick = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  return (
    <div 
      className="group relative cursor-pointer aspect-[4/3]"
      onClick={handleCardClick}
    >
      {/* Stacked Cards Container */}
      <div className="relative w-full h-full perspective-1000">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          
          // Stack calculations
          const rotation = offset * 3;
          const zIndex = totalImages - absOffset;
          const scale = 1 - (absOffset * 0.02);
          const translateY = absOffset * -8;
          const opacity = absOffset > 2 ? 0 : 1 - (absOffset * 0.2);

          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-700 ease-out rounded-xl overflow-hidden shadow-2xl shadow-black/40"
              style={{
                transform: `
                  translateY(${translateY}px) 
                  scale(${scale}) 
                  rotate(${rotation}deg)
                  translateZ(${-absOffset * 20}px)
                `,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src={image}
                alt={`${title} - ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Title - only show on active card */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-medium text-white drop-shadow-lg">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {currentIndex + 1} / {totalImages}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Click indicator */}
      <div className="absolute top-4 right-4 z-50 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-medium pointer-events-none">
        Click to browse
      </div>
    </div>
  );
});

StackedProjectCard.displayName = 'StackedProjectCard';