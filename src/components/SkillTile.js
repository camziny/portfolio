import React from "react"

const SkillTile = ({ image, name }) => {
    return (
        <div className="skillTile">
            <div
            style={{ backgroundImage: `url(${image})` }}
            className="bgImage"
            />
            {name}
        </div>
    )
}

export default SkillTile