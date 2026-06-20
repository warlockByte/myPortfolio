import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faMobileAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML",
    ".NET",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman",
    "PHP",
    "Bootstrap",
    "MySQL",
    "OpenAI"
    
];

const labelsSecond = [
    "Flutter"  ,
    "Dart" ,
    "Firebase",
    "Firestore"
    ];

const labelsThird = [
    "OpenAI",
    "Java",
    "Python",
    "SQL",
    "OOP",
    "Git"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>What I Do</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGlobe} size="3x"/>
                    <h3>Web Development</h3>
                    <p>Develop modern web applications that leverage AI technologies and RESTful APIs to enhance functionality, automate processes, and improve user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobileAlt} size="3x"/>
                    <h3>Flutter Mobile Development</h3>
                    <p>Creating cross-platform mobile applications with intuitive interfaces and reliable backend integration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>Software Solutions</h3>
                    <p>Designing, developing, and maintaining software systems using structured engineering practices. I enjoy analyzing requirements, solving complex problems, debugging applications, optimizing performance, and delivering reliable solutions that meet user needs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;