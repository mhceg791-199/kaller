import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from '../../../assets/logo/KA3.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800/95 backdrop-blur-sm py-0 shadow-lg"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Kaller Architecture Logo"
              className=" w-[25%] object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-mainColor">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            {/* <Link to="/apply" className="nav-link">
              Apply
            </Link> */}
            <Link to="/exchange" className="nav-link">
              Exchange
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 bg-gray-800/95 absolute left-0 right-0 px-6 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link to="/" onClick={closeMenu} className="mobile-link">
                Home
              </Link>
              <Link to="/portfolio" onClick={closeMenu} className="mobile-link">
                Portfolio
              </Link>
              <Link to="/about" onClick={closeMenu} className="mobile-link">
                About Us
              </Link>
              <Link to="/apply" onClick={closeMenu} className="mobile-link">
                Apply
              </Link>
              <Link to="/exchange" onClick={closeMenu} className="mobile-link">
                Exchange
              </Link>
              <Link to="/contact" onClick={closeMenu} className="mobile-link">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
