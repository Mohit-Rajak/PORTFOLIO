import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../assets/assets.js";
import Title from "../components/Title.jsx";

const Projects = () => {
  return (
    <div className="mt-14 py-16">
      
      <Title text1={"My"} text2={"Projects"} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>

    </div>
  );
};

export default Projects;
