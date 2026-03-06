// // pages/Portfolio/PortfolioCategory.jsx
// import { useParams, Link } from "react-router-dom";
// import { portfolioCategories } from "../../data/portfolioCategories";

// export default function PortfolioCategory() {
//   const { slug } = useParams();

//   const category = portfolioCategories.find((cat) => cat.slug === slug);

//   if (!category) {
//     return (
//       <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl mb-4">Category Not Found</h1>
//           <Link to="/portfolio" className="text-blue-400 hover:underline">
//             ← Back to Portfolio
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] md:h-[70vh] flex items-end">
//         <img
//           src={category.image}
//           alt={category.title}
//           className="absolute inset-0 w-full h-full object-cover brightness-50"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
//         <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24">
//           <Link
//             to="/portfolio"
//             className="inline-block mb-6 text-lg text-gray-300 hover:text-white transition-colors"
//           >
//             ← BACK TO PORTFOLIO
//           </Link>
//           <h1 className="text-3xl md:text-6xl lg:text-7xl font-light tracking-wide">
//             {category.title}
//           </h1>
//           <p className="text-base md:text-xl font-light leading-relaxed text-gray-500 mt-4">
//             {category.tags}
//           </p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl">
//             <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 mb-12">
//               {category.description ||
//                 "Our team has delivered exceptional projects in this category, focusing on functionality, aesthetics, and client vision."}
//             </p>

//             {/* هنا ممكن تضيف grid للمشاريع الفعلية لاحقًا */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* مثال - يمكنك استبداله ببيانات حقيقية */}
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden shadow-xl"
//                 >
//                   {/* placeholder لصور المشروع */}
//                   <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
//                     <span className="text-gray-500 text-lg">Project {i + 1}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// pages/Portfolio/PortfolioCategory.jsx
import { useParams, Link } from "react-router-dom";
import { portfolioCategories } from "../../data/portfolioCategories";

export default function PortfolioCategory() {
  const { slug } = useParams();

  const category = portfolioCategories.find((cat) => cat.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Category Not Found</h1>
          <Link to="/portfolio" className="text-blue-400 hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end">
        <img
          src={category.image}
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24">
          <Link
            to="/portfolio"
            className="inline-block mb-6 text-lg text-gray-300 hover:text-white transition-colors"
          >
            ← BACK TO PORTFOLIO
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
            {category.title}
          </h1>
          {category.tags && (
            <p className="text-base md:text-xl font-light leading-relaxed text-gray-400 mt-4">
              {category.tags}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 mb-16">
              {category.description ||
                "Our team has delivered exceptional projects in this category, focusing on functionality, aesthetics, and client vision."}
            </p>

            {/* عرض المشاريع */}
            {category.projects && category.projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-2xl shadow-black/40 bg-gray-800 aspect-[4/3]"
                  >
                    {/* صورة المشروع */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay عند الـ hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* عنوان المشروع في الأسفل */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl md:text-2xl font-medium text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                      {/* لو فيه وصف أو سنة أو أي بيانات إضافية لاحقًا */}
                      {project.year && (
                        <p className="text-sm text-gray-300 mt-1">{project.year}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500">
                  No projects added yet for this category.
                </p>
                <p className="text-gray-600 mt-4">
                  Check back soon — more exceptional work coming!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}