import React from 'react';
import '../styles/About.css';
import { getImageUrl } from '../utils/helpers';

function About() {
    return (
        <section className='about-container'>
            <h1 className='about-title'>About</h1>
            <div className='about'>
                <div className='about-content'>
                    <h1>Hey, I'm Raja!</h1>
                    <p>I'm a recent graduate of George Washington University's Coding Bootcamp.
                        In 6 months time I have gained knowledge and experience in full-stack web
                        development and have completed 20+ projects. I'm very eager to learn more
                        and expand on my skills.
                    </p>
                </div>
                <img src={getImageUrl('profile.jpg')} alt='Profile picture.' />
            </div>
        </section>
    );
};

export default About;