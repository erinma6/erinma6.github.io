import React from 'react';
import '../styles/About.css';
import headshot from '../assets/headshot.jpeg';

function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-header">
                    <h1>About Me</h1>
                    <div className="headshot-container">
                        <img src={headshot} alt="Erin's headshot" className="headshot-image" />
                    </div>
                    <div className="about-intro">
                        <p>
                            My name is Erin (she/her) and I am a Master's student at Columbia University studying Data Science graduating in December 2025. I received my Bachelor's Degree from the University of North Carolina at Chapel Hill in Computer Science (B.S.) and Statistics (B.S.). I'm a versatile technologist with experience spanning software development, 
                            data science, and business analysis. My academic and professional journey has been driven by 
                            curiosity and a desire to create meaningful solutions that make a difference. With expertise in multiple programming languages and frameworks, I enjoy 
                            working on web development, data science, analytics, and machine learning projects. When I am not working, I enjoy cafe hopping, reading, and traveling. I am currently looking for full-time opportunities in the New York City area or remotely. Feel free to reach out through LinkedIn or email!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 