// import { Link } from "react-router-dom";
// import { portfolioCategories } from "../../data/portfolioCategories";

// export default function PortfolioPage() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Main Content */}
//       <main className="pt-20 pb-20">
//         {/* Page Title */}
//         <section className="py-16 md:py-24">
//           <div className="container mx-auto px-6">
//             <h1 className="text-4xl md:text-5xl font-light tracking-wide">
//               OUR PROJECTS
//             </h1>
//           </div>
//         </section>

//         {/* Portfolio Grid */}
//         <section>
//           <div className="container mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//               {portfolioCategories.map((category) => (
//                 <Link
//                   key={category.id}
//                   to={`/portfolio/${category.slug}`}
//                   className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl cursor-pointer"
//                 >
//                   <img
//                     src={category.image}
//                     alt={category.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//                   <div className="absolute inset-0 flex items-end justify-center pb-8 px-6">
//                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-center transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
//                       {category.title}
//                     </h2>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }




import { Link } from "react-router-dom";
import { portfolioCategories } from "../../data/portfolioCategories";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <main className="pt-20">
        {/* Page Title */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">
              OUR PROJECTS
            </h1>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-3">
              {portfolioCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/portfolio/${category.slug}`}
                  className="group relative w-full h-[300px] md:h-[420px] overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/40 group-hover:bg-white/30 transition-colors duration-500" />

                  {/* Category Title */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2
                      className="text-3xl md:text-5xl font-light text-gray-900 tracking-widest px-6 text-center
                      opacity-0 group-hover:opacity-100 transition-all duration-500"
                    >
                      {category.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}












// // Portfolio categories data
// const portfolioCategories = [
//   {
//     id: 1,
//     title: "RESIDENTIAL",
//     image:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
//     link: "/portfolio/residential",
//   },
//   {
//     id: 2,
//     title: "COMMERCIAL",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
//     link: "/portfolio/commercial",
//   },
//   {
//     id: 3,
//     title: "CIVIC & CULTURAL",
//     image:
//       "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop",
//     link: "/portfolio/civic-cultural",
//   },
//   {
//     id: 4,
//     title: "EDUCATION",
//     image:
//       "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop",
//     link: "/portfolio/education",
//   },
//   {
//     id: 5,
//     title: "RETAIL",
//     image:
//       "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop",
//     link: "/portfolio/retail",
//   },
//   {
//     id: 6,
//     title: "INTERIORS",
//     image:
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop",
//     link: "/portfolio/interiors",
//   },
//   {
//     id: 7,
//     title: "MIXED USE",
//     image:
//       "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
//     link: "/portfolio/mixed-use",
//   },
//   {
//     id: 8,
//     title: "HOSPITALITY",
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
//     link: "/portfolio/hospitality",
//   },
// ];

// export default function PortfolioPage() {
//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Main Content */}
//       <main className="pt-20">
//         {/* Page Title */}
//         <section className="py-16 md:py-24">
//           <div className="container mx-auto px-6">
//             <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide">
//               OUR PROJECTS
//             </h1>
//           </div>
//         </section>

//         {/* Portfolio Grid */}
//         <section className="pb-20">
//           <div className="container mx-auto px-6">
//             <div className="flex flex-col gap-3">
//               {portfolioCategories.map((category) => (
//                 <a
//                   key={category.id}
//                   href={category.link}
//                   className="group relative w-full h-[400px] md:h-[500px] overflow-hidden cursor-pointer"
//                 >
//                   {/* Background Image */}
//                   <img
//                     src={category.image}
//                     alt={category.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-white/40 group-hover:bg-white/30 transition-colors duration-500" />

//                   {/* Category Title */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <h2
//                       className="text-3xl md:text-5xl font-light text-gray-900 tracking-widest px-6 text-center
//                                 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                       {category.title}
//                     </h2>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
