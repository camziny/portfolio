import { SchoolOutlined, WorkOutlined } from "@material-ui/icons";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#00072D">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2010 - 2014"
                    iconStyle={{ background: "#00072D", color: "#fff" }}
                    icon={<SchoolOutlined />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Sacred Heart University
                    </h3>
                    <p>Business Administration</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2022"
                    iconStyle={{ background: "#00072D", color: "#fff" }}
                    icon={<WorkOutlined />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Natick Eye Associates
                    </h3>
                    <p>Practice Manager</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022"
                    iconStyle={{ background: "#00072D", color: "#fff" }}
                    icon={<WorkOutlined />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Launch Academy
                    </h3>
                    <p>Apprentice Full-Stack Developer</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
