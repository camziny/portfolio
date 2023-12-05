import React from "react";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";
import SkillTile from "../components/SkillTile";
import { FrontEndSkillsList } from "../components/FrontEndSkillsList";
import { BackEndSkillsList } from "../components/BackEndSkillsList";
import { LanguagesList } from "../components/LanguagesList";

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-2 sm:p-4 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center pt-12 sm:pt-20 pb-12 space-y-6">
        <h2 className="text-5xl sm:text-6xl font-semibold text-gray-800 text-center">
          Cameron Ziny
        </h2>
        <h4 className="text-2xl text-gray-700">
          Full-Stack Software Developer
        </h4>
        <div className="flex space-x-4 text-blue-500">
          <a
            href="https://www.linkedin.com/in/cameron-ziny/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/camziny"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <GitHub />
          </a>
          <a
            href="mailto:cameronziny@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <Email />
          </a>
        </div>
      </div>
      <section className="w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl text-gray-800 mb-6 text-center">My Skills</h2>
        <div className="flex justify-between space-x-4 md:space-x-6">
          <SkillsColumn title="Front-End" skillsList={FrontEndSkillsList} />
          <SkillsColumn title="Back-End" skillsList={BackEndSkillsList} />
          <SkillsColumn title="Languages" skillsList={LanguagesList} />
        </div>
      </section>
    </div>
  );
};
const SkillsColumn = ({ title, skillsList }) => {
  return (
    <div className="flex flex-col p-4 sm:p-6 border border-gray-200 bg-gray-50 rounded-lg shadow-md w-full md:max-w-1/3 overflow-y-auto md:overflow-visible">
      <h3 className="text-xs sm:text-xl font-medium text-gray-700 mb-4">
        {title}
      </h3>
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-start justify-center">
        {skillsList.map((skillObject, index) => (
          <SkillTile
            key={index}
            name={skillObject.name}
            image={skillObject.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
