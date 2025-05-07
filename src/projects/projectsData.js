import React from 'react';
import ProjectOne from "../assets/project-1.png";
import ProjectTwo from "../assets/project-2.png";
import ProjectThree from "../assets/project-3.png";

const projects = {
    1 : {
        title: "HealthCare App",
        image:ProjectOne,
        description: (
            <>
            <p>
            Android app for booking appointment with doctors and buying medicines,

            </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    2 : {
        title: "Web-based Library Management",
        image:ProjectTwo,
        description: (
            <>
            <p>
            Designed and implemented a web-based library management system
            to streamline book tracking and inventory management
            </p>
            </>
        ), 
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    3 : {
        title: "Small-scale games",
        image:ProjectThree,
        description: (
            <>
            <p>
            Created interactive small-scale games using Django for a capstone
            project, showcasing creative problem-solving and programming skills.
            </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
};

export default projects;