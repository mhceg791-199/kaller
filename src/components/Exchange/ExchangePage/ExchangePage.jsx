// import BuyingSteps from "../BuyingSteps/BuyingSteps";
// import PropertyExchange from "../PropertyExchange/PropertyExchange";
// import SellingSteps from "../SellingSteps/SellingSteps";

// // Property listings data
// const propertyListings = [
//   {
//     id: 1,
//     title: "2000 Van Buren, Hollywood",
//     image:
//       "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
//     description:
//       "NEW 70,000+ SQ. FT., 62 UNIT, 8-STORY RESIDENTIAL DEVELOPMENT W/ AMENITIES. SITE PLAN APPROVED & PERMITS RECEIVED. ZONED PS-3 (PARKSIDE HIGH INTENSITY MIXED-USE).",
//   },
//   {
//     id: 2,
//     title: "100 SW 10 St., Hallandale Beach",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
//     description:
//       "READY-TO-BUILD 9 TOWNHOMES - EACH UNIT IS 2,017 SQ. FT., TWO-STORY AND HAS 3 BED, 2.5 BATH.",
//   },
//   {
//     id: 3,
//     title: "901 SW 9 St., Hallandale Beach",
//     image:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
//     description:
//       "Site Plan Approved, 27,613 Sq. Ft. Building Area Comprised of a 20 Unit Townhouse Rental Community. Each Unit Area has 1,286 Sq. Ft. Under Air, Private Fenced In Backyard, Private BBQ Area. 70,236 Sq. Ft. Lot Area.",
//   },
//   {
//     id: 4,
//     title: "5919 SW 26th St., West Park",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
//     description:
//       "13,195 Sq. Ft. Lot with Design Completed Project with Zoning that Allows to Build 17 Unit Apartment Building.",
//   },
// ];

// export default function ExchangePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Main Content */}
//       <main>
//         {/* Hero Section with Background Image */}
//         <PropertyExchange />

//         {/* Selling Section */}
//         <SellingSteps />

//         {/* Buying Section */}
//         <BuyingSteps />

//         {/* Property Listings Grid */}
//         <section className="py-20 bg-gray-900">
//           <div className="container mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               {propertyListings.map((property) => (
//                 <div
//                   key={property.id}
//                   className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
//                 >
//                   {/* Property Image */}
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//                   {/* Property Title */}
//                   <div className="absolute bottom-0 left-0 right-0 p-8">
//                     <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
//                       {property.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Agents Footer in Grid */}
//             <div className="mt-5 bg-gray-700 p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//                 <div className="text-center md:text-left">
//                   <p className="text-white font-light mb-1">Hope Kaller</p>
//                   <p className="text-white/80 text-sm mb-3">Lic: 3238392</p>
//                   <img
//                     src="/exchange/max.png"
//                     alt="RE/MAX"
//                     className="h-12 bg-white p-2 mx-auto md:mx-0"
//                   />
//                 </div>
//                 <div className="text-center md:text-left">
//                   <p className="text-white font-light mb-1">
//                     Brandon Kaller, P.A.
//                   </p>
//                   <p className="text-white/80 text-sm mb-3">Lic: 3238392</p>
//                   <img
//                     src="/exchange/arn.jpg"
//                     alt="ARN"
//                     className="h-12 bg-white p-2 mx-auto md:mx-0"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


import { useState, useEffect } from "react";

import BuyingSteps from "../BuyingSteps/BuyingSteps";
import PropertyExchange from "../PropertyExchange/PropertyExchange";
import SellingSteps from "../SellingSteps/SellingSteps";

import PropertyLightbox from "../PropertyListingsGrid/PropertyLightbox";
import PropertyListingsGrid from "../PropertyListingsGrid/PropertyListingsGrid";
import { propertyListings } from "../../../data/propertyListings";



export default function ExchangePage() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (property, index) => {
    setSelectedProperty(property);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProperty(null);
    setCurrentIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedProperty(propertyListings[newIndex]);
    }
  };

  const goToNext = () => {
    if (currentIndex < propertyListings.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedProperty(propertyListings[newIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProperty) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProperty, currentIndex]);

  return (
    <div className="min-h-screen bg-white">
      <main>

        <PropertyExchange />

        <SellingSteps />

        <BuyingSteps />

        <PropertyListingsGrid
          properties={propertyListings}
          onSelect={openLightbox}
        />

      </main>

      {selectedProperty && (
        <PropertyLightbox
          property={selectedProperty}
          onClose={closeLightbox}
          onPrev={goToPrevious}
          onNext={goToNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < propertyListings.length - 1}
        />
      )}
    </div>
  );
}

// import { useState } from "react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import BuyingSteps from "../BuyingSteps/BuyingSteps";
// import PropertyExchange from "../PropertyExchange/PropertyExchange";
// import SellingSteps from "../SellingSteps/SellingSteps";


// // Property listings data
// const propertyListings = [
//   {
//     id: 1,
//     title: "2000 Van Buren, Hollywood",
//     image: "/exchange/pl1.avif",
//     description: "NEW 70,000+ SQ. FT., 62 UNIT, 8-STORY RESIDENTIAL DEVELOPMENT W/ AMENITIES. SITE PLAN APPROVED & PERMITS RECEIVED. ZONED PS-3 (PARKSIDE HIGH INTENSITY MIXED-USE).",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "100 SW 10 St., Hallandale Beach",
//     image: "/exchange/pl2.avif",
//     description: "READY-TO-BUILD 9 TOWNHOMES - EACH UNIT IS 2,017 SQ. FT., TWO-STORY AND HAS 3 BED, 2.5 BATH.",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "901 SW 9 St., Hallandale Beach",
//     image: "/exchange/pl3.avif",
//     description: "Site Plan Approved, 27,613 Sq. Ft. Building Area Comprised of a 20 Unit Townhouse Rental Community. Each Unit Area has 1,286 Sq. Ft. Under Air, Private Fenced In Backyard, Private BBQ Area. 70,236 Sq. Ft. Lot Area.",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "5919 SW 26th St., West Park",
//     image: "/exchange/pl4.avif",
//     description: "13,195 Sq. Ft. Lot with Design Completed Project with Zoning that Allows to Build 17 Unit Apartment Building.",
//     link: "#",
//   },
// ];

// // Lightbox Modal Component
// function PropertyLightbox({ property, onClose, onPrev, onNext, hasPrev, hasNext }) {
//   if (!property) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
//       onClick={onClose}
//     >
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:rotate-90 duration-300"
//       >
//         <X size={24} />
//       </button>

//       {/* Previous Button */}
//       {hasPrev && (
//         <button
//           onClick={(e) => { e.stopPropagation(); onPrev(); }}
//           className="absolute left-6 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
//         >
//           <ChevronLeft size={28} />
//         </button>
//       )}

//       {/* Next Button */}
//       {hasNext && (
//         <button
//           onClick={(e) => { e.stopPropagation(); onNext(); }}
//           className="absolute right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
//         >
//           <ChevronRight size={28} />
//         </button>
//       )}

//       {/* Content Container */}
//       <div 
//         className="max-w-5xl w-full flex flex-col items-center"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Image */}
//         <div className="relative w-full h-[60vh] bg-gray-900 mb-6 overflow-hidden">
//           <img
//             src={property.image}
//             alt={property.title}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide text-center">
//           {property.title}
//         </h2>

//         {/* Description */}
//         <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 text-center max-w-4xl">
//           {property.description}
//         </p>

//         {/* Go to link */}
//         {/* {property.link && (
//           <a
//             href={property.link}
//             className="inline-block text-white border-b border-white/50 hover:border-white transition-colors italic text-sm"
//           >
//             Go to link
//           </a>
//         )} */}
//       </div>
//     </div>
//   );
// }

// export default function ExchangePage() {
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(null);

//   const openLightbox = (property, index) => {
//     setSelectedProperty(property);
//     setCurrentIndex(index);
//     document.body.style.overflow = 'hidden'; // Prevent scroll
//   };

//   const closeLightbox = () => {
//     setSelectedProperty(null);
//     setCurrentIndex(null);
//     document.body.style.overflow = 'auto'; // Restore scroll
//   };

//   const goToPrevious = () => {
//     if (currentIndex > 0) {
//       const newIndex = currentIndex - 1;
//       setCurrentIndex(newIndex);
//       setSelectedProperty(propertyListings[newIndex]);
//     }
//   };

//   const goToNext = () => {
//     if (currentIndex < propertyListings.length - 1) {
//       const newIndex = currentIndex + 1;
//       setCurrentIndex(newIndex);
//       setSelectedProperty(propertyListings[newIndex]);
//     }
//   };

//   // Keyboard navigation
//   const handleKeyDown = (e) => {
//     if (!selectedProperty) return;
    
//     if (e.key === 'Escape') closeLightbox();
//     if (e.key === 'ArrowLeft' && currentIndex > 0) goToPrevious();
//     if (e.key === 'ArrowRight' && currentIndex < propertyListings.length - 1) goToNext();
//   };

//   // Add keyboard listener
//   if (typeof window !== 'undefined') {
//     window.addEventListener('keydown', handleKeyDown);
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Main Content */}
//       <main>
//         {/* Hero Section with Background Image */}
//         <PropertyExchange />

//         {/* Selling Section */}
//         <SellingSteps />

//         {/* Buying Section */}
//         <BuyingSteps />

//         {/* Property Listings Grid */}
//         <section className="py-20 bg-gray-900">
//           <div className="container mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               {propertyListings.map((property, index) => (
//                 <div
//                   key={property.id}
//                   onClick={() => openLightbox(property, index)}
//                   className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
//                 >
//                   {/* Property Image */}
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//                   {/* Property Title */}
//                   <div className="absolute bottom-0 left-0 right-0 p-8">
//                     <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
//                       {property.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Agents Footer in Grid */}
//             <div className="mt-5 bg-gray-700 p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//                 <div className="text-center md:text-left">
//                   <p className="text-white font-light mb-1">Hope Kaller</p>
//                   <p className="text-white/80 text-sm mb-3">Lic: 3238392</p>
//                   <img
//                     src="/exchange/max.png"
//                     alt="RE/MAX"
//                     className="h-12 bg-white p-2 mx-auto md:mx-0"
//                   />
//                 </div>
//                 <div className="text-center md:text-left">
//                   <p className="text-white font-light mb-1">Brandon Kaller, P.A.</p>
//                   <p className="text-white/80 text-sm mb-3">Lic: 3238392</p>
//                   <img
//                     src="/exchange/arn.jpg"
//                     alt="ARN"
//                     className="h-12 bg-white p-2 mx-auto md:mx-0"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Lightbox Modal */}
//       {selectedProperty && (
//         <PropertyLightbox
//           property={selectedProperty}
//           onClose={closeLightbox}
//           onPrev={goToPrevious}
//           onNext={goToNext}
//           hasPrev={currentIndex > 0}
//           hasNext={currentIndex < propertyListings.length - 1}
//         />
//       )}

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }