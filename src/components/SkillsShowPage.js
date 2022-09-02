import React from "react";
import { useParams } from "react-router-dom";
import { FrontEndSkillsList } from "./FrontEndSkillsList";
import { BackEndSkillsList } from "./BackEndSkillsList";
import { LanguagesList } from "./LanguagesList";
import "../style/Skill.css"

const SkillsShowPage = () => {
    const { id } = useParams()
    const frontEndSkill = FrontEndSkillsList[id]
    const backEndSkill = BackEndSkillsList[id]
    const language = LanguagesList[id]
    return (
        <div>
            <div className="skill">
            <h5>{frontEndSkill.name}</h5>
            <img src={frontEndSkill.image}>
                <a className="front-end-skill-link" href={frontEndSkill.link} target="_blank">
                </a>
            </img>
            </div>
        <div className="skill">
            <h5>{backEndSkill.name}</h5>
            <img src={backEndSkill.image}>
                <a className="back-end-skill-link" href={backEndSkill.link} target="_blank">
                </a>
            </img>
        </div>
        <div className="skill">
            <h5>{language.name}</h5>
            <img src={language.image}>
                <a className="language-link" href={language.link} target="_blank">
                </a>
            </img>
        </div>
        </div>
    )
}

export default SkillsShowPage