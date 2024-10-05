import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaGitAlt, FaRust, FaNodeJs, FaReact, FaLaravel, FaPython } from 'react-icons/fa';
import { SiC, SiCplusplus, SiAngular, SiMysql, SiMariadb } from 'react-icons/si';
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
        <p><FaHtml5 /> HTML {renderProgressBar(4)}</p>
        <p><FaJs /> JavaScript {renderProgressBar(4)}</p>
        <p><FaCss3Alt /> CSS {renderProgressBar(4)}</p>
        <p><FaPhp /> PHP {renderProgressBar(3)}</p>
        <p><FaPython /> Python {renderProgressBar(4)}</p>
        <p><SiCplusplus /> C++ {renderProgressBar(3)}</p>
        <p><FaRust /> Rust {renderProgressBar(2)}</p>
        <p><SiMysql /> SQL {renderProgressBar(4)}</p>
        <p><SiMariadb /> MariaDB {renderProgressBar(3)}</p>
      </div>

      <h3>Frameworks/Libraries</h3>
      <div className="talk">
        <p><FaNodeJs /> Node.js {renderProgressBar(4)}</p>
        <p><FaLaravel /> Laravel {renderProgressBar(3)}</p>
        <p><FaReact /> React {renderProgressBar(3)}</p>
        <p><SiAngular /> Angular {renderProgressBar(3)}</p>
      </div>
    </div>
  );
}

export default Talks;
