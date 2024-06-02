import React from 'react';
import '../../styles/About.css';
import { getImageUrl } from '../../utils/helpers';
import Footer from '../Footer';

export default function About() {
    return (
        <div className='about-container'>
            <h1 className='about-title'>About</h1>
            <ul className='about-content'>
                <li className='cursor'>
                    <img src={getImageUrl('cursor.png')} alt='Cursor icon' />
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>I'm knowledgeable in creating the user interface and functionality of websites and applications. The languages I am experienced in are HTML, CSS, and JavaScript, as well as popular frameworks such as React and Node. All these technologies come together ensuring seamless interaction and user experience across various devices and browsers.</p>
                    </div>
                </li>
                <li className='server'>
                    <img src={getImageUrl('server.png')} alt='Server icon' />
                    <div>
                        <h3>Backend Developer</h3>
                        <p>I'm knowledgeable in server-side logic and database management to ensure smooth functioning of websites and applications. I'm familiar with technologies such as Express and databases such as MySQL, NoSQL, and MongoDB. A language I am currently learning is Python and have an expected completion date of July 2024 for the PCEP certification.</p>
                    </div>
                </li>
                <li className='monitor'>
                    <img src={getImageUrl('monitor.png')} alt='Monitor icon' />
                    <div>
                        <h3>UI Design</h3>
                        <p>I'm knowledgeable in crafting visually appealing and intuitive interfaces for digital products like websites and applications. Layout, color, typography, and interactive components are all UI design elements I use to create engaging user experiences.</p>
                    </div>
                </li>
                <li className='brain'>
                    <img src={getImageUrl('brain.png')} alt='Brain icon' />
                    <div>
                        <h3>Critical Thinking & Problem Solving</h3>
                        <p>I'm knowledgeable in the proper logic used for various solutions to various problems. I have an aptitude for debugging and problem solving, which comes from my ability to think critically. I multitask well and have exceptional organizational skills.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};