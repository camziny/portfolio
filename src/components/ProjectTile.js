import React from "react";
import "../style/Projects.css";
import { useNavigate } from "react-router-dom";

const ProjectTile = ({ image, name, id }) => {
    const navigate = useNavigate();
    return (
        <div className="projectTile" onClick={() => {
            navigate("/projects/" + id)
        }}>
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="bgImage"
            />
            <h1>{name}</h1>
        </div>
    );
};

export default ProjectTile;
