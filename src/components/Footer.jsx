import React from 'react';
import '../styles/Footer.css';
import { getImageUrl } from '../utils/helpers';

export default function Footer() {
    return (
        <footer className='footer'>
            <p>Created by Raja Yaser Hussain | 2024</p>
            <ul className='footer-icons'>
                <li>
                    <a href='http://www.linkedin.com/in/raja-hussain-5ba148287'>
                        <img src={getImageUrl('linked-in-icon.png')} alt='Linked-In icon.' />
                    </a>
                </li>
                <li>
                    <a href='http://www.github.com/yaserhdev'>
                        <img src={getImageUrl('github-icon.png')} alt='GitHub icon.' />
                    </a>
                </li>
                <li>
                    <a href='mailto:yaserh.dev@gmail.com'>
                        <img src={getImageUrl('email-icon.png')} alt='Email icon.' />
                    </a>
                </li>
            </ul>
        </footer>
    );
};