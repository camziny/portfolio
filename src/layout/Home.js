import React from "react";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import "../style/Home.css";
import SkillTile from "../components/SkillTile";
import { FrontEndSkillsList } from "../components/FrontEndSkillsList";
import { BackEndSkillsList } from "../components/BackEndSkillsList";
import { LanguagesList } from "../components/LanguagesList";

const Home = () => {
    return (
        <div className="home">
            <div className="about">
                <h2> Cameron Ziny</h2>
                <div className="myIntro">
                    <p>Full-Stack Software Developer</p>
                    <a
                        className="linkedIn-link"
                        href="https://www.linkedin.com/in/cameron-ziny/"
                        target="_blank"
                    >
                        <LinkedIn />
                    </a>
                    <a
                        className="gitHub-link"
                        href="https://github.com/camziny"
                        target="_blank"
                    >
                        <GitHub />
                    </a>
                    <a
                        className="email-link"
                        href="mailto: cameronziny@gmail.com"
                        target="_blank"
                    >
                        <Email />
                    </a>
                </div>
            </div>
            <div className="skills">
                <div className="my-skills">
                    <b>My Skills</b>
                </div>
                <br></br>
                <div className="skills-list">
                    <div className="skill-header">Front-End</div>
                    {FrontEndSkillsList.map((skillObject, index) => {
                        return (
                            <SkillTile
                                id={index}
                                key={index}
                                name={skillObject.name}
                                image={skillObject.image}
                                onClick={skillObject.link}
                            />
                        );
                    })}
                </div>
                <div className="skills-list">
                    <div className="skill-header">Back-End</div>
                    {BackEndSkillsList.map((skillObject, index) => {
                        return (
                            <SkillTile
                                id={index}
                                key={index}
                                name={skillObject.name}
                                image={skillObject.image}
                                onClick={skillObject.link}
                            />
                        );
                    })}
                </div>
                <div className="skills-list">
                    <div className="skill-header">Programming Languages</div>
                    {LanguagesList.map((skillObject, index) => {
                        return (
                            <SkillTile
                                id={index}
                                key={index}
                                name={skillObject.name}
                                image={skillObject.image}
                                onClick={skillObject.link}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
