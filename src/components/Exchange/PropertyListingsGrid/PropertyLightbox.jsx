import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyLightbox({
  property,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) {
  if (!property) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:rotate-90 duration-300"
      >
        <X size={24} />
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
        >
          <ChevronRight size={28} />
        </button>
      )}

      <div
        className="max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] bg-gray-900 mb-6 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide text-center">
          {property.title}
        </h2>

        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 text-center max-w-4xl">
          {property.description}
        </p>
      </div>
    </div>
  );
}