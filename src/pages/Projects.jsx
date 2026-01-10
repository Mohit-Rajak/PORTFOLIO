import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/assets";
import Title from "../components/Title";

const Projects = () => {
  return (
    <section className="py-20 bg-slate-100 mt-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="mb-12">
          <Title text1="My" text2="Projects" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
