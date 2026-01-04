import React from "react";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";


const Home = () => {
  return ( 
    <div className="" >
    <section className="w-full min-h-screen bg-slate-50 flex items-center rounded-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 py-20">

        {/* Left Section */}
        <div className="flex-1 space-y-6 md:pr-10">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900">Hello, I’m</h1>
            <h1 className="text-5xl md:text-6xl font-bold text-indigo-600">
              Mohit Rajak
            </h1>
          </div>

          <h2 className="text-lg md:text-2xl font-medium text-gray-700">
            Full-Stack <span className="text-indigo-600">MERN Developer</span> <br />
            <span className="text-gray-500 text-base md:text-lg">Java & DSA Focused</span>
          </h2>

          <p className="text-gray-600 max-w-lg leading-relaxed md:leading-loose">
            I build scalable, production-ready web applications using the MERN stack,
            and solve real-world problems leveraging strong Java & DSA fundamentals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/projects">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
                View Projects
              </button>
            </Link>
            <Link to="/resume">
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-200 transition font-medium">
                Resume
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end items-start mt-10 md:mt-0">
          <img
            src={profile}
            alt="Mohit Rajak"
            className="w-64 md:w-96 h-64 md:h-96 rounded-full object-cover shadow-2xl border-4 border-indigo-100"
          />
        </div>

      </div>

      
    </section>
    <About/>
    <Skills/>
    </div>
    
  );
};

export default Home;
