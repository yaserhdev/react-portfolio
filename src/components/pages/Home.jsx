import React from 'react';
import '../../styles/Home.css';
import { getImageUrl } from '../../utils/helpers';

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home'>
                <div className='home-content'>
                    <h1>Hey, I'm Raja!</h1>
                    <p>I'm a recent graduate of George Washington University's Coding Bootcamp.
                        In 6 months time I have gained knowledge and experience in full-stack web
                        development and have completed 20+ projects. I'm very eager to learn more
                        and expand on my skills.
                    </p>
                </div>
                <img src={getImageUrl('profile.jpg')} alt='Profile picture.' />
            </div>
            <div className='home-top-blur' />
            <div className='home-bottom-blur' />
        </div>
    );
};