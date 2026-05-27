import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Makna", href: "#makna" },
  { label: "Ayat & Hadits", href: "#ayat-hadits" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on nav click
  const handleNav = (e, href) => {
    setOpen(false);
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur shadow-lg shadow-black/20 py-2.5"
          : "bg-transparent py-3"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display text-gold text-lg tracking-wide">
          Idul Adha 1447 H
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-white/70 hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-gold transition-colors p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-primary-dark/98 backdrop-blur border-t border-gold/10 px-4 pb-4 pt-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="block py-3 text-sm text-white/70 hover:text-gold transition-colors font-medium border-b border-gold/5 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
