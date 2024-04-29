import React from 'react';
import '../../styles/Home.css';
import { getImageUrl } from '../../utils/helpers';

export default function Home() {
    return (
        <div className='about-container'>
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
            <div className='about-top-blur' />
            <div className='about-bottom-blur' />
        </div>
    );
};