export default function PropertyListingsGrid({ properties, onSelect }) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {properties.map((property, index) => (
            <div
              key={property.id}
              onClick={() => onSelect(property, index)}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <img
                src={property.image}
                alt={property.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                  {property.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Agents Footer */}
        <div className="mt-5 bg-gray-700 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <p className="text-white font-light mb-1">Hope Kaller</p>
              <p className="text-white/80 text-sm mb-3">Lic: 3238392</p>
              <img
                src="/exchange/max.png"
                alt="RE/MAX"
                className="h-12 bg-white p-2 mx-auto md:mx-0"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-white font-light mb-1">
                Brandon Kaller, P.A.
              </p>
              <p className="text-white/80 text-sm mb-3">Lic: 3238392</p>
              <img
                src="/exchange/arn.jpg"
                alt="ARN"
                className="h-12 bg-white p-2 mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}