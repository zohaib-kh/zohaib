import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-base sm:text-lg font-bold tracking-wide">
          Z <span className="text-blue-600">A</span> K
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 transition cursor-pointer"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800/90 px-6 pb-4 pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 transition cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
