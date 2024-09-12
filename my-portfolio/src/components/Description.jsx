import React, { useState } from 'react';
import './Description.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3Alt, faReact, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Placeholder for C and C++
import { faJs } from '@fortawesome/free-brands-svg-icons'; // JavaScript icon

library.add(faHtml5, faCss3Alt, faReact, faPhp, faLaravel, faCode, faJs);

const skills = [
  { name: <h3>HTML</h3>, icon: faHtml5, level: 90 },
  { name: <h3>CSS</h3>, icon: faCss3Alt, level: 80 },
  { name: <h3>React</h3>, icon: faReact, level: 85 },
  { name: <h3>PHP</h3>, icon: faPhp, level: 70 },
  { name: <h3>Laravel</h3>, icon: faLaravel, level: 60 },
  { name: <h3>C</h3>, icon: faCode, level: 75 }, // Placeholder for C
  { name: <h3>C++</h3>, icon: faCode, level: 65 }, // Placeholder for C++
  { name: <h3>JavaScript</h3>, icon: faJs, level: 65 } // JavaScript icon
  
];

const Discrption = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="D-VIEW">
      <div className='skill-header'><span>my </span><span>skills</span></div>
      <div className="icons">
        {skills.map((skill, index) => (
          <div
            className="skill-item"
            key={index}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            
            <div className="skill-info">
              {skill.name}
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{
                    width: hoveredSkill === index ? '100%' : `${skill.level}%`,
                    backgroundColor: '#4caf50'
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="porto-text">
        <span className="voornaam">Nathanial</span>
        <span className="achternaam"></span>
       
      </div>
    </div>
  );
};

export default Discrption;
