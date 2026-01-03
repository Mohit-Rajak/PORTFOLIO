import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoP.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 h-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-22">
        
        {/* Logo */}
        <img className="w-24 h-auto object-contain items-center" src={logo} alt="Logo" />

        {/* Links */}
        <ul className="hidden md:flex items-center gap-12 text-gray-700 font-medium ">
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

        {/* Resume Button */}
        <NavLink
          to="/resume"
          className="hidden md:block px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Resume
        </NavLink>

        {/* Mobile Hamburger Placeholder */}
        <div className="md:hidden cursor-pointer">
          {/* Add Hamburger menu icon here later */}
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
