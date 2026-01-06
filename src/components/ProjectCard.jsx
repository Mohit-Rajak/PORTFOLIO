import React from "react";
import { projects } from "../assets/assets.js";
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  const project = projects[0];

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
      
      <img
        src={project.image[0]}
        alt={project.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {project.name}
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          {project.description}
        </p>

        {/* Button */}
        <Link to="https://fashion-frontend-two.vercel.app/" className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
          Live Demo
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
