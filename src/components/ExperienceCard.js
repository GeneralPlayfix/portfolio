import React from 'react';
const ExperienceCard = (props) => {
    const { experience } = props
    return (
        <div className='ExperienceCard'>
            <h2>{experience.name}</h2>
            {/* <img src={process.env.PUBLIC_URL + "/img/experience/" + experience.id + "/cascade.jpg"} alt="" /> */}
            <h3 className='company'>{experience.company}</h3>
            <p className='description'>{experience.description}</p>
            <p className='languages'>Languages : {experience.languages.split("|").join(', ')} </p>

            <div className="buttons-2">
                <button>Galerie</button>
                {
                    experience.sourceCodeLink === "" ? "" : <a href={experience.sourceCodeLink} target="_blank">Code source</a>
                }
                {
                    experience.websiteLink === "" ? "" : <a href={experience.websiteLink} target="_blank">Lien site</a>

                }
            </div>


        </div>
    );
};

export default ExperienceCard;