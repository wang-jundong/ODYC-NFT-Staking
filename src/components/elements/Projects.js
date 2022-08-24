import React, { useState, useEffect } from "react";
import { projectsData } from "../../data";

import Project from "./Project";

const Projects = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        // get projects based on item
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    return (
        <div>
            {/* projects nav */}
            {/* projects */}
            <section className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-8">
                {projects.map((item) => {
                    return <Project item={item} key={item.id} />;
                })}
            </section>
        </div>
    );
};

export default Projects;
