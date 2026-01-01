import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 w-full z-50 
            bg-[#020617]/80 backdrop-blur-xl 
            border-b border-white/10 h-[50px]"
    >
      <ul className="flex justify-between text-[#f8fafc] hover:text-[#38bdf8] transition">
        <NavLink>
          <h1>Portfolio</h1>
        </NavLink>
        <NavLink>
          <p>Home</p>
        </NavLink>
        <NavLink>
          <p>About</p>
        </NavLink>
        <NavLink>
          <p>Skills</p>
        </NavLink>
        <NavLink>
          <p>Projects</p>
        </NavLink>
        <NavLink>
          <p>Resume</p>
        </NavLink>
        <NavLink>
          <p>Contact</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
