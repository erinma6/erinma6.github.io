import React, {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { 
    SiPython, 
    SiR, 
    SiC, 
    SiHtml5, 
    SiJavascript, 
    SiTypescript, 
    SiCss3,
    SiGit,
    SiDocker,
    SiKubernetes,
    SiVim,
    SiReact,
    SiAngular,
    SiD3Dotjs,
    SiNodedotjs,
    SiFastapi,
    SiFirebase,
    SiSqlalchemy,
    SiPytest,
    SiJunit5,
    SiPostgresql,
    SiSnowflake,
    SiAmazon,
    SiGooglecloud,
    SiMacos,
    SiLinux
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaDatabase, FaChartBar, FaWindows } from 'react-icons/fa';
import '../styles/Home.css'

function Home() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const titles=["Software Engineer", "Data Scientist", "Business Analyst", "Machine Learning Engineer", "Data Analyst", "Tech Enthusiast"];

    useEffect(() => {
        const currentTitle=titles[loopIndex % titles.length];
        let typingTimer;

        if (!isDeleting && text===currentTitle){
            typingTimer=setTimeout(()=>setIsDeleting(true), 1500);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopIndex(loopIndex+1);
        } else {
            typingTimer=setTimeout(()=>{
                const newText=isDeleting ? currentTitle.substring(0, text.length-1) : currentTitle.substring(0, text.length+1);

                setText(newText);
                setTypingSpeed(isDeleting ? 50 : 100);
            }, typingSpeed);
        }

        return ()=>clearTimeout(typingTimer);
    }, [text, isDeleting, loopIndex, titles, typingSpeed]);

    return (
    <div className="home">
        <div className="about"> 
            <h2> Hello! I'm Erin Ma</h2>
            <div className="prompt">
                <p>I am a {text} <span className="blinking-cursor">|</span> </p>
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
        </div>
        <div className="skills"> 
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h3>Programming Languages</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="Python">
                            <SiPython />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Java">
                            <DiJava />
                        </div>
                        <div className="icon-wrapper" data-tooltip="R">
                            <SiR />
                        </div>
                        <div className="icon-wrapper" data-tooltip="C">
                            <SiC />
                        </div>
                        <div className="icon-wrapper" data-tooltip="SQL">
                            <FaDatabase />
                        </div>
                        <div className="icon-wrapper" data-tooltip="HTML">
                            <SiHtml5 />
                        </div>
                        <div className="icon-wrapper" data-tooltip="JavaScript">
                            <SiJavascript />
                        </div>
                        <div className="icon-wrapper" data-tooltip="TypeScript">
                            <SiTypescript />
                        </div>
                        <div className="icon-wrapper" data-tooltip="CSS">
                            <SiCss3 />
                        </div>
                    </div>
                </li> 
                <li className="item">
                    <h3>Development Tools & Platforms</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="Git">
                            <SiGit />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Docker">
                            <SiDocker />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Kubernetes">
                            <SiKubernetes />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Vim">
                            <SiVim />
                        </div>
                    </div>
                </li>
                <li className="item">
                    <h3>Frontend Technologies</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="React">
                            <SiReact />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Angular">
                            <SiAngular />
                        </div>
                        <div className="icon-wrapper" data-tooltip="D3.js">
                            <SiD3Dotjs />
                        </div>
                    </div>
                </li>
                <li className="item">
                    <h3>Backend Technologies</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="Node.js">
                            <SiNodedotjs />
                        </div>
                        <div className="icon-wrapper" data-tooltip="FastAPI">
                            <SiFastapi />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Firebase">
                            <SiFirebase />
                        </div>
                        <div className="icon-wrapper" data-tooltip="SQLAlchemy">
                            <SiSqlalchemy />
                        </div>
                    </div>
                </li>
                <li className="item">
                    <h3>Testing Frameworks</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="PyTest">
                            <SiPytest />
                        </div>
                        <div className="icon-wrapper" data-tooltip="JUnit">
                            <SiJunit5 />
                        </div>
                    </div>
                </li>
                <li className="item">
                    <h3>Databases & Data Warehousing</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="PostgreSQL">
                            <SiPostgresql />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Snowflake">
                            <SiSnowflake />
                        </div>
                    </div>
                </li>
                <li className="item">
                    <h3>Cloud Platforms</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="AWS">
                            <SiAmazon />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Google Cloud">
                            <SiGooglecloud />
                        </div>
                    </div>
                </li>
                <li className="item">
                    <h3>Data Analytics & BI</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="Power BI">
                            <FaChartBar />
                        </div>
                    </div>
                </li>
                <li className="item">
                    <h3>Operating Systems</h3>
                    <div className="programming-icons">
                        <div className="icon-wrapper" data-tooltip="Windows">
                            <FaWindows />
                        </div>
                        <div className="icon-wrapper" data-tooltip="macOS">
                            <SiMacos />
                        </div>
                        <div className="icon-wrapper" data-tooltip="Linux">
                            <SiLinux />
                        </div>
                    </div>
                </li>
            </ol>
            
        </div>
    </div>);
}

export default Home;