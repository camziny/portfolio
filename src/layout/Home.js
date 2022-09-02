import React from "react";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import "../style/Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Cam.</h2>
                <div className="myIntro">
                    <p>A software developer...</p>
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
                <h1>Skills</h1>
                <ol className="skillsList">
                    <li className="skillItem">
                        <h2>Front-End</h2>
                        <span>
                            React.js, Angular, Redux, React Native, HTML, CSS,
                            NPM, Foundation, MaterialUI, Yarn
                        </span>
                    </li>
                    <li className="skillItem">
                        <h2>Back-End</h2>
                        <span>
                            Node.js, Express.js, GraphQL, MySQL, MongoDB,
                            DynamoDB, AWS S3
                        </span>
                    </li>
                    <li className="skillItem">
                        <h2>Programming Languages</h2>
                        <span>JavaScript, TypeScript</span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Home;
