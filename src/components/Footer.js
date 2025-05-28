import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css'; 


function Footer() {
    return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://www.linkedin.com/in/erinma6/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon/>
            </a>
            <a href="mailto:erin.ma@columbia.edu">
                <EmailIcon/>
            </a>
            <a href="https://github.com/erinma6" target="_blank" rel="noopener noreferrer">
                <GitHubIcon/>
            </a>
        </div>
        <p>&copy; 2025 https://erinma6.github.io</p>
    </div>

    );
}

export default Footer;