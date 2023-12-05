import React from "react";
import ProjectTile from "../components/ProjectTile";
import { ProjectsList } from "../components/ProjectsList";

const Projects = () => {
  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {ProjectsList.map((projectObject, index) => {
          return (
            <ProjectTile
              id={index}
              key={index}
              name={projectObject.name}
              image={projectObject.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
