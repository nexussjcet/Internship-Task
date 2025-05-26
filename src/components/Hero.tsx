import React from 'react';
import './styles/Hero.css';

const imgUrl = "https://www.ivybusiness.iastate.edu/files/2024/11/Photo-of-2024-Hackathon-2160x807-1.jpg"
const Hero: React.FC = () =>{
    return(
        <section className='Hero'>
            <div className='banner'>
                <img src = {imgUrl} alt="" />
                <div className='HeroContent'>
                    <h1>HackSphere 2025</h1>
                    <p>Code. Create. Conquer</p>
                    <p>June 20–22, 2025 – Online</p>
                </div>
            </div>
            <div className='registerButton' id='registerButton'>
                <button>Register Now</button>
            </div>
        </section>
    );
};

export default Hero;