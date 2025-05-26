import React from 'react';
import './styles/About.css';

const About: React.FC = () => {
    return(
        <section className='About'>
            <div className='AboutContent'>
                <h1>About the Event</h1>
                <h2>
                    HackSphere 2025
                </h2>
                <h4>
                    Code. Create. Conquer.
                </h4>
                <h3>
                    Organized by NEXUS SJCET and IEDC SJCET | Powered by Infosys
                </h3>
                <p>
                    Gear up for HackSphere 2025 a 48-hour global online hackathon where innovation meets impact. Hosted by NEXUS SJCET and IEDC SJCET, and powered by Infosys, this virtual tech marathon invites coders, designers, and thinkers from across the globe to build solutions that matter. From expert mentorship and interactive workshops to cutting-edge problem statements, HackSphere is your launchpad to showcase creativity and technical brilliance on an international platform. This year’s problem statements span a wide range of domains, like AI, FinTech, HealthTech, Climate Action, and Social Innovation – all designed to push the boundaries of what's possible through technology.
                </p>
                <p>
                    The event kicks off on 3 PM IST, 20th of June and runs non-stop for 48 hours, till 3 PM of 22nd of June. Registration is absolutely free, and winners stand a chance to take home prizes worth over ₹1,00,000, along with exclusive goodies, swags, and internship opportunities. Whether you're a seasoned hacker or a passionate beginner, HackSphere 2025 is your chance to Code. Create. Conquer. 
                </p>
                <h4>
                    So mark your calendars.
                </h4>
                <h4>🗓️ Date: 20th - 22nd June 2025 .</h4>
            </div>
        </section>
    );
}; 

export default About;