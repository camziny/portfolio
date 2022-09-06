import React from "react"
import myFC from '../assets/myFC.png'
import tripLogo from '../assets/tripLogo.png'
import portfolio from "../assets/portfolio.png"

export const ProjectsList = [
    {
        name: "myFc",
        image: myFC,
        skills: "Integrated Rapid Sports API into Node.js / Express and React.js web app with PostgreSQL database, Foundation front end with custom CSS. Incorporated Ajax functionality.",
        link:"https://my-fc-app.herokuapp.com/",
        github:"https://github.com/camziny/myFC"
    },
    {
        name: "Trip",
        image: tripLogo,
        skills: "Collaboratively developed in React.js, focused on features such as authentication, authorization, CRUD functionality, building out internal Express APIs, API integration, and group collaboration via proper TDD and git workflows.",
        link: "https://trip-destination-evaluation.herokuapp.com/",
        github: "https://github.com/camziny/trip"
    },
    {
        name: "Personal Portfolio",
        image: portfolio,
        skills: "Created a responsive and minimalist React app using custom CSS, in order to display my experience, projects, and current skill set.",
        link: "camziny.com",
        github: "https://github.com/camziny/portfolio"
    }
]
