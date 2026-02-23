import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoP.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 h-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-22">
        
        <img className="w-24 h-auto object-contain items-center" src={logo} alt="Logo" />

        <ul className="hidden md:flex items-center gap-12 text-gray-700 font-medium">
          {["/", "/about", "/skills", "/projects", "/contact"].map((path, index) => {
            const labels = ["Home", "About", "Skills", "Projects", "Contact"];
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
                  }
                >
                  {labels[index]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <NavLink
          to="/resume"
          className="hidden md:block px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Resume
        </NavLink>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {["/", "/about", "/skills", "/projects", "/contact", "/resume"].map((path, index) => {
            const labels = ["Home", "About", "Skills", "Projects", "Contact", "Resume"];
            return (
              <NavLink
                key={index}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-blue-600 font-semibold"
                    : "block text-gray-700 hover:text-blue-600 transition"
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;