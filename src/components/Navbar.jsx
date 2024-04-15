import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import '../styles/Navbar.css';

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className='navbar'>
            <a href='/' className='title'>Portfolio</a>
            <div className='nav-menu'>
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
                <ul className={`${'nav-items'} ${isOpen && 'is-open'}`} onClick={() => setOpen(false)}>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;