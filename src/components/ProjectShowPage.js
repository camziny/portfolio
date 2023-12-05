import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsList } from "./ProjectsList";
import { GitHub } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";

const ProjectShowPage = () => {
  const { id } = useParams();
  const project = ProjectsList[id];

  return (
    <div className="project-container mx-auto my-8 max-w-4xl p-4">
      <section className="project-header text-center">
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      </section>
      <section className="project-image mb-4 flex justify-center">
        <img
          className="w-1/3 object-cover rounded object-center"
          src={project.image}
          alt={project.name}
        />
      </section>
      <section className="project-skills bg-gray-100 p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">About this project:</h2>
        <p>{project.skills}</p>
      </section>
      <section className="project-links flex justify-center space-x-4">
        <a
          className="hover:text-blue-500 transition"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon fontSize="large" />
        </a>
        <a
          className="hover:text-gray-400 transition"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </a>
      </section>
    </div>
  );
};

export default ProjectShowPage;
