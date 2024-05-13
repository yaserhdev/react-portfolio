import React from 'react';
import '../../styles/Skills.css';
import { getImageUrl } from '../../utils/helpers';
import skills from "../data/skills.json";
import experience from "../data/experience.json";

export default function Skills() {
    return (
        <section className='skills-experience-container'>
            <h1 className='skills-experience-title'>Skills and Experience</h1>
            <div className='skills-experience-content'>
                <div className="skills">
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className="skill">
                                <div className="skill-image">
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p className="skill-title">{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
                <ul className="experience">
                    {experience.map((experienceItem, id) => {
                        return <li key={id} className='experienceItem'>
                            <img src={getImageUrl(experienceItem.imageSrc)} alt={`${experienceItem.organization} logo`} className="experience-image" />
                            <div className="experience-details">
                                <h3>{`${experienceItem.role}, ${experienceItem.organization}`}</h3>
                                <p>{`${experienceItem.start} - ${experienceItem.end}`}</p>
                                <ul>{experienceItem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>
                                })}
                                </ul>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
};
