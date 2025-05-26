import React from "react";
import './styles/FAQ.css';

const FAQ: React.FC = () => {
    return (
        <section className="FAQ">
            <div className="FAQ-Content">
                <h1>FAQ</h1>

                <div className="faq-item">
                    <h2>What is HackSphere 2025?</h2>
                    <p>
                        HackSphere 2025 is a 24-hour national-level hackathon that brings together tech enthusiasts, developers, and innovators to solve real-world problems through creative and impactful solutions.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>Who can participate in HackSphere?</h2>
                    <p>
                        The event is open to college students, recent graduates, and young professionals with a passion for coding, design, or problem-solving. Team participation is encouraged.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>Where will HackSphere 2025 be held?</h2>
                    <p>
                        The event will be conducted at St. Joseph’s College of Engineering and Technology, Palai, with online options for selected problem statements.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>What are the judging criteria?</h2>
                    <p>
                        Judging will be based on innovation, technical implementation, feasibility, presentation, and impact of the solution.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>How can I register?</h2>
                    <p>
                        Registration details will be available on our official website and social media handles. Stay tuned for announcements!
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
