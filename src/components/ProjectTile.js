import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectTile = ({ image, name, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="projectTile relative w-56 h-56 mx-auto mt-8 cursor-pointer transform transition-all duration-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 p-8"
      onClick={() => {
        navigate("/projects/" + id);
      }}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      <h2 className="text-xl font-semibold text-white absolute bottom-4 left-4">
        {name}
      </h2>
    </div>
  );
};

export default ProjectTile;
