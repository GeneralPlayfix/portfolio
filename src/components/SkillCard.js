import React from 'react';

const SkillCard = (props) => {
    const { skill } = props
    return (
        <div className='skillCard'>
            <div>
                <img src={skill.img} alt="" />
                <h3 className=''>{skill.name}</h3>
            </div>
            <p>{skill.level}</p>
        </div>
    );
};

export default SkillCard;