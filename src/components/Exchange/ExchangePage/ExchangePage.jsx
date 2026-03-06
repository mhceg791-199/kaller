import BuyingSteps from "../BuyingSteps/BuyingSteps";
import PropertyExchange from "../PropertyExchange/PropertyExchange";
import SellingSteps from "../SellingSteps/SellingSteps";

// Property listings data
const propertyListings = [
  {
    id: 1,
    title: "2000 Van Buren, Hollywood",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "100 SW 10 St., Hallandale Beach",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "901 SW 9 St., Hallandale Beach",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "5919 SW 26th St., West Park",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
];

export default function ExchangePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        {/* Hero Section with Background Image */}
        <PropertyExchange />

        {/* Selling Section */}
        <SellingSteps />

        {/* Buying Section */}
        <BuyingSteps/>

        {/* Property Listings Grid */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {propertyListings.map((property) => (
                <div
                  key={property.id}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                >
                  {/* Property Image */}
                  <img
                    src={property.image}
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Property Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                      {property.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Agents Footer in Grid */}
            <div className="mt-5 bg-gray-700 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-center md:text-left">
                  <p className="text-white font-light mb-1">Hope Kaller</p>
                  <p className="text-white/80 text-sm mb-3">Lic: 3238392</p>
                  <img
                    src="https://static.wixstatic.com/media/9d6bec_ef11f606a9af44c2bc67405d10a43a98~mv2.png/v1/fill/w_284,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/phillip-delgado-pa-miami-fl-real-estate-.png"
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
                    src="https://static.wixstatic.com/media/9d6bec_304cc727f1ad4a2aa56cd05bfa1e2612~mv2.jpg/v1/crop/x_42,y_80,w_596,h_185/fill/w_284,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/arn%20with%20r%20eq-1.jpg"
                    alt="ARN"
                    className="h-12 bg-white p-2 mx-auto md:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
