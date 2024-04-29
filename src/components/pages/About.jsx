import React from 'react';
import '../../styles/About.css';
import { getImageUrl } from '../../utils/helpers';

export default function About() {
    return (
        <div className='about-container'>
            <h1 className='about-title'>About</h1>
            <div className='about-top-blur' />
            <div className='about-bottom-blur' />
        </div>
    );
};