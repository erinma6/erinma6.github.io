import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience(){
    return (
    <div className='experience'>
        <VerticalTimeline lineColor="#000">
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="Aug 2021-May 2024"
                iconStyle={{background: '#7BAFD4', color: "#fff"}}
                icon={<SchoolIcon/>}>
                <h3 className="vertical-timeline-element-title">
                    University of North Carolina - Chapel Hill
                </h3>
                <p>Bachelor's Degree in <b>Computer Science (BS)</b> and <b>Statistics (BS)</b></p>
                <p>I double majored and completed my degree one year early. Ask me about my experience adding on the Statistics second major and my experiences at Chapel Hill.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2022-Aug 2022"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Full Stack Developer Intern - Sustainible
                    </h3>
                    <p>Former startup, now inactive</p>
                    <p>As a full stack developer at Sustainible, I was introduced to Angular, Node.js, and Firebase. I was responsible for designing the first entrepreneur survey which was published to the site.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jun 2022-Aug 2022"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Client Engineering & Technical Sales Intern - IBM
                    </h3>
                    <p>As part of IBM's Accelerate program, I was accepted into the Client Engineering and Technical Sales track. This program was completed alongside my internship at Sustainible. During this time, I designed a AI chatbot for a mock bank utilizing IBM's Watson and presented this to a panel of IBM professionals. This project, along with IBM's Accelerate Summits, honed my business and communication skills.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Aug 2022-May 2024"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Undergraduate Teaching Assistant - UNC CS Department
                    </h3>
                    <p>I was a teaching assistant for four semesters at UNC's Computer Science Department. For three semesters I was a TA for COMP116 (Introduction to Scientific Programming) and for one semester I was a TA for COMP421 (Files and Databases). My work included hosting office hours, helping the professor proofread lectures and exams, and reporting student progress to the instructor. Ask me about the devastating but slightly comical exam incident and how I handled this adversity</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2022-Feb 2023"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Data Science Intern - RENCI
                    </h3>
                    <p>The Renaissance Computing Institute (RENCI) is a research institute in collaboration with UNC, Duke, and NC State. During my time there, I worked with the ARAGORN team and supported their research through processing rare disease medical datasets and evaluating their algorithm through running TRAPI queires</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2023-Aug 2023"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Data & Analytics Reporting Intern - Advance Auto Parts
                    </h3>
                    <p>At Advance Auto Parts I worked with the Data & Analytics team where I was exposed to the reporting and business side of data. I created the company's first data catalog as well as a PowerBI dashboard for weather data to promote user-friendly, self-service datasets </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2024-Jul 2024"
                iconStyle={{background: '#e9d35b', color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">
                        Software Engineer Intern - Infosys
                    </h3>
                    <p>I worked with the iCETS team at Infosys where I was exposed to app development and utilizing Generative AI. I created two apps for Infosys' client (a children's museum in Charlotte). Both apps taught children the power of AI along with important fundamental concepts such as elements of storytelling and different art forms</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="Sep 2024-Present"
                iconStyle={{background: '#7BAFD4', color: "#fff"}}
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