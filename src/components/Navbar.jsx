import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import '../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className='navbar'>
            <a href='/' className='title'>Portfolio</a>
            <div className='nav-menu'>
                <div className='nav-menu-btn'>
                    <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
                </div>
                <ul className={`${'nav-items'} ${isOpen && 'is-open'}`} onClick={() => setOpen(false)}>
                    <li>
                        <a href='#Home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
                    </li>
                    <li>
                        <a href='#About' onClick={() => handlePageChange('About')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>About</a>
                    </li>
                    <li>
                        <a href='#skills' onClick={() => handlePageChange('Skills')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Skills</a>
                    </li>
                    <li>
                        <a href='#projects' onClick={() => handlePageChange('Projects')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;