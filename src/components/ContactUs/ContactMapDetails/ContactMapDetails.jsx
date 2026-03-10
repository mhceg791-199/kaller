import map from "../../../assets/world-map-gold.jpg";

function ContactMapDetails() {
  return (
    <div className="w-full bg-darkColor text-white rounded-2xl overflow-hidden shadow-2xl border border-white/5">
      <div className="relative w-full h-64 md:h-72">
        <img
          src={map} 
          alt="map" 
          className="w-full h-full object-cover grayscale brightness-50 opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkColor to-transparent"></div>
      </div>

      <div className="py-8 px-8 md:px-10">
        <h3 className="text-xl font-bold text-mainGold tracking-[0.2em] mb-8 uppercase border-b border-white/5 pb-4">
          Location Details
        </h3>

        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-location-dot text-mainGold"></i>
            </div>
            <div>
              <p className="text-mainColor leading-relaxed">
                2417 Hollywood Blvd. <br /> Hollywood, FL 33020
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-envelope text-mainGold"></i>
            </div>
            <div>
              <a
                href="mailto:joseph@kallerarchitects.com"
                className="text-mainColor hover:text-mainGold transition-colors border-b border-white/10 hover:border-mainGold pb-1"
              >
                joseph@kallerarchitects.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMapDetails;