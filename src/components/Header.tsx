import React from 'react';
import './styles/Header.css'

const Header: React.FC = () => {
    return(
        <header className='Header'>
            <div className='Title'>HackSphere2025</div>
            <nav className='links'>
                <a href="#faq">FAQ</a>
                <a href="#registerButton">Registration</a>
            </nav>
        </header>
    );
};

export default Header