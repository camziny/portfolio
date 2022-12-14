import React from "react"
import myFC from '../assets/myFC.png'
import tripLogo from '../assets/tripLogo.png'
import portfolio from "../assets/portfolio.png"
import zfit from "../assets/zfit.png"

export const ProjectsList = [
    {
        name: "z-fit",
        image: zfit,
        skills: "Fitness Mobile app created using React Native, useContext API, Responsive Design, and custom StyleSheet Objects.",
        link: "https://apps.apple.com/us/app/z-fit-app/id1645436117",
        github:"https://github.com/camziny/z-fit"

    },
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
        skills: "Created minimalist React app using custom CSS and Responsive Design, in order to display my experience, projects, and current skill set.",
        link: "/",
        github: "https://github.com/camziny/portfolio"
    }
]
