import React from "react";

const SkillTile = ({ image, name, link }) => {
  return (
    <div className="skillTile p-2 sm:p-4 sm:border sm:border-gray-300 rounded  flex flex-col items-center justify-center sm:bg-white bg-gray-50 hover:shadow-lg transition-shadow duration-300 w-full">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bgImage w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 rounded-full mb-2 sm:mb-4 overflow-hidden"
      />
      <div className="skill-name text-center text-xs sm:text-base md:text-lg font-semibold w-16 sm:w-20">
        {name}
      </div>
    </div>
  );
};

export default SkillTile;
