import React, {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
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
            <h2> Hello! I'm Erin</h2>
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
                    <h2>Programming Languages</h2>
                    <span>Python, Java, R, C, SQL, HTML, JavaScript, Typescript, CSS</span>
                </li> 
                <li className="item">
                    <h2>Software</h2>
                    <span>Git, React, Angular, PostgreSQL, Docker, PowerBI, Kubernetes, Snowflake Database, Firebase, Node.js</span>
                </li>
                <li className="item">
                    <h2>Operating Systems</h2>
                    <span>Windows, MacOS, Linux</span>
                </li>
            </ol>
            
        </div>
    </div>);
}

export default Home;