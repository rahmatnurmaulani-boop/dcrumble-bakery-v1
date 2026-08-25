import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Produk", path: "/produk" },
    { name: "Korporat", path: "/korporat" },
    { name: "Outlet Kami", path: "/outlet" },
    { name: "Tentang", path: "/tentang" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-rose-900 text-white border-b border-white/20 ${
        isScrolled
          ? "bg-rose-900/95 backdrop-blur-md shadow-lg py-2.5"
          : "bg-rose-900 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* LOGO BRAND - MENGGUNAKAN LINK */}
        <Link
          to="/"
          className="font-extrabold text-base sm:text-lg text-rose-900 bg-white rounded-full px-4 py-1.5 shadow-md hover:bg-rose-50 transition-all"
        >
          D'<span className="font-bold text-rose-600">Crumble</span>
        </Link>

        {/* DESKTOP NAV - MENGGUNAKAN LINK */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-rose-100">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ACTION BUTTON (DESKTOP) */}
        <div className="hidden sm:block">
          <Link to="/produk">
            <Button
              variant="secondary"
              size="md"
              className="font-bold shadow-md rounded-full"
            >
              Pesan Sekarang
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-1.5 rounded-lg hover:bg-rose-800 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV DROPDOWN - MENGGUNAKAN LINK */}
      {isOpen && (
        <div className="md:hidden bg-rose-900 border-t border-white/20 px-6 py-4 space-y-3 shadow-xl">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block font-semibold text-rose-100 hover:text-white transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2">
            <Link to="/produk" onClick={() => setIsOpen(false)}>
              <Button
                variant="secondary"
                size="md"
                fullWidth
                className="font-bold rounded-full"
              >
                Pesan Sekarang
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
