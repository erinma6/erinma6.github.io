import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience(){
    return (
    <div className='experience'>
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="Aug 2021-May 2024"
                iconStyle={{background: '#3e497a', color: "#fff"}}
                icon={<SchoolIcon/>}>
                <h3 className="vertical-timeline-element-title">
                    University of North Carolina - Chapel Hill
                </h3>
                <p>Bachelor's Degree in <b>Computer Science (BS)</b> and <b>Statistics (BS)</b></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2022-Aug 2022"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Full Stack Developer Intern - Sustainible
                    </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jun 2022-Aug 2022"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Client Engineering & Technical Sales Intern - IBM
                    </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Aug 2022-May 2024"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Undergraduate Teaching Assistant - UNC CS Department
                    </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2022-Feb 2023"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Data Science Intern - RENCI
                    </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2023-Aug 2023"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Data & Analytics Reporting Intern - Advance Auto Parts
                    </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2024-Jul 2024"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Software Engineer Intern - Infosys
                    </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="Sep 2024-Present"
                iconStyle={{background: '#3e497a', color: "#fff"}}
                icon={<SchoolIcon/>}>
                <h3 className="vertical-timeline-element-title">
                    Columbia University
                </h3>
                <p>Master's Degree in <b>Data Science (MS)</b> </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2024-Present"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Research Assistant - Columbia Business School
                    </h3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    );
}

export default Experience;