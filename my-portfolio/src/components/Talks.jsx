import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaGitAlt, FaRust, FaNodeJs, FaReact, FaLaravel } from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si';
import './Talks.css';

function Talks() {
  const renderProgressBar = (level) => {
    const percentage = (level / 5) * 100;

    return (
      <div className="progress-bar-container" style={{ marginLeft: '10px', marginTop: '5px' }}>
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
            background: 'linear-gradient(to right, hsl(198, 62%, 48%), #ff7)',
            height: '10px',
            borderRadius: '5px',
          }}
        ></div>
      </div>
    );
  };

  return (
    <div className="talks">
      <h2>Skills</h2>

      <div className="talk">
        <h3>Languages</h3>
        <p><SiC /> C {renderProgressBar(2)}</p>
        <p><SiCplusplus /> C++ {renderProgressBar(3)}</p>
        <p><FaJs /> JavaScript {renderProgressBar(3.5)}</p>
        <p><FaHtml5 /> HTML {renderProgressBar(4)}</p>
        <p><FaCss3Alt /> CSS {renderProgressBar(4)}</p>
        <p><FaPhp /> PHP {renderProgressBar(3)}</p>
        <p><FaGitAlt /> Git {renderProgressBar(3)}</p>
        <p><FaRust /> Rust {renderProgressBar(2)}</p>
      </div>
      
      <h3>Frameworks/Libraries</h3>
      <div className="talk">
        <p><FaNodeJs /> Node.js {renderProgressBar(4)}</p>
        <p><FaLaravel /> Laravel {renderProgressBar(3)}</p>
        <p><FaReact /> React {renderProgressBar(3)}</p>
      </div>
    </div>
  );
}

export default Talks;
