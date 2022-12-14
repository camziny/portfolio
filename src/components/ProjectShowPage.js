import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsList } from "./ProjectsList";
import { GitHub, Link } from "@material-ui/icons";
import "../style/ProjectShowPage.css";

const ProjectShowPage = () => {
    const { id } = useParams();
    const project = ProjectsList[id];
    return (
        <div className="project">
            <section>
            <h1>{project.name}</h1>
            </section>
            <section>
            <img src={project.image} />
            </section>
            <section className="bg-neutral">
            <p>{project.skills}</p>
            </section>
            <section>
            <a className="project-link" href={project.link} target="_blank">
                <Link />
            </a>
            <a className="github-link" href={project.github} target="_blank">
                <GitHub />
            </a>
            </section>
        </div>
    );
};

export default ProjectShowPage;
