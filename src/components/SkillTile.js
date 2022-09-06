import React from "react";
import "../style/Skill.css"

const SkillTile = ({ image, name }) => {
    return (
        <div className="skillTile">
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="bgImage"
            />
            <div className="skill-name">{name}</div>
        </div>
    );
};

export default SkillTile;
