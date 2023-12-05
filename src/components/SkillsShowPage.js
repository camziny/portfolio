import React from "react";
import { useParams } from "react-router-dom";
import { FrontEndSkillsList } from "./FrontEndSkillsList";
import { BackEndSkillsList } from "./BackEndSkillsList";
import { LanguagesList } from "./LanguagesList";

const SkillsShowPage = () => {
  const { id } = useParams();
  const frontEndSkill = FrontEndSkillsList[id];
  const backEndSkill = BackEndSkillsList[id];
  const language = LanguagesList[id];

  const renderSkill = (skill) => (
    <div className="skill m-4">
      <a
        className="skill-link flex flex-col items-center"
        href={skill.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={skill.image}
          alt={skill.name}
          className="w-48 h-48 rounded-full mb-4"
        />

        <div className="skill-name text-center text-lg font-semibold">
          {skill.name}
        </div>
      </a>
    </div>
  );

  return (
    <div className="skills-container flex justify-center flex-wrap">
      {renderSkill(frontEndSkill)}
      {renderSkill(backEndSkill)}
      {renderSkill(language)}
    </div>
  );
};

export default SkillsShowPage;
