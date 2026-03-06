import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useCallback } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhone,
  FaHeart,
} from "react-icons/fa6";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait for the page to render, then scroll to the hash target
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      const targetId = hashIndex !== -1 ? href.substring(hashIndex + 1) : "";

      if (location.pathname === "/") {
        // Already on home page — just scroll
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home page with hash — ScrollToTop will handle scrolling
        navigate("/#" + targetId);
      }
    },
    [location.pathname, navigate],
  );

  return (
    <div className="min-h-screen">
      <ScrollToTop />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.webp"
                alt="Milky Express"
                className="h-20 w-20 object-contain"
              />
              <div>
                <h1 className="text-2xl font-display font-bold gradient-text">
                  Milky Express
                </h1>
                <p className="text-xs text-gray-500">
                  Nourish your motherhood—one product at a time.
                </p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="/#products"
                onClick={handleNavClick}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Products
              </a>
              <a
                href="/#testimonials"
                onClick={handleNavClick}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Testimonials
              </a>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About
              </Link>
              <a
                href="/#contact"
                onClick={handleNavClick}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.webp"
                  alt="Milky Express"
                  className="h-12 w-12"
                />
                <span className="text-xl font-display font-bold text-white">
                  Milky Express
                </span>
              </div>
              <p className="text-sm">
                Nourish your motherhood—one product at a time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/#products"
                    onClick={handleNavClick}
                    className="hover:text-primary transition-colors"
                  >
                    Lactation Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="/#products"
                    onClick={handleNavClick}
                    className="hover:text-primary transition-colors"
                  >
                    Lactation Tea
                  </a>
                </li>
                <li>
                  <a
                    href="/#products"
                    onClick={handleNavClick}
                    className="hover:text-primary transition-colors"
                  >
                    Lactation Granola
                  </a>
                </li>
                <li>
                  <a
                    href="/#products"
                    onClick={handleNavClick}
                    className="hover:text-primary transition-colors"
                  >
                    Lactation Pap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="/#testimonials"
                    onClick={handleNavClick}
                    className="hover:text-primary transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    onClick={handleNavClick}
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/milky_express"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center space-x-2"
                  >
                    <FaInstagram className="text-lg" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@milkyexpress_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center space-x-2"
                  >
                    <FaTiktok className="text-lg" />
                    <span>TikTok</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/LQQ77OT5B2SPA1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center space-x-2"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="tel:+2349091186801"
                    className="hover:text-primary transition-colors flex items-center space-x-2"
                  >
                    <FaPhone className="text-base" />
                    <span>+234 909 118 6801</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+14168354919"
                    className="hover:text-primary transition-colors flex items-center space-x-2"
                  >
                    <FaPhone className="text-base" />
                    <span>+1 416 835 4919</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="flex items-center justify-center space-x-1">
              <span>
                &copy; {new Date().getFullYear()} Milky Express. Made with
              </span>
              <FaHeart className="text-primary inline" />
              <span>for breastfeeding mamas.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
