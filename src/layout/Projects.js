import React from "react";
import ProjectTile from "../components/ProjectTile";
import { ProjectsList } from "../components/ProjectsList";

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projectList"></div>
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
    );
};

export default Projects;
