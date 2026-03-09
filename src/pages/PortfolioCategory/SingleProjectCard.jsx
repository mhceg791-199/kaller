// Single Image Project Card
import { memo } from "react";

export const SingleProjectCard = memo(({ title, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-2xl shadow-black/40 bg-gray-800 aspect-[4/3]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl md:text-2xl font-medium text-white drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  );
});

SingleProjectCard.displayName = 'SingleProjectCard';

