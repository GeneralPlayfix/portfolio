import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(require("../data/skills.json"))
    }, [])
    return (
        <section id="skills">
            <div className="container">
                <div className="subContainer">
                    <h1 className='mySkills'>Mes compétences : </h1>
                </div>
                <div className='subContainer'>
                    <div className='card'>
                        <div className="subElement">
                            <h3 className='title'>Languages de programmation</h3>
                            <div className='subCard'>
                                {
                                    data
                                        .filter((element) => element.type.includes("1"))
                                        .map(
                                            (element) => (
                                                <SkillCard key={element.id} skill={element} />
                                            )
                                        )
                                }
                            </div>
                        </div>
                        <div className="subElement">
                            <h3 className='title'>Frameworks & Bibliothèques</h3>
                            <div className='subCard'>
                                {
                                    data
                                        .filter((element) => element.type.includes("2"))
                                        .map(
                                            (element) => (
                                                <SkillCard key={element.id} skill={element} />
                                            )
                                        )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='subCard'>
                            <h3 className='title'>Outils</h3>
                            {
                                data
                                    .filter((element) => element.type.includes("3"))
                                    .map(
                                        (element) => (
                                            <SkillCard key={element.id} skill={element} />
                                        )
                                    )
                            }
                        </div>
                        <div className='subCard'>
                            <div className='cardElement'>
                                <h3 className='title'>Base de données</h3>
                                {
                                    data
                                        .filter((element) => element.type.includes("5"))
                                        .map(
                                            (element) => (
                                                <SkillCard key={element.id} skill={element} />
                                            )
                                        )
                                }

                            </div>
                            <div className='cardElement'>
                                <h3 className='title'>Langues</h3>
                                {
                                    data
                                        .filter((element) => element.type.includes("4"))
                                        .map(
                                            (element) => (
                                                <SkillCard key={element.id} skill={element} />
                                            )
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;