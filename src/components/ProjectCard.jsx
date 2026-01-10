import React from "react";
import Title from './Title';

const ProjectCard = ({
  image,
  name,
  description,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition py-8">
      <img
        src={image[0]}
        alt={name}
        className="w-full h-50 object-cover rounded gap-2"
      />

      <h2 className="mt-3 text-lg font-semibold gap-2">{name}</h2>
      <p className="text-sm text-gray-600 mt-2 gap-2">{description}</p>

      <div className="flex gap-4 mt-4">
        {/* Live Demo */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-black"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
