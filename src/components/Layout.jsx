import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Zohaib<span className="text-gray-800">Portfolio</span>
          </Link>

          {/* Nav Links */}
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-600 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
      {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Zohaib Aman Khan | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Layout;
