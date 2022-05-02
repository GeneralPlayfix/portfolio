import React, { useEffect, useState } from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    const [data, setData] = useState(require("../data/experiences.json"))
    const [projectType, setProjectType] = useState("1")
    // useEffect(() => {
    //     setData(require("../data/experiences.json"))

    // }, [])
    return (
        <section id="experience">
            <div className="container">
                <div className="buttons">
                    <a id="1" className={projectType === "1" ? "active" : ""} onClick={(e) => setProjectType(e.target.id)}>Projet Entreprise</a>
                    <a id="2" className={projectType === "2" ? "active" : ""} onClick={(e) => setProjectType(e.target.id)}>Projet EPSI</a>
                    <a id="3" className={projectType === "3" ? "active" : ""} onClick={(e) => setProjectType(e.target.id)}>Projet Solo</a>
                </div>
                <div className="content-2">
                    {
                        data.filter((element) => element.projectType === projectType).map((experience) =>
                            <ExperienceCard key={experience.id} experience={experience} />
                        )
                    }
                    {/* {
                        data.filter((element) => element.projectType == "2").map((experience) =>
                            <ExperienceCard key={experience.id} experience={experience} />
                        )
                    } */}
                </div>
            </div>
        </section>
    );
};

export default Experience;