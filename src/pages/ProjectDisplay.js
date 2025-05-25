import React from "react";
import {useParams} from 'react-router-dom';
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import '../styles/ProjectDisplay.css';

function ProjectDisplay(){
    const {id}=useParams();
    const project=projectList[id];
    return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p><b>Skills: </b>{project.skill}</p>
        <div className="project-links">
            {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <GitHubIcon/>
                </a>
            )}
            {project.youtube && (
                <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="youtube-link">
                    <YouTubeIcon/>
                </a>
            )}
            {project.devIcon && (
                <a href={project.devIcon} target="_blank" rel="noopener noreferrer" className="dev-link">
                    <CodeIcon/>
                </a>
            )}
        </div>
    </div>
    );
}

export default ProjectDisplay;