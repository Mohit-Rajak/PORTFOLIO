import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Mohit <span className="text-indigo-600">Rajak</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Full Stack Web Developer (MERN Stack) focused on building scalable,
            high-performance applications with clean UI and smooth user
            experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-indigo-600 transition duration-300 cursor-pointer w-fit"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">
            Connect With Me
          </h3>
          <div className="flex items-center gap-5 text-xl">
            <a
              href="https://github.com/Mohit-Rajak"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohit-rajak"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/mohitrajakofficial_"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-pink-500 hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:mohitrajak@example.com"
              className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mohit Rajak. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
