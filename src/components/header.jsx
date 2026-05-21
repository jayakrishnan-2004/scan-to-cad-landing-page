import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO */}

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-14"
          />

          <div>
            <h1 className="font-bold text-lg">
              Creatus Technologies
            </h1>

            <p className="text-sm text-gray-500">
              Reverse Engineering Solutions
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}

        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#services"
            className="font-medium hover:text-blue-900 transition"
          >
            Services
          </a>

          <a
            href="#industries"
            className="font-medium hover:text-blue-900 transition"
          >
            Industries
          </a>

          <a
            href="#process"
            className="font-medium hover:text-blue-900 transition"
          >
            Process
          </a>

          <div className="flex items-center gap-2 text-sm font-semibold">
            <Phone size={18} />
            +91 98765 43210
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
            Request a Quote
          </button>
        </div>

        {/* MOBILE BUTTON */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      
      {menuOpen && (
        <div className="lg:hidden border-t bg-white px-5 py-5 space-y-4">
          <a href="#services" className="block font-medium">
            Services
          </a>

          <a href="#industries" className="block font-medium">
            Industries
          </a>

          <a href="#process" className="block font-medium">
            Process
          </a>

          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
}