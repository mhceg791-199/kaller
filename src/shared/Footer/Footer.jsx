import { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

// Pinterest Icon (custom SVG since it's not in lucide-react)
const PinterestIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.92-.19-2.29 0-3.27l1.27-5.39s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.53 0 .93-.59 2.33-.9 3.62-.26 1.07.54 1.94 1.6 1.94 1.92 0 3.4-2.03 3.4-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.89 2.31-4.89 4.7 0 .93.36 1.93.81 2.47.09.11.1.21.07.32l-.3 1.24c-.05.2-.17.24-.39.15-1.35-.63-2.19-2.6-2.19-4.18 0-3.41 2.48-6.54 7.15-6.54 3.76 0 6.68 2.68 6.68 6.26 0 3.73-2.35 6.73-5.61 6.73-1.1 0-2.13-.57-2.48-1.24l-.67 2.57c-.24.95-.9 2.14-1.34 2.87A12 12 0 1 0 12 0z" />
  </svg>
);

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className=" mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-light tracking-widest mb-12">
              GET IN TOUCH
            </h2>

            <div className="flex items-center gap-10">
              <div className="space-y-4 mb-8">
                <p className="text-white/90">
                  Tel:{" "}
                  <a
                    href="tel:9549205746"
                    className="hover:text-white/70 transition-colors"
                  >
                    (954) 920-5746
                  </a>
                </p>
                <p className="text-white/90">
                  Email:{" "}
                  <a
                    href="mailto:joseph@kallerarchitects.com"
                    className="hover:text-white/70 transition-colors"
                  >
                    joseph@kallerarchitects.com
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <p className="text-white/90">2417 Hollywood Blvd.</p>
                <p className="text-white/90">Hollywood, FL 33020</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mb-8">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>

              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#newsletter"
              className="text-white underline hover:text-white/70 transition-colors"
            >
              Join Our Newsletter
            </a>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl font-light tracking-widest mb-12">
              CONTACT US
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />

              <textarea
                name="message"
                placeholder="Your Message *"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors resize-none"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors text-sm font-light tracking-wider uppercase"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
